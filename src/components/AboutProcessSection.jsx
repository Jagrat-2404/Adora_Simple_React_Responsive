import { Parallax } from 'react-scroll-parallax'
import Container from './Container'
import SectionLabel from './SectionLabel'
import { aboutProcessSteps } from '../data/siteData'

function AboutProcessSection() {
  return (
    <section className="section about-process-roadmap-section" aria-labelledby="process-roadmap-title">
      <Container>
        <div className="about-process-roadmap-header">
          <div className="process-header-copy">
            <SectionLabel>Our process</SectionLabel>
            <h2 id="process-roadmap-title">
              How we turn strategy into<br />
              <em>predictable customer flow.</em>
            </h2>
            <p className="process-header-desc">
              At Adora Solution, our process is simple, transparent, and focused on one thing: helping you get more customers without confusing jargon.
            </p>
          </div>
          <div className="process-header-badge">
            <span className="process-pill-highlight">✦ 4 Simple Steps to Growth</span>
            <small>Surat & Pan-India Clients</small>
          </div>
        </div>

        {/* Connecting Progress Track */}
        <div className="process-track-wrapper">
          <div className="process-track-line" aria-hidden="true">
            <span className="process-track-pulse" />
          </div>

          <div className="process-roadmap-steps">
            {aboutProcessSteps.map((step, index) => {
              const speeds = [-3, 2, -2, 3]
              return (
                <Parallax
                  key={step.number}
                  speed={speeds[index]}
                  className={`process-step-node step-node-${index + 1}`}
                >
                  <article className="process-step-card">
                    <div className="step-card-tracker">
                      <div className="step-marker">
                        <span className="step-number-pill">{step.number}</span>
                      </div>
                      <span className="step-phase-badge">{step.stepPhase}</span>
                    </div>

                    <div className="step-card-body">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>

                    <div className="step-card-footer">
                      <span className="step-outcome-tag">
                        <span className="step-outcome-bullet" />
                        {step.outcome}
                      </span>
                      {index < aboutProcessSteps.length - 1 && (
                        <span className="step-arrow-connector" aria-hidden="true">→</span>
                      )}
                    </div>
                  </article>
                </Parallax>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutProcessSection
