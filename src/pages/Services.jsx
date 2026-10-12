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

      {/* Main Interactive Service Overview */}
      <section className="section services-section numa-services-main" aria-label="Services overview">
        <Container>
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

          <ServiceCard service={service} />
        </Container>
      </section>

      {/* In-Depth Deliverables & Benefits Comparison */}
      <ServiceDeliverablesSection />

      {/* 5-Step Execution Workflow */}
      <ServiceWorkflowSection />

      {/* Services Proven Benchmarks & Analytics Scorecard Hub */}
      <section className="section numa-services-deliverables" aria-labelledby="benchmarks-title">
        <Container>
          <div className="benchmarks-bento-layout">
            {/* Left Column: Executive Summary & Delivery Guarantees */}
            <div className="benchmarks-summary-col">
              <div className="benchmarks-badge-pill">
                <span className="badge-pulse-dot" />
                <span>Verified Client Metrics</span>
              </div>
              <SectionLabel>Proven benchmarks</SectionLabel>
              <h2 id="benchmarks-title">
                Measurable momentum in<br />
                <em>every campaign.</em>
              </h2>
              <p className="benchmarks-summary-desc">
                We do not report vanity impressions or hide behind complicated marketing jargon. Every reel, ad creative, and web platform is engineered to deliver concrete client momentum.
              </p>

              {/* Delivery Guarantees Checklist */}
              <div className="benchmarks-commitments-card">
                <h4>Adora Delivery Commitments</h4>
                <div className="commitment-items-list">
                  <div className="commitment-item">
                    <span className="commitment-icon">✓</span>
                    <div>
                      <strong>100% Dedicated Ad Accounts</strong>
                      <p>You own all your ad pixels, creative assets, and lead lists forever.</p>
                    </div>
                  </div>
                  <div className="commitment-item">
                    <span className="commitment-icon">✓</span>
                    <div>
                      <strong>Direct WhatsApp Routing</strong>
                      <p>Campaign leads land directly on your team&apos;s WhatsApp within seconds.</p>
                    </div>
                  </div>
                  <div className="commitment-item">
                    <span className="commitment-icon">✓</span>
                    <div>
                      <strong>Zero Vanishing Metrics</strong>
                      <p>Strict focus on qualified customer inquiries, bookings, and walk-ins.</p>
                    </div>
                  </div>
                  <div className="commitment-item">
                    <span className="commitment-icon">✓</span>
                    <div>
                      <strong>&lt; 72h Rapid Campaign SLA</strong>
                      <p>Fast creative iterations and prompt weekly transparent performance reviews.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 2x2 Bento Performance Dossier Tiles */}
            <div className="benchmarks-tiles-col">
              {/* Tile 1: Audience Strategy */}
              <article className="benchmark-dossier-card">
                <div className="dossier-card-header">
                  <div className="dossier-tag">
                    <span className="dossier-tag-dot" />
                    <span>Audience Precision</span>
                  </div>
                  <span className="dossier-metric-type">Pincode Targeting</span>
                </div>
                <div className="dossier-counter-row">
                  <strong className="dossier-stat-num">
                    <AnimatedCounter value="99.4%" duration={1400} />
                  </strong>
                  <span className="dossier-stat-label">Audience Precision Match</span>
                </div>
                <h3>Targeted Audience Blueprints</h3>
                <p>Pinpoint demographic and buyer intent mapping across specific cities before ad spend begins.</p>
                <div className="dossier-gauge-track">
                  <div className="dossier-gauge-fill" style={{ width: '99%' }} />
                </div>
                <div className="dossier-comparison-bar">
                  <span className="comparison-pill">Industry Avg: 68%</span>
                  <span className="comparison-arrow">→</span>
                  <span className="comparison-adora">Adora: 99.4%</span>
                </div>
              </article>

              {/* Tile 2: Creative & Reels */}
              <article className="benchmark-dossier-card">
                <div className="dossier-card-header">
                  <div className="dossier-tag">
                    <span className="dossier-tag-dot" />
                    <span>Engagement Velocity</span>
                  </div>
                  <span className="dossier-metric-type">Organic + Paid</span>
                </div>
                <div className="dossier-counter-row">
                  <strong className="dossier-stat-num">
                    <AnimatedCounter value="3.4x" duration={1400} />
                  </strong>
                  <span className="dossier-stat-label">Average CTR Velocity</span>
                </div>
                <h3>Scroll-Stopping Creative Assets</h3>
                <p>Short-form video reels, festival decks, and persuasive copy crafted for maximum hook retention.</p>
                <div className="dossier-gauge-track">
                  <div className="dossier-gauge-fill" style={{ width: '85%' }} />
                </div>
                <div className="dossier-comparison-bar">
                  <span className="comparison-pill">Industry Avg: 1.1x</span>
                  <span className="comparison-arrow">→</span>
                  <span className="comparison-adora">Adora: 3.4x CTR</span>
                </div>
              </article>

              {/* Tile 3: Meta Ads ROAS */}
              <article className="benchmark-dossier-card">
                <div className="dossier-card-header">
                  <div className="dossier-tag">
                    <span className="dossier-tag-dot" />
                    <span>Revenue Momentum</span>
                  </div>
                  <span className="dossier-metric-type">Lead Generation</span>
                </div>
                <div className="dossier-counter-row">
                  <strong className="dossier-stat-num">
                    <AnimatedCounter value="3.8x" duration={1400} suffix="+" />
                  </strong>
                  <span className="dossier-stat-label">Client Return on Ad Spend</span>
                </div>
                <h3>Meta Ads Lead Funnels</h3>
                <p>Automated conversion funnels continuously fine-tuned to drive the lowest cost per inquiry.</p>
                <div className="dossier-gauge-track">
                  <div className="dossier-gauge-fill" style={{ width: '92%' }} />
                </div>
                <div className="dossier-comparison-bar">
                  <span className="comparison-pill">Target ROAS: &gt; 3.0x</span>
                  <span className="comparison-arrow">→</span>
                  <span className="comparison-adora">Adora Avg: 3.8x+</span>
                </div>
              </article>

              {/* Tile 4: Modern Web Platforms */}
              <article className="benchmark-dossier-card">
                <div className="dossier-card-header">
                  <div className="dossier-tag">
                    <span className="dossier-tag-dot" />
                    <span>Modern Web Speed</span>
                  </div>
                  <span className="dossier-metric-type">Vitals &amp; SEO</span>
                </div>
                <div className="dossier-counter-row">
                  <strong className="dossier-stat-num">
                    <AnimatedCounter value="98.5%" duration={1400} />
                  </strong>
                  <span className="dossier-stat-label">Google Core Web Vitals</span>
                </div>
                <h3>High-Speed Web Platforms</h3>
                <p>Mobile-first websites built with ultra-clean code, WhatsApp routing, and full search engine readiness.</p>
                <div className="dossier-gauge-track">
                  <div className="dossier-gauge-fill" style={{ width: '98%' }} />
                </div>
                <div className="dossier-comparison-bar">
                  <span className="comparison-pill">Load Time: &lt; 1.2s</span>
                  <span className="comparison-arrow">→</span>
                  <span className="comparison-adora">Score: 98.5%</span>
                </div>
              </article>
            </div>
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
