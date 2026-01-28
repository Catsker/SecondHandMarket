import './CatalogAside.css'
import {CATEGORIES} from '@/consts/DbMockData'
import {useDispatch} from 'react-redux';
import {setCategory} from '@/features/catalog/catalogSlice';

const CatalogAside = () => {
  const dispatch = useDispatch();

  const handleClick = (item) => dispatch(setCategory(item));

  return (
    <aside className="catalog-aside">
      <span className="catalog-aside__title">Categories</span>
      <ul className="catalog-aside__list">
        {CATEGORIES.map((item) => (
          <li className="catalog-aside__item" key={item.slug}>
            <button
              className="catalog-aside__button"
              onClick={() => handleClick(item)}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default CatalogAside
