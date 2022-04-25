import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CountriesProvider } from './context/countriesContext';
import ThemeContext from './context/themeContext';
import Navbar from './components/Navbar/Navbar';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import Detail from './pages/Details/Details';
import Attributions from './components/Attributions/Attributions';
import './App.css';

const App: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="App" data-theme={theme.option}>
      <CountriesProvider>
        <Navbar />
        <Routes>
          <Route path={'*'} element={<NotFound />} />
          <Route path={'/'} element={<Home />} />
          <Route path={'/detail/:countryId'} element={<Detail />} />
        </Routes>
      </CountriesProvider>
      <Attributions />
    </div>
  );
};

export default App;
