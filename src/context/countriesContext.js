import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
  const [searchCountry, setSearchCountry] = useState({
    term: "",
    default: "all",
  });

  const navigate = useNavigate();

  const handleCountryClick = (e) => {
    const country = e.currentTarget.id.toLowerCase();
    navigate(`detail/${country}`);
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    if (!value) {
      setSearchCountry({
        term: value,
        default: "all",
      });
    } else {
      setSearchCountry({
        term: value,
        default: "",
      });
    }
  };

  return (
    <CountriesContext.Provider
      value={{
        setSearchCountry,
        searchCountry,
        handleSearch,
        handleCountryClick,
        handleHomeClick,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesContext;
