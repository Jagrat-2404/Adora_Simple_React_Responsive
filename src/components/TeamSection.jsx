import Container from './Container'
import SectionLabel from './SectionLabel'

const team = [
  {
    number: '01',
    name: 'Aarav Mehta',
    role: 'Growth Strategist & Co-Founder',
    badge: 'Growth Architecture',
    bio: 'Aarav turns business objectives into high-velocity digital acquisition funnels. He leads campaign strategies, competitive positioning, and revenue growth for 30+ regional brands.',
    skills: ['Funnel Architecture', 'ROAS Optimization', 'Market Intelligence'],
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85',
    alt: 'Aarav Mehta, Growth Strategist at Adora Solution',
  },
  {
    number: '02',
    name: 'Mira Shah',
    role: 'Creative Director & Brand Lead',
    badge: 'Creative Engine',
    bio: 'Mira directs visual storytelling, thumb-stopping reel concepts, and high-conversion ad creatives that turn passive local browsers into booked inquiries and loyal customers.',
    skills: ['Direct-Response Hooks', 'Visual Identity', 'Short-form Content'],
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=85',
    alt: 'Mira Shah, Creative Director at Adora Solution',
  },
  {
    number: '03',
    name: 'Kabir Patel',
    role: 'Performance Marketing Specialist',
    badge: 'Paid Ads Specialist',
    bio: 'Kabir manages live Meta Ads and algorithmic budget scaling. His hyper-local audience segmentation and daily optimization consistently drive down client cost-per-lead.',
    skills: ['Meta Ads Manager', 'Audience Precision', 'A/B Testing'],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85',
    alt: 'Kabir Patel, Performance Marketing Specialist at Adora Solution',
  },
]

function TeamSection() {
  return (
    <section className="section team-section" aria-labelledby="team-title">
      <Container>
        <div className="team-header">
          <SectionLabel>The Minds Behind Adora</SectionLabel>
          <h2 id="team-title">
            The strategists &amp; creators<br />
            <em>powering your digital growth.</em>
          </h2>
          <p className="team-lead">
            No junior hand-offs. You collaborate directly with senior specialists who treat your marketing budget with the same discipline as their own.
          </p>
        </div>

        <div className="team-cards-grid" aria-label="Team members">
          {team.map((member) => (
            <article className="team-card" key={member.name}>
              <div className="team-card-image-wrap">
                <img src={member.image} alt={member.alt} loading="lazy" />
                <div className="team-card-overlay" />
                <div className="team-card-badge-strip">
                  <span className="team-stage-pill">{member.badge}</span>
                  <span className="team-num-pill">{member.number}</span>
                </div>
              </div>

              <div className="team-card-body">
                <div className="team-member-role">{member.role}</div>
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-bio">{member.bio}</p>

                <div className="team-skills-strip">
                  {member.skills.map((skill) => (
                    <span key={skill} className="team-skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="team-card-footer">
                  <span className="team-active-indicator">
                    <span className="pulse-dot" /> Dedicated Campaign Lead
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default TeamSection
