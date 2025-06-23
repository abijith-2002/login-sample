import React from "react";

// PUBLIC_INTERFACE
/**
 * Header for the Employee Portal login page.
 * Ensures Nord color palette and Inter font are used via CSS.
 */
export default function Header() {
  return (
    <header className="login-header" style={{ fontFamily: "'Inter', system-ui, 'Segoe UI', 'Roboto', Arial, sans-serif" }}>
      Employee Portal
    </header>
  );
}
