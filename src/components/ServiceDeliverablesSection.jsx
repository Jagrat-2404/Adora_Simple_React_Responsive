import { useState } from 'react'
import { Parallax } from 'react-scroll-parallax'
import Container from './Container'
import SectionLabel from './SectionLabel'
import { serviceInclusions } from '../data/siteData'

function ServiceDeliverablesSection() {
  const [selectedKey, setSelectedKey] = useState('social-media')
  const current = serviceInclusions[selectedKey]

  return (
    <section className="section service-deliverables-section" aria-labelledby="deliverables-title">
      <Container>
        <div className="service-deliv-header">
          <SectionLabel>What you receive</SectionLabel>
          <h2 id="deliverables-title">
            Complete, end-to-end deliverables<br />
            <em>for maximum local impact.</em>
          </h2>
          <p className="service-deliv-lead">
            We do not just hand over raw files or run random campaigns. You receive a structured, monthly execution engine tailored to your market.
          </p>

          <div className="service-deliv-switch-tabs" role="tablist" aria-label="Service Deliverables">
            <button
              type="button"
              role="tab"
              aria-selected={selectedKey === 'social-media'}
              className={`service-deliv-tab ${selectedKey === 'social-media' ? 'is-active' : ''}`}
              onClick={() => setSelectedKey('social-media')}
            >
              <span>01</span> Social Media Marketing
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={selectedKey === 'meta-ads'}
              className={`service-deliv-tab ${selectedKey === 'meta-ads' ? 'is-active' : ''}`}
              onClick={() => setSelectedKey('meta-ads')}
            >
              <span>02</span> Performance Meta Ads
            </button>
          </div>
        </div>

        {/* Why it matters highlight box */}
        <div className="service-why-box">
          <div className="service-why-badge">
            <span>● Strategic Value</span>
          </div>
          <h3>Why {current.title} Matters</h3>
          <p>{current.whyMatters}</p>
          <div className="service-benefits-grid">
            {current.benefits.map((benefit, i) => (
              <div key={i} className="service-benefit-item">
                <span className="benefit-check">✔</span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 6 In-Depth Deliverable Cards */}
        <div className="service-deliv-cards-grid">
          {current.items.map((item, index) => {
            const speeds = [-5, 3, -4, 4, -3, 5]
            return (
              <Parallax
                key={item.number}
                speed={speeds[index % speeds.length]}
                className="service-deliv-col"
              >
                <article className="service-deliv-card">
                  <div className="service-deliv-card-top">
                    <span className="deliv-card-num">{item.number}</span>
                    <span className="deliv-card-tag">● {item.tag}</span>
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <div className="service-deliv-card-footer">
                    <small>Included In Monthly Retainer</small>
                    <div className="deliv-card-line" />
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

export default ServiceDeliverablesSection
