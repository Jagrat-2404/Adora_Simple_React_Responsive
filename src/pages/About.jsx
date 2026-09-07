import { Link } from 'react-router-dom'
import Container from '../components/Container'
import SectionLabel from '../components/SectionLabel'
import PageHero from '../components/PageHero'
import { values } from '../data/siteData'

function About() {
  return <><PageHero label="Who we are" title="Your digital partner" italicTitle="for local growth." description="Adora Solution helps startups and small businesses grow online without unnecessary complexity or high costs." />
    <section className="section story-section"><Container className="story-grid"><div><SectionLabel>Our story</SectionLabel><h2>Simple, creative, and focused on real customers.</h2></div><div>
      <p>Every business deserves to stand out online—whether it is a local jewellery store, photography studio, food brand, or salon. We create practical strategies that help you build visibility, trust, and meaningful customer interest.</p>
      <p>Founded in Surat in 2025, we bring together consistent social media, creative graphic design, and performance-driven Meta Ads to help local brands achieve more online.</p>
      <Link className="text-link" to="/contact">Work with us <span>↗</span></Link>
    </div></Container></section>
    <section className="section values-section"><Container className="values-grid"><SectionLabel>Why businesses trust us</SectionLabel>{values.map(value => <article key={value.number}><span>{value.number}</span><h3>{value.title}</h3><p>{value.description}</p></article>)}</Container></section>
  </>
}
export default About
