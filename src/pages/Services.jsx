import { useState } from 'react'
import { Parallax } from 'react-scroll-parallax'
import Container from '../components/Container'
import SectionLabel from '../components/SectionLabel'
import PageHero from '../components/PageHero'
import ServiceCard from '../components/ServiceCard'
import Button from '../components/Button'
import AnimatedCounter from '../components/AnimatedCounter'
import ServiceDeliverablesSection from '../components/ServiceDeliverablesSection'
import ServiceWorkflowSection from '../components/ServiceWorkflowSection'
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

      {/* Main Interactive Service Overview with Parallax */}
      <section className="section services-section numa-services-main" aria-label="Services overview">
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

      {/* In-Depth Deliverables & Benefits Comparison */}
      <ServiceDeliverablesSection />

      {/* 5-Step Execution Workflow */}
      <ServiceWorkflowSection />

      {/* Services Parallax Highlights & Benchmarks Section */}
      <section className="section numa-services-deliverables" aria-labelledby="benchmarks-title">
        <Container>
          <div className="numa-serv-intro">
            <SectionLabel>Proven benchmarks</SectionLabel>
            <h2 id="benchmarks-title">Strategic clarity in<br /><em>every deliverable.</em></h2>
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

      {/* High-Conversion Closing Call to Action */}
      <section className="section green-section about-cta-section" aria-labelledby="serv-cta-title">
        <Container>
          <div className="about-cta-card">
            <SectionLabel>Not sure which service you need?</SectionLabel>
            <h2 id="serv-cta-title">
              Let&apos;s find the<br />
              <em>right next step.</em>
            </h2>
            <p className="about-cta-desc">
              Book a quick 15-minute consultation. We will audit your current social media and ads, identify low-hanging fruit, and propose a tailored roadmap.
            </p>
            <div className="about-cta-actions">
              <Button to="/contact" variant="peach">
                Schedule a Consultation <span>↗</span>
              </Button>
              <a
                className="button about-contact-btn about-whatsapp-btn"
                href="https://wa.me/919824900460?text=Hi%20Adora%20Solution,%20I%20want%20to%20discuss%20which%20marketing%20service%20is%20right%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>WhatsApp Us ↗</span>
              </a>
              <a
                className="button about-contact-btn about-call-btn"
                href="tel:+919824900460"
              >
                <span>Call +91 98249 00460 ↗</span>
              </a>
            </div>
            <div className="about-cta-footnote">
              <span>Direct lines:</span>
              <a href="tel:+919824900460">+91 98249 00460</a>
              <span className="divider">|</span>
              <a href="tel:+919327780465">+91 93277 80465</a>
              <span className="divider">·</span>
              <a href="mailto:info@adorasolution.in">info@adorasolution.in</a>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Services
