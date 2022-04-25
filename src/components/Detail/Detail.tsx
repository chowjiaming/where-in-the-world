import { Fragment, useContext } from 'react';
import useFetchCountries from '../../hooks/useFetchCountries';
import { useParams, useNavigate } from 'react-router-dom';
import {
  numToLocale,
  capitalizeWords,
  findNativeName,
  findCurrency,
} from '../../helpers/helperFunctions';
import ThemeContext from '../../context/themeContext';
import Borders from '../Borders/Borders';
import leftArrow from '../../assets/images/left-arrow.svg';
import './Detail.css';

const Detail: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const params = useParams();
  const navigate = useNavigate();
  const { countryId } = params;

  // temporary until new reducer hook function is written
  const { countries, isLoading, error } = useFetchCountries(
    `name/${countryId}`,
  );
  const country = countries ? countries[0] : null;

  const detailContent = error ? (
    <h1>{error}</h1>
  ) : isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <Fragment>
      <button className="button__back" onClick={() => navigate(-1)}>
        <img
          className={`button__back--icon ${
            theme.option === 'light' ? 'light' : ''
          }`}
          src={leftArrow}
          alt="left-arrow"
        />
        Back
      </button>
      <div className="container__detail--main">
        <img
          className="large-country__flag"
          src={country.flags.svg}
          alt={`${country.name.common} Flag`}
        />
        <div className="container__detail--inner">
          <h2 className="detail__country--title">{country.name.common}</h2>
          <div className="details__content">
            <div className="container__facts">
              <p className="detail__fact">
                <span className="detail__fact--heading">Native Name: </span>
                {findNativeName(country.name.nativeName)}
              </p>
              <p className="detail__fact">
                <span className="detail__fact--heading">Population: </span>
                {numToLocale(country.population)}
              </p>
              <p className="detail__fact">
                <span className="detail__fact--heading">Region: </span>
                {country.region}
              </p>
              <p className="detail__fact">
                <span className="detail__fact--heading">Sub Region: </span>
                {country.subregion}
              </p>
              <p className="detail__fact">
                <span className="detail__fact--heading">Capital: </span>
                {country.capital}
              </p>
            </div>
            <div className="container__facts">
              <p className="detail__fact">
                <span className="detail__fact--heading">
                  Top Level Domain:{' '}
                </span>
                {country.tld[0]}
              </p>
              <p className="detail__fact">
                <span className="detail__fact--heading">Currencies: </span>
                {capitalizeWords(findCurrency(country.currencies))}
              </p>
              <p className="detail__fact">
                <span className="detail__fact--heading">
                  {Object.values(country.languages).length > 1
                    ? 'Languages: '
                    : 'Language: '}
                </span>
                {Object.values(country.languages).join(', ')}
              </p>
            </div>
          </div>

          {country.borders ? (
            <Borders borders={country.borders} />
          ) : (
            <h3 className="border__title">No bordering Countries</h3>
          )}
        </div>
      </div>
    </Fragment>
  );

  return <section className="detail">{detailContent}</section>;
};

export default Detail;
