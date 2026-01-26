import './CatalogPage.css'
import Header from "@/components/Header";
import TopFilter from "@/components/TopFilter";
import {useState} from "react";
import { useSearchParams } from 'react-router-dom';

const CatalogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const topFilter = searchParams.get('filter');
  const globalSearch = searchParams.get('search') || '';

  const handleFilterChange = (value) => {
    const newValue = topFilter === value ? null : value;
    updateUrlParams({ filter: newValue });
  };

  const handleSearchChange = (e) => {
    updateUrlParams({ search: e.target.value });
  };

  const updateUrlParams = (updates) => {
    const params = new URLSearchParams(searchParams);

    Object.entries(updates).forEach(([key, value]) => {
      if (value !== null && value !== '') {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });

    setSearchParams(params);
  };

  return (
    <div>
      <Header searchValue={globalSearch} onInput={handleSearchChange}></Header>
      <TopFilter filterValue={topFilter} onClick={handleFilterChange}></TopFilter>
    </div>
  )
}

export default CatalogPage
