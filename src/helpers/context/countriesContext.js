import { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetchCountries from "../hooks/useFetchCountries";

const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
  const [searchCountry, setSearchCountry] = useState("all");
  const { countries, isLoading, error } = useFetchCountries(searchCountry);

  const navigate = useNavigate();
  const handleCountryClick = (e) => {
    const country = e.target.id.toLowerCase();
    navigate(`detail/${country}`);
  };

  return (
    <CountriesContext.Provider
      value={{
        setSearchCountry,
        handleCountryClick,
        countries,
        isLoading,
        error,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesContext;
