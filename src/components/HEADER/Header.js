import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <header>
      <div className="container">
        <nav className="nav">
          <div className="menu-toggle">
            <i className="fas fa-times"></i>
            <i className="fas fa-bars"></i>
          </div>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className = "nav-link">
                <img
                  src="https://placeholderlogo.com/img/placeholder-logo-1.png"
                  alt="vandame hrustic"
                />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
