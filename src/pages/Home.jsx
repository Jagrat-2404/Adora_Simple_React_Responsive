import { Link } from "react-router-dom";
import Container from "../components/Container";
import SectionLabel from "../components/SectionLabel";
import Button from "../components/Button";
import ImpactStats from "../components/ImpactStats";
import HeroDashboard from "../components/HeroDashboard";

function Home() {
  return <><section className="hero"><Container className="hero-grid"><div className="hero-copy"><SectionLabel>Digital growth partner · Ahmedabad & beyond</SectionLabel><h1>Make your next<br />good idea<br />easier to find.</h1><p className="hero-intro">We help startups and local businesses show up, look sharp, and bring in more of the right customers online.</p><div className="actions"><Button to="/contact">Tell us what you’re building</Button><Link className="text-link" to="/services">See the packages <span aria-hidden="true">→</span></Link></div><div className="proof"><div className="avatars"><b>FS</b><b>JB</b><b>UB</b><b>+30</b></div><p>30+ businesses backed since we launched in 2025.</p></div></div><HeroDashboard /></Container></section><section className="section about-preview"><Container className="about-grid"><SectionLabel>A little about us</SectionLabel><div><h2>Big-agency thinking.<br /><em>Human-sized</em> energy.</h2><p className="body-copy">Adora Solution is a small, focused digital studio for people building something worth paying attention to. We bring strategy, design and execution together — without the theatre.</p><Link className="text-link" to="/about">Meet Adora <span aria-hidden="true">↗</span></Link></div><aside className="manifesto"><span>Our approach</span><strong>Listen closely.<br />Make it clear.<br />Keep it moving.</strong></aside></Container></section><ImpactStats /><section className="section green-section"><Container><SectionLabel>A good next step</SectionLabel><h2>Less mystery.<br /><em>More movement.</em></h2><p>Start with a real conversation. We’ll help you find the clearest way forward.</p><Button to="/process" variant="peach">How we work</Button></Container></section></>
}
export default Home
