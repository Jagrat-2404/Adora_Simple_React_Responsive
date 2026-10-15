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
import AboutTrustSection from '../components/AboutTrustSection'
import AboutIndustriesSection from '../components/AboutIndustriesSection'
import TeamSection from '../components/TeamSection'
import Icon from '../components/Icon'

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

      {/* Why Businesses Trust Us (Dark Emerald Luxury Bento) */}
      <AboutTrustSection />

      {/* Industries We've Worked With */}
      <AboutIndustriesSection />

      {/* Team Showcase
      <TeamSection /> */}

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
                <Icon name="whatsapp" size={18} />
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
              <span>Direct line:</span>
              <a href="tel:+919824900460">+91 98249 00460</a>
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
