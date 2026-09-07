import { Parallax } from 'react-scroll-parallax'
import AnimatedCounter from './AnimatedCounter'

function HeroDashboard() {
  return (
    <div className="hero-art numa-hero-container" aria-label="Adora growth dashboard and team preview">
      {/* Parallax Background Glow & Orbits */}
      <Parallax speed={-6} className="hero-orbit-wrap">
        <div className="dashboard-orbit orbit-one" />
        <div className="dashboard-orbit orbit-two" />
        <div className="dashboard-shadow" />
      </Parallax>

      {/* Layer 1: Backing Team Photo Frame with Parallax Shift */}
      <Parallax speed={-14} className="hero-photo hero-photo-back">
        <img
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85"
          alt="Marketing team strategizing together"
          loading="eager"
        />
        <div className="hero-photo-overlay" />
      </Parallax>

      {/* Layer 2: Main Floating 3D Dashboard Card */}
      <Parallax speed={6} className="dashboard-parallax">
        <div className="dashboard-card numa-card-elevated">
          <div className="dashboard-top">
            <span className="numa-tag">ADORA / ENGINE</span>
            <span className="numa-live-pill"><span className="pulse-dot" /> Live Active</span>
          </div>
          
          <div className="numa-card-header">
            <h2>Growth, in motion.</h2>
            <p className="numa-sub">Real-time performance across channels</p>
          </div>
          
          <div className="dashboard-rule" />
          
          <div className="dashboard-stat-row">
            <div className="stat-box">
              <small>Social Visibility</small>
              <strong>
                <AnimatedCounter value="+84.6%" duration={1600} />
              </strong>
              <em>Creative content that connects</em>
            </div>
            <div className="stat-box">
              <small>Meta Ads Conversion</small>
              <strong>
                <AnimatedCounter value="3.8x" duration={1600} suffix=" ROAS" />
              </strong>
              <em>Targeted for verified leads</em>
            </div>
          </div>
          
          <div className="dashboard-chart numa-chart-box">
            <div className="chart-header">
              <div>
                <small>Trajectory</small>
                <strong>Consistent Upward</strong>
              </div>
              <span className="chart-badge">Updated today</span>
            </div>
            
            <svg viewBox="0 0 420 125" className="numa-svg-chart" aria-hidden="true">
              <defs>
                <linearGradient id="adoraChartFill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#2f4f3d" stopOpacity="0.32" />
                  <stop offset="100%" stopColor="#2f4f3d" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M0 98 C35 92, 60 102, 95 84 C130 66, 165 80, 200 58 C235 36, 270 48, 305 28 C340 12, 380 18, 420 6 V125 H0 Z"
                fill="url(#adoraChartFill)"
              />
              <path
                d="M0 98 C35 92, 60 102, 95 84 C130 66, 165 80, 200 58 C235 36, 270 48, 305 28 C340 12, 380 18, 420 6"
                fill="none"
                stroke="#2f4f3d"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <circle cx="200" cy="58" r="4.5" fill="#2f4f3d" />
              <circle cx="305" cy="28" r="4.5" fill="#2f4f3d" />
              <circle cx="420" cy="6" r="5" fill="#c55f46" />
            </svg>
            
            <div className="chart-key">
              <span><i className="legend-dot green-dot" /> Social Campaigns</span>
              <span><i className="legend-dot peach-dot" /> Meta Ads Funnel</span>
            </div>
          </div>
          
          <div className="dashboard-report">
            <span>Verified 2025-2026 Strategy</span>
            <span className="action-arrow">Explore →</span>
          </div>
        </div>
      </Parallax>

      {/* Floating Pill Badges at Varied Parallax Depths (Numa signature) */}
      <Parallax speed={-12} className="floating-pill-badge pill-top-left">
        <span className="pill-icon">✦</span>
        <div className="pill-text">
          <strong>Meta Ads Certified</strong>
          <small>Engineered for high CTR</small>
        </div>
      </Parallax>

      <Parallax speed={14} className="floating-pill-badge pill-top-right">
        <span className="pill-icon">⚡</span>
        <div className="pill-text">
          <strong>
            <AnimatedCounter value="72" duration={1400} suffix="h" /> Launch Speed
          </strong>
          <small>Fast go-to-market</small>
        </div>
      </Parallax>

      <Parallax speed={-7} className="floating-pill-badge pill-bottom-left">
        <span className="pill-icon">📈</span>
        <div className="pill-text">
          <strong>
            <AnimatedCounter value="3.8" duration={1500} suffix="x" /> Avg Return
          </strong>
          <small>Consistent scaling</small>
        </div>
      </Parallax>

      <Parallax speed={18} className="floating-pill-badge pill-bottom-right">
        <span className="pill-icon">✓</span>
        <div className="pill-text">
          <strong>
            <AnimatedCounter value="100" duration={1500} suffix="%" /> Tailored
          </strong>
          <small>No cookie-cutter templates</small>
        </div>
      </Parallax>
    </div>
  )
}

export default HeroDashboard
