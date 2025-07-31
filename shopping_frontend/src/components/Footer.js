import React from "react";
import { Link } from "react-router-dom";

// PUBLIC_INTERFACE
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-row">
        <span>
          &copy; {new Date().getFullYear()} Stationery Shop •
          <a href="mailto:contact@stationery.shop" className="footer-link">Contact</a>
        </span>
        <span>
          <Link to="/about" className="footer-link">
            About Me
          </Link>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
