import { Fragment } from "react";
import useFetchCountries from "../../hooks/useFetchCountries";
import { useParams, useNavigate } from "react-router-dom";
import { addCommas } from "../../helpers/helperFunctions";

import Borders from "../../components/Borders/Borders";
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
      <div className="main-detail-container">
        <img
          className="large-country-flag"
          src={countries[0].flags.svg}
          alt={`${countries[0].name.common} Flag`}
        />
        <div className="details-container">
          <h2 className="country-name-heading">{countries[0].name.common}</h2>
          <div className="details-content-container">
            <div className="detail-box">
              <p className="fact-detail">
                <span className="fact-detail-heading">Native Name: </span>
                {Object.values(countries[0].name.nativeName)[0].official}
              </p>
              <p className="fact-detail">
                <span className="fact-detail-heading">Population: </span>
                {addCommas(countries[0].population)}
              </p>
              <p className="fact-detail">
                <span className="fact-detail-heading">Region: </span>
                {countries[0].region}
              </p>
              <p className="fact-detail">
                <span className="fact-detail-heading">Sub Region: </span>
                {countries[0].subregion}
              </p>
              <p className="fact-detail">
                <span className="fact-detail-heading">Capital: </span>
                {countries[0].capital}
              </p>
            </div>
            <div className="detail-box">
              <p className="fact-detail">
                <span className="fact-detail-heading">Top Level Domain: </span>
                {countries[0].tld[0]}
              </p>
              <p className="fact-detail">
                <span className="fact-detail-heading">Currencies: </span>
                {Object.values(countries[0].currencies)[0].name.replace(
                  /(^\w{1})|(\s+\w{1})/g,
                  (letter) => letter.toUpperCase()
                )}
              </p>
              <p className="fact-detail">
                <span className="fact-detail-heading">Language: </span>
                {Object.values(countries[0].languages)[0]}
              </p>
            </div>
          </div>

          {countries[0].borders ? (
            <Borders borders={countries[0].borders} />
          ) : (
            <h3 className="border-countries-title">No bordering Countries</h3>
          )}
        </div>
      </div>
    </Fragment>
  );

  return <Fragment>{detailContent}</Fragment>;
}
