import { useContext } from "react";
import CountriesContext from "../../context/countriesContext";
import ThemeContext from "../../context/themeContext";
import Filter from "./Filter/Filter";
import searchIcon from "../../assets/images/search.svg"
import "./Search.css";

export default function Search() {
  const { countrySearchData, handleSearch } = useContext(CountriesContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div className="container__input">
      <div className="container__search" role="search">
        <img
          className={`container__search--icon ${
            theme.option === "light" ? "light" : ""
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
}
