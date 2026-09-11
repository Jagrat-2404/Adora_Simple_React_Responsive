import { Parallax } from 'react-scroll-parallax'
import Container from './Container'
import SectionLabel from './SectionLabel'
import { serviceWorkflowSteps } from '../data/siteData'

function ServiceWorkflowSection() {
  return (
    <section className="section service-workflow-section" aria-labelledby="workflow-title">
      <Container>
        <div className="service-workflow-header">
          <SectionLabel>How we execute</SectionLabel>
          <h2 id="workflow-title">
            Our 5-step workflow for<br />
            <em>predictable client growth.</em>
          </h2>
          <p className="service-workflow-lead">
            From initial audience discovery to scaling winning campaigns, here is how we partner with your business.
          </p>
        </div>

        <div className="service-workflow-grid">
          {serviceWorkflowSteps.map((step, index) => {
            const speeds = [-4, 3, -3, 4, -2]
            return (
              <Parallax
                key={step.number}
                speed={speeds[index % speeds.length]}
                className="service-workflow-col"
              >
                <article className="service-workflow-card">
                  <div className="service-workflow-top">
                    <span className="workflow-step-num">{step.number}</span>
                    <span className="workflow-phase-pill">● {step.phase}</span>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <div className="workflow-card-track">
                    <span className="track-bullet" />
                    <span className="track-bar" />
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

export default ServiceWorkflowSection
