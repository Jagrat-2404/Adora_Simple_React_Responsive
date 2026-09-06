import { Link } from 'react-router-dom'
import Container from './Container'
function Footer() {
  return <footer className="footer"><Container className="footer-main"><div><Link className="logo" to="/">Adora<span>Solution</span></Link><p>A practical digital growth partner for startups and local businesses.</p></div><div className="footer-links"><div><strong>Explore</strong><Link to="/services">Services</Link><Link to="/about">Why Adora</Link><Link to="/process">How we work</Link></div><div><strong>Contact</strong><a href="mailto:info@adorasolution.in">Email us</a><a href="tel:+919824900460">Call +91 98249 00460</a><Link to="/contact">Send an enquiry</Link></div></div></Container><Container className="footer-bottom"><span>© 2025 Adora Solution. Built for the next good step.</span><span>● Replies from a real person, not a bot.</span></Container></footer>
}
export default Footer
