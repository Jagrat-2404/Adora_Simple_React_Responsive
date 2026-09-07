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
              <p>
                Helping <AnimatedCounter value={30} suffix="+" duration={1400} /> local brands accelerate revenue since 2025.
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
