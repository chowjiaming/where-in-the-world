import { useContext } from "react";
import CountriesContext from "../../context/countriesContext";
import useFetchCountries from "../../hooks/useFetchCountries";
import { regionList } from "../../config/countryRegions";
import Country from "./Country/Country";
import "./Countries.css";

export default function Countries() {
  const { countrySearchData } = useContext(CountriesContext);
  const { countries, isLoading, error } = useFetchCountries(
    countrySearchData.region !== 0
      ? `region/${regionList[countrySearchData.region]}`
      : countrySearchData.term !== ""
      ? `name/${countrySearchData.term}`
      : countrySearchData.default
  );

  const mainContent = error ? (
    <h1>{error.message}</h1>
  ) : isLoading ? (
    <h1>Loading...</h1>
  ) : (
    countries.map((country) => {
      return <Country key={country.name.common} country={country} />;
    })
  );

  return <div className="results-container">{mainContent}</div>;
}
