import React, { useState } from "react";
import "../style.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* <h1 className="logo">Nice Iradukunda</h1>  */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="#home" onClick={closeMenu}><i className="fas fa-home"></i>Home</a></li>
          <li><a href="#projects" onClick={closeMenu}><i className="fas fa-laptop-code"></i> Projects</a></li>
          <li><a href="#skills" onClick={closeMenu}><i className="fas fa-code"></i>Skills</a></li>
          <li><a href="#contact" onClick={closeMenu}><i className="fas fa-envelope"></i> Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
