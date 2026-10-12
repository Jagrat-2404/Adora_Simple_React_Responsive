import Container from './Container'
import SectionLabel from './SectionLabel'

const workflowSteps = [
  {
    number: '01',
    phase: 'Discovery',
    title: 'Understand Your Brand & Customers',
    description: 'We audit your products, local competitors, customer buying intent, and historical data without confusing agency jargon.',
    deliverable: 'Audience & Competitor Audit',
    timeframe: 'Days 1–3',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    number: '02',
    phase: 'Strategy',
    title: 'Plan Content & Campaign Roadmap',
    description: 'We craft a tailored monthly execution calendar with creative angles, high-converting offer hooks, and precise ad budget allocation.',
    deliverable: 'Monthly Content Calendar & Budget',
    timeframe: 'Days 4–7',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polygon points="2 17 12 22 22 17" />
        <polygon points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    number: '03',
    phase: 'Creation',
    title: 'Produce Scroll-Stopping Assets',
    description: 'Our in-house team shoots and designs engaging reels, carousel decks, branded festival greetings, and persuasive direct-response ad copy.',
    deliverable: 'Reels, Graphics & Ad Copy',
    timeframe: 'Days 8–14',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
        <line x1="7" y1="2" x2="7" y2="22" />
        <line x1="17" y1="2" x2="17" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="2" y1="7" x2="7" y2="7" />
        <line x1="2" y1="17" x2="7" y2="17" />
        <line x1="17" y1="17" x2="22" y2="17" />
        <line x1="17" y1="7" x2="22" y2="7" />
      </svg>
    ),
  },
  {
    number: '04',
    phase: 'Launch',
    title: 'Publish & Target Hyper-Local Ads',
    description: 'We publish consistently across active channels and deploy targeted Meta ads pinpointed to interested buyers in your specific city.',
    deliverable: 'Geo-Targeted Ad Campaign Launch',
    timeframe: 'Week 3',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      </svg>
    ),
  },
  {
    number: '05',
    phase: 'Optimization',
    title: 'Track Performance & Scale Revenue',
    description: 'We send crystal-clear transparent weekly reports, double down on winning creatives, and continuously drive down your cost-per-lead.',
    deliverable: 'Weekly Reviews & CPL Reduction',
    timeframe: 'Ongoing',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
]

function ServiceWorkflowSection() {
  return (
    <section className="section service-workflow-section" aria-labelledby="workflow-title">
      <Container>
        <div className="service-workflow-header">
          <div className="workflow-header-badge">
            <span className="workflow-badge-dot" />
            <span>Execution Methodology</span>
          </div>
          <SectionLabel>How we execute</SectionLabel>
          <h2 id="workflow-title">
            Our 5-step roadmap for<br />
            <em>predictable client growth.</em>
          </h2>
          <p className="service-workflow-lead">
            No confusion, no unreturned messages. From initial audience discovery to scaling winning campaigns, here is our transparent operational pipeline.
          </p>
        </div>

        {/* Architectural Timeline Rail */}
        <div className="workflow-timeline-rail-wrap" aria-hidden="true">
          <div className="workflow-timeline-rail-line" />
          <div className="workflow-timeline-rail-nodes">
            {workflowSteps.map((step, idx) => (
              <div key={idx} className="workflow-rail-milestone">
                <span className="milestone-dot">
                  <span className="milestone-pulse" />
                </span>
                <span className="milestone-num">{step.number}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 5-Step Connected Roadmap Cards */}
        <div className="service-workflow-grid">
          {workflowSteps.map((step) => (
            <article key={step.number} className="service-workflow-card">
              <div className="service-workflow-top">
                <div className="workflow-icon-bubble">
                  {step.icon}
                </div>
                <span className="workflow-step-badge">Phase {step.number}</span>
              </div>

              <div className="workflow-card-phase-tag">
                <span className="phase-indicator" />
                <span>{step.phase}</span>
                <span className="phase-timeframe">{step.timeframe}</span>
              </div>

              <h3 className="workflow-card-title">{step.title}</h3>
              <p className="workflow-card-desc">{step.description}</p>

              <div className="workflow-deliverable-box">
                <span className="deliverable-label">Key Deliverable:</span>
                <strong className="deliverable-text">{step.deliverable}</strong>
              </div>

              <div className="workflow-card-bottom-bar">
                <span className="card-status-dot" />
                <span>Verified Milestone</span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ServiceWorkflowSection
