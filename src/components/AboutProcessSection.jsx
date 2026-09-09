import { Parallax } from 'react-scroll-parallax'
import Container from './Container'
import SectionLabel from './SectionLabel'
import { aboutProcessSteps } from '../data/siteData'
function AboutProcessSection() {
  return (
    <section className="section about-process-section" aria-labelledby="process-title">
      <Container>
        <div className="about-section-header">
          <SectionLabel>Our process</SectionLabel>
          <h2 id="process-title">
            Structured for speed,<br />
            <em>executed with consistency.</em>
          </h2>
          <p className="about-section-desc">
            A transparent 4-stage framework that eliminates ambiguity and turns marketing spend into predictable customer attention.
          </p>
        </div>
        <div className="about-process-grid">
          {aboutProcessSteps.map((step, index) => {
            const speeds = [-4, 2, -3, 3]
            return (
              <Parallax
                key={step.number}
                speed={speeds[index]}
                className="about-process-col"
              >
                <article className="about-process-card">
                  <div className="about-process-top">
                    <span className="about-process-number">{step.number}</span>
                    <span className="about-process-phase">{step.stepPhase}</span>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <div className="about-process-bottom">
                    <span className="about-process-dot"></span>
                    <div className="about-process-line"></div>
                  </div>
                </article>
              </Parallax>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
export default AboutProcessSection