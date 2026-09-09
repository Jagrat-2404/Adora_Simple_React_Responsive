import { Link } from 'react-router-dom'
import { Parallax } from 'react-scroll-parallax'
import Container from '../components/Container'
import SectionLabel from '../components/SectionLabel'
import PageHero from '../components/PageHero'
import Button from '../components/Button'
import AnimatedCounter from '../components/AnimatedCounter'
import AboutMissionSection from '../components/AboutMissionSection'
import AboutJourneySection from '../components/AboutJourneySection'
import AboutProcessSection from '../components/AboutProcessSection'
import AboutIndustriesSection from '../components/AboutIndustriesSection'
import TeamSection from '../components/TeamSection'
import { trustPillars } from '../data/siteData'

function About() {
  return (
    <>
      <PageHero
        label="Who we are"
        title="Your digital partner"
        italicTitle="for local growth."
        description="Adora Solution helps startups and small businesses grow online without unnecessary complexity or high costs."
        badge1="✦ Founded in 2025"
        badge2="● 30+ Brands Scaled"
      />

      {/* Story / Who We Are Section with Parallax Depth */}
      <section className="section story-section numa-story-section" aria-labelledby="story-title">
        <Container className="story-grid numa-story-grid">
          <Parallax speed={-4} className="story-left-col">
            <SectionLabel>Who we are</SectionLabel>
            <h2 id="story-title">
              Simple, creative, and focused on <em>real customers.</em>
            </h2>
            <div className="about-stats-strip">
              <div className="about-stat-item">
                <strong>
                  <AnimatedCounter value={2025} startVal={2020} duration={1500} />
                </strong>
                <small>Founded in Surat</small>
              </div>
              <div className="about-stat-item">
                <strong>
                  <AnimatedCounter value={30} suffix="+" duration={1400} />
                </strong>
                <small>Businesses Scaled</small>
              </div>
              <div className="about-stat-item">
                <strong>
                  <AnimatedCounter value={100} suffix="%" duration={1600} />
                </strong>
                <small>Tailored Strategy</small>
              </div>
            </div>
          </Parallax>

          <Parallax speed={6} className="story-right-col">
            <div className="story-card-wrapper">
              <p>
                Adora Solution is a digital marketing agency built with one clear purpose — to help startups and small businesses grow online without the complexity or high costs.
              </p>
              <p>
                We know that every business, whether it’s a local jewellery store, a photography studio, a food brand, or a salon, deserves to stand out on digital platforms. That’s why we create simple, creative, and result-focused strategies that bring real customers, not just likes and followers.
              </p>
              <div className="story-actions">
                <Link className="text-link" to="/contact">
                  Work with us <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </Parallax>
        </Container>
      </section>

      {/* Our Mission & 3 Growth Pillars */}
      <AboutMissionSection />

      {/* Our Journey & Proven Milestones */}
      <AboutJourneySection />

      {/* 4-Step Process Section */}
      <AboutProcessSection />

      {/* Values / Why Businesses Trust Us */}
      <section className="section values-section numa-values-section" aria-labelledby="trust-title">
        <Container>
          <div className="values-header">
            <SectionLabel>Why businesses trust us</SectionLabel>
            <h2 id="trust-title">Principles that drive<br /><em>consistent results.</em></h2>
            <p className="about-section-desc">
              We act as your digital partner, not just a service provider—focusing on the outcomes that directly affect your bottom line.
            </p>
          </div>

          <div className="values-grid about-trust-grid">
            {trustPillars.map((value, index) => {
              const speeds = [-6, 3, -5, 4]
              return (
                <Parallax
                  key={value.number}
                  speed={speeds[index % speeds.length]}
                  className={`numa-val-wrapper trust-col-${index + 1}`}
                >
                  <article className="numa-val-card trust-card">
                    <div className="numa-val-top">
                      <span className="numa-val-num">{value.number}</span>
                      <span className="numa-val-dot">● {value.badge}</span>
                    </div>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                    <div className="numa-val-rule" />
                  </article>
                </Parallax>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Industries We've Worked With */}
      <AboutIndustriesSection />

      {/* Team Showcase */}
      <TeamSection />

      {/* Closing Call to Action */}
      <section className="section green-section about-cta-section" aria-labelledby="about-cta-title">
        <Container>
          <div className="about-cta-card">
            <SectionLabel>Ready to take your business online?</SectionLabel>
            <h2 id="about-cta-title">
              Let&apos;s create something<br />
              <em>amazing together.</em>
            </h2>
            <p className="about-cta-desc">
              Whether you need consistent social media presence, high-converting ad campaigns, or distinctive creative designs, we are here to build your digital presence.
            </p>
            <div className="about-cta-actions">
              <Button to="/contact" variant="peach">
                Let&apos;s Connect <span>↗</span>
              </Button>
              <a
                className="button about-contact-btn about-whatsapp-btn"
                href="https://wa.me/919824900460?text=Hi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>WhatsApp Us ↗</span>
              </a>
              <a
                className="button about-contact-btn about-call-btn"
                href="tel:+919824900460"
              >
                <span>Call Now ↗</span>
              </a>
              <a
                className="button about-contact-btn about-mail-btn"
                href="mailto:info@adorasolution.in"
              >
                <span>Email Us ↗</span>
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

export default About
