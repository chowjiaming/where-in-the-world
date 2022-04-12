import { useContext } from "react";
import ThemeContext from "../../context/themeContext";
import CountriesContext from "../../context/countriesContext";
import sunIcon from "../../assets/images/sun.svg";
import moonIcon from "../../assets/images/moon.svg";
import "./Navbar.css";

export default function Navbar() {
  const { handleToggleClick, theme } = useContext(ThemeContext);
  const { handleHomeClick } = useContext(CountriesContext);

  return (
    <nav className="navbar" role="navigation">
      <h1 className="navbar__title" onClick={handleHomeClick}>
        Where in the World?
      </h1>
      {theme.option === "light" ? (
        <div className="container__theme" onClick={handleToggleClick}>
          <img className="theme__icon" src={moonIcon} alt="moon-icon" />
          <p className="theme__icon--text">Dark Mode</p>
        </div>
      ) : (
        <div className="container__theme" onClick={handleToggleClick}>
          <img className="theme__icon" src={sunIcon} alt="sun-icon" />
          <p className="theme__icon--text">Light Mode</p>
        </div>
      )}
    </nav>
  );
}
