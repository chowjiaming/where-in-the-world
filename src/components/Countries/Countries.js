import { useContext } from "react";
import CountriesContext from "../../context/countriesContext";
import useFetchCountries from "../../hooks/useFetchCountries";
import { regionList } from "../../config/countryRegions";
import { capitalizeWords } from "../../helpers/helperFunctions";
import Country from "./Country/Country";
import "./Countries.css";

export default function Countries() {
  const { countrySearchData } = useContext(CountriesContext);
  const { countries, isLoading, error } = useFetchCountries("all");

  const filterResults = (countries, region, term) => {
    if (region && !term)
      return countries.filter(
        (country) => country.region === regionList[region]
      );
    else if (!region && term)
      return countries.filter((country) =>
        country.name.common.toLowerCase().includes(term.toLowerCase())
      );
    else if (region && term)
      return countries.filter(
        (country) =>
          country.region === regionList[region] &&
          country.name.common.toLowerCase().includes(term.toLowerCase())
      );
    else return countries;
  };

  const mainContent = error ? (
    <h1>{error.message}</h1>
  ) : isLoading ? (
    <h1>Loading...</h1>
  ) : filterResults(countries, countrySearchData.region, countrySearchData.term)
      .length !== 0 ? (
    filterResults(
      countries,
      countrySearchData.region,
      countrySearchData.term
    ).map((country) => {
      return <Country key={country.name.common} country={country} />;
    })
  ) : (
    <h1 className="result__message--error">{`${capitalizeWords(
      countrySearchData.term
    )} ${countrySearchData.region ? " is " : ""} not found${
      countrySearchData.region
        ? " in " + regionList[countrySearchData.region]
        : ""
    }`}</h1>
  );

  return <div className="container__results">{mainContent}</div>;
}
