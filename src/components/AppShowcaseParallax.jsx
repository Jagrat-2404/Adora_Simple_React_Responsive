import { Parallax } from 'react-scroll-parallax'
import Container from './Container'
import SectionLabel from './SectionLabel'

function AppShowcaseParallax() {
  return (
    <section className="section numa-app-section" aria-label="Real-time growth dashboard">
      <Container>
        <div className="numa-app-header">
          <SectionLabel>Always in control</SectionLabel>
          <h2>Clear reports.<br /><em>Zero marketing jargon.</em></h2>
          <p className="numa-app-subtitle">
            Every dollar tracked, every lead accounted for. Receive real-time notifications and transparent weekly insights directly on your phone.
          </p>
        </div>

        <div className="numa-app-stage">
          {/* Parallax Floating Notification 1 (Top Left) */}
          <Parallax speed={-10} className="numa-app-notif notif-top-left">
            <div className="notif-card">
              <span className="notif-icon notif-icon-lead">🔔</span>
              <div className="notif-content">
                <div className="notif-meta">
                  <strong>New Inbound Lead</strong>
                  <time>2m ago</time>
                </div>
                <p>Commercial client requested quote via Meta Ad</p>
                <span className="notif-tag">Verified Enquiry</span>
              </div>
            </div>
          </Parallax>

          {/* Parallax Floating Notification 2 (Top Right) */}
          <Parallax speed={11} className="numa-app-notif notif-top-right">
            <div className="notif-card">
              <span className="notif-icon notif-icon-roas">📈</span>
              <div className="notif-content">
                <div className="notif-meta">
                  <strong>Weekly Performance</strong>
                  <time>Today, 9:00</time>
                </div>
                <p>+184% local reach • 4.1x Meta Ads ROAS</p>
                <span className="notif-tag">Campaign Exceeding Target</span>
              </div>
            </div>
          </Parallax>

          {/* Central Smartphone Mockup */}
          <div className="numa-phone-wrapper">
            <div className="numa-phone-frame">
              {/* Speaker / Dynamic Island */}
              <div className="numa-phone-notch">
                <span className="notch-sensor" />
                <span className="notch-camera" />
              </div>

              {/* Screen Contents */}
              <div className="numa-phone-screen">
                <div className="phone-top-bar">
                  <span>9:41</span>
                  <span>●●● 5G</span>
                </div>

                <div className="phone-app-header">
                  <div>
                    <small>ADORA CLIENT DASHBOARD</small>
                    <h3>Live Overview</h3>
                  </div>
                  <div className="phone-avatar">FS</div>
                </div>

                {/* Stat Cards inside Phone */}
                <div className="phone-metrics-card">
                  <div className="phone-stat-header">
                    <span>This Month's Return</span>
                    <span className="phone-trend">+28.4%</span>
                  </div>
                  <div className="phone-big-num">3.9x <small>ROAS</small></div>
                  <div className="phone-mini-bar">
                    <div className="phone-mini-progress" style={{ width: '82%' }} />
                  </div>
                </div>

                {/* Live Channel Breakdowns */}
                <div className="phone-channel-list">
                  <div className="phone-channel-item">
                    <div className="phone-channel-icon ig-icon">📸</div>
                    <div className="phone-channel-info">
                      <strong>Instagram Growth</strong>
                      <small>18.4K Impressions</small>
                    </div>
                    <span className="phone-channel-val">+42%</span>
                  </div>

                  <div className="phone-channel-item">
                    <div className="phone-channel-icon meta-icon">🎯</div>
                    <div className="phone-channel-info">
                      <strong>Meta Lead Ads</strong>
                      <small>38 Qualified Enquiries</small>
                    </div>
                    <span className="phone-channel-val">$14.20/lead</span>
                  </div>

                  <div className="phone-channel-item">
                    <div className="phone-channel-icon creative-icon">🎨</div>
                    <div className="phone-channel-info">
                      <strong>Creative Fatigue</strong>
                      <small>All creatives fresh</small>
                    </div>
                    <span className="phone-channel-val text-green">Optimal</span>
                  </div>
                </div>

                <div className="phone-action-btn">
                  <span>Request Strategy Call →</span>
                </div>
              </div>
            </div>
          </div>

          {/* Parallax Floating Notification 3 (Bottom Left) */}
          <Parallax speed={-14} className="numa-app-notif notif-bottom-left">
            <div className="notif-card">
              <span className="notif-icon notif-icon-creative">✨</span>
              <div className="notif-content">
                <div className="notif-meta">
                  <strong>Fresh Creative Live</strong>
                  <time>1h ago</time>
                </div>
                <p>3 video reels launched targeting local 25-45 demographic</p>
                <span className="notif-tag">A/B Testing Active</span>
              </div>
            </div>
          </Parallax>

          {/* Parallax Floating Notification 4 (Bottom Right) */}
          <Parallax speed={15} className="numa-app-notif notif-bottom-right">
            <div className="notif-card">
              <span className="notif-icon notif-icon-budget">⚡</span>
              <div className="notif-content">
                <div className="notif-meta">
                  <strong>Smart Reallocation</strong>
                  <time>4h ago</time>
                </div>
                <p>Budget auto-shifted to ad set #2 producing lowest CPL</p>
                <span className="notif-tag">Auto Optimized</span>
              </div>
            </div>
          </Parallax>
        </div>
      </Container>
    </section>
  )
}

export default AppShowcaseParallax
