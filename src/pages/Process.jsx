import { Link } from 'react-router-dom'
import Container from '../components/Container'
import SectionLabel from '../components/SectionLabel'
import PageHero from '../components/PageHero'
import ProcessSteps from '../components/ProcessSteps'
function Process() {
  return <><PageHero label="Our process" title="A practical plan." italicTitle="Clear progress." description="A straightforward way to build a stronger digital presence for your business." />
    <section className="section green-section"><Container><ProcessSteps /></Container></section>
    <section className="section"><Container className="service-note"><SectionLabel>Ready to begin?</SectionLabel><h2>It starts with<br /><em>a simple conversation.</em></h2><Link className="button" to="/contact">Tell us about your business <span>↗</span></Link></Container></section>
  </>
}
export default Process
