import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("theme", {
    option: "light",
  });

  const handleToggleClick = () => {
    setTheme((prevState) => {
      return prevState.option === "light"
        ? { option: "dark" }
        : { option: "light" };
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, handleToggleClick }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
