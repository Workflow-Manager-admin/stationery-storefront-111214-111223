import React from "react";
import { Link, useLocation } from "react-router-dom";

// PUBLIC_INTERFACE
function Header({ user, setUser, toggleTheme, theme }) {
  const location = useLocation();

  // PUBLIC_INTERFACE
  const handleSignOut = () => {
    setUser(null);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="logo">
          <span className="accent">✎</span> Stationery.Shop
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
              About
            </Link>
          </li>
        </ul>
        <div className="nav-actions">
          <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Theme toggle">
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          {user ? (
            <div className="user-info">
              <span className="username">🎉 {user.name}</span>
              <button className="nav-btn" onClick={handleSignOut}>
                Logout
              </button>
            </div>
          ) : (
            <Link to="/auth">
              <button className="nav-btn login-btn">Sign in / up</button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
