import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
import { navigation } from "../data/siteData";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className="header">
      <Container className="nav">
        <Link className="logo" to="/" onClick={closeMenu}>
          Adora<span>Solution</span>
        </Link>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "×" : "☰"}
        </button>
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navigation.map((item) => (
            <NavLink key={item.path} to={item.path} onClick={closeMenu}>
              {item.label}
            </NavLink>
          ))}
          <Link className="nav-cta" to="/contact" onClick={closeMenu}>
            Start a conversation <span>↗</span>
          </Link>
        </nav>
      </Container>
    </header>
  );
}
export default Navbar;
