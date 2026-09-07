import { useState, useEffect, useRef } from 'react'
import { Parallax } from 'react-scroll-parallax'
import Container from './Container'
import SectionLabel from './SectionLabel'

const modes = [
  {
    id: 'discovery',
    number: '01',
    name: 'Audience Discovery',
    tagline: 'Hyper-local targeting & competitive mapping',
    description: 'We pinpoint the exact local demographics, interests, and buying triggers in your market. No random boosts—every impression is focused on high-intent prospects.',
    metrics: [
      { label: 'Audience Match', val: '99.4%' },
      { label: 'Local Density', val: '15km Radius' },
      { label: 'Setup Time', val: '48 Hours' },
    ],
    graphType: 'radar',
  },
  {
    id: 'creative',
    number: '02',
    name: 'Creative Engine',
    tagline: 'High-converting visuals & direct-response copy',
    description: 'We craft compelling video hooks, scroll-stopping carousel graphics, and persuasive copy designed to turn passive browsers into booked enquiries.',
    metrics: [
      { label: 'Creative Angles', val: '6+ Varied' },
      { label: 'Click-Through', val: '3.4x Benchmark' },
      { label: 'Format Mix', val: 'Reels + Feeds' },
    ],
    graphType: 'growth',
  },
  {
    id: 'scale',
    number: '03',
    name: 'Compounding Scale',
    tagline: 'Automated Meta Ads & budget optimization',
    description: 'Our campaigns automatically double down on top-performing ads while pruning underperformers, driving your acquisition cost down as volume increases.',
    metrics: [
      { label: 'Target ROAS', val: '3.8x - 4.5x' },
      { label: 'Cost Per Lead', val: '-42% Reduced' },
      { label: 'Pipeline Flow', val: 'Consistent Daily' },
    ],
    graphType: 'scale',
  },
]

function InteractiveSystemSection() {
  const [activeTab, setActiveTab] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const totalHeight = rect.height - window.innerHeight
      if (totalHeight <= 0) return

      // Progress from 0 to 1 through the section
      const progress = Math.min(1, Math.max(0, -rect.top / totalHeight))
      if (progress < 0.33) {
        setActiveTab(0)
      } else if (progress < 0.66) {
        setActiveTab(1)
      } else {
        setActiveTab(2)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const current = modes[activeTab]

  return (
    <section ref={containerRef} className="numa-system-section" aria-label="Adora growth system">
      <div className="numa-system-sticky-wrapper">
        <Container>
          <div className="numa-system-layout">
            {/* Left Column: Mode selection & Editorial details */}
            <div className="numa-system-left">
              <SectionLabel>The Growth Engine</SectionLabel>
              <h2>Precision marketing.<br /><em>Zero guesswork.</em></h2>
              <p className="numa-system-lead">
                Like an automated algorithm, our process continuously tests, validates, and compounds your local marketing results.
              </p>

              {/* Mode Tabs */}
              <div className="numa-system-tabs" role="tablist">
                {modes.map((mode, index) => (
                  <button
                    key={mode.id}
                    role="tab"
                    aria-selected={activeTab === index}
                    className={`numa-tab-btn ${activeTab === index ? 'is-active' : ''}`}
                    onClick={() => setActiveTab(index)}
                  >
                    <span className="numa-tab-num">{mode.number}</span>
                    <div className="numa-tab-info">
                      <strong>{mode.name}</strong>
                      <small>{mode.tagline}</small>
                    </div>
                    <span className="numa-tab-indicator" />
                  </button>
                ))}
              </div>

              {/* Active Mode Description Box */}
              <div className="numa-system-details">
                <p>{current.description}</p>
                <div className="numa-system-metrics-row">
                  {current.metrics.map((m) => (
                    <div key={m.label} className="numa-sys-metric">
                      <small>{m.label}</small>
                      <strong>{m.val}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Live Parallax Visual Stage */}
            <div className="numa-system-right">
              <Parallax speed={-5} className="numa-sys-visual-canvas">
                <div className="numa-sys-card-frame">
                  <div className="numa-sys-card-header">
                    <div className="numa-sys-header-left">
                      <span className="numa-sys-pill">● System Mode: {current.name}</span>
                      <small className="numa-sys-status">Live Telemetry</small>
                    </div>
                    <div className="numa-sys-badge">{current.number} / 03</div>
                  </div>

                  {/* Interactive SVG Display responding to mode */}
                  <div className="numa-sys-chart-display">
                    {activeTab === 0 && (
                      <svg viewBox="0 0 400 240" className="numa-sys-svg animate-fade">
                        <circle cx="200" cy="120" r="95" stroke="#e8d5c4" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                        <circle cx="200" cy="120" r="65" stroke="#e8d5c4" strokeWidth="1" strokeDasharray="3 3" fill="none" />
                        <circle cx="200" cy="120" r="35" stroke="#e8d5c4" strokeWidth="1" strokeDasharray="2 2" fill="none" />
                        <line x1="200" y1="20" x2="200" y2="220" stroke="#e8d5c4" strokeWidth="1" />
                        <line x1="100" y1="120" x2="300" y2="120" stroke="#e8d5c4" strokeWidth="1" />
                        {/* Radar shape */}
                        <polygon
                          points="200,45 270,110 240,185 140,175 130,95"
                          fill="rgba(47, 79, 61, 0.18)"
                          stroke="#2f4f3d"
                          strokeWidth="2.5"
                        />
                        <circle cx="200" cy="45" r="5" fill="#c55f46" />
                        <circle cx="270" cy="110" r="5" fill="#2f4f3d" />
                        <circle cx="240" cy="185" r="5" fill="#2f4f3d" />
                        <circle cx="140" cy="175" r="5" fill="#2f4f3d" />
                        <circle cx="130" cy="95" r="5" fill="#2f4f3d" />
                        <text x="200" y="32" textAnchor="middle" fill="#1f2a25" fontSize="10" fontWeight="600">Local Audience (High Intent)</text>
                      </svg>
                    )}

                    {activeTab === 1 && (
                      <svg viewBox="0 0 400 240" className="numa-sys-svg animate-fade">
                        <defs>
                          <linearGradient id="creativeGrad" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="#c55f46" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#c55f46" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <line x1="40" y1="200" x2="360" y2="200" stroke="#e8d5c4" strokeWidth="1" />
                        <line x1="40" y1="140" x2="360" y2="140" stroke="#e8d5c4" strokeWidth="1" strokeDasharray="3 3" />
                        <line x1="40" y1="80" x2="360" y2="80" stroke="#e8d5c4" strokeWidth="1" strokeDasharray="3 3" />
                        <path
                          d="M40 180 Q120 170 180 130 T320 50 L360 40 L360 200 L40 200 Z"
                          fill="url(#creativeGrad)"
                        />
                        <path
                          d="M40 180 Q120 170 180 130 T320 50 L360 40"
                          fill="none"
                          stroke="#c55f46"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                        />
                        <circle cx="180" cy="130" r="5" fill="#2f4f3d" />
                        <circle cx="320" cy="50" r="6" fill="#c55f46" />
                        <text x="320" y="36" textAnchor="middle" fill="#c55f46" fontSize="11" fontWeight="700">Winner: 3.4x CTR</text>
                      </svg>
                    )}

                    {activeTab === 2 && (
                      <svg viewBox="0 0 400 240" className="numa-sys-svg animate-fade">
                        <defs>
                          <linearGradient id="scaleGrad" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="#2f4f3d" stopOpacity="0.35" />
                            <stop offset="100%" stopColor="#2f4f3d" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M40 190 C120 185, 180 160, 240 100 S320 40, 360 25 L360 200 L40 200 Z"
                          fill="url(#scaleGrad)"
                        />
                        <path
                          d="M40 190 C120 185, 180 160, 240 100 S320 40, 360 25"
                          fill="none"
                          stroke="#2f4f3d"
                          strokeWidth="4"
                          strokeLinecap="round"
                        />
                        <circle cx="240" cy="100" r="5" fill="#6d8f38" />
                        <circle cx="360" cy="25" r="6" fill="#2f4f3d" />
                        <text x="325" y="18" textAnchor="end" fill="#2f4f3d" fontSize="11" fontWeight="700">Scaling: 4.2x ROAS</text>
                      </svg>
                    )}
                  </div>

                  <div className="numa-sys-card-footer">
                    <div className="numa-sys-live-signal">
                      <span className="pulse-dot" />
                      <span>Continuous Optimization Cycle</span>
                    </div>
                    <span className="numa-sys-tag">Auto-Adjusted Weekly</span>
                  </div>
                </div>

                {/* Floating telemetry pills */}
                <Parallax speed={7} className="numa-sys-floating-chip chip-left">
                  <span>✦</span> High Intent Leads Only
                </Parallax>
                <Parallax speed={-9} className="numa-sys-floating-chip chip-right">
                  <span>📈</span> Verified CAC Reduction
                </Parallax>
              </Parallax>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default InteractiveSystemSection
