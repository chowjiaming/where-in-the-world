import { useContext } from 'react';
import CountriesContext from '../../context/countriesContext';
import useFetchCountries from '../../hooks/useFetchCountries';
import { regionList } from '../../config/countryRegions';
import { capitalizeWords } from '../../helpers/helperFunctions';
import Country from './Country/Country';
import './Countries.css';

interface ICountry {
  name: {
    common: string;
  };
  flags: {
    svg: string;
  };
  population: string;
  region: string;
  capital: string;
}

export default function Countries() {
  const { countrySearchData } = useContext(CountriesContext);
  const { countries, isLoading, error } = useFetchCountries('all');

  const filterResults = (
    countries: Array<ICountry>,
    region: number,
    term: string,
  ): Array<ICountry> => {
    if (region && !term)
      return countries.filter(
        (country) => country.region === regionList[region],
      );
    else if (!region && term)
      return countries.filter((country) =>
        country.name.common.toLowerCase().includes(term.toLowerCase()),
      );
    else if (region && term)
      return countries.filter(
        (country) =>
          country.region === regionList[region] &&
          country.name.common.toLowerCase().includes(term.toLowerCase()),
      );
    else return countries;
  };

  const mainContent: React.ReactNode = error ? (
    <h1>Sorry, currently experiencing technical difficulties :(</h1>
  ) : isLoading ? (
    <h1>Loading...</h1>
  ) : filterResults(countries, countrySearchData.region, countrySearchData.term)
      .length !== 0 ? (
    filterResults(
      countries,
      countrySearchData.region,
      countrySearchData.term,
    ).map((country) => {
      return <Country key={country.name.common} country={country} />;
    })
  ) : (
    <h1 className="result__message--error">{`${capitalizeWords(
      countrySearchData.term,
    )} ${countrySearchData.region ? ' is ' : ''} not found${
      countrySearchData.region
        ? ' in ' + regionList[countrySearchData.region]
        : ''
    }`}</h1>
  );

  return <section className="container__results">{mainContent}</section>;
}
