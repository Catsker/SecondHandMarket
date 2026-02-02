import { useLocation, useNavigate } from 'react-router-dom';
import { useGetCategoriesQuery } from '@/store/categories.api';
import './CatalogItems.css';

const CatalogItems = () => {
  const { data: categories, isLoading, isError } = useGetCategoriesQuery();

  const navigate = useNavigate();
  const location = useLocation();

  const pathSegments = location.pathname.split('/').filter(Boolean);
  const catalogIndex = pathSegments.indexOf('catalog');

  const baseSegments = catalogIndex !== -1 ? pathSegments.slice(0, catalogIndex + 1) : ['catalog'];

  const currentCategory = pathSegments[catalogIndex + 1] || null;

  const setCategory = (item) => {
    const newCategory = currentCategory === item.slug ? null : item.slug;

    const searchParams = location.search;

    const newPath = '/' + [
      ...baseSegments,
      newCategory
    ].filter(Boolean).join('/');

    navigate({
      pathname: newPath,
      search: searchParams,
    });
  };

  if (isLoading) return <p>Category Loading</p>;
  if (isError) return <p>Error Category Loading</p>;

  return (
    <aside className="catalog-items">
      <span className="catalog-items__title">Categories</span>
      <ul className="catalog-items__list">
        {categories.map((item) => (
          <li className="catalog-items__item" key={item.slug}>
            <button
              className={`catalog-items__button ${
                currentCategory === item.slug ? 'catalog-items__button--active' : ''
              }`}
              onClick={() => setCategory(item)}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CatalogItems;
