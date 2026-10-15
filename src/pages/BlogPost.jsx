import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Parallax } from 'react-scroll-parallax'
import Container from '../components/Container'
import SectionLabel from '../components/SectionLabel'
import Button from '../components/Button'
import Icon from '../components/Icon'
import BlogReadingProgress from '../components/BlogReadingProgress'
import BlogInteractiveChecklist from '../components/BlogInteractiveChecklist'
import BlogFaqAccordion from '../components/BlogFaqAccordion'
import BlogInfographic from '../components/BlogInfographic'
import BlogCard from '../components/BlogCard'
import { blogs } from '../data/blogsData'

function BlogPost() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [copiedToast, setCopiedToast] = useState(false)
  const [activeSection, setActiveSection] = useState('quick-answer')

  const blog = blogs.find((b) => b.slug === slug)

  // Determine current, previous, and next articles (looped across all 12 blogs)
  const currentIndex = blogs.findIndex((b) => b.slug === slug)
  const prevBlog =
    currentIndex !== -1 && blogs.length > 1
      ? blogs[(currentIndex - 1 + blogs.length) % blogs.length]
      : null
  const nextBlog =
    currentIndex !== -1 && blogs.length > 1
      ? blogs[(currentIndex + 1) % blogs.length]
      : null

  // Related blogs (same category or adjacent)
  const relatedBlogs = blogs
    .filter((b) => b.slug !== slug && (b.category === blog?.category || Math.abs(b.id - (blog?.id || 0)) <= 2))
    .slice(0, 3)

  // Scroll spy for Table of Contents
  useEffect(() => {
    if (!blog) return

    const handleScrollSpy = () => {
      const headings = document.querySelectorAll('.blog-article-content [id]')
      const scrollPosition = window.scrollY + 180

      headings.forEach((heading) => {
        const top = heading.offsetTop
        const height = heading.offsetHeight
        const id = heading.getAttribute('id')
        if (scrollPosition >= top && scrollPosition < top + height + 500) {
          setActiveSection(id)
        }
      })
    }

    window.addEventListener('scroll', handleScrollSpy, { passive: true })
    return () => window.removeEventListener('scroll', handleScrollSpy)
  }, [blog])

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopiedToast(true)
    setTimeout(() => {
      setCopiedToast(false)
    }, 2800)
  }

  if (!blog) {
    return (
      <div className="blog-not-found-section">
        <Container>
          <SectionLabel>Article not found</SectionLabel>
          <h2>We couldn&apos;t locate that article.</h2>
          <p>The post you are searching for might have been moved or updated.</p>
          <Button to="/blog">Browse all articles <span>↗</span></Button>
        </Container>
      </div>
    )
  }

  const {
    title,
    subtitle,
    category,
    readTime,
    publishedDate,
    author,
    infographicType,
    quickAnswer,
    sections,
    checklist,
    myths,
    professionalSupport,
    faqs,
    conclusion,
  } = blog

  return (
    <>
      {/* Viewport Top Reading Progress Bar */}
      <BlogReadingProgress />

      {/* Article Hero */}
      <section className="blog-post-hero">
        <Parallax speed={-10} className="page-hero-ambient-orb orb-hero-left" />
        <Parallax speed={8} className="page-hero-ambient-orb orb-hero-right" />

        <Container className="blog-hero-inner">
          {/* Breadcrumb Navigation */}
          <nav className="blog-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="crumb-sep">/</span>
            <Link to="/blog">Blog</Link>
            <span className="crumb-sep">/</span>
            <span className="crumb-category">{category}</span>
          </nav>

          <div className="blog-hero-meta-strip">
            <span className="blog-hero-category-pill">
              <span className="pill-dot">●</span> {category}
            </span>
            <span className="blog-hero-readtime">⏱ {readTime}</span>
            <span className="blog-dot">·</span>
            <span className="blog-hero-date">{publishedDate}</span>
          </div>

          <h1 className="blog-post-title">{title}</h1>

          {subtitle && <p className="blog-post-subtitle">{subtitle}</p>}

          <div className="blog-hero-author-box">
            <div className="blog-author-avatar large">{author.avatar}</div>
            <div className="blog-author-details">
              <strong>{author.name}</strong>
              <span>{author.role} · Adora Solution</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Article Body with Sticky Table of Contents */}
      <section className="section blog-article-section">
        <Container className="blog-article-layout">
          {/* Floating Sticky Sidebar */}
          <aside className="blog-sidebar">
            <div className="blog-toc-sticky-box">
              <div className="blog-toc-header">
                <span className="toc-icon">📑</span>
                <h4>Table of Contents</h4>
              </div>
              <nav className="blog-toc-nav" aria-label="Article outline">
                <a
                  href="#quick-answer"
                  className={activeSection === 'quick-answer' ? 'active' : ''}
                >
                  Quick Answer
                </a>
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className={activeSection === s.id ? 'active' : ''}
                  >
                    {s.heading}
                  </a>
                ))}
                {checklist && checklist.length > 0 && (
                  <a
                    href="#action-checklist"
                    className={activeSection === 'action-checklist' ? 'active' : ''}
                  >
                    Action Checklist
                  </a>
                )}
                {myths && myths.length > 0 && (
                  <a
                    href="#myth-vs-fact"
                    className={activeSection === 'myth-vs-fact' ? 'active' : ''}
                  >
                    Myth vs Fact
                  </a>
                )}
                {faqs && faqs.length > 0 && (
                  <a
                    href="#faqs"
                    className={activeSection === 'faqs' ? 'active' : ''}
                  >
                    Frequently Asked Questions
                  </a>
                )}
                <a
                  href="#conclusion"
                  className={activeSection === 'conclusion' ? 'active' : ''}
                >
                  Conclusion
                </a>
              </nav>

              {/* Quick Share Widget */}
              <div className="blog-sidebar-share">
                <span className="share-label">Share this guide</span>
                <div className="share-icons-row">
                  <button
                    className="share-btn copy-btn"
                    onClick={handleCopyLink}
                    title="Copy article link"
                    aria-label="Copy link to clipboard"
                  >
                    🔗
                  </button>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(title + ' - ' + window.location.href)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="share-btn wa-btn"
                    title="Share on WhatsApp"
                    aria-label="Share on WhatsApp"
                  >
                    <Icon name="whatsapp" size={18} />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="share-btn in-btn"
                    title="Share on LinkedIn"
                    aria-label="Share on LinkedIn"
                  >
                    in
                  </a>
                </div>
              </div>

              {/* Direct Support Mini Card */}
              <div className="blog-sidebar-help-card">
                <h5>Need help scaling?</h5>
                <p>We build tailored social media & Meta Ad funnels for local businesses.</p>
                <Link to="/contact" className="sidebar-cta-link">
                  Talk to our team <span>→</span>
                </Link>
              </div>
            </div>
          </aside>

          {/* Article Main Content */}
          <article className="blog-article-content">
            {/* Mobile Table of Contents (Shown only on small screens) */}
            <div className="blog-mobile-toc">
              <details className="mobile-toc-details">
                <summary className="mobile-toc-summary">
                  <span className="mobile-toc-label">
                    <span aria-hidden="true">📑</span>
                    <span>Article Outline & Sections</span>
                  </span>
                  <span className="mobile-toc-chevron" aria-hidden="true">▾</span>
                </summary>
                <nav
                  className="mobile-toc-nav"
                  aria-label="Mobile Table of Contents"
                  onClick={(e) => {
                    if (e.target.tagName === 'A') {
                      e.target.closest('details')?.removeAttribute('open')
                    }
                  }}
                >
                  <a href="#quick-answer">⚡ Quick Answer</a>
                  {sections.map((s, sIdx) => (
                    <a key={s.id} href={`#${s.id}`}>
                      0{sIdx + 1}. {s.heading}
                    </a>
                  ))}
                  {checklist && checklist.length > 0 && (
                    <a href="#action-checklist">✦ Action Checklist</a>
                  )}
                  {myths && myths.length > 0 && (
                    <a href="#myth-vs-fact">⚖️ Myth vs Fact</a>
                  )}
                  {faqs && faqs.length > 0 && (
                    <a href="#faqs">❓ Frequently Asked Questions</a>
                  )}
                  <a href="#conclusion">🎯 Strategic Summary</a>
                </nav>
              </details>
            </div>

            {/* Quick Answer Callout */}
            <div id="quick-answer" className="blog-quick-answer-card">
              <div className="quick-answer-header">
                <span className="quick-answer-badge">⚡ Quick Answer</span>
                <span className="quick-answer-tag">Key Takeaway</span>
              </div>
              <p className="quick-answer-text">{quickAnswer}</p>
            </div>

            {/* Contextual Infographic / Diagram if applicable */}
            {infographicType && (
              <BlogInfographic type={infographicType} />
            )}

            {/* In-depth Sections */}
            {sections.map((section, idx) => (
              <section key={section.id} id={section.id} className="blog-content-section">
                <h2 className="section-heading">
                  <span className="heading-number">0{idx + 1}.</span> {section.heading}
                </h2>
                {section.content.map((paragraph, pIdx) => (
                  <p key={pIdx} className="article-body-text">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}

            {/* Interactive Checklist */}
            {checklist && checklist.length > 0 && (
              <div id="action-checklist" className="blog-section-spacing">
                <BlogInteractiveChecklist items={checklist} />
              </div>
            )}

            {/* Myth vs Fact Section */}
            {myths && myths.length > 0 && (
              <div id="myth-vs-fact" className="blog-myth-fact-section">
                <div className="myth-fact-header">
                  <SectionLabel>Common Misconceptions</SectionLabel>
                  <h3>Myth vs Fact</h3>
                  <p>Common false assumptions that cost local businesses reach, leads, and money:</p>
                </div>

                <div className="myth-fact-grid">
                  {myths.map((item, mIdx) => (
                    <div key={mIdx} className="myth-fact-card">
                      <div className="myth-block">
                        <span className="myth-tag">✕ Myth</span>
                        <p>{item.myth}</p>
                      </div>
                      <div className="fact-block">
                        <span className="fact-tag">✓ Fact</span>
                        <p>{item.fact}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Professional Support Callout */}
            {professionalSupport && (
              <div className="blog-support-callout">
                <div className="support-badge">Professional Support</div>
                <h4>When Should You Get Expert Help?</h4>
                <p>{professionalSupport}</p>
                <div className="support-actions">
                  <Link to="/contact" className="button">
                    Discuss your marketing <span>↗</span>
                  </Link>
                  <a
                    href="https://wa.me/919824900460?text=Hi%20Adora%20Solution,%20I%20want%20to%20discuss%20professional%20marketing%20support%20for%20my%20business."
                    target="_blank"
                    rel="noreferrer"
                    className="button outline"
                  >
                    <Icon name="whatsapp" size={18} />
                    <span>Quick WhatsApp Chat ↗</span>
                  </a>
                </div>
              </div>
            )}

            {/* FAQ Accordion */}
            {faqs && faqs.length > 0 && (
              <div id="faqs" className="blog-faqs-section">
                <div className="faqs-header">
                  <SectionLabel>Answers to frequent questions</SectionLabel>
                  <h3>Frequently Asked Questions</h3>
                </div>
                <BlogFaqAccordion faqs={faqs} />
              </div>
            )}

            {/* Conclusion */}
            <div id="conclusion" className="blog-conclusion-card">
              <span className="conclusion-badge">In Conclusion</span>
              <h3>Key Strategic Summary</h3>
              <p>{conclusion}</p>
              <div className="conclusion-company-note">
                <strong>Adora Solution</strong> helps ambitious businesses plan content around real customer questions and build predictable Meta Ad funnels.
                <div className="conclusion-cta-wrap">
                  <Link to="/contact" className="button peach">
                    Get in touch with Adora Solution <span>↗</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Post Bottom Share & Navigation */}
            <div className="blog-post-footer-bar">
              <div className="footer-share-group">
                <span>Share this article:</span>
                <button className="share-chip copy" onClick={handleCopyLink}>
                  🔗 Copy Link
                </button>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(title + ' - ' + window.location.href)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="share-chip wa"
                >
                  WhatsApp
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="share-chip in"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Prev / Next Post Links (Circular Loop) */}
            <div className="blog-prev-next-nav">
              {prevBlog && (
                <Link to={`/blog/${prevBlog.slug}`} className="prev-post-card">
                  <span className="nav-direction">← Previous Guide</span>
                  <strong className="nav-title">{prevBlog.title}</strong>
                </Link>
              )}

              {nextBlog && (
                <Link to={`/blog/${nextBlog.slug}`} className="next-post-card">
                  <span className="nav-direction">Next Guide →</span>
                  <strong className="nav-title">{nextBlog.title}</strong>
                </Link>
              )}
            </div>
          </article>
        </Container>
      </section>

      {/* Related Articles Carousel / Grid */}
      {relatedBlogs.length > 0 && (
        <section className="section blog-related-section">
          <Container>
            <div className="related-header">
              <SectionLabel>Continue Reading</SectionLabel>
              <h2>Related Strategic Guides</h2>
            </div>
            <div className="blog-cards-grid related-grid">
              {relatedBlogs.map((b) => (
                <BlogCard key={b.id} blog={b} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Toast Notification */}
      <div className={`blog-toast ${copiedToast ? 'show' : ''}`} role="status">
        ✓ Article link copied to your clipboard!
      </div>
    </>
  )
}

export default BlogPost
