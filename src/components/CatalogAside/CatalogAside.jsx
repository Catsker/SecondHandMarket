import './CatalogAside.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGetCategoriesQuery } from '@/store/categories.api';

const CatalogAside = () => {
  const { data: categories, isLoading, isError } = useGetCategoriesQuery();

  const navigate = useNavigate();
  const location = useLocation();

  const pathSegments = location.pathname.split('/').filter(Boolean);
  const catalogIndex = pathSegments.indexOf('catalog');

  const baseSegments = catalogIndex !== -1 ? pathSegments.slice(0, catalogIndex + 1) : ['catalog'];

  const currentCategory = pathSegments[catalogIndex + 1] || null;

  const handleClick = (item) => {
    const newCategory = currentCategory === item.slug ? null : item.slug;

    const searchParams = location.search;

    const newPath = [
      ...baseSegments,
      newCategory
    ].filter(Boolean).join('/');

    navigate(`/${newPath}${searchParams}`);
  };

  if (isLoading) return <p>Category Loading</p>;
  if (isError) return <p>Error Category Loading</p>;

  return (
    <aside className="catalog-aside">
      <span className="catalog-aside__title">Categories</span>
      <ul className="catalog-aside__list">
        {categories.map((item) => (
          <li className="catalog-aside__item" key={item.slug}>
            <button
              className={`catalog-aside__button ${
                currentCategory === item.slug ? 'catalog-aside__button--active' : ''
              }`}
              onClick={() => handleClick(item)}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CatalogAside;
