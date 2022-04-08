import { Fragment } from "react";
import useFetchCountries from "../../helpers/hooks/useFetchCountries";
import { useParams, useNavigate } from "react-router-dom";
import { addCommas } from "../../helpers/helperFunctions";
import Borders from "./Borders/Borders";
import "./Detail.css";

export default function Detail() {
  const params = useParams();
  const navigate = useNavigate();
  const { countryId } = params;
  const { countries, isLoading, error } = useFetchCountries(
    `name/${countryId}`
  );

  const detailContent = error ? (
    <h1>{error}</h1>
  ) : isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <Fragment>
      <button className="back-button" onClick={() => navigate(-1)}>
        <img
          className="left-arrow"
          src="/images/left-arrow.svg"
          alt="left-arrow"
        />
        Back
      </button>
      <div className="flag-detail-container">
        <img
          className="country-flag-detail"
          src={countries[0].flags.svg}
          alt={`${countries[0].name.common} Flag`}
        />
        <div className="facts-detail-container">
          <h2 className="country-name-detail">{countries[0].name.common}</h2>
          <div className="details-content-container">
            <div className="details-facts-container">
              <p className="country-fact-detail">
                <span className="detail-fact-heading">Native Name: </span>
                {Object.values(countries[0].name.nativeName)[0].official}
              </p>
              <p className="country-fact-detail">
                <span className="detail-fact-heading">Population: </span>
                {addCommas(countries[0].population)}
              </p>
              <p className="country-fact-detail">
                <span className="detail-fact-heading">Region: </span>
                {countries[0].region}
              </p>
              <p className="country-fact-detail">
                <span className="detail-fact-heading">Sub Region: </span>
                {countries[0].subregion}
              </p>
              <p className="country-fact-detail">
                <span className="detail-fact-heading">Capital: </span>
                {countries[0].capital}
              </p>
            </div>
            <div className="details-facts-container">
              <p className="country-fact-detail">
                <span className="detail-fact-heading">Top Level Domain: </span>
                {countries[0].tld[0]}
              </p>
              <p className="country-fact-detail">
                <span className="detail-fact-heading">Currencies: </span>
                {Object.values(countries[0].currencies)[0].name.replace(
                  /(^\w{1})|(\s+\w{1})/g,
                  (letter) => letter.toUpperCase()
                )}
              </p>
              <p className="country-fact-detail">
                <span className="detail-fact-heading">Language: </span>
                {Object.values(countries[0].languages)[0]}
              </p>
            </div>
          </div>

          <h3 className="border-countries-title">Border Countries:</h3>
          {countries[0].borders ? (
            <Borders borders={countries[0].borders} />
          ) : (
            <p>No bordering Countries</p>
          )}
        </div>
      </div>
    </Fragment>
  );

  return (
    <section className="country-detail-container">{detailContent}</section>
  );
}
