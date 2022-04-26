// See: https://usehooks-ts.com/react-hook/use-local-storage
import useLocalStorage from './useLocalStorage';
// See: https://usehooks-ts.com/react-hook/use-media-query
import useMediaQuery from './useMediaQuery';
// See: https://usehooks-ts.com/react-hook/use-update-effect
import useUpdateEffect from './useUpdateEffect';

const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)';

interface UseDarkModeOutput {
  theme: string;
  toggleTheme: () => void;
}

function useDarkMode(): UseDarkModeOutput {
  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY);
  const [theme, setDarkMode] = useLocalStorage<string>(
    'where-in-the-world-theme',
    isDarkOS ? 'dark' : 'light',
  );

  // Update darkMode if os prefers changes
  useUpdateEffect(() => {
    setDarkMode(isDarkOS ? 'dark' : 'light');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkOS]);

  return {
    theme,
    toggleTheme: () =>
      setDarkMode((prev) => (prev === 'dark' ? 'light' : 'dark')),
  };
}

export default useDarkMode;
