import React from "react";
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
          <img src = "https://placeholderlogo.com/img/placeholder-logo-1.png" alt = "vandame hrustic"/>
        </nav>
      </div>
    </header>
  );
}

export default Header;
