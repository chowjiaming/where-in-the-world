import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
  const navigate = useNavigate();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [countrySearchData, setCountrySearchData] = useState({
    term: "",
    region: 0,
    default: "all",
  });

  const toggleDropdownOpen = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleRegionSelect = (index) => {
    setCountrySearchData({
      ...countrySearchData,
      default: "",
      region: index,
    });
    setDropdownOpen(false);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    if (!value) {
      setCountrySearchData({
        term: value,
        region: 0,
        default: "all",
      });
    } else {
      setCountrySearchData({
        term: value,
        region: 0,
        default: "",
      });
    }
  };

  const handleCountryClick = (e) => {
    const country = e.currentTarget.id.toLowerCase();
    navigate(`detail/${country}`);
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <CountriesContext.Provider
      value={{
        dropdownOpen,
        setDropdownOpen,
        toggleDropdownOpen,
        handleRegionSelect,
        setCountrySearchData,
        countrySearchData,
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
