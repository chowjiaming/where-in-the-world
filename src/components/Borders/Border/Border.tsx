import { useContext } from 'react';
import SearchContext from '../../../context/searchContext';
import { SearchContextType } from '../../../@types/search';
import useFetchCountries from '../../../hooks/useFetchCountries';
import './Border.css';

type BorderProps = {
  countryCode: string;
};

const Border: React.FC<BorderProps> = ({ countryCode }) => {
  const { countries, isLoading, error } = useFetchCountries(
    `alpha?codes=${countryCode}`,
  );
  const { handleCountryClick } = useContext(SearchContext) as SearchContextType;

  return error ? (
    <div className="button__border">{error}</div>
  ) : isLoading ? (
    <div className="button__border">Loading...</div>
  ) : (
    <div
      className="button__border"
      title={countries[0].name.common}
      onClick={handleCountryClick}
    >
      {countries[0].name.common}
    </div>
  );
};

export default Border;
