import "./TopSort.css";
import { useLocation, useNavigate } from "react-router-dom";

const SORT = [
  'Ascending price',
  'Descending price'
];

const paramName = 'sort'

const TopSort = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const currentFilter = searchParams.get(paramName);

  const handleClick = (item) => {
    if (currentFilter === item) {
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
                  currentFilter === item ? 'filter__button--active' : ''
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
