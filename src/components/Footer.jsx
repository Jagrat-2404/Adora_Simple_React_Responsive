import { Link } from 'react-router-dom'
import Container from './Container'

function Footer() {
  return (
    <footer className="footer">
      <Container className="footer-main">
        <div className="footer-brand">
          <Link className="footer-logo" to="/" aria-label="Adora Solution">
            <img src="/logo-light.png" alt="Adora Solution" className="footer-logo-img" />
          </Link>
          <p>Digital marketing support for startups and local businesses.</p>
        </div>
        <div className="footer-links">
          <div>
            <strong>Explore</strong>
            <Link to="/about">About us</Link>
            <Link to="/services">Services</Link>
            <Link to="/process">Our process</Link>
            <Link to="/terms-and-conditions">Terms and conditions</Link>
          </div>
          <div>
            <strong>Let's talk</strong>
            <a href="mailto:info@adorasolution.in">info@adorasolution.in</a>
            <a href="tel:+919824900460">+91 98249 00460</a>
            <a href="tel:+919327780465">+91 93277 80465</a>
          </div>
        </div>
      </Container>
      <Container className="footer-bottom">
        <span>© {new Date().getFullYear()} Adora Solution. All rights reserved.</span>
        <span>Surat, Gujarat, India</span>
      </Container>
    </footer>
  )
}

export default Footer

