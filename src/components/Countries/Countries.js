import { useContext } from "react";
import CountriesContext from "../../helpers/context/countriesContext";
import Country from "./Country/Country";
import "./Countries.css";

export default function Countries() {
  const { countries, isLoading, error } = useContext(CountriesContext);
  const mainContent = error ? (
    <h1>{error}</h1>
  ) : isLoading ? (
    <h1>Loading...</h1>
  ) : (
    countries.map((country) => {
      return <Country key={country.name.common} country={country} />;
    })
  );

  return <section className="results-container">{mainContent}</section>;
}
