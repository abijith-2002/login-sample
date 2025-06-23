import React from "react";
import { useTheme } from "../theme/ThemeProvider";
import "./ThemeToggleButton.css";

/**
 * PUBLIC_INTERFACE
 * Toggle between light and dark theme.
 */
export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  // Icon: sun for light, moon for dark
  const isDark = theme === "dark";
  return (
    <button
      className="theme-toggle-btn"
      onClick={toggleTheme}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      type="button"
    >
      {isDark
        ? (
          // Moon SVG (Nord blue)
          <svg
            width="28" height="28" viewBox="0 0 28 28" fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ verticalAlign: "middle" }}
          >
            <circle cx="14" cy="14" r="12" fill="#2e3440"/>
            <path
              d="M18.5 23c-4.69 0-8.5-3.81-8.5-8.5 0-3.5 2.15-6.54 5.28-7.83.6-.25 1.12.51.65 1.01A7.06 7.06 0 0 0 15 14c0 3.87 3.13 7 7 7 .49 0 .74.6.32.9C21 22.38 19.79 23 18.5 23z"
              fill="#88c0d0"
            />
          </svg>
        )
        : (
          // Sun SVG (Nord yellow)
          <svg
            width="28" height="28" viewBox="0 0 28 28" fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ verticalAlign: "middle" }}
          >
            <circle cx="14" cy="14" r="7" fill="#ebcb8b" />
            <g stroke="#e5e9f0" strokeWidth="2" strokeLinecap="round">
              <line x1="14" y1="2" x2="14" y2="7"/>
              <line x1="14" y1="21" x2="14" y2="26"/>
              <line x1="2" y1="14" x2="7" y2="14"/>
              <line x1="21" y1="14" x2="26" y2="14"/>
              <line x1="5.1" y1="5.1" x2="8.2" y2="8.2"/>
              <line x1="19.8" y1="19.8" x2="22.9" y2="22.9"/>
              <line x1="5.1" y1="22.9" x2="8.2" y2="19.8"/>
              <line x1="19.8" y1="8.2" x2="22.9" y2="5.1"/>
            </g>
          </svg>
        )
      }
    </button>
  );
}
