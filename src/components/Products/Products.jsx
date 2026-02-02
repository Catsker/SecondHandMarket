import { useState, useEffect } from "react";
import { useParams, useSearchParams } from 'react-router-dom';
import { useDebounce } from "@/hooks/useDebounce";
import { useGetProductsQuery } from '@/store/products.api';
import Product from "@/components/Product";
import './Products.css';


const LIMIT = 24;

const Products = () => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const search = searchParams.get('query') ?? '';
  const sort = searchParams.get('sort') ?? null;

  const debouncedSearch = useDebounce(search, 1500);

  const [skip, setSkip] = useState(0);

  useEffect(() => {
    setSkip(0);
  }, [category, search, sort]);

  const { data, isFetching, isLoading, isError } =
    useGetProductsQuery({
      category,
      limit: LIMIT,
      skip,
      search: debouncedSearch,
      sort
    }, {
      refetchOnMountOrArgChange: true
    });

  if (isLoading && !data) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error Loading</p>;
  }

  return (
    <div className="products">
      <ul className="products__list">
        {data.products.map(product => (
          <li key={product.id} className="products__item">
            <Product product={product} />
          </li>
        ))}
      </ul>

      {data.total > data.products.length && (
        <button
          type="button"
          className="products__loadmore"
          disabled={isFetching}
          onClick={() => setSkip(prev => prev + LIMIT)}
        >
          {isFetching ? 'Loading...' : 'Load More'}
        </button>
      )}
    </div>
  );
};

export default Products;
