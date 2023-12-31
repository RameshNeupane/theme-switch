import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkMode: () => {},
    lightMode: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

const useTheme = () => {
    return useContext(ThemeContext);
};

export default useTheme;
