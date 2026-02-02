import './CatalogProducts.css'
import CatalogProductsPath from '@/components/CatalogProductsPath'
import Products from '@/components/Products'

const CatalogProducts = () => (
  <div className="catalog-products">
    <CatalogProductsPath />
    <Products />
  </div>
)

export default CatalogProducts
