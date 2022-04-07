import { addCommas } from "../../../helpers/helperFunctions";
import "./Country.css";

export default function Country(props) {
  const { country } = props;
  console.log(country);
  return (
    <div className="country-container">
      <img
        className="country-flag"
        src={country.flags.svg}
        alt={`${country.name.common} Flag`}
      />
      <div className="country-facts-container">
        <h2 className="country-name">{country.name.common}</h2>
        <p className="country-fact">
          <span className="country-fact-heading">Population: </span>
          {addCommas(country.population)}
        </p>
        <p className="country-fact">
          <span className="country-fact-heading">Region: </span>
          {country.region}
        </p>
        <p className="country-fact">
          <span className="country-fact-heading">Capital: </span>
          {country.capital}
        </p>
      </div>
    </div>
  );
}
