import Container from './Container'
import SectionLabel from './SectionLabel'
import { stats } from '../data/siteData'
import AnimatedCounter from './AnimatedCounter'

function ImpactStats() {
  return (
    <section className="impact">
      <Container>
        <SectionLabel>The work adds up</SectionLabel>
        <div className="stats">
          {stats.map((stat) => (
            <article key={stat.label}>
              <strong>
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  startVal={stat.value === 2025 ? 2000 : 0}
                  duration={1600}
                />
              </strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ImpactStats
