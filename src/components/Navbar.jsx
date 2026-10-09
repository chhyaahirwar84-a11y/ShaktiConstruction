import { useState } from "react";
import "../Styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      {/* Logo */}
      <a href="#home" className="logo" onClick={closeMenu}>
        <span className="logo-mark">S</span>
        <span>SHAKTI</span>
      </a>

      {/* Desktop Navigation */}
      <nav className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#certifications" onClick={closeMenu}>
          Certifications
        </a>
        <a href="#contacts" onClick={closeMenu}>Contact</a>
      </nav>

      {/* Desktop Button */}
      <a href="#contacts" className="nav-button">
        Get In Touch
      </a>

      {/* Mobile Menu Button */}
      <button
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </header>
  );
}

export default Navbar;