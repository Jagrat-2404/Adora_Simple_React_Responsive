import { Parallax } from 'react-scroll-parallax'
import Container from './Container'
import SectionLabel from './SectionLabel'

function PageHero({
  label,
  title,
  italicTitle,
  description,
  badge1 = '✦ Adora Creative',
  badge2 = '● Proven Results',
}) {
  return (
    <section className="page-hero numa-page-hero">
      <Parallax speed={-12} className="page-hero-ambient-orb orb-hero-left" />
      <Parallax speed={9} className="page-hero-ambient-orb orb-hero-right" />
      <Container className="page-hero-inner">
        <Parallax speed={-3} className="page-hero-copy">
          <SectionLabel>{label}</SectionLabel>
          <h1>
            {title}<br />
            <em>{italicTitle}</em>
          </h1>
          <p>{description}</p>
        </Parallax>

        <Parallax speed={-9} className="floating-pill-badge page-hero-badge-left">
          <span className="pill-icon">✦</span>
          <div className="pill-text">
            <strong>{badge1}</strong>
            <small>Local Digital Growth</small>
          </div>
        </Parallax>

        <Parallax speed={13} className="floating-pill-badge page-hero-badge-right">
          <span className="pill-icon">📈</span>
          <div className="pill-text">
            <strong>{badge2}</strong>
            <small>Measurable Momentum</small>
          </div>
        </Parallax>
      </Container>
    </section>
  )
}

export default PageHero
