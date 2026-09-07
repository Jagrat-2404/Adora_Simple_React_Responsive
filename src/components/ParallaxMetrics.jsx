import { Parallax } from 'react-scroll-parallax'
import Container from './Container'
import SectionLabel from './SectionLabel'
import AnimatedCounter from './AnimatedCounter'

const metricCards = [
  {
    number: '3.8x',
    unit: 'ROAS',
    title: 'Average Return on Ad Spend',
    description: 'Predictable returns that turn paid Meta campaigns into reliable revenue streams for local businesses.',
    speed: -7,
    tag: 'Performance',
    highlightColor: '#2f4f3d',
  },
  {
    number: '72',
    unit: 'hours',
    title: 'Rapid Deployment Window',
    description: 'From strategy brief to live creatives across Meta and social channels in days, with zero downtime.',
    speed: 8,
    tag: 'Velocity',
    highlightColor: '#c55f46',
  },
  {
    number: '100%',
    unit: 'custom',
    title: 'Bespoke Content Production',
    description: 'Engineered specifically for your brand voice with custom visual assets and high-converting copy.',
    speed: -11,
    tag: 'Originality',
    highlightColor: '#2f4f3d',
  },
  {
    number: '+85k',
    unit: 'reach',
    title: 'Average Monthly Local Reach',
    description: 'Hyper-targeted geo-fenced campaigns that ensure every potential customer nearby remembers you.',
    speed: 12,
    tag: 'Visibility',
    highlightColor: '#6d8f38',
  },
]

function ParallaxMetrics() {
  return (
    <section className="section numa-metrics-section" aria-label="Key performance metrics">
      <div className="numa-metrics-ambient-orb orb-left" />
      <div className="numa-metrics-ambient-orb orb-right" />
      <Container>
        <div className="numa-metrics-header">
          <SectionLabel>Performance by design</SectionLabel>
          <h2>Numbers that make<br /><em>growth predictable.</em></h2>
          <p className="numa-metrics-subtitle">
            We replace guesswork with measured performance. Scroll through the core metrics driving our clients forward.
          </p>
        </div>

        <div className="numa-metrics-grid">
          {metricCards.map((item, index) => (
            <Parallax
              key={item.title}
              speed={item.speed}
              className={`numa-metric-card-wrapper card-col-${index + 1}`}
            >
              <article className="numa-metric-card">
                <div className="numa-card-badge-row">
                  <span className="numa-pill-tag">● {item.tag}</span>
                  <span className="numa-index">0{index + 1}</span>
                </div>

                <div className="numa-metric-big">
                  <strong>
                    <AnimatedCounter value={item.number} duration={1600} />
                  </strong>
                  <span className="numa-metric-unit">{item.unit}</span>
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <div className="numa-card-bottom-bar" style={{ '--bar-color': item.highlightColor }} />
              </article>
            </Parallax>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ParallaxMetrics
