import React from "react";
import ThemeToggle from "./ThemeToggle";

// PUBLIC_INTERFACE
export default function Header() {
  /**
   * Renders the Employee Portal header for the login page, including theme toggle.
   */
  return (
    <header className="login-header" style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
      <span style={{ flex: "1", textAlign: "center" }}>Employee Portal</span>
      <span style={{position: "absolute", right: "1.1em", top: "0.8em"}}>
        <ThemeToggle />
      </span>
    </header>
  );
}
