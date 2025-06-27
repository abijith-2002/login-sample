import React, { createContext, useContext, useEffect, useState } from "react";

// Theme definitions for light and dark mode
const themes = {
  light: {
    name: "light",
    variables: {
      "--primary": "#244cae",
      "--secondary": "#468ee6",
      "--accent": "#85c1ff",
      "--bg": "#f2f5fa",
      "--error": "#f3704a",
      "--foreground": "#131932",
      "--header-bg": "#e2eaff",
      "--footer-bg": "#dee5f3",
      "--login-card-bg": "#fff"
    }
  },
  dark: {
    name: "dark",
    variables: {
      "--primary": "#c8d4fe",
      "--secondary": "#91b1ef",
      "--accent": "#4eb2e0",
      "--bg": "#1b1e35",
      "--error": "#f3747a",
      "--foreground": "#e2eafc",
      "--header-bg": "#242549",
      "--footer-bg": "#16163a",
      "--login-card-bg": "#22253b"
    }
  }
};

const ThemeContext = createContext();

// PUBLIC_INTERFACE
export function useTheme() {
  return useContext(ThemeContext);
}

// PUBLIC_INTERFACE
export default function ThemeProvider({ children }) {
  // Pick default from system preference or localStorage
  const getInitialTheme = () => {
    const stored = localStorage.getItem("theme_mode");
    if (stored === "light" || stored === "dark") return stored;
    if (window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches) {
      return "light";
    }
    return "dark";
  };
  const [mode, setMode] = useState(getInitialTheme());

  // Apply theme variables to document root
  useEffect(() => {
    const variables = themes[mode].variables;
    for (const key in variables) {
      document.documentElement.style.setProperty(key, variables[key]);
    }
    localStorage.setItem("theme_mode", mode);
  }, [mode]);

  // PUBLIC_INTERFACE
  function toggleTheme() {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return (
    <ThemeContext.Provider
      value={{
        mode,
        setMode,
        toggleTheme,
        isDark: mode === "dark",
        isLight: mode === "light"
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
