import useFetchCountries from "../../helpers/hooks/useFetchCountries";
import Country from "./Country/Country";
import "./Countries.css";

export default function Countries() {
  const { countries, isLoading, error } = useFetchCountries("all");

  const mainContent = error ? (
    <h1>{error}</h1>
  ) : isLoading ? (
    <h1>Loading...</h1>
  ) : (
    countries.map((country) => {
      return <Country key={country.name.common} country={country} />;
    })
  );

  return (
    <div className="results-container">
      {mainContent}
    </div>
  );
}
