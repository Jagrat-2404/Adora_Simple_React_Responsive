import { Parallax } from 'react-scroll-parallax'
import Container from '../components/Container'
import PageHero from '../components/PageHero'
import Icon from '../components/Icon'
import AnimatedCounter from '../components/AnimatedCounter'
import { projects } from '../data/siteData'

function Portfolio() {
  const speeds = [-8, 4, -12]

  return (
    <>
      <PageHero
        label="Selected work"
        title="Real campaigns,"
        italicTitle="measurable growth."
        description="A few examples of practical digital campaigns, high-converting Meta Ads, and creative content we've built for local brands."
        badge1="✦ 30+ Local Case Studies"
        badge2="● 3.8x Avg Return"
      />

      <section className="section portfolio numa-portfolio-section">
        <Container>
          <div className="project-grid numa-portfolio-grid">
            {projects.map((project, index) => (
              <Parallax
                key={project.title}
                speed={speeds[index % speeds.length]}
                className={`numa-portfolio-card-wrap port-col-${index + 1}`}
              >
                <article className="project-card numa-port-card">
                  <div className="project-image numa-port-image">
                    <Icon name={project.icon} size={56} />
                    <span className="numa-port-floating-tag">● {project.category}</span>
                  </div>
                  <div className="project-content numa-port-content">
                    <div className="numa-port-meta">
                      <span className="project-category">{project.category}</span>
                      <span className="numa-port-num">Case 0{index + 1}</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="numa-port-footer">
                      <span className="numa-port-verified">✓ Verified Case Study</span>
                      <span className="numa-port-arrow">↗</span>
                    </div>
                  </div>
                </article>
              </Parallax>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}

export default Portfolio
