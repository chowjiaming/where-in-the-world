import React, { createContext, useState, useEffect } from 'react';
import { ISearchData, SearchContextType } from '../@types/search';
import { useNavigate } from 'react-router-dom';

const SearchContext = createContext<SearchContextType | null>(null);

type SearchContextProviderProps = {
  children: React.ReactNode;
};

export const SearchProvider = ({ children }: SearchContextProviderProps) => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [countrySearchData, setCountrySearchData] = useState<ISearchData>({
    term: '',
    region: 0,
  });

  const toggleDropdownOpen = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleRegionSelect = (index: number) => {
    setCountrySearchData({
      ...countrySearchData,
      region: index,
    });
    setDropdownOpen(false);
  };

  const useHandleClickOutside = (ref: React.RefObject<HTMLDivElement>) => {
    useEffect(() => {
      const handleClickOutside = (e: MouseEvent): void => {
        if (ref.current && !ref.current.contains(e.target as HTMLElement))
          setDropdownOpen(false);
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCountrySearchData({
      ...countrySearchData,
      term: value,
    });
  };

  const handleCountryClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const country = e.currentTarget.title.toLowerCase();
    navigate(`detail/${country}`);
  };

  const handleHomeClick = () => {
    setCountrySearchData({ term: '', region: 0 });
    navigate('/');
  };

  return (
    <SearchContext.Provider
      value={{
        dropdownOpen,
        toggleDropdownOpen,
        handleRegionSelect,
        countrySearchData,
        setCountrySearchData,
        handleSearch,
        handleCountryClick,
        handleHomeClick,
        useHandleClickOutside,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
