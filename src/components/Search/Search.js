import { useContext } from "react";
import CountriesContext from "../../context/countriesContext";
import ThemeContext from "../../context/themeContext";
import Filter from "./Filter/Filter";
import "./Search.css";

export default function Search() {
  const { countrySearchData, handleSearch } = useContext(CountriesContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div className="input-container">
      <div className="search-container">
        <img
          className={`magnifying-glass ${
            theme.option === "light" ? "light" : ""
          }`}
          src="images/search.svg"
          alt="magnifying-glass"
        />
        <input
          className="search-box"
          value={countrySearchData.term}
          onChange={handleSearch}
          placeholder="Search for a country..."
        />
      </div>
      <Filter />
    </div>
  );
}
