export interface ISearchData {
  term: string;
  region: number;
}

export type SearchContextType = {
  dropdownOpen: boolean;
  toggleDropdownOpen: () => void;
  handleRegionSelect: (index: number) => void;
  countrySearchData: ISearchData;
  setCountrySearchData: React.Dispatch<React.SetStateAction<ISearchData>>;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCountryClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleHomeClick: () => void;
  useHandleClickOutside: (ref: React.RefObject<HTMLDivElement>) => void;
};
