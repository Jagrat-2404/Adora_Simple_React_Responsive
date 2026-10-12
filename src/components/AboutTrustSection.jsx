import { Parallax } from 'react-scroll-parallax'
import Container from './Container'
import SectionLabel from './SectionLabel'
import { trustPillars } from '../data/siteData'

function AboutTrustSection() {
  return (
    <section className="section about-trust-bento-section" aria-labelledby="trust-bento-title">
      <div className="trust-bento-bg-glow" aria-hidden="true" />
      <Container>
        <div className="trust-bento-layout">
          {/* Left Anchor Column */}
          <Parallax speed={-4} className="trust-anchor-col">
            <div className="trust-anchor-card">
              <SectionLabel>Why businesses trust us</SectionLabel>
              <h2 id="trust-bento-title">
                Your digital partner,<br />
                <em>not just a vendor.</em>
              </h2>
              <p className="trust-anchor-desc">
                We understand the challenges of growing a small business in today&apos;s competitive market. That&apos;s why we focus on affordable, practical, and result-driven solutions. From crafting eye-catching social media posts to running smart Meta Ads, we handle everything so you can focus on running your business.
              </p>

              <div className="trust-guarantee-strip">
                <div className="trust-stat-box">
                  <strong>30+</strong>
                  <span>Businesses Scaled</span>
                </div>
                <div className="trust-stat-box">
                  <strong>100%</strong>
                  <span>Zero Jargon</span>
                </div>
                <div className="trust-stat-box">
                  <strong>Surat</strong>
                  <span>Pan-India Reach</span>
                </div>
              </div>

              <div className="trust-anchor-action">
                <a
                  href="https://wa.me/919824900460?text=Hello%20Adora%20Solution,%20I%20want%20to%20enquire%20about%20Digital%20Marketing."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="trust-action-btn"
                >
                  <span>Chat on WhatsApp</span>
                  <span className="trust-btn-arrow" aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </Parallax>

          {/* Right Bento Grid of 4 Trust Pillars */}
          <div className="trust-cards-col">
            <div className="trust-cards-grid">
              {trustPillars.map((pillar, idx) => {
                const speeds = [2, -2, 3, -1]
                return (
                  <Parallax
                    key={pillar.number}
                    speed={speeds[idx]}
                    className={`trust-card-wrapper trust-card-pos-${idx + 1}`}
                  >
                    <article className="trust-frosted-card">
                      <div className="trust-card-top-bar">
                        <span className="trust-check-icon" aria-hidden="true">✔</span>
                        <span className="trust-pill-badge">{pillar.badge}</span>
                      </div>
                      <h3>{pillar.title}</h3>
                      <p className="trust-card-desc">{pillar.description}</p>
                      <div className="trust-card-bottom-point">
                        <span className="trust-point-dot" />
                        <small>{pillar.point}</small>
                      </div>
                    </article>
                  </Parallax>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutTrustSection
