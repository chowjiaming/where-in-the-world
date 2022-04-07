import { useContext } from "react";
import ThemeContext from "../../helpers/context/themeContext";
import "./Navbar.css";

export default function Navbar() {
  const { handleToggleClick } = useContext(ThemeContext);
  return (
    <nav className="navbar">
      <h1 className="nav-title">Where in the World?</h1>
      <div className="theme-toggle-container" onClick={handleToggleClick}>
        <p className="theme-toggle-text">Dark Mode</p>
      </div>
    </nav>
  );
}
