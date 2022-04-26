import { useContext } from 'react';
import SearchContext from '../../context/searchContext';
import { SearchContextType } from '../../@types/search';
import useDarkMode from '../../hooks/useDarkMode';
import Filter from './Filter/Filter';
import searchIcon from '../../assets/images/search.svg';
import './Search.css';

const Search: React.FC = () => {
  const { countrySearchData, handleSearch } = useContext(
    SearchContext,
  ) as SearchContextType;
  const { theme } = useDarkMode();

  return (
    <div className="container__input">
      <div className="container__search" role="search">
        <img
          className={`container__search--icon ${
            theme === 'light' ? 'light' : ''
          }`}
          src={searchIcon}
          alt="search-icon"
        />
        <input
          className="search__input"
          value={countrySearchData.term}
          onChange={handleSearch}
          placeholder="Search for a country..."
        />
      </div>
      <Filter />
    </div>
  );
};

export default Search;
