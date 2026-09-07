import { Link } from 'react-router-dom'
import { Parallax } from 'react-scroll-parallax'
import Container from '../components/Container'
import SectionLabel from '../components/SectionLabel'
import PageHero from '../components/PageHero'
import AnimatedCounter from '../components/AnimatedCounter'
import { values } from '../data/siteData'

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

      {/* Story Section with Parallax Depth */}
      <section className="section story-section numa-story-section">
        <Container className="story-grid numa-story-grid">
          <Parallax speed={-4} className="story-left-col">
            <SectionLabel>Our story</SectionLabel>
            <h2>
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
                Every business deserves to stand out online—whether it is a local jewellery store, photography studio, food brand, or salon. We create practical strategies that help you build visibility, trust, and meaningful customer interest.
              </p>
              <p>
                Founded in Surat in 2025, we bring together consistent social media, creative graphic design, and performance-driven Meta Ads to help local brands achieve more online.
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

      {/* Values Section with Asymmetric Parallax Cards */}
      <section className="section values-section numa-values-section">
        <Container>
          <div className="values-header">
            <SectionLabel>Why businesses trust us</SectionLabel>
            <h2>Principles that drive<br /><em>consistent results.</em></h2>
          </div>

          <div className="values-grid numa-values-grid">
            {values.map((value, index) => {
              const speeds = [-8, 2, -10]
              return (
                <Parallax
                  key={value.number}
                  speed={speeds[index % speeds.length]}
                  className={`numa-val-wrapper val-col-${index + 1}`}
                >
                  <article className="numa-val-card">
                    <div className="numa-val-top">
                      <span className="numa-val-num">{value.number}</span>
                      <span className="numa-val-dot">● Core Value</span>
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
    </>
  )
}

export default About
