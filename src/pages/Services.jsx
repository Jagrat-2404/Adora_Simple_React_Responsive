import { useState } from 'react'
import { Parallax } from 'react-scroll-parallax'
import Container from '../components/Container'
import SectionLabel from '../components/SectionLabel'
import PageHero from '../components/PageHero'
import ServiceCard from '../components/ServiceCard'
import Button from '../components/Button'
import AnimatedCounter from '../components/AnimatedCounter'
import { services } from '../data/siteData'

function Services() {
  const [active, setActive] = useState(0)
  const service = services[active]

  return (
    <>
      <PageHero
        label="Our services"
        title="Digital marketing,"
        italicTitle="built for growth."
        description="Simple, creative, and result-focused support for startups and local businesses."
        badge1="✦ Full-Funnel Solutions"
        badge2="● High CTR Campaigns"
      />

      {/* Main Interactive Service Section with Parallax */}
      <section className="section services-section numa-services-main">
        <Container>
          <Parallax speed={-3} className="service-tabs-wrapper">
            <div className="service-tabs" role="tablist">
              {services.map((item, index) => (
                <button
                  key={item.name}
                  className={active === index ? 'active' : ''}
                  onClick={() => setActive(index)}
                  role="tab"
                  aria-selected={active === index}
                >
                  <small>{item.number}</small>
                  {item.name}
                </button>
              ))}
            </div>
          </Parallax>

          <Parallax speed={4} className="service-card-parallax-wrap">
            <ServiceCard service={service} />
          </Parallax>
        </Container>
      </section>

      {/* Services Parallax Highlights Section */}
      <section className="section numa-services-deliverables">
        <Container>
          <div className="numa-serv-intro">
            <SectionLabel>How we deliver</SectionLabel>
            <h2>Strategic clarity in<br /><em>every deliverable.</em></h2>
          </div>

          <div className="numa-serv-grid">
            <Parallax speed={-8} className="numa-serv-col">
              <div className="numa-serv-deliverable-card">
                <span className="numa-serv-badge">● Strategy First</span>
                <h3>Targeted Audience Blueprints</h3>
                <p>We analyze customer data, competitor angles, and local buying behaviors before launching a single ad.</p>
                <div className="numa-serv-stat">
                  <strong>
                    <AnimatedCounter value="99.4%" duration={1400} />
                  </strong>
                  <span>Audience Precision</span>
                </div>
              </div>
            </Parallax>

            <Parallax speed={6} className="numa-serv-col">
              <div className="numa-serv-deliverable-card">
                <span className="numa-serv-badge">● High Conversion</span>
                <h3>Custom Creative Assets</h3>
                <p>Engaging video reels, carousel decks, and tailored copy created specifically for high scroll-stop rates.</p>
                <div className="numa-serv-stat">
                  <strong>
                    <AnimatedCounter value="3.4x" duration={1400} />
                  </strong>
                  <span>Average CTR Benchmark</span>
                </div>
              </div>
            </Parallax>

            <Parallax speed={-11} className="numa-serv-col">
              <div className="numa-serv-deliverable-card">
                <span className="numa-serv-badge">● Performance</span>
                <h3>Meta Ads Lead Funnels</h3>
                <p>Automated lead generation pipelines continuously monitored and fine-tuned for lowest cost-per-lead.</p>
                <div className="numa-serv-stat">
                  <strong>
                    <AnimatedCounter value="3.8x" duration={1400} suffix="+" />
                  </strong>
                  <span>Client ROAS Average</span>
                </div>
              </div>
            </Parallax>
          </div>
        </Container>
      </section>

      {/* Service Call to Action */}
      <section className="section">
        <Container className="service-note numa-service-cta">
          <Parallax speed={-3}>
            <SectionLabel>Not sure where to begin?</SectionLabel>
            <h2>
              Let&apos;s find the<br />
              <em>right next step.</em>
            </h2>
            <Button to="/contact">Start a conversation</Button>
          </Parallax>
        </Container>
      </section>
    </>
  )
}

export default Services
