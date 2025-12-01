import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

const menus = [
  { label: "Home", href: "/" },
  { label: "Teachers", href: "/teachers" },
  { label: "Holidays", href: "/holidays" },
  { label: "Contact Us", href: "/contacts" },
];

function Navbar() {
  return (
    <nav
      className="sticky top-0 left-0 z-50"
      style={{
        display: "flex",
        background: "white",
        justifyContent: "space-between",
        padding: "4px 25px",
        boxShadow: "0 8px 8px 0 rgba(0,0,0,0.1)",
        height: "max-content",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img src="./Photo/logo.webp" width="50" />
        <h1 className="text-xl font-bold">CodingSchool</h1>
      </div>

      {/* Menu */}
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          alignItems: "center",
          gap: 24,
        }}
      >
        {menus.map((item) => (
          <li key={item.href}>
            <NavLink
              to={item.href}
              style={({ isActive }) => ({
                textDecoration: "none",
                paddingBottom: "4px",
                fontSize: 17,
                color: isActive ? "#1E3A8A" : "#323232",
                borderBottom: isActive ? "2px solid #1E3A8A" : "none",
                fontWeight: isActive ? "700" : "500",
              })}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
