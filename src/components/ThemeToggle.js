import React from "react";
import { useTheme } from "../theme/ThemeProvider";
import "./ThemeToggle.css";

// PUBLIC_INTERFACE
export default function ThemeToggle() {
  /**
   * Renders a button to toggle light/dark theme.
   */
  const { mode, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
      type="button"
    >
      {mode === "dark" ? (
        // Sun for light mode
        <span aria-hidden="true" role="img" className="theme-toggle-icon" title="Light mode">🌞</span>
      ) : (
        // Moon for dark mode
        <span aria-hidden="true" role="img" className="theme-toggle-icon" title="Dark mode">🌚</span>
      )}
    </button>
  );
}
