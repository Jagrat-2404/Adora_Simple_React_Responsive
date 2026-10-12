import { Parallax } from 'react-scroll-parallax'
import Container from './Container'
import SectionLabel from './SectionLabel'
import { industriesWorkedWith } from '../data/siteData'

function AboutIndustriesSection() {
  const speeds = [-4, 3, -3, 4]

  return (
    <section className="section about-industries-showcase-section" aria-labelledby="industries-title">
      <Container>
        <div className="about-industries-showcase-header">
          <div className="industries-header-left">
            <SectionLabel>Industries we’ve worked with</SectionLabel>
            <h2 id="industries-title">
              Proven results across<br />
              <em>local business verticals.</em>
            </h2>
          </div>
          <p className="industries-header-desc">
            Since our launch in 2025, we’ve worked with 30+ businesses across industries like Jewellery, Photography, Food & Beverages, and Salons — helping them increase visibility, build trust, and drive sales.
          </p>
        </div>

        <div className="about-industries-showcase-grid">
          {industriesWorkedWith.map((item, index) => (
            <Parallax
              key={item.id}
              speed={speeds[index]}
              className={`industry-showcase-col industry-card-${item.id}`}
            >
              <article className="industry-showcase-card" style={{ '--industry-accent': item.accentColor }}>
                <div className="industry-card-accent-bar" style={{ backgroundColor: item.accentColor }} />
                
                <div className="industry-card-top-row">
                  <span className="industry-sector-pill" style={{ borderColor: `${item.accentColor}40`, color: item.badgeColor }}>
                    {item.tag}
                  </span>
                  <span className="industry-order-num">0{index + 1}</span>
                </div>

                <div className="industry-card-main">
                  <h3>{item.title}</h3>
                  <p className="industry-desc">{item.description}</p>
                </div>

                {/* Real Verified Result from adorasolution.in */}
                <div className="industry-metric-highlight">
                  <div className="metric-tag-label">
                    <span className="metric-icon">📈</span> Verified Result
                  </div>
                  <strong className="metric-val-text">{item.resultMetric}</strong>
                </div>

                {/* Real client quote from adorasolution.in */}
                <blockquote className="industry-quote-box">
                  <p>&ldquo;{item.clientQuote}&rdquo;</p>
                </blockquote>

                {/* Deliverables tags */}
                <div className="industry-deliverables-list">
                  {item.deliverables.map((deliv) => (
                    <span key={deliv} className="industry-deliv-tag">
                      {deliv}
                    </span>
                  ))}
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
