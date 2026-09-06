import { useEffect, useRef, useState } from 'react'
import Container from './Container'
import SectionLabel from './SectionLabel'
import { stats } from '../data/siteData'
function Counter({ value, suffix }) {
  const ref = useRef(null)
  const [count, setCount] = useState(0)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      const start = performance.now()
      const animate = (now) => {
        const progress = Math.min((now - start) / 1500, 1)
        setCount(Math.round((1 - (1 - progress) ** 3) * value))
        if (progress < 1) requestAnimationFrame(animate)
      }
      requestAnimationFrame(animate)
      observer.disconnect()
    }, { threshold: 0.4 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])
  return <strong ref={ref}>{count}{suffix}</strong>
}
function ImpactStats() { return <section className="impact"><Container><SectionLabel>The work adds up</SectionLabel><div className="stats">{stats.map(stat => <article key={stat.label}><Counter {...stat} /><span>{stat.label}</span></article>)}</div></Container></section> }
export default ImpactStats
