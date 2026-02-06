import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import "./TopSort.css";

const SORT = [
  'Ascending price',
  'Descending price'
];

const paramName = 'sort'

const TopSort = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [searchParams] = useSearchParams()

  const handleClick = (item) => {
    if (searchParams.get(paramName) === item) {
      searchParams.delete(paramName);
    } else {
      searchParams.set(paramName, item);
    }

    navigate({
      pathname: location.pathname,
      search: searchParams.toString() ? `?${searchParams.toString()}` : "",
    });
  };

  return (
    <div className="filter">
      <div className="container">
        <ul className="filter__list">
          {SORT.map((item) => (
            <li key={item} className="filter__item">
              <button
                type="button"
                className={`filter__button ${
                  searchParams.get(paramName) === item ? 'filter__button--active' : ''
                }`}
                onClick={() => handleClick(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopSort;
