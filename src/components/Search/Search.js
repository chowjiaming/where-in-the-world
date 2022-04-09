import { useContext } from "react";
import CountriesContext from "../../context/countriesContext";
import ThemeContext from "../../context/themeContext";
import Filter from "./Filter/Filter";
import "./Search.css";

export default function Search() {
  const { countrySearchData, handleSearch } = useContext(CountriesContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div className="container__input">
      <div className="container__search">
        <img
          className={`container__search--icon ${
            theme.option === "light" ? "light" : ""
          }`}
          src="images/search.svg"
          alt="container__search--icon"
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
