import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

export const Nav = () => {
  const [darkMode, setDarkMode] = useDarkMode("dark mode status", false);

  const toggle = (event) => {
    event.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <nav>
        <h1 className="nav-title">Menu</h1>
        <button onClick={toggle} className="btn">
          darkmode
        </button>
      </nav>
    </div>
  );
};
