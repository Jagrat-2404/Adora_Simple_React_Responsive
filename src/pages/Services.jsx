import { useState } from 'react'
import Container from '../components/Container'
import SectionLabel from '../components/SectionLabel'
import PageHero from '../components/PageHero'
import ServiceCard from '../components/ServiceCard'
import Button from '../components/Button'
import { services } from '../data/siteData'
function Services() { const [active, setActive] = useState(0); const service = services[active]; return <><PageHero label="What we do" title="Useful things," italicTitle="made with care." description="Pick the place where you need momentum. We’ll build the right next step together."/><section className="section services-section"><Container><div className="service-tabs" role="tablist">{services.map((item,index)=><button key={item.name} className={active===index?'active':''} onClick={()=>setActive(index)} role="tab" aria-selected={active===index}><small>{item.number}</small>{item.name}</button>)}</div><ServiceCard service={service}/></Container></section><section className="section"><Container className="service-note"><SectionLabel>Not sure where to begin?</SectionLabel><h2>We’ll help you<br /><em>make it clear.</em></h2><Button to="/contact">Start a conversation</Button></Container></section></> }
export default Services
