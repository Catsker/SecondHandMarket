import './CatalogMain.css'
import CatalogAside from "@/components/CatalogAside";
import CatalogProducts from "@/components/CatalogProducts";

const CatalogMain = () => (
  <main className="catalog-main">
    <CatalogAside/>
    <CatalogProducts/>
  </main>
)

export default CatalogMain
