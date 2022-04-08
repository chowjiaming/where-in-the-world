import { useContext } from "react";
import CountriesContext from "../../context/countriesContext";
import useFetchCountries from "../../hooks/useFetchCountries";
import Country from "./Country/Country";
import "./Countries.css";

export default function Countries() {
  const { searchCountry } = useContext(CountriesContext);
  const { countries, isLoading, error } = useFetchCountries(
    searchCountry.default ? searchCountry.default : `name/${searchCountry.term}`
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
