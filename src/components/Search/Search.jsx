import './Search.css'
import searchIcon from "@/assets/icons/Search.svg";

const Search = ({ searchValue, onInput }) => {

  return (
    <div className="search">
      <input
        value={searchValue}
        onInput={onInput}
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
