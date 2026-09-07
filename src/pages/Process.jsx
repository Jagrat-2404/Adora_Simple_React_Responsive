import { Link } from 'react-router-dom'
import { Parallax } from 'react-scroll-parallax'
import Container from '../components/Container'
import SectionLabel from '../components/SectionLabel'
import PageHero from '../components/PageHero'
import ProcessSteps from '../components/ProcessSteps'

function Process() {
  return (
    <>
      <PageHero
        label="Our process"
        title="A practical plan."
        italicTitle="Clear progress."
        description="A straightforward, transparent way to build a stronger digital presence for your business."
        badge1="✦ 3-Phase Execution"
        badge2="● 72h Rapid Kickoff"
      />

      {/* Main Process Section with Asymmetric Parallax Steps */}
      <section className="section green-section numa-process-section">
        <Container>
          <div className="process-header-wrap">
            <SectionLabel>Step-by-step roadmap</SectionLabel>
            <h2>How we turn strategy into<br /><em>predictable customer flow.</em></h2>
          </div>
          <ProcessSteps />
        </Container>
      </section>

      {/* Process CTA with Parallax */}
      <section className="section">
        <Container className="service-note numa-process-cta">
          <Parallax speed={-4}>
            <SectionLabel>Ready to begin?</SectionLabel>
            <h2>
              It starts with<br />
              <em>a simple conversation.</em>
            </h2>
            <Link className="button" to="/contact">
              Tell us about your business <span>↗</span>
            </Link>
          </Parallax>
        </Container>
      </section>
    </>
  )
}

export default Process
