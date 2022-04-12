import { useContext, useRef } from "react";
import CountriesContext from "../../../context/countriesContext";
import ThemeContext from "../../../context/themeContext";
import { regionList } from "../../../config/countryRegions";
import chevronDown from "../../../assets/images/chevron-down.svg";
import "./Filter.css";

export default function Filter() {
  const {
    dropdownOpen,
    setDropdownOpen,
    toggleDropdownOpen,
    handleRegionSelect,
    countrySearchData,
    setCountrySearchData,
    useHandleClickOutside,
  } = useContext(CountriesContext);
  const { theme } = useContext(ThemeContext);

  const dropdownRef = useRef(null);
  useHandleClickOutside(dropdownRef);

  const handleKeyDown = (index) => (e) => {
    switch (e.key) {
      case " ":
      case "SpaceBar":
      case "Enter":
        e.preventDefault();
        handleRegionSelect(index);
        break;
      default:
        break;
    }
  };

  const handleListKeyDown = (e) => {
    switch (e.key) {
      case "Escape":
        e.preventDefault();
        setDropdownOpen(false);
        break;
      case "ArrowUp":
        e.preventDefault();
        setCountrySearchData({
          ...countrySearchData,
          region:
            countrySearchData.region - 1 >= 0
              ? countrySearchData.region - 1
              : regionList.length - 1,
        });
        break;
      case "ArrowDown":
        e.preventDefault();
        setCountrySearchData({
          ...countrySearchData,
          region:
            countrySearchData.region === regionList.length - 1
              ? 0
              : countrySearchData.region + 1,
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="container__dropdown" ref={dropdownRef}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={dropdownOpen}
        className={`button__dropdown ${dropdownOpen ? "expanded" : ""}`}
        onClick={toggleDropdownOpen}
        onKeyDown={handleListKeyDown}
      >
        <img
          className={`button__dropdown--icon ${
            theme.option === "light" ? "light" : ""
          }`}
          src={chevronDown}
          alt="chevron-down"
        />
        {regionList[countrySearchData.region]}
      </button>
      <ul
        title="region-select"
        className={`dropdown__options ${
          dropdownOpen ? "dropdown__options--show" : ""
        }`}
        role="listbox"
        aria-activedescendant={regionList[countrySearchData.region]}
        tabIndex={-1}
        onKeyDown={handleListKeyDown}
      >
        {regionList.map((option, index) => {
          return index ? (
            <li
              key={option}
              id={option}
              className="dropdown__option"
              role="option"
              aria-selected={countrySearchData.region === index}
              tabIndex={0}
              onKeyDown={handleKeyDown(index)}
              onClick={() => {
                handleRegionSelect(index);
              }}
            >
              {option}
            </li>
          ) : null;
        })}
      </ul>
    </div>
  );
}
