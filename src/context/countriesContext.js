import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [countrySearchData, setCountrySearchData] = useState({
    term: "",
    region: 0,
  });

  const toggleDropdownOpen = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleRegionSelect = (index) => {
    setCountrySearchData({
      ...countrySearchData,
      region: index,
    });
    setDropdownOpen(false);
  };

  const useHandleClickOutside = (ref) => {
    useEffect(() => {
      const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target))
          setDropdownOpen(false);
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setCountrySearchData({
      ...countrySearchData,
      term: value,
    });
  };

  const handleCountryClick = (e) => {
    const country = e.currentTarget.id.toLowerCase();
    navigate(`detail/${country}`);
  };

  const handleHomeClick = () => {
    setCountrySearchData({ term: "", region: 0 });
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
        useHandleClickOutside,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesContext;
