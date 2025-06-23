import React, { useState, useEffect, useCallback, createContext, useContext } from "react";

/**
 * Theme context for the app. Provides current theme, toggle, and a way to consume it.
 */
const ThemeContext = createContext();

/**
 * List of theme CSS variables for both light and dark (Nord) themes.
 */
const LIGHT_THEME = {
  "--nord0": "#eceff4", // bg
  "--nord1": "#e5e9f0",
  "--nord2": "#d8dee9",
  "--nord3": "#d8dee9",
  "--nord4": "#5e81ac",
  "--nord5": "#434c5e",
  "--nord6": "#2e3440", // text
  "--nord7": "#a3be8c",
  "--nord8": "#4c566a",
  "--nord9": "#81a1c1",
  "--nord10": "#5e81ac",
  "--nord11": "#bf616a",
  "--nord12": "#d08770",
  "--nord13": "#ebcb8b",
  "--nord14": "#8fbcbb",
  "--nord15": "#b48ead",

  "--primary": "#5e81ac",
  "--secondary": "#4c566a",
  "--accent": "#a3be8c",
  "--bg": "#eceff4",
  "--error": "#bf616a",
  "--text": "#2e3440"
};

const DARK_THEME = {
  "--nord0": "#2e3440",
  "--nord1": "#3b4252",
  "--nord2": "#434c5e",
  "--nord3": "#4c566a",
  "--nord4": "#d8dee9",
  "--nord5": "#e5e9f0",
  "--nord6": "#eceff4",
  "--nord7": "#8fbcbb",
  "--nord8": "#88c0d0",
  "--nord9": "#81a1c1",
  "--nord10": "#5e81ac",
  "--nord11": "#bf616a",
  "--nord12": "#d08770",
  "--nord13": "#ebcb8b",
  "--nord14": "#a3be8c",
  "--nord15": "#b48ead",

  "--primary": "#88c0d0",
  "--secondary": "#5e81ac",
  "--accent": "#8fbcbb",
  "--bg": "#2e3440",
  "--error": "#bf616a",
  "--text": "#eceff4"
};

// Key for localStorage
const LS_KEY = "theme-mode";

/**
 * PUBLIC_INTERFACE
 * ThemeProvider that provides theme context and toggling.
 */
export default function ThemeProvider({ children }) {
  // If localStorage theme exists, use it. Else, prefer `dark` based on system.
  const systemDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  const getInitialTheme = () => {
    const val = localStorage.getItem(LS_KEY);
    if (val === "light" || val === "dark") return val;
    return systemDark ? "dark" : "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Set CSS variables on root
  useEffect(() => {
    const root = document.documentElement;
    const vars = theme === "dark" ? DARK_THEME : LIGHT_THEME;
    Object.entries(vars).forEach(([k, v]) => {
      root.style.setProperty(k, v);
    });
    // Persist for reloads
    localStorage.setItem(LS_KEY, theme);
  }, [theme]);

  // Toggle between light and dark
  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }, []);

  // Also respond to OS-level theme change if user has not manually toggled yet
  useEffect(() => {
    const syncSystemTheme = (e) => {
      if (!localStorage.getItem(LS_KEY)) {
        setTheme(e.matches ? "dark" : "light");
      }
    };
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    query.addEventListener("change", syncSystemTheme);
    return () => query.removeEventListener("change", syncSystemTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * PUBLIC_INTERFACE
 * Hook to get theme and toggle function.
 */
export function useTheme() {
  return useContext(ThemeContext);
}
