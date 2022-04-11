import { useContext } from "react";
import CountriesContext from "../../../context/countriesContext";
import { numToLocale } from "../../../helpers/helperFunctions";
import "./Country.css";

export default function Country(props) {
  const { country } = props;
  const { handleCountryClick } = useContext(CountriesContext);

  return (
    <div
      className="container__country"
      title={country.name.common}
      onClick={handleCountryClick}
    >
      <img
        className="country__flag"
        src={country.flags.svg}
        alt={`${country.name.common} Flag`}
      />
      <div className="container__country--facts">
        <h2 className="country__name">{country.name.common}</h2>
        <p className="country__fact">
          <span className="country__fact--heading">Population: </span>
          {numToLocale(country.population)}
        </p>
        <p className="country__fact">
          <span className="country__fact--heading">Region: </span>
          {country.region}
        </p>
        <p className="country__fact">
          <span className="country__fact--heading">Capital: </span>
          {country.capital}
        </p>
      </div>
    </div>
  );
}
