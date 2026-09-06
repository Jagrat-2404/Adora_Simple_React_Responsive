import { Link } from 'react-router-dom'
import Container from '../components/Container'
import SectionLabel from '../components/SectionLabel'
import PageHero from '../components/PageHero'
import ProcessSteps from '../components/ProcessSteps'
function Process() { return <><PageHero label="How we work" title="Less mystery." italicTitle="More movement." description="A straightforward way of getting good work into the world."/><section className="section green-section"><Container><ProcessSteps /></Container></section><section className="section"><Container className="service-note"><SectionLabel>Ready to begin?</SectionLabel><h2>It starts with<br /><em>a hello.</em></h2><Link className="button" to="/contact">Tell us what’s next <span>↗</span></Link></Container></section></> }
export default Process
