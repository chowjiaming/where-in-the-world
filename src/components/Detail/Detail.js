import { useContext, useEffect } from "react";
import CountriesContext from "../../helpers/context/countriesContext";
import { useParams } from "react-router-dom";
import "./Detail.css";

export default function Detail() {
  const params = useParams();
  const { countryId } = params;
  const { setSearchCountry, countries, isLoading, error } =
    useContext(CountriesContext);

  useEffect(() => {
    setSearchCountry(`name/${countryId}`);
  }, [countryId, setSearchCountry]);

  console.log(countries, isLoading, error);
  return (
    <section className="country-detail-container">
      <button className="back-button">Back</button>
      <img
        className="country-flag-detail"
        src={countries[0].flags.svg}
        alt={`${countries[0].name.common} Flag`}
      />
      <h2 className="country-name-detail">{countries[0].name.common}</h2>
      <div className="country-details-container">
        <p className="country-fact-detail">
          <span className="country-fact-heading-detail">Native Name: </span>
          {addCommas(country.population)}
        </p>
        <p className="country-fact-detail">
          <span className="country-fact-heading-detail">Population: </span>
          {addCommas(country.population)}
        </p>
        <p className="country-fact">
          <span className="country-fact-heading-detail">Region: </span>
          {country.region}
        </p>
        <p className="country-fact">
          <span className="country-fact-heading-detail">Sub Region: </span>
          {country.region}
        </p>
        <p className="country-fact">
          <span className="country-fact-heading-detail">Capital: </span>
          {country.capital}
        </p>
      </div>
      <div className="country-details-container">
        <p className="country-fact">
          <span className="country-fact-heading-detail">
            Top Level Domain:{" "}
          </span>
          {country.region}
        </p>
        <p className="country-fact">
          <span className="country-fact-heading-detail">Currencies: </span>
          {country.region}
        </p>
        <p className="country-fact">
          <span className="country-fact-heading-detail">Language: </span>
          {country.capital}
        </p>
      </div>
    </section>
  );
}
