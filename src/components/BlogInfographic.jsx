// Contextual Infographic and Diagrammatic Visuals for Blog Posts

function BlogInfographic({ type }) {
  switch (type) {
    case 'funnel':
      return (
        <div className="blog-infographic-card">
          <div className="infographic-badge">Visual Blueprint · Conversion Funnel</div>
          <h4>The Instagram View-to-Enquiry Breakdown</h4>
          <p className="infographic-subtitle">
            Where 90% of prospective local customers drop off when views don't translate to sales conversations:
          </p>

          <div className="infographic-funnel-stages">
            <div className="funnel-stage stage-1">
              <div className="funnel-bar">
                <span className="funnel-label">1. Viral Post / Reel Views</span>
                <span className="funnel-metric">10,000+ Views</span>
              </div>
              <div className="funnel-friction">⚠️ High entertainment, but zero business context or offer relevance.</div>
            </div>

            <div className="funnel-stage stage-2">
              <div className="funnel-bar">
                <span className="funnel-label">2. Profile Visit</span>
                <span className="funnel-metric">~400 Visits</span>
              </div>
              <div className="funnel-friction">⚠️ Vague bio slogan ("making dreams happen") causes 75% instant bounce.</div>
            </div>

            <div className="funnel-stage stage-3">
              <div className="funnel-bar">
                <span className="funnel-label">3. Offer & Proof Inspection</span>
                <span className="funnel-metric">~60 Readers</span>
              </div>
              <div className="funnel-friction">⚠️ No clear process or answers to hesitation (pricing, timeline, suitability).</div>
            </div>

            <div className="funnel-stage stage-4 highlight">
              <div className="funnel-bar">
                <span className="funnel-label">4. Direct Customer Enquiry</span>
                <span className="funnel-metric">15–25 Qualified Leads</span>
              </div>
              <div className="funnel-success">✓ 1 clear next step (WhatsApp or Booking) + immediate follow-up.</div>
            </div>
          </div>
        </div>
      )

    case 'adsMatrix':
      return (
        <div className="blog-infographic-card">
          <div className="infographic-badge">Comparison Guide · Workflow & Control</div>
          <h4>Boosted Posts vs Meta Ads Manager at a Glance</h4>
          <p className="infographic-subtitle">
            Compare features to identify the right tool for your immediate advertising objective:
          </p>

          <div className="infographic-table-wrapper">
            <table className="infographic-table">
              <thead>
                <tr>
                  <th>Criteria</th>
                  <th>Boosted Post</th>
                  <th>Meta Ads Manager</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Primary Goal</strong></td>
                  <td>Quick visibility for existing posts</td>
                  <td>Measurable leads, sales & ROI funnels</td>
                </tr>
                <tr>
                  <td><strong>Audience Setup</strong></td>
                  <td>Basic age, gender & broad radius</td>
                  <td>Granular pin codes, custom & lookalike audiences</td>
                </tr>
                <tr>
                  <td><strong>Creative Control</strong></td>
                  <td>Single existing published feed post</td>
                  <td>A/B testing multiple headlines, videos & formats</td>
                </tr>
                <tr>
                  <td><strong>Lead Capture</strong></td>
                  <td>Direct profile visits or basic DM</td>
                  <td>Instant lead forms, WhatsApp API & CRM routing</td>
                </tr>
                <tr>
                  <td><strong>Best Used For</strong></td>
                  <td>Announcements, store events, local buzz</td>
                  <td>Predictable enquiry acquisition & ongoing growth</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )

    case 'brandPyramid':
      return (
        <div className="blog-infographic-card">
          <div className="infographic-badge">Architecture · Brand System</div>
          <h4>The 4 Pillars of a Recognisable Brand Identity</h4>
          <p className="infographic-subtitle">
            A cohesive identity is an interconnected ecosystem, not just an isolated logo icon:
          </p>

          <div className="infographic-pyramid">
            <div className="pyramid-level level-4">
              <div className="pyramid-num">04</div>
              <div className="pyramid-info">
                <strong>Everyday Experience & Follow-Through</strong>
                <p>Prompt enquiry replies, accurate deliverables, packaging, and authentic client care.</p>
              </div>
            </div>
            <div className="pyramid-level level-3">
              <div className="pyramid-num">03</div>
              <div className="pyramid-info">
                <strong>Tone of Voice & Messaging</strong>
                <p>Jargon-free copy, clear benefit claims, and consistent vocabulary across captions.</p>
              </div>
            </div>
            <div className="pyramid-level level-2">
              <div className="pyramid-num">02</div>
              <div className="pyramid-info">
                <strong>Visual Design System</strong>
                <p>Curated color palette, clear typography hierarchy, recognizable grid layout rules.</p>
              </div>
            </div>
            <div className="pyramid-level level-1">
              <div className="pyramid-num">01</div>
              <div className="pyramid-info">
                <strong>Positioning & Audience Promise</strong>
                <p>Who you serve, what specific problem you solve, and what makes you credible.</p>
              </div>
            </div>
          </div>
        </div>
      )

    case 'agencyScorecard':
      return (
        <div className="blog-infographic-card">
          <div className="infographic-badge">Agency Evaluation Scorecard</div>
          <h4>5 Questions to Ask Before Choosing a Marketing Agency</h4>
          <div className="infographic-scorecard-grid">
            <div className="scorecard-item">
              <div className="scorecard-icon">01</div>
              <div className="scorecard-text">
                <strong>Discovery Over Prescriptions</strong>
                <p>Do they ask deep questions about your ideal customers before pitching packages?</p>
              </div>
            </div>
            <div className="scorecard-item">
              <div className="scorecard-icon">02</div>
              <div className="scorecard-text">
                <strong>Strategic Context Behind Portfolios</strong>
                <p>Can they explain why a design format was chosen, not just show pretty mockups?</p>
              </div>
            </div>
            <div className="scorecard-item">
              <div className="scorecard-icon">03</div>
              <div className="scorecard-text">
                <strong>Transparent Approval Workflow</strong>
                <p>Is there a designated person, clear turnaround SLA, and easy feedback channel?</p>
              </div>
            </div>
            <div className="scorecard-item">
              <div className="scorecard-icon">04</div>
              <div className="scorecard-text">
                <strong>Decision-Driven Analytics</strong>
                <p>Do reports highlight enquiries and cost-per-lead, or only vanity like counts?</p>
              </div>
            </div>
            <div className="scorecard-item">
              <div className="scorecard-icon">05</div>
              <div className="scorecard-text">
                <strong>Asset & Account Ownership</strong>
                <p>Does your business maintain full administrative ownership of ad accounts and raw files?</p>
              </div>
            </div>
          </div>
        </div>
      )

    case 'contentMatrix':
      return (
        <div className="blog-infographic-card">
          <div className="infographic-badge">Framework · 30 Ideas Breakdown</div>
          <h4>The 5 Core Content Buckets for Local Businesses</h4>
          <p className="infographic-subtitle">
            Rotate through these five strategic themes to keep your audience engaged and ready to buy:
          </p>

          <div className="infographic-buckets-grid">
            <div className="bucket-card">
              <span className="bucket-tag">Bucket 01</span>
              <h5>Explain The Offer</h5>
              <p>Products in daily use, 3-step service guides, use-case comparisons & unboxings.</p>
            </div>
            <div className="bucket-card">
              <span className="bucket-tag">Bucket 02</span>
              <h5>Aid Decisions</h5>
              <p>Buyer checklists, common mistake breakdowns, care guides & jargon translations.</p>
            </div>
            <div className="bucket-card">
              <span className="bucket-tag">Bucket 03</span>
              <h5>People & Process</h5>
              <p>Meet the enquiry manager, dispatch behind-the-scenes & quality check routines.</p>
            </div>
            <div className="bucket-card">
              <span className="bucket-tag">Bucket 04</span>
              <h5>Specific Evidence</h5>
              <p>Genuine client reviews, project brief breakdowns & authentic before-and-afters.</p>
            </div>
            <div className="bucket-card">
              <span className="bucket-tag">Bucket 05</span>
              <h5>Interactive Action</h5>
              <p>Use-case polls, Q&A prompts, seasonal checklists & how-to-book walkthroughs.</p>
            </div>
          </div>
        </div>
      )

    case 'leadFilter':
      return (
        <div className="blog-infographic-card">
          <div className="infographic-badge">Lead Gen Architecture</div>
          <h4>The 4-Point High-Quality Lead Qualification Filter</h4>
          <div className="infographic-timeline">
            <div className="timeline-node">
              <span className="node-num">Step 1</span>
              <h6>Truth in Creative Hook</h6>
              <p>Specify exact service, trade vs retail scope, and budget tier directly in the visual.</p>
            </div>
            <div className="timeline-node">
              <span className="node-num">Step 2</span>
              <h6>2–3 Intent Questions</h6>
              <p>Ask location, required timeframe, or specific service need to filter casual clicks.</p>
            </div>
            <div className="timeline-node">
              <span className="node-num">Step 3</span>
              <h6>Direct Destination Routing</h6>
              <p>Land qualified respondents into WhatsApp or a dedicated high-speed mobile landing page.</p>
            </div>
            <div className="timeline-node">
              <span className="node-num">Step 4</span>
              <h6>&lt;15-Minute Follow-Up</h6>
              <p>Reach out while intent is fresh; log conversation reasons to continuously refine ad targeting.</p>
            </div>
          </div>
        </div>
      )

    case 'formatMatrix':
      return (
        <div className="blog-infographic-card">
          <div className="infographic-badge">Format Selection Matrix</div>
          <h4>When to Use Reels, Carousels, or Static Posts</h4>
          <div className="infographic-table-wrapper">
            <table className="infographic-table">
              <thead>
                <tr>
                  <th>Format</th>
                  <th>Best Communication Job</th>
                  <th>Key Strength</th>
                  <th>Common Pitfall to Avoid</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Video Reels</strong></td>
                  <td>Demonstrations, movement, process explanation, personal founder video</td>
                  <td>High organic discovery & emotional connection</td>
                  <td>Posting without captions or delaying the core hook</td>
                </tr>
                <tr>
                  <td><strong>Carousels</strong></td>
                  <td>Step-by-step checklists, comparisons, multi-stage tutorials, FAQs</td>
                  <td>High bookmark/save rate & repeat impressions</td>
                  <td>Stretching one tiny idea across 10 empty slides</td>
                </tr>
                <tr>
                  <td><strong>Static Posts</strong></td>
                  <td>Clear single announcements, striking product hero shots, quotes</td>
                  <td>Instant comprehension with zero friction</td>
                  <td>Posting aesthetic photos without helpful context</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )

    case 'calendarSystem':
      return (
        <div className="blog-infographic-card">
          <div className="infographic-badge">Operational Blueprint</div>
          <h4>Backward Planning: From Goal to Published Asset</h4>
          <div className="infographic-timeline">
            <div className="timeline-node">
              <span className="node-num">Week -2</span>
              <h6>Priority & Customer Questions</h6>
              <p>Select 1 primary monthly focus and harvest 10 real objections from customer DMs.</p>
            </div>
            <div className="timeline-node">
              <span className="node-num">Week -1</span>
              <h6>Complete Creative Briefs</h6>
              <p>Define headline, format, asset needs, CTA, and fact-check technical specifications.</p>
            </div>
            <div className="timeline-node">
              <span className="node-num">Batch Day</span>
              <h6>Consolidated Shoot & Design</h6>
              <p>Shoot video reels and product photos in one scheduled half-day session.</p>
            </div>
            <div className="timeline-node">
              <span className="node-num">Publish</span>
              <h6>Scheduled Deployment & Feedback</h6>
              <p>Deploy assets reliably and log incoming questions for the following month’s plan.</p>
            </div>
          </div>
        </div>
      )

    case 'jewelleryFramework':
      return (
        <div className="blog-infographic-card">
          <div className="infographic-badge">Industry Guide · Jewellery Marketing</div>
          <h4>The 4 Pillars of Jewellery Trust in Digital Content</h4>
          <div className="infographic-buckets-grid">
            <div className="bucket-card">
              <span className="bucket-tag">Pillar 01</span>
              <h5>Scale & Detail Accuracy</h5>
              <p>Clasp macro close-ups, finger/wrist proportions, and true-to-life metal undertones.</p>
            </div>
            <div className="bucket-card">
              <span className="bucket-tag">Pillar 02</span>
              <h5>Audience Distinction</h5>
              <p>Distinct catalogs and CTAs for retail gift shoppers vs wholesale boutique buyers.</p>
            </div>
            <div className="bucket-card">
              <span className="bucket-tag">Pillar 03</span>
              <h5>Substantiated Claims</h5>
              <p>Explain anti-tarnish limits, hypoallergenic base metals, and documented care routines.</p>
            </div>
            <div className="bucket-card">
              <span className="bucket-tag">Pillar 04</span>
              <h5>Authentic Verification</h5>
              <p>Real workshop clips, tamper-proof packaging demos, and verified customer wear photos.</p>
            </div>
          </div>
        </div>
      )

    case 'photographyGuide':
      return (
        <div className="blog-infographic-card">
          <div className="infographic-badge">Visual Standard · Product Photography</div>
          <h4>The Dual-Track Photography Framework</h4>
          <div className="infographic-split-grid">
            <div className="split-box">
              <span className="split-badge">Track A · Clean Studio Shot</span>
              <h5>Inspection & Detail</h5>
              <ul>
                <li>Seamless neutral background highlighting product silhouette</li>
                <li>Consistent lighting angles across the entire catalogue</li>
                <li>Close-ups of textures, fastenings, labels, and ports</li>
                <li>True color representation with zero deceptive retouching</li>
              </ul>
            </div>
            <div className="split-box">
              <span className="split-badge">Track B · Lifestyle Context</span>
              <h5>Emotion & Real-World Scale</h5>
              <ul>
                <li>Plausible everyday environment (desk, tabletop, bag, hand)</li>
                <li>Demonstrates human scale and ergonomics naturally</li>
                <li>Subtle props that complement without distracting</li>
                <li>Direct alignment with customer usage situations</li>
              </ul>
            </div>
          </div>
        </div>
      )

    case 'strategyFlywheel':
      return (
        <div className="blog-infographic-card">
          <div className="infographic-badge">Strategic Publishing Engine</div>
          <h4>The 5-Step Social Media Growth Flywheel</h4>
          <div className="infographic-funnel-stages">
            <div className="funnel-stage stage-1">
              <div className="funnel-bar">
                <span className="funnel-label">1. Business Priority Alignment</span>
                <span className="funnel-metric">Focus</span>
              </div>
              <div className="funnel-success">Define the one product line, service, or customer barrier to solve this month.</div>
            </div>
            <div className="funnel-stage stage-2">
              <div className="funnel-bar">
                <span className="funnel-label">2. Audience Journey Mapping</span>
                <span className="funnel-metric">Context</span>
              </div>
              <div className="funnel-success">Create distinct posts for discovery (context), evaluation (detail), and decision (CTA).</div>
            </div>
            <div className="funnel-stage stage-3">
              <div className="funnel-bar">
                <span className="funnel-label">3. Role-Based Creative Briefs</span>
                <span className="funnel-metric">Execution</span>
              </div>
              <div className="funnel-success">Every post solves one specific communication problem before touching design tools.</div>
            </div>
            <div className="funnel-stage stage-4 highlight">
              <div className="funnel-bar">
                <span className="funnel-label">4. Monthly Decision-Driven Review</span>
                <span className="funnel-metric">Scale</span>
              </div>
              <div className="funnel-success">Review enquiries and questions generated, then adapt next month’s topics accordingly.</div>
            </div>
          </div>
        </div>
      )

    case 'profileArchitecture':
      return (
        <div className="blog-infographic-card">
          <div className="infographic-badge">Profile Conversion Architecture</div>
          <h4>Anatomy of a High-Converting Business Profile</h4>
          <div className="infographic-scorecard-grid">
            <div className="scorecard-item">
              <div className="scorecard-icon">Bio</div>
              <div className="scorecard-text">
                <strong>Specific Promise + Location</strong>
                <p>State exactly who you serve and your service territory. Skip generic inspirational quotes.</p>
              </div>
            </div>
            <div className="scorecard-item">
              <div className="scorecard-icon">Pin</div>
              <div className="scorecard-text">
                <strong>3 Pinned Orientation Posts</strong>
                <p>1. Who We Are & What We Do · 2. Signature Case Study · 3. How to Work With Us.</p>
              </div>
            </div>
            <div className="scorecard-item">
              <div className="scorecard-icon">Story</div>
              <div className="scorecard-text">
                <strong>Question-Led Highlights</strong>
                <p>Categorized into Services, Work, FAQs, Reviews, and Pricing/Process overview.</p>
              </div>
            </div>
            <div className="scorecard-item">
              <div className="scorecard-icon">Link</div>
              <div className="scorecard-text">
                <strong>1-Tap Frictionless Destination</strong>
                <p>A fast-loading WhatsApp direct link or relevant enquiry landing page that matches the bio.</p>
              </div>
            </div>
          </div>
        </div>
      )

    default:
      return null
  }
}

export default BlogInfographic
