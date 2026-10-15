import { Parallax } from 'react-scroll-parallax'
import Container from '../components/Container'
import PageHero from '../components/PageHero'
import Icon from '../components/Icon'
import { projects } from '../data/siteData'

function Portfolio() {
  const speeds = [-6, 3, -4, 4]

  return (
    <>
      <PageHero
        label="Success Stories"
        title="Real results for"
        italicTitle="real businesses."
        description="Every business is unique, but one thing stays the same — results matter. Here’s how we’ve helped startups and local businesses grow online with social media marketing, creative designs, and Meta Ads."
        badge1="✦ 30+ Businesses Scaled"
        badge2="● Proven Across Industries"
      />

      <section className="section portfolio numa-portfolio-section">
        <Container>
          <div className="portfolio-stories-header">
            <span className="portfolio-header-pill">✦ Client Growth Case Studies</span>
            <h2>Proven impact across local markets</h2>
            <p>
              These stories prove that with the right strategy, even small businesses can achieve big results online. Whether you sell jewellery, run a salon, or own a local shop, we can help you grow too.
            </p>
          </div>

          <div className="project-grid numa-portfolio-grid">
            {projects.map((project, index) => (
              <Parallax
                key={project.title}
                speed={speeds[index % speeds.length]}
                className={`numa-portfolio-card-wrap port-col-${index + 1}`}
              >
                <article className="project-card numa-port-card authentic-case-card">
                  <div className="project-image numa-port-image">
                    <Icon name={project.icon} size={52} />
                    <span className="numa-port-floating-tag">● {project.industry}</span>
                  </div>
                  <div className="project-content numa-port-content">
                    <div className="numa-port-meta">
                      <span className="project-category">{project.category}</span>
                      <span className="numa-port-num">Case 0{index + 1}</span>
                    </div>

                    <h3>{project.title}</h3>

                    {/* Challenge & Solution details */}
                    <div className="case-study-details">
                      <div className="case-detail-row">
                        <strong className="case-label-chip challenge-chip">Challenge:</strong>
                        <p>{project.challenge}</p>
                      </div>
                      <div className="case-detail-row">
                        <strong className="case-label-chip solution-chip">Solution:</strong>
                        <p>{project.solution}</p>
                      </div>
                      <div className="case-detail-row result-row">
                        <strong className="case-label-chip result-chip">Result:</strong>
                        <p>{project.result}</p>
                      </div>
                    </div>

                    {/* Verified Result Metric Badge */}
                    <div className="case-study-metric-box">
                      <span className="metric-figure">{project.metric}</span>
                      <small>{project.metricLabel}</small>
                    </div>

                    {/* Authentic Client Quote */}
                    <blockquote className="case-quote-snippet">
                      <p>&ldquo;{project.quote}&rdquo;</p>
                    </blockquote>

                    <div className="numa-port-footer">
                      <span className="numa-port-verified">✓ Verified Client Story</span>
                      <a
                        href="https://wa.me/919824900460?text=Hi%20Adora%20Solution,%20I%20want%20to%20discuss%20case%20studies."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="case-enquiry-link"
                      >
                        Enquire Now ↗
                      </a>
                    </div>
                  </div>
                </article>
              </Parallax>
            ))}
          </div>

          {/* Bottom CTA Banner */}
          <div className="case-studies-cta-box">
            <div className="case-cta-text">
              <h3>Why these case studies matter</h3>
              <p>
                Whether you sell jewellery, run a salon, or own a local store, consistent social media and smart Meta Ads can bring real customer inquiries to your doorstep.
              </p>
            </div>
            <div className="case-cta-action">
              <a
                href="https://wa.me/919824900460?text=Hello%20Adora%20Solution,%20I%20want%20to%20grow%20my%20business%20online."
                target="_blank"
                rel="noopener noreferrer"
                className="button peach-button"
              >
                <Icon name="whatsapp" size={18} />
                <span>WhatsApp Us ↗</span>
              </a>
              <a href="tel:+919824900460" className="button text-button">
                Call Now ↗
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Portfolio
