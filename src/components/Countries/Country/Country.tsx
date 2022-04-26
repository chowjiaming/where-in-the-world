import { useContext } from 'react';
import SearchContext from '../../../context/searchContext';
import { SearchContextType } from '../../../@types/search';
import { numToLocale } from '../../../helpers/helperFunctions';
import './Country.css';

type CountryProps = {
  country: {
    name: {
      common: string;
    };
    flags: {
      svg: string;
    };
    population: string;
    region: string;
    capital: string;
  };
};

const Country: React.FC<CountryProps> = ({ country }) => {
  const { handleCountryClick } = useContext(SearchContext) as SearchContextType;

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
};

export default Country;