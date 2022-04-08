import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { CountriesProvider } from "./context/countriesContext";
import ThemeContext from "./context/themeContext";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Detail from "./pages/Details/Details";
import "./App.css";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="App" data-theme={theme.option}>
      <Navbar />
      <CountriesProvider>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/detail/:countryId"} element={<Detail />} />
        </Routes>
      </CountriesProvider>
    </div>
  );
}

export default App;
