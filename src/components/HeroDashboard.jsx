function HeroDashboard() {
  return (
    <div className="hero-art" aria-label="Adora growth dashboard">
      <div className="dashboard-orbit orbit-one" /><div className="dashboard-orbit orbit-two" /><div className="dashboard-shadow" />
      <div className="dashboard-card">
        <div className="dashboard-top"><small>ADORA / OVERVIEW</small><span>● Live</span></div>
        <h2>Ideas, in motion.</h2><div className="dashboard-rule" />
        <div className="dashboard-stat-row"><div><small>People reached</small><strong>18,420</strong><em>↑ 24.8%<br />this month</em></div><div><small>Enquiries</small><strong>184</strong><em>↑ 31.4%<br />this month</em></div></div>
        <div className="dashboard-chart"><div><small>Visibility, week by week</small><strong>+47.2%</strong></div><button>Last 30 days⌄</button>
          <svg viewBox="0 0 420 120" aria-hidden="true"><defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop stopColor="#8fae67" stopOpacity=".38" /><stop offset="1" stopColor="#8fae67" stopOpacity="0" /></linearGradient></defs><path d="M0 92 C28 85 40 100 65 87 S100 100 125 77 S150 87 180 65 S207 79 235 56 S263 69 290 42 S320 53 345 24 S385 30 420 10 V120 H0Z" fill="url(#chartFill)" /><path d="M0 92 C28 85 40 100 65 87 S100 100 125 77 S150 87 180 65 S207 79 235 56 S263 69 290 42 S320 53 345 24 S385 30 420 10" fill="none" stroke="#174637" strokeWidth="3" /></svg>
          <div className="chart-key"><span>● Social content</span><span>● Meta Ads</span></div></div>
        <div className="dashboard-report">View report →</div>
      </div>
      <div className="floating-label momentum-label"><span>✳</span> Made for momentum</div><div className="floating-label next-label"><span>✓</span> Clear next step</div>
    </div>
  )
}
export default HeroDashboard
