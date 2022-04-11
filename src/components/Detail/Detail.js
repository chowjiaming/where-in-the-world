import { Fragment, useContext } from "react";
import useFetchCountries from "../../hooks/useFetchCountries";
import { useParams, useNavigate } from "react-router-dom";
import { numToLocale, capitalizeWords } from "../../helpers/helperFunctions";
import ThemeContext from "../../context/themeContext";
import Borders from "../../components/Borders/Borders";
import "./Detail.css";

export default function Detail() {
  const { theme } = useContext(ThemeContext);
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
      <button className="button__back" onClick={() => navigate(-1)}>
        <img
          className={`button__back--icon ${
            theme.option === "light" ? "light" : ""
          }`}
          src="/images/left-arrow.svg"
          alt="left-arrow"
        />
        Back
      </button>
      <div className="container__detail--main">
        <img
          className="large-country__flag"
          src={countries[0].flags.svg}
          alt={`${countries[0].name.common} Flag`}
        />
        <div className="container__detail--inner">
          <h2 className="detail__country--title">{countries[0].name.common}</h2>
          <div className="details__content">
            <div className="container__facts">
              <p className="detail__fact">
                <span className="detail__fact--heading">Native Name: </span>
                {Object.values(countries[0].name.nativeName)[0].official}
              </p>
              <p className="detail__fact">
                <span className="detail__fact--heading">Population: </span>
                {numToLocale(countries[0].population)}
              </p>
              <p className="detail__fact">
                <span className="detail__fact--heading">Region: </span>
                {countries[0].region}
              </p>
              <p className="detail__fact">
                <span className="detail__fact--heading">Sub Region: </span>
                {countries[0].subregion}
              </p>
              <p className="detail__fact">
                <span className="detail__fact--heading">Capital: </span>
                {countries[0].capital}
              </p>
            </div>
            <div className="container__facts">
              <p className="detail__fact">
                <span className="detail__fact--heading">
                  Top Level Domain:{" "}
                </span>
                {countries[0].tld[0]}
              </p>
              <p className="detail__fact">
                <span className="detail__fact--heading">Currencies: </span>
                {capitalizeWords(
                  Object.values(countries[0].currencies)[0].name
                )}
              </p>
              <p className="detail__fact">
                <span className="detail__fact--heading">Language: </span>
                {Object.values(countries[0].languages)[0]}
              </p>
            </div>
          </div>

          {countries[0].borders ? (
            <Borders borders={countries[0].borders} />
          ) : (
            <h3 className="border__title">No bordering Countries</h3>
          )}
        </div>
      </div>
    </Fragment>
  );

  return <section>{detailContent}</section>;
}
