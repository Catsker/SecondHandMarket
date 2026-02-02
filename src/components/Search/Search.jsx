import './Search.css';
import searchIcon from "@/assets/icons/Search.svg";
import { useLocation, useNavigate } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('query') || '';

  const handleChange = (e) => {
    const value = e.target.value.trimStart();

    if (value) {
      searchParams.set('query', value);
    } else {
      searchParams.delete('query');
    }

    navigate({
      pathname: location.pathname,
      search: searchParams.toString() ? `?${searchParams.toString()}` : '',
    });
  };

  return (
    <div className="search">
      <input
        value={query}
        onChange={handleChange}
        className="search__input"
        placeholder="Search..."
      />
      <img
        className="search__icon"
        src={searchIcon}
        alt="search"
      />
    </div>
  );
};

export default Search;
