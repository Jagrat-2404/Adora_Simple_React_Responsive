import { useState } from 'react'
import Container from '../components/Container'
import SectionLabel from '../components/SectionLabel'
import PageHero from '../components/PageHero'
import ServiceCard from '../components/ServiceCard'
import Button from '../components/Button'
import { services } from '../data/siteData'
function Services() {
  const [active, setActive] = useState(0)
  const service = services[active]
  return <><PageHero label="Our services" title="Digital marketing," italicTitle="built for growth." description="Simple, creative, and result-focused support for startups and local businesses." />
    <section className="section services-section"><Container><div className="service-tabs" role="tablist">{services.map((item, index) => <button key={item.name} className={active === index ? 'active' : ''} onClick={() => setActive(index)} role="tab" aria-selected={active === index}><small>{item.number}</small>{item.name}</button>)}</div><ServiceCard service={service} /></Container></section>
    <section className="section"><Container className="service-note"><SectionLabel>Not sure where to begin?</SectionLabel><h2>Let&apos;s find the<br /><em>right next step.</em></h2><Button to="/contact">Start a conversation</Button></Container></section>
  </>
}
export default Services
