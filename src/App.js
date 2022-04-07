import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import ThemeContext from "./helpers/context/themeContext";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main";
import Detail from "./components/Detail/Detail";
import "./App.css";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="App" data-theme={theme.option}>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/detail"} element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
