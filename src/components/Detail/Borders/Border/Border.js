import { useContext } from "react";
import CountriesContext from "../../../../helpers/context/countriesContext";
import useFetchCountries from "../../../../helpers/hooks/useFetchCountries";
import "./Border.css";

export default function Border(props) {
  const { countryCode } = props;
  const { countries, isLoading, error } = useFetchCountries(
    `alpha?codes=${countryCode}`
  );
  const { handleCountryClick } = useContext(CountriesContext);

  return error ? (
    <div className="border-country-button">{error}</div>
  ) : isLoading ? (
    <div className="border-country-button">Loading...</div>
  ) : (
    <div
      className="border-country-button"
      id={countries[0].name.common}
      onClick={handleCountryClick}
    >
      {countries[0].name.common}
    </div>
  );
}
