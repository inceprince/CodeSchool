import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import "./nav.css";

const menus = [
  { label: "Home", href: "/" },
  { label: "Teachers", href: "/teachers" },
  { label: "Holidays", href: "/holidays" },
  { label: "Contact Us", href: "/contacts" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const linkStyle = ({ isActive }) => ({
    textDecoration: "none",
    paddingBottom: "4px",
    fontSize: 17,
    color: isActive
      ? isDark ? "#60A5FA" : "#1E3A8A"
      : isDark ? "#d1d5db" : "#323232",
    borderBottom: isActive
      ? `2px solid ${isDark ? "#60A5FA" : "#1E3A8A"}`
      : "none",
    fontWeight: isActive ? "700" : "500",
  });

  return (
    <nav className="sticky top-0 left-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
      <div className="flex justify-between items-center px-6 py-3">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="./Photo/logo.webp" width="50" alt="Logo" />
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            CodingSchool
          </h1>
        </div>

        {/* Desktop: Nav Links + Theme Toggle */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex list-none items-center gap-6">
            {menus.map((item) => (
              <li key={item.href}>
                <NavLink to={item.href} style={linkStyle}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="text-2xl text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
          >
            <i className={isDark ? "ri-sun-line" : "ri-moon-line"}></i>
          </button>
        </div>

        {/* Mobile: Theme Toggle + Hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="text-xl text-gray-600 dark:text-gray-300"
          >
            <i className={isDark ? "ri-sun-line" : "ri-moon-line"}></i>
          </button>
          <button
            className="text-2xl text-gray-700 dark:text-gray-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            <i className={isOpen ? "ri-close-line" : "ri-menu-line"}></i>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden list-none flex flex-col gap-4 px-6 pb-5 pt-3 border-t dark:border-gray-700 bg-white dark:bg-gray-900">
          {menus.map((item) => (
            <li key={item.href}>
              <NavLink
                to={item.href}
                onClick={() => setIsOpen(false)}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  fontSize: 16,
                  color: isActive
                    ? isDark ? "#60A5FA" : "#1E3A8A"
                    : isDark ? "#d1d5db" : "#323232",
                  fontWeight: isActive ? "700" : "500",
                })}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
