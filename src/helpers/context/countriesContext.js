import { createContext } from "react";
import { useState } from "react";
import useFetchCountries from "../hooks/useFetchCountries";

const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
  const [searchCountry, setSearchCountry] = useState("all");
  const { countries, isLoading, error } = useFetchCountries(searchCountry);

  return (
    <CountriesContext.Provider
      value={{ setSearchCountry, countries, isLoading, error }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesContext;
