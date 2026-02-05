import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import './StockFilter.css'

const FILTER = [
  'High rating first',
  'Low rating first',
]

const paramName = 'ratingsort'

const StockFilter = () => {
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
      search: searchParams.toString()
    });
  };

  return (
    <ul className="stock-filter">
      {FILTER.map((item) => (
        <li key={item}>
          <button
            type="button"
            className={`stock-filter__item ${
              searchParams.get(paramName) === item ? 'stock-filter__item--active' : ''
            }`}
            onClick={() => handleClick(item)}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default StockFilter
