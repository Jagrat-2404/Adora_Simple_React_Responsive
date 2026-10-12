import { Link } from 'react-router-dom'
import Container from '../components/Container'
import SectionLabel from '../components/SectionLabel'
import Button from '../components/Button'
import HeroDashboard from '../components/HeroDashboard'
import GrowthParallax from '../components/GrowthParallax'
import ParallaxMetrics from '../components/ParallaxMetrics'
import ParallaxAdvantages from '../components/ParallaxAdvantages'
import InteractiveSystemSection from '../components/InteractiveSystemSection'
import AppShowcaseParallax from '../components/AppShowcaseParallax'
import AnimatedCounter from '../components/AnimatedCounter'

function Home() {
  return (
    <>
      {/* Numa-style Hero Section with 3D Parallax Dashboard */}
      <section className="hero">
        <Container className="hero-grid">
          <div className="hero-copy">
            <SectionLabel>Digital marketing for startups & local businesses</SectionLabel>
            <h1>
              Grow your startup<br />or local business<br /><em>online.</em>
            </h1>
            <p className="hero-intro">
              At Adora Solution, we help small businesses build a strong digital presence with social media marketing, creative designing, and Meta Ads. Our strategies are simple, effective, and focused on one thing — helping you get more customers.
            </p>
            <div className="actions">
              <Button to="/contact">Let&apos;s Connect</Button>
              <Link className="text-link" to="/services">
                Explore our services <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="proof">
              <div className="avatars">
                <b>JB</b>
                <b>PS</b>
                <b>FS</b>
                <b>+30</b>
              </div>
              <p>
                Partnered with <AnimatedCounter value={30} suffix="+" duration={1400} /> businesses since 2025 to increase visibility, build trust, and drive sales.
              </p>
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



      {/* Closing Call to Action */}
      <section className="section green-section">
        <Container>
          <SectionLabel>Ready to take your business online?</SectionLabel>
          <h2>
            Let&apos;s create something<br />
            <em>amazing together.</em>
          </h2>
          <p>Whether you need consistent social media posts, creative designs, or smart Meta Ads, we handle everything so you can focus on running your business.</p>
          <Button to="/contact" variant="peach">
            Let&apos;s Connect
          </Button>
        </Container>
      </section>
    </>
  )
}

export default Home
