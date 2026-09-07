import { useEffect, useRef, useState } from 'react'
import { Parallax } from 'react-scroll-parallax'
import Container from './Container'
import SectionLabel from './SectionLabel'

const team = [
  {
    name: 'Aarav Mehta',
    role: 'Growth Strategist',
    bio: 'Aarav turns business goals into practical digital plans, finding the clearest path from first impression to customer action.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Mira Shah',
    role: 'Creative Lead',
    bio: 'Mira brings ideas to life through thoughtful design and content that gives every local brand a distinctive, memorable voice.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Kabir Patel',
    role: 'Performance Marketer',
    bio: 'Kabir combines focused campaign testing with clear reporting to help businesses turn their marketing budget into meaningful growth.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85',
  },
]

function TeamSection() {
  const [activeMember, setActiveMember] = useState(0)
  const stepRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveMember(Number(entry.target.dataset.member))
        }
      })
    }, { rootMargin: '-35% 0px -45% 0px', threshold: 0 })

    stepRefs.current.forEach((step) => step && observer.observe(step))
    return () => observer.disconnect()
  }, [])

  return <section className="section team-section" aria-labelledby="team-title">
    <Container>
      <div className="team-heading">
        <SectionLabel>Meet our team</SectionLabel>
        <h2 id="team-title">The people behind<br /><em>your next move.</em></h2>
      </div>
      <div className="team-preview-grid" aria-label="Team members">
        {team.map((member, index) => <article className="team-preview-card" key={member.name}>
          <img src={member.image} alt={member.name} />
          <div><span>0{index + 1}</span><strong>{member.name}</strong><small>{member.role}</small></div>
        </article>)}
      </div>
      <div className="team-scroll-story">
        <div className="team-scroll-steps" aria-label="Team member details">
          {team.map((member, index) => <article
            className={activeMember === index ? 'is-active' : ''}
            data-member={index}
            key={member.name}
            ref={(element) => { stepRefs.current[index] = element }}
          >
            <span>0{index + 1} / Team Adora</span>
            <h3>{member.name}</h3>
            <strong>{member.role}</strong>
            <p>{member.bio}</p>
          </article>)}
        </div>
        <div className="team-sticky-showcase" aria-live="polite">
          <Parallax speed={-8} className="team-showcase-orb team-showcase-orb-one" />
          <Parallax speed={7} className="team-showcase-orb team-showcase-orb-two" />
          <div className="team-showcase-image">
            {team.map((member, index) => <img className={activeMember === index ? 'is-active' : ''} key={member.name} src={member.image} alt={activeMember === index ? member.name : ''} />)}
          </div>
          <div className="team-showcase-count">0{activeMember + 1} <span>/ 03</span></div>
        </div>
      </div>
    </Container>
  </section>
}

export default TeamSection
