import './CatalogProductsPath.css'
import { useSelector, useDispatch } from 'react-redux';
import { resetAsideCategory } from '@/features/topFilter/topFilterSlice';
import { resetCategory } from '@/features/catalog/catalogSlice';

const CatalogProductsPath = () => {
  const dispatch = useDispatch();
  const activeCategory = useSelector(state => state.topfilter.category);
  const selectedCategory = useSelector(state => state.catalog.selectedCategory);

  return (
    <div className="catalog-products-path">
      <ul className="catalog-products-path__list">
        <li className="catalog-products-path__item">
          <button onClick={() => {
            dispatch(resetCategory())
            dispatch(resetAsideCategory())
          }} className="catalog-products-path__button">Home</button>
        </li>
        {activeCategory && (
          <li className="catalog-products-path__item">
            <button onClick={() => dispatch(resetCategory())} className="catalog-products-path__button">{activeCategory}</button>
          </li>
        )}
        {selectedCategory && (
          <li className="catalog-products-path__item">
            <button className="catalog-products-path__button">{selectedCategory.name}</button>
          </li>
        )}
      </ul>
    </div>
  )
}

export default CatalogProductsPath
