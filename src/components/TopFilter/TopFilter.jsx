import "./TopFilter.css"
import { useDispatch, useSelector } from 'react-redux';
import { toggleCategory } from '@/features/topFilter/topFilterSlice';

const FILTER = [
  'Women',
  'Men',
  'Unisex',
  'Children',
  'New',
]

const TopFilter = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector(
    state => state.topfilter.category
  );

  return (
    <div className="filter">
      <div className="container">
        <ul className="filter__list">
          {FILTER.map(item => (
            <li key={item} className="filter__item">
              <button
                type="button"
                className={`filter__button ${
                  activeFilter === item ? 'filter__button--active' : ''
                }`}
                onClick={() => dispatch(toggleCategory(item))}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TopFilter;