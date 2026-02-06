import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import './Breadcrumbs.css';

const Breadcrumbs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const segments = location.pathname.split('/').filter(Boolean);
  const catalogIndex = segments.indexOf('catalog');
  const category = segments[catalogIndex + 1] || null;

  const filter = searchParams.get('sort');

  return (
    <div className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <button
            className="breadcrumbs__button"
            onClick={() => navigate('/catalog')}
          >
            Home
          </button>
        </li>

        {category && (
          <li className="breadcrumbs__item">
            <button
              className="breadcrumbs__button"
              onClick={() => navigate(`/catalog/${category}`)}
            >
              {category}
            </button>
          </li>
        )}

        {filter && (
          <li className="breadcrumbs__item">
            <span
              className="breadcrumbs__button"
            >
              {filter}
            </span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
