import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import searchIcon from "@/assets/icons/Search.svg";
import './Search.css';

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [searchParams] = useSearchParams();
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
      search: searchParams.size > 0 ? searchParams.toString() : '',
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
