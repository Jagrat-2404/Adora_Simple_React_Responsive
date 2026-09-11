import { Parallax } from 'react-scroll-parallax'
import Container from './Container'
import SectionLabel from './SectionLabel'
import { missionPillars } from '../data/siteData'

function AboutMissionSection() {
  const speeds = [-6, 3, -7]

  return (
    <section className="section about-mission-section" aria-labelledby="mission-title">
      <Container>
        <div className="about-section-header">
          <SectionLabel>Our mission</SectionLabel>
          <h2 id="mission-title">
            Easy, affordable, and effective<br />
            <em>for local businesses.</em>
          </h2>
          <p className="about-section-desc">
            We believe that even the smallest brands can achieve big results with the right combination of consistency, design, and targeted performance.
          </p>
        </div>

        <div className="about-mission-grid">
          {missionPillars.map((pillar, index) => (
            <Parallax
              key={pillar.number}
              speed={speeds[index % speeds.length]}
              className={`about-mission-col col-${index + 1}`}
            >
              <article className="about-pillar-card">
                <div className="about-card-top">
                  <span className="about-card-num">{pillar.number}</span>
                  <span className="about-card-badge">● {pillar.tag}</span>
                </div>
                <small className="about-pillar-subtitle">{pillar.subtitle}</small>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
                <div className="about-card-footer">
                  <span>Growth Lever</span>
                  <div className="about-card-indicator" />
                </div>
              </article>
            </Parallax>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default AboutMissionSection
