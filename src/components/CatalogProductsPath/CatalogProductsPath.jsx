import './CatalogProductsPath.css';
import { useLocation, useNavigate } from 'react-router-dom';

const CatalogProductsPath = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const segments = location.pathname.split('/').filter(Boolean);
  const catalogIndex = segments.indexOf('catalog');
  const category = segments[catalogIndex + 1] || null;

  const searchParams = new URLSearchParams(location.search);
  const filter = searchParams.get('sort');

  const handleHomeClick = () => navigate('/catalog');

  return (
    <div className="catalog-products-path">
      <ul className="catalog-products-path__list">
        <li className="catalog-products-path__item">
          <button
            className="catalog-products-path__button"
            onClick={handleHomeClick}
          >
            Home
          </button>
        </li>

        {category && (
          <li className="catalog-products-path__item">
            <button
              className="catalog-products-path__button"
              onClick={() => navigate(`/catalog/${category}`)}
            >
              {category}
            </button>
          </li>
        )}

        {filter && (
          <li className="catalog-products-path__item">
            <button
              className="catalog-products-path__button"
            >
              {filter}
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default CatalogProductsPath;
