import { Link } from 'react-router-dom'

function BlogCard({ blog, featured = false }) {
  const {
    slug,
    title,
    subtitle,
    category,
    readTime,
    publishedDate,
    author,
    excerpt,
    badge,
    id,
  } = blog

  // Dynamic visual banner gradients matching Adora's palette
  const getBannerGradient = (cat) => {
    switch (cat) {
      case 'Instagram Strategy':
        return 'linear-gradient(135deg, rgba(237, 180, 151, 0.35) 0%, rgba(47, 79, 61, 0.4) 100%)'
      case 'Meta Ads':
        return 'linear-gradient(135deg, rgba(47, 79, 61, 0.5) 0%, rgba(29, 52, 43, 0.7) 100%)'
      case 'Branding & Design':
        return 'linear-gradient(135deg, rgba(215, 183, 125, 0.4) 0%, rgba(243, 229, 208, 0.6) 100%)'
      default:
        return 'linear-gradient(135deg, rgba(237, 180, 151, 0.25) 0%, rgba(215, 183, 125, 0.3) 100%)'
    }
  }

  const getCategoryIcon = (cat) => {
    switch (cat) {
      case 'Instagram Strategy':
        return '📱'
      case 'Meta Ads':
        return '🎯'
      case 'Branding & Design':
        return '✦'
      default:
        return '📈'
    }
  }

  if (featured) {
    return (
      <article className="blog-card blog-card-featured">
        <div
          className="blog-card-visual"
          style={{ background: getBannerGradient(category) }}
        >
          <div className="blog-card-visual-pattern" />
          <div className="blog-card-badge-row">
            <span className="blog-category-tag">
              <span className="tag-icon">{getCategoryIcon(category)}</span>
              {category}
            </span>
            {badge && <span className="blog-pill-badge">✦ {badge}</span>}
          </div>
          <div className="blog-card-hero-icon-wrap">
            <span className="blog-hero-symbol">{getCategoryIcon(category)}</span>
          </div>
          <span className="blog-number-stamp">FEATURED · {id < 10 ? `0${id}` : id}</span>
        </div>

        <div className="blog-card-content">
          <div className="blog-meta-row">
            <span className="blog-date">{publishedDate}</span>
            <span className="blog-dot">·</span>
            <span className="blog-readtime">⏱ {readTime}</span>
          </div>

          <h2 className="blog-featured-title">
            <Link to={`/blog/${slug}`}>{title}</Link>
          </h2>

          <p className="blog-featured-excerpt">{subtitle || excerpt}</p>

          <div className="blog-card-footer">
            <div className="blog-author-strip">
              <div className="blog-author-avatar">{author.avatar}</div>
              <div className="blog-author-meta">
                <strong>{author.name}</strong>
                <small>{author.role}</small>
              </div>
            </div>

            <Link to={`/blog/${slug}`} className="blog-read-cta" aria-label={`Read ${title}`}>
              <span>Read article</span>
              <span className="cta-arrow" aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className="blog-card">
      <div
        className="blog-card-visual"
        style={{ background: getBannerGradient(category) }}
      >
        <div className="blog-card-visual-pattern" />
        <div className="blog-card-badge-row">
          <span className="blog-category-tag">
            <span className="tag-icon">{getCategoryIcon(category)}</span>
            {category}
          </span>
          <span className="blog-readtime">⏱ {readTime}</span>
        </div>
        <div className="blog-card-hero-icon-wrap mini">
          <span className="blog-hero-symbol">{getCategoryIcon(category)}</span>
        </div>
        <span className="blog-number-stamp">#{id < 10 ? `0${id}` : id}</span>
      </div>

      <div className="blog-card-content">
        <div className="blog-meta-row">
          <span className="blog-date">{publishedDate}</span>
          {badge && (
            <>
              <span className="blog-dot">·</span>
              <span className="blog-micro-badge">{badge}</span>
            </>
          )}
        </div>

        <h3 className="blog-card-title">
          <Link to={`/blog/${slug}`}>{title}</Link>
        </h3>

        <p className="blog-card-excerpt">{excerpt}</p>

        <div className="blog-card-footer">
          <div className="blog-author-strip mini">
            <div className="blog-author-avatar">{author.avatar}</div>
            <div className="blog-author-meta">
              <strong>{author.name}</strong>
            </div>
          </div>

          <Link to={`/blog/${slug}`} className="blog-read-cta" aria-label={`Read ${title}`}>
            <span>Read</span>
            <span className="cta-arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  )
}

export default BlogCard
