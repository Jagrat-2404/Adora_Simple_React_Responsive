import { useState } from 'react'

function BlogFaqAccordion({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(0) // First open by default

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index))
  }

  if (!faqs || faqs.length === 0) return null

  return (
    <div className="blog-faq-accordion-wrap">
      <div className="blog-faq-list">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index
          return (
            <div
              key={index}
              className={`blog-faq-item ${isOpen ? 'active' : ''}`}
            >
              <button
                className="blog-faq-question"
                onClick={() => handleToggle(index)}
                aria-expanded={isOpen}
              >
                <span className="blog-faq-q-indicator">Q{index + 1}</span>
                <span className="blog-faq-title">{faq.q}</span>
                <span className={`blog-faq-chevron ${isOpen ? 'rotated' : ''}`} aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </button>
              <div
                className={`blog-faq-answer-collapse ${isOpen ? 'expanded' : ''}`}
                style={{
                  maxHeight: isOpen ? '300px' : '0px',
                }}
              >
                <div className="blog-faq-answer-inner">
                  <p>{faq.a}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BlogFaqAccordion
