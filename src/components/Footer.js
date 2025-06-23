import React from "react";

// PUBLIC_INTERFACE
/**
 * Footer for the Employee Portal login page, styled with the Nord palette.
 * Uses Inter font via global CSS.
 */
export default function Footer() {
  return (
    <footer className="login-footer" style={{
      fontFamily: "'Inter', 'Segoe UI', 'Roboto', Arial, sans-serif",
      background: "var(--nord1)",
      color: "var(--nord4)",
      textAlign: "center",
      letterSpacing: "0.01em"
    }}>
      © 2024 Employee Portal. All rights reserved.
    </footer>
  );
}
