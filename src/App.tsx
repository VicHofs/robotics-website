import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import lightTheme from "./styles/themes/light";
import Router from "./routes/router";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import darkTheme from "@styles/themes/dark";
import ReactLenis from "lenis/react";

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

interface ContextType {
  themeName: keyof typeof themes;
  toggleTheme: () => void;
  setThemeName: Dispatch<SetStateAction<ContextType["themeName"]>>;
}

export const GlobalContext = createContext<ContextType | undefined>(undefined);

const App = () => {
  const [themeName, setThemeName] = useState<ContextType["themeName"]>(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );

  useEffect(() => {
    // automatic theme switching if user changes system theme
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      setThemeName(mediaQuery.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    setThemeName((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <GlobalContext.Provider value={{ themeName, toggleTheme, setThemeName }}>
      <ThemeProvider theme={themes[themeName]}>
        <GlobalStyle />
        <ReactLenis options={{ smoothWheel: false }} root>
          <Router />
        </ReactLenis>
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};

export default App;
