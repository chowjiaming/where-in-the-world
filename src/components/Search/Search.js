import { useContext } from "react";
import CountriesContext from "../../context/countriesContext";
import Filter from "./Filter/Filter";
import "./Search.css";

export default function Search() {
  const { countrySearchData, handleSearch } = useContext(CountriesContext);

  return (
    <section className="input-container">
      <div className="search-container">
        <img
          className="magnifying-glass"
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
    </section>
  );
}
