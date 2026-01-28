import './Search.css'
import searchIcon from "@/assets/icons/Search.svg";
import { useDispatch, useSelector } from 'react-redux';
import { setQuery } from '@/features/globalSearch/globalSearchSlice';

const Search = () => {
  const dispatch = useDispatch();
  const query = useSelector(state => state.globalsearch.query);

  const handleChange = (e) => {
    dispatch(setQuery(e.target.value));
  };

  return (
    <div className="search">
      <input
        value={query}
        onInput={handleChange}
        className="search__input"
      />
      <img
        className="search__icon"
        src={searchIcon}
        alt="search"
      />
    </div>
  )
}

export default Search
