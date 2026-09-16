import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Parallax } from 'react-scroll-parallax'
import Container from '../components/Container'
import PageHero from '../components/PageHero'
import BlogCard from '../components/BlogCard'
import SectionLabel from '../components/SectionLabel'
import Button from '../components/Button'
import { blogs, blogCategories } from '../data/blogsData'

function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  // Filter blogs based on category & search term
  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesCategory =
        selectedCategory === 'All' || blog.category === selectedCategory

      const matchesSearch =
        searchQuery.trim() === '' ||
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.category.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  // Featured article is the first blog when 'All' category and no search, or first matching
  const featuredBlog = useMemo(() => {
    if (filteredBlogs.length > 0) {
      return filteredBlogs[0]
    }
    return null
  }, [filteredBlogs])

  const remainingBlogs = useMemo(() => {
    if (!featuredBlog) return []
    return filteredBlogs.filter((b) => b.id !== featuredBlog.id)
  }, [filteredBlogs, featuredBlog])

  return (
    <>
      <PageHero
        label="Adora Knowledge Hub"
        title="Practical marketing,"
        italicTitle="proven for local growth."
        description="Jargon-free guides on Instagram marketing, high-converting Meta Ads, brand identity, and content systems tailored for ambitious local businesses."
        badge1="✦ 12 Comprehensive Guides"
        badge2="● Real-World Strategy"
      />

      <section className="section blog-hub-section">
        <Container>
          {/* Filter and Search Bar */}
          <div className="blog-controls-wrapper">
            <div className="blog-category-filter" role="tablist" aria-label="Blog categories">
              {blogCategories.map((cat) => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={selectedCategory === cat}
                  className={`blog-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                  <span className="filter-count">
                    {cat === 'All'
                      ? blogs.length
                      : blogs.filter((b) => b.category === cat).length}
                  </span>
                </button>
              ))}
            </div>

            <div className="blog-search-box">
              <span className="search-icon" aria-hidden="true">🔍</span>
              <input
                type="search"
                placeholder="Search articles, ads, reels, tips..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="blog-search-input"
                aria-label="Search articles"
              />
              {searchQuery && (
                <button
                  className="search-clear-btn"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Results feedback if searching */}
          {searchQuery && (
            <div className="blog-search-status">
              <span>
                Found <strong>{filteredBlogs.length}</strong> {filteredBlogs.length === 1 ? 'article' : 'articles'} matching &ldquo;{searchQuery}&rdquo;
              </span>
              <button
                className="blog-reset-filter-link"
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('All')
                }}
              >
                Reset filters
              </button>
            </div>
          )}

          {/* Featured Spotlight Card (if matches exist) */}
          {featuredBlog && (
            <div className="blog-featured-wrap">
              <Parallax speed={-2}>
                <BlogCard blog={featuredBlog} featured={true} />
              </Parallax>
            </div>
          )}

          {/* Remaining Articles Grid */}
          {remainingBlogs.length > 0 ? (
            <div className="blog-grid-wrap">
              <div className="blog-grid-header">
                <h3>Latest Articles & Case Studies</h3>
                <span>Showing {remainingBlogs.length} {remainingBlogs.length === 1 ? 'guide' : 'guides'}</span>
              </div>
              <div className="blog-cards-grid">
                {remainingBlogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>
            </div>
          ) : !featuredBlog ? (
            <div className="blog-empty-state">
              <div className="empty-icon">📂</div>
              <h3>No articles found</h3>
              <p>We couldn&apos;t find any articles matching your search criteria. Try a different keyword or category.</p>
              <button
                className="button"
                onClick={() => {
                  setSelectedCategory('All')
                  setSearchQuery('')
                }}
              >
                Show all articles
              </button>
            </div>
          ) : null}
        </Container>
      </section>

      {/* Blog Hub Consultation Callout */}
      <section className="section green-section blog-consultation-section">
        <Container className="blog-cta-inner">
          <Parallax speed={-3}>
            <SectionLabel>Direct growth support</SectionLabel>
            <h2>
              Turn these strategies into<br />
              <em>predictable customers.</em>
            </h2>
            <p>
              Don&apos;t have the time to plan content, film reels, and manage Meta Ads campaigns every week? Adora Solution handles the complete workflow for your business.
            </p>
            <div className="actions">
              <Button to="/contact" variant="peach">
                Schedule a consultation <span>↗</span>
              </Button>
              <a
                href="https://wa.me/919824900460?text=Hi%20Adora%20Solution,%20I%20read%20your%20blog%20and%20want%20to%20discuss%20my%20marketing%20strategy."
                target="_blank"
                rel="noreferrer"
                className="button outline"
              >
                Chat on WhatsApp <span>💬</span>
              </a>
            </div>
          </Parallax>
        </Container>
      </section>
    </>
  )
}

export default BlogList
