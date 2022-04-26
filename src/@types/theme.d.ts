export interface ITheme {
  key: string;
  initialValue: {option: string}
}

export type ThemeContextType = {
  theme: ITheme;
  handleToggleClick: () => void; 
}