import { Link } from 'react-router-dom'
import Container from '../components/Container'
import SectionLabel from '../components/SectionLabel'
import PageHero from '../components/PageHero'
import { values } from '../data/siteData'
function About() { return <><PageHero label="Why Adora" title="Good work needs" italicTitle="good company." description="We’re the thoughtful, practical partner behind the next version of your business."/><section className="section"><Container className="story-grid"><div><SectionLabel>The short version</SectionLabel><h2>Strategy, design and delivery — all pulling in the same direction.</h2></div><div><p>Adora Solution is a focused digital studio for startups and local businesses. We work closely, ask useful questions, and make sure every piece of work has a job to do.</p><p>There is no inflated process or hard sell. Just clear thinking, considered execution and a reliable team that cares about the outcome.</p><Link className="text-link" to="/contact">Work with us <span>↗</span></Link></div></Container></section><section className="section green-section"><Container className="values-grid"><SectionLabel>What matters to us</SectionLabel>{values.map(value => <article key={value.number}><span>{value.number}</span><h3>{value.title}</h3><p>{value.description}</p></article>)}</Container></section></> }
export default About
