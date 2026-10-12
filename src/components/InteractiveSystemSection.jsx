import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'
import SectionLabel from './SectionLabel'
import AnimatedCounter from './AnimatedCounter'

const modes = [
  {
    id: 'discovery',
    number: '01',
    badge: 'Stage 1 · Precision Targeting',
    name: 'Audience Discovery',
    tagline: 'Hyper-local targeting & competitive demand mapping',
    description:
      'We pinpoint the exact local demographics, buyer triggers, and competitor blind spots in your market. Zero wasted ad spend—every impression targets high-intent customers who are already looking for your services.',
    highlights: [
      'Pinpoint demographic profiling across a 15km local radius',
      'Exclusion of non-converting clickers & irrelevant searches',
      'Rapid 48-hour audience segmentation & validation',
    ],
    telemetry: [
      { label: 'Audience Match', val: '99.4%', detail: 'Verified Intent' },
      { label: 'Local Radius', val: '15 km', detail: 'Core Catchment' },
      { label: 'Wasted Budget', val: '-78%', detail: 'Irrelevant Clicks Blocked' },
      { label: 'Setup Time', val: '48 Hrs', detail: 'Market Deployment' },
    ],
  },
  {
    id: 'creative',
    number: '02',
    badge: 'Stage 2 · Content Engine',
    name: 'Creative Engine',
    tagline: 'High-converting direct-response visuals & video hooks',
    description:
      'We craft thumb-stopping video hooks, clear value-focused carousels, and persuasive ad copy engineered to trigger instant inquiries. We test multiple creative angles to find what resonates best with your local buyers.',
    highlights: [
      '6+ distinct creative angles tested simultaneously',
      'Direct-response hooks designed for short attention spans',
      'Bi-weekly asset refreshes to eliminate ad fatigue',
    ],
    telemetry: [
      { label: 'Click-Through Rate', val: '3.4x', detail: 'vs Industry Benchmark' },
      { label: 'Cost Per Click', val: '₹3.80', detail: '-65% Below Average' },
      { label: 'Hook Retention', val: '4.8s', detail: 'Top 5% Engagement' },
      { label: 'Creative Angles', val: '6+ Live', detail: 'Split-Tested Weekly' },
    ],
  },
  {
    id: 'scale',
    number: '03',
    badge: 'Stage 3 · Compounding Scale',
    name: 'Compounding Scale',
    tagline: 'Automated Meta Ads & algorithmic budget optimization',
    description:
      'Our bidding and budget allocation continuously shifts resources into top-performing ads while pruning underperformers. Your acquisition cost drops as lead volume increases, creating predictable, scalable growth.',
    highlights: [
      'Automated budget scaling on winning audience segments',
      'Continuous cost-per-lead reduction over 30, 60, and 90 days',
      'Direct WhatsApp and CRM lead delivery with zero lag',
    ],
    telemetry: [
      { label: 'Target ROAS', val: '4.2x', detail: 'Average Net Return' },
      { label: 'Cost Per Lead', val: '-42%', detail: 'Progressive Reduction' },
      { label: 'Pipeline Flow', val: 'Daily', detail: 'Steady High-Intent Leads' },
      { label: 'Attribution', val: '100%', detail: 'Full Inbound Visibility' },
    ],
  },
]

function InteractiveSystemSection() {
  const [activeTab, setActiveTab] = useState(0)

  // Permanent auto-cycle through stages every 6.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % modes.length)
    }, 6500)

    return () => clearInterval(timer)
  }, [activeTab])

  const handleSelectTab = (index) => {
    setActiveTab(index)
  }

  const current = modes[activeTab]

  return (
    <section
      className="growth-engine-section"
      aria-label="Adora Growth Engine"
    >
      {/* Background Decorative Ambience */}
      <div className="growth-engine-glow-orb glow-top-right" aria-hidden="true" />
      <div className="growth-engine-glow-orb glow-bottom-left" aria-hidden="true" />

      <Container>
        {/* Section Header */}
        <div className="growth-engine-header">
          <SectionLabel>The Growth Engine</SectionLabel>

          <h2>
            Precision marketing.<br />
            <em>Engineered for predictable revenue.</em>
          </h2>

          <p className="growth-engine-lead">
            We turned digital marketing from unpredictable guesswork into a disciplined 3-stage growth engine. Every ad rupee is tracked, tested, and optimized to compound your customer acquisition.
          </p>
        </div>

        {/* Stage Navigation Selector Tabs */}
        <div className="growth-engine-stepper" role="tablist" aria-label="Growth Engine Stages">
          {modes.map((mode, index) => {
            const isActive = activeTab === index
            return (
              <button
                key={mode.id}
                role="tab"
                id={`tab-${mode.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${mode.id}`}
                tabIndex={isActive ? 0 : -1}
                className={`growth-stepper-btn ${isActive ? 'is-active' : ''}`}
                onClick={() => handleSelectTab(index)}
              >
                <div className="stepper-top-row">
                  <span className="stepper-number">{mode.number}</span>
                  <span className="stepper-stage-tag">{mode.badge.split('·')[0].trim()}</span>
                  <span className="stepper-status-dot" />
                </div>

                <div className="stepper-text">
                  <strong>{mode.name}</strong>
                  <span className="stepper-sub">{mode.tagline.split('&')[0].trim()}</span>
                </div>

                {/* Animated active progress bar */}
                <div className="stepper-progress-track">
                  <div
                    className={`stepper-progress-bar ${isActive ? 'is-animating' : ''}`}
                    key={isActive ? `active-${index}` : `idle-${index}`}
                  />
                </div>
              </button>
            )
          })}
        </div>

        {/* Main Growth Cockpit Arena */}
        <div
          className="growth-cockpit-arena"
          id={`panel-${current.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${current.id}`}
        >
          {/* Left Column: Stage Strategy Breakdown */}
          <div className="growth-strategy-card">
            <div className="strategy-card-header">
              <span className="strategy-stage-badge">{current.badge}</span>
              <span className="strategy-live-ticker">● Live Optimization</span>
            </div>

            <h3 className="strategy-title">{current.name}</h3>
            <p className="strategy-tagline">{current.tagline}</p>
            <p className="strategy-description">{current.description}</p>

            {/* Strategic Checklist */}
            <div className="strategy-checklist">
              <span className="checklist-heading">What We Execute in this Phase:</span>
              <ul>
                {current.highlights.map((item, i) => (
                  <li key={i}>
                    <span className="check-bullet">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* In-phase Action Callout */}
            <div className="strategy-action-strip">
              <div className="action-strip-content">
                <strong>Want to see this in action for your brand?</strong>
                <span>We evaluate your current marketing gap at no cost.</span>
              </div>
              <Link to="/contact" className="strategy-cta-link">
                Get a Strategy Audit <span>→</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Live Marketing Telemetry & Interactive Visual Display */}
          <div className="growth-telemetry-card">
            {/* Telemetry Header Bar */}
            <div className="telemetry-card-topbar">
              <div className="telemetry-topbar-left">
                <span className="telemetry-monitor-dot" />
                <span className="telemetry-title">Engine Telemetry: {current.name}</span>
              </div>
              <div className="telemetry-topbar-right">
                <span className="telemetry-chip">Phase {current.number} of 03</span>
                <span className="telemetry-auto-tag">Auto-Cycle Active</span>
              </div>
            </div>

            {/* Live Interactive Dashboard Visual depending on Stage */}
            <div className="telemetry-stage-canvas">
              {/* STAGE 01: AUDIENCE DISCOVERY & INTENT RADAR */}
              {activeTab === 0 && (
                <div className="telemetry-visual-wrap stage-fade-in" key="stage-0">
                  <div className="radar-telemetry-grid">
                    {/* Visual Radar Graphic */}
                    <div className="radar-graphic-box">
                      <div className="radar-scanner-ring ring-3" />
                      <div className="radar-scanner-ring ring-2" />
                      <div className="radar-scanner-ring ring-1" />
                      <div className="radar-sweep-beam" />
                      
                      {/* Pulse target points */}
                      <div className="radar-target-node node-1" title="High-Intent Demographic">
                        <span className="target-pulse" />
                        <span className="node-tooltip">HNIs & Homeowners</span>
                      </div>
                      <div className="radar-target-node node-2" title="Business Founders">
                        <span className="target-pulse" />
                        <span className="node-tooltip">Founders & CXOs</span>
                      </div>
                      <div className="radar-target-node node-3" title="Lifestyle Buyers">
                        <span className="target-pulse" />
                        <span className="node-tooltip">Retail Buyers</span>
                      </div>

                      <div className="radar-center-hub">
                        <span className="hub-core">📍</span>
                        <small>Local Core</small>
                      </div>
                    </div>

                    {/* Audience Breakdown Data */}
                    <div className="radar-insights-list">
                      <div className="radar-insight-item">
                        <div className="insight-item-header">
                          <span className="insight-dot dot-green" />
                          <strong>Primary Buyer Catchment</strong>
                          <span className="insight-stat">94% Intent</span>
                        </div>
                        <div className="insight-bar-bg">
                          <div className="insight-bar-fill" style={{ width: '94%' }} />
                        </div>
                      </div>

                      <div className="radar-insight-item">
                        <div className="insight-item-header">
                          <span className="insight-dot dot-peach" />
                          <strong>Competitor Search Deflection</strong>
                          <span className="insight-stat">88% Capture</span>
                        </div>
                        <div className="insight-bar-bg">
                          <div className="insight-bar-fill" style={{ width: '88%' }} />
                        </div>
                      </div>

                      <div className="radar-insight-item">
                        <div className="insight-item-header">
                          <span className="insight-dot dot-gold" />
                          <strong>Negative Keyword Protection</strong>
                          <span className="insight-stat">100% Cleared</span>
                        </div>
                        <div className="insight-bar-bg">
                          <div className="insight-bar-fill" style={{ width: '100%' }} />
                        </div>
                      </div>

                      <div className="audience-signal-pill">
                        <span className="signal-icon">⚡</span>
                        <span>42,000+ Verified Prospects Filtered with Zero Ad Waste</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STAGE 02: CREATIVE SPLIT-TESTING COCKPIT */}
              {activeTab === 1 && (
                <div className="telemetry-visual-wrap stage-fade-in" key="stage-1">
                  <div className="creative-cockpit-grid">
                    {/* Creative Variant A (Winner) */}
                    <div className="creative-variant-card winner-card">
                      <div className="variant-card-badge">
                        <span className="badge-star">★</span> Winner: Top 1% Performer
                      </div>
                      <div className="variant-preview-mockup reel-mockup">
                        <div className="mockup-header">
                          <span className="mockup-tag">Variant A · Video Reel Hook</span>
                          <span className="mockup-views">3.84% CTR</span>
                        </div>
                        <div className="mockup-body">
                          <div className="play-icon-bubble">▶</div>
                          <div className="mockup-hook-line">
                            &ldquo;Stop losing local customers to generic ads...&rdquo;
                          </div>
                        </div>
                      </div>
                      <div className="variant-metrics-strip">
                        <div>
                          <small>Retention Rate</small>
                          <strong>4.8s Avg</strong>
                        </div>
                        <div>
                          <small>Cost Per Click</small>
                          <strong className="text-peach">₹3.80 CPC</strong>
                        </div>
                        <div>
                          <small>Inquiry Velocity</small>
                          <strong className="text-green">+240%</strong>
                        </div>
                      </div>
                    </div>

                    {/* Creative Variant B (Comparison) */}
                    <div className="creative-variant-card secondary-card">
                      <div className="variant-card-badge secondary-badge">
                        Variant B · Social Proof Carousel
                      </div>
                      <div className="variant-preview-mockup carousel-mockup">
                        <div className="mockup-header">
                          <span className="mockup-tag">Variant B · Case Study</span>
                          <span className="mockup-views">1.92% CTR</span>
                        </div>
                        <div className="mockup-carousel-slides">
                          <div className="slide-pill active">Slide 1: Problem</div>
                          <div className="slide-pill">Slide 2: Solution</div>
                          <div className="slide-pill">Slide 3: Proof</div>
                        </div>
                      </div>
                      <div className="variant-metrics-strip">
                        <div>
                          <small>Engagement</small>
                          <strong>12.4%</strong>
                        </div>
                        <div>
                          <small>Cost Per Click</small>
                          <strong>₹5.40 CPC</strong>
                        </div>
                        <div>
                          <small>Status</small>
                          <strong className="text-muted">Complementary</strong>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="creative-insight-strip">
                    <span className="insight-pulse-icon">💡</span>
                    <span>Multivariate testing automatically scales the winning reel while lowering acquisition costs.</span>
                  </div>
                </div>
              )}

              {/* STAGE 03: COMPOUNDING SCALE & ROAS GRAPH */}
              {activeTab === 2 && (
                <div className="telemetry-visual-wrap stage-fade-in" key="stage-2">
                  <div className="scale-cockpit-content">
                    {/* Chart Header Bar */}
                    <div className="scale-chart-header">
                      <div>
                        <span className="scale-chart-sub">Monthly Pipeline Compounding</span>
                        <div className="scale-chart-legend">
                          <span className="legend-item"><span className="legend-dot dot-revenue" /> Attributed Revenue</span>
                          <span className="legend-item"><span className="legend-dot dot-spend" /> Controlled Ad Spend</span>
                        </div>
                      </div>
                      <div className="scale-roas-highlight">
                        <small>Current Multiplier</small>
                        <strong>4.2x ROAS</strong>
                      </div>
                    </div>

                    {/* SVG Curve Chart */}
                    <div className="scale-svg-container">
                      <svg viewBox="0 0 500 210" className="scale-curve-svg" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="growthFillGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#2f4f3d" stopOpacity="0.45" />
                            <stop offset="50%" stopColor="#c55f46" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#2f4f3d" stopOpacity="0" />
                          </linearGradient>
                          <linearGradient id="revenueStrokeGrad" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#c55f46" />
                            <stop offset="70%" stopColor="#2f4f3d" />
                            <stop offset="100%" stopColor="#1e824c" />
                          </linearGradient>
                        </defs>

                        {/* Grid lines */}
                        <line x1="20" y1="180" x2="480" y2="180" stroke="#e8dfd5" strokeWidth="1" />
                        <line x1="20" y1="125" x2="480" y2="125" stroke="#e8dfd5" strokeWidth="1" strokeDasharray="3 3" />
                        <line x1="20" y1="70" x2="480" y2="70" stroke="#e8dfd5" strokeWidth="1" strokeDasharray="3 3" />

                        {/* Month labels */}
                        <text x="30" y="198" fill="#88928b" fontSize="10" fontFamily="Space Grotesk">Month 1</text>
                        <text x="180" y="198" fill="#88928b" fontSize="10" fontFamily="Space Grotesk">Month 2</text>
                        <text x="330" y="198" fill="#88928b" fontSize="10" fontFamily="Space Grotesk">Month 3</text>
                        <text x="450" y="198" fill="#88928b" fontSize="10" fontFamily="Space Grotesk">Month 4</text>

                        {/* Ad Spend Baseline Curve (Controlled line) */}
                        <path
                          d="M30 165 C120 160, 200 152, 330 145 S440 138, 470 135"
                          fill="none"
                          stroke="#a0aba3"
                          strokeWidth="2"
                          strokeDasharray="4 4"
                        />

                        {/* Revenue Compounding Fill Area */}
                        <path
                          d="M30 160 C120 148, 200 115, 330 65 S430 32, 470 20 L470 180 L30 180 Z"
                          fill="url(#growthFillGrad)"
                        />

                        {/* Revenue Compounding Main Curve */}
                        <path
                          d="M30 160 C120 148, 200 115, 330 65 S430 32, 470 20"
                          fill="none"
                          stroke="url(#revenueStrokeGrad)"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                        />

                        {/* Key Milestones */}
                        <circle cx="30" cy="160" r="4.5" fill="#c55f46" />
                        <circle cx="200" cy="115" r="4.5" fill="#2f4f3d" />
                        <circle cx="330" cy="65" r="5" fill="#2f4f3d" />
                        <circle cx="470" cy="20" r="6" fill="#1e824c" />

                        {/* Callout Pins */}
                        <g transform="translate(190, 88)">
                          <rect x="0" y="0" width="60" height="20" rx="4" fill="#132e22" />
                          <text x="30" y="14" fill="#f2b69d" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="Space Grotesk">2.8x ROAS</text>
                        </g>

                        <g transform="translate(390, 10)">
                          <rect x="0" y="0" width="70" height="22" rx="4" fill="#132e22" />
                          <text x="35" y="15" fill="#ffffff" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="Space Grotesk">4.2x Scale</text>
                        </g>
                      </svg>
                    </div>

                    {/* Action ticker */}
                    <div className="scale-live-logs">
                      <div className="log-line">
                        <span className="log-time">[10:45 AM]</span>
                        <span className="log-badge-cbo">Meta CBO</span>
                        <span className="log-text">Shifted budget automatically to top-converting ad sets</span>
                      </div>
                      <div className="log-line">
                        <span className="log-time">[12:30 PM]</span>
                        <span className="log-badge-cpl">-42% CAC</span>
                        <span className="log-text">Acquisition cost minimized while maintaining daily lead velocity</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Stage Telemetry Metrics Row */}
            <div className="telemetry-metrics-grid">
              {current.telemetry.map((item, idx) => (
                <div key={idx} className="telemetry-metric-box">
                  <span className="metric-box-label">{item.label}</span>
                  <strong className="metric-box-val">
                    <AnimatedCounter value={item.val} duration={1200} />
                  </strong>
                  <span className="metric-box-detail">{item.detail}</span>
                </div>
              ))}
            </div>

            {/* Telemetry Card Bottom Footer */}
            <div className="telemetry-card-footer">
              <div className="telemetry-footer-status">
                <span className="pulse-dot" />
                <span>Continuous 7-Day Performance & Optimization Cycle</span>
              </div>
              <span className="telemetry-footer-tag">Guaranteed Zero Ad Waste</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default InteractiveSystemSection
