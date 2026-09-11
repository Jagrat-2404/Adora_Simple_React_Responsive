import { Parallax } from 'react-scroll-parallax'
import Container from './Container'
import SectionLabel from './SectionLabel'
import AnimatedCounter from './AnimatedCounter'
import { journeyMilestones } from '../data/siteData'

function AboutJourneySection() {
  return (
    <section className="section about-journey-section" aria-labelledby="journey-title">
      <Container>
        <div className="about-journey-layout">
          <Parallax speed={-3} className="about-journey-lead">
            <SectionLabel>Our journey</SectionLabel>
            <h2 id="journey-title">
              From Surat roots to<br />
              <em>multichannel growth.</em>
            </h2>
            <p>
              Founded in 2025, Adora Solution started with a passion for helping businesses in Surat build a strong digital presence. Within months, we expanded across multiple industries—helping founders trade guesswork for measurable reach.
            </p>
            <div className="about-journey-quote">
              <p>
                &ldquo;We partner with local businesses not just to post graphics, but to build recognizable brands that consistently drive enquiries.&rdquo;
              </p>
            </div>
          </Parallax>

          <div className="about-journey-cards-col">
            {journeyMilestones.map((item, index) => (
              <Parallax
                key={item.number}
                speed={index % 2 === 0 ? 3 : -2}
                className="about-journey-item"
              >
                <article className="journey-card">
                  <div className="journey-card-metric">
                    <span>{item.metric}</span>
                    <small>{item.platform}</small>
                  </div>
                  <div className="journey-card-content">
                    <div className="journey-card-header">
                      <span className="journey-num">0{index + 1}</span>
                      <h3>{item.title}</h3>
                    </div>
                    <p>{item.description}</p>
                  </div>
                </article>
              </Parallax>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutJourneySection
