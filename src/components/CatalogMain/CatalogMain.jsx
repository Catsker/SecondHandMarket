import './CatalogMain.css'
import CatalogAside from "@/components/CatalogAside";
import CatalogFilters from "@/components/CatalogFilters";

const CatalogMain = () => (
  <main
    className="catalog-main"
  >
    <CatalogAside/>
    <div>
      <CatalogFilters/>
    </div>
  </main>
)

export default CatalogMain
