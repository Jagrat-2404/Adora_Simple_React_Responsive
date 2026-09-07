import { Parallax } from 'react-scroll-parallax'
import Container from './Container'
import SectionLabel from './SectionLabel'

const advantages = [
  {
    number: '01',
    category: 'Visual Identity',
    title: 'Content that commands attention.',
    description: 'Stop the endless thumb-scroll. We design editorial social media creatives and narratives that turn casual viewers into loyal customers.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=85',
    alt: 'Creative designers collaborating on branding assets',
    speed: -8,
    pill: 'High-Converting Creative',
  },
  {
    number: '02',
    category: 'Paid Acquisition',
    title: 'Meta Ads built for real enquiries.',
    description: 'Precision targeting, retargeting funnels, and data-backed ad copies. Zero wasted ad spend—only qualified prospects ready to convert.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85',
    alt: 'Analytics and advertising dashboard graphs',
    speed: 4,
    pill: 'Direct-Response Funnels',
  },
  {
    number: '03',
    category: 'Brand Momentum',
    title: 'Full-funnel market domination.',
    description: 'Connecting top-of-funnel brand buzz with bottom-of-funnel customer acquisition. Steady, compounding digital presence month after month.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85',
    alt: 'Team reviewing digital growth momentum',
    speed: -12,
    pill: 'Compounding Retention',
  },
]

function ParallaxAdvantages() {
  return (
    <section className="section numa-advantages-section" aria-label="Core advantages">
      <Container>
        <div className="numa-advantages-intro">
          <SectionLabel>Designed for impact</SectionLabel>
          <h2>Built for conversions,<br /><em>refined for trust.</em></h2>
          <p className="numa-advantages-desc">
            Three interconnected pillars of digital marketing, designed to operate in total harmony.
          </p>
        </div>

        <div className="numa-advantages-grid">
          {advantages.map((item) => (
            <Parallax
              key={item.number}
              speed={item.speed}
              className={`numa-adv-col numa-adv-col-${item.number}`}
            >
              <article className="numa-adv-card">
                <div className="numa-adv-image-wrap">
                  <img src={item.image} alt={item.alt} loading="lazy" />
                  <span className="numa-adv-floating-pill">{item.pill}</span>
                </div>

                <div className="numa-adv-body">
                  <div className="numa-adv-meta">
                    <span className="numa-adv-num">{item.number}</span>
                    <span className="numa-adv-cat">{item.category}</span>
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <div className="numa-adv-footer">
                    <span>Continuous optimization</span>
                    <i>→</i>
                  </div>
                </div>
              </article>
            </Parallax>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ParallaxAdvantages
