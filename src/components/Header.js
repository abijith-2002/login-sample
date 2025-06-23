import React from "react";

// PUBLIC_INTERFACE
/**
 * Header for the Employee Portal login page.
 * Ensures Nord color palette and Inter font are used via CSS.
 */
export default function Header() {
  return (
    <header className="login-header" style={{
      fontFamily: "'Inter', 'Segoe UI', 'Roboto', Arial, sans-serif",
      background: "var(--nord2)",
      color: "var(--nord6)",
      fontWeight: "bold",
      textAlign: "center",
      letterSpacing: "0.025em"
    }}>
      Employee Portal
    </header>
  );
}
