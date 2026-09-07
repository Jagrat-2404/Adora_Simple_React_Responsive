import { Link } from 'react-router-dom'
import Container from '../components/Container'
import SectionLabel from '../components/SectionLabel'
import Button from '../components/Button'
import ImpactStats from '../components/ImpactStats'
import HeroDashboard from '../components/HeroDashboard'
import GrowthParallax from '../components/GrowthParallax'
import ParallaxMetrics from '../components/ParallaxMetrics'
import ParallaxAdvantages from '../components/ParallaxAdvantages'
import InteractiveSystemSection from '../components/InteractiveSystemSection'
import AppShowcaseParallax from '../components/AppShowcaseParallax'

function Home() {
  return (
    <>
      {/* Numa-style Hero Section with 3D Parallax Dashboard */}
      <section className="hero">
        <Container className="hero-grid">
          <div className="hero-copy">
            <SectionLabel>Digital marketing for local growth</SectionLabel>
            <h1>
              Grow your startup<br />or local business<br /><em>online.</em>
            </h1>
            <p className="hero-intro">
              Adora Solution helps ambitious businesses build a magnetic digital presence with high-converting social media marketing, creative design, and Meta Ads.
            </p>
            <div className="actions">
              <Button to="/contact">Let&apos;s talk about your growth</Button>
              <Link className="text-link" to="/services">
                Explore our services <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="proof">
              <div className="avatars">
                <b>FS</b>
                <b>JB</b>
                <b>UB</b>
                <b>+30</b>
              </div>
              <p>Helping 30+ local brands accelerate revenue since 2025.</p>
            </div>
          </div>
          <HeroDashboard />
        </Container>
      </section>

      {/* Numa-style Staggered Metrics Showcase */}
      <ParallaxMetrics />

      {/* Story Walkthrough Parallax */}
      <GrowthParallax />

      {/* Numa-style 3-Column Asymmetric Parallax Advantages */}
      <ParallaxAdvantages />

      {/* Numa-style Scroll-Scrubbed Growth Engine & Telemetry */}
      <InteractiveSystemSection />

      {/* Numa-style Real-time App Showcase with Floating Telemetry */}
      <AppShowcaseParallax />

      {/* About Preview Section */}
      <section className="section about-preview">
        <Container className="about-grid">
          <SectionLabel>A little about us</SectionLabel>
          <div>
            <h2>
              Digital marketing made<br />
              <em>simple and effective.</em>
            </h2>
            <p className="body-copy">
              We understand the challenges of growing in a competitive market. From eye-catching social content to smart Meta Ads, we handle the entire digital growth engine so you can focus on running your business.
            </p>
            <Link className="text-link" to="/about">
              Know more about us <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <aside className="manifesto">
            <span>Our approach</span>
            <strong>
              Create with purpose.<br />
              Stay consistent.<br />
              Focus on results.
            </strong>
          </aside>
        </Container>
      </section>

      {/* Impact Stats */}
      <ImpactStats />

      {/* Closing Call to Action */}
      <section className="section green-section">
        <Container>
          <SectionLabel>Ready to grow online?</SectionLabel>
          <h2>
            More visibility.<br />
            <em>More meaningful growth.</em>
          </h2>
          <p>Let&apos;s create a practical, high-converting digital marketing plan for your business.</p>
          <Button to="/process" variant="peach">
            How we work
          </Button>
        </Container>
      </section>
    </>
  )
}

export default Home
