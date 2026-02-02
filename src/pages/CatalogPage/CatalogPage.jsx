import './CatalogPage.css'
import Header from "@/components/Header";
import TopFilter from "@/components/TopSort";
import {useState} from "react";
import CatalogMain from "@/components/CatalogMain";

const CatalogPage = () => {

  return (
    <div>
      <Header />
      <TopFilter />
      <CatalogMain />
    </div>
  )
}

export default CatalogPage
