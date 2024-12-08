import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY } from "./ThemeContext";
import { Theme, ThemeContext } from "./ThemeContext";

interface UseThemResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme():UseThemResult {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {
        theme, 
        toggleTheme
    } 
}