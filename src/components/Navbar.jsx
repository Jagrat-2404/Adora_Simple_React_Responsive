import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Container from './Container'
import { navigation } from '../data/siteData'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef(null)
  const location = useLocation()

  const closeMenu = () => setMenuOpen(false)

  // Automatically close menu when the route changes
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Automatically close menu when clicking outside or pressing Escape
  useEffect(() => {
    if (!menuOpen) return

    const handlePointerDown = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen])

  return (
    <header className="header" ref={headerRef}>
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
          {menuOpen ? '×' : '☰'}
        </button>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navigation.map(item => (
            <NavLink key={item.path} to={item.path} onClick={closeMenu}>
              {item.label}
            </NavLink>
          ))}
          <Link className="nav-cta" to="/contact" onClick={closeMenu}>
            Let's talk <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </Container>
    </header>
  )
}

export default Navbar

