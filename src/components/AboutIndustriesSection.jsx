import { Parallax } from 'react-scroll-parallax'
import Container from './Container'
import SectionLabel from './SectionLabel'
import { industriesWorkedWith } from '../data/siteData'
function AboutIndustriesSection() {
  const speeds = [-5, 4, -4, 5]
  return (
    <section className="section about-industries-section" aria-labelledby="industries-title">
      <Container>
        <div className="about-section-header">
          <SectionLabel>Industries we’ve worked with</SectionLabel>
          <h2 id="industries-title">
            Deep experience across<br />
            <em>local business verticals.</em>
          </h2>
          <p className="about-section-desc">
            Every category has unique customer expectations. We craft customized design systems and ad strategies specifically tuned to your market.
          </p>
        </div>
        <div className="about-industries-grid">
          {industriesWorkedWith.map((item, index) => (
            <Parallax
              key={item.id}
              speed={speeds[index]}
              className={`about-industry-col industry-col-${index + 1}`}
            >
              <article className="industry-card">
                <div className="industry-card-top">
                  <span className="industry-tag">{item.tag}</span>
                  <span className="industry-index">0{index + 1}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="industry-highlight">
                  <span className="industry-check">✔</span>
                  <small>{item.highlight}</small>
                </div>
              </article>
            </Parallax>
          ))}
        </div>
      </Container>
    </section>
  )
}
export default AboutIndustriesSection