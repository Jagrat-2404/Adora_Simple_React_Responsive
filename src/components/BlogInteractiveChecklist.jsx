import { useState } from 'react'

function BlogInteractiveChecklist({ items = [], title = 'Try This for Your Business' }) {
  const [checkedState, setCheckedState] = useState({})

  const toggleItem = (index) => {
    setCheckedState((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  const completedCount = Object.values(checkedState).filter(Boolean).length
  const totalCount = items.length
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0

  return (
    <div className="blog-checklist-card">
      <div className="blog-checklist-header">
        <div className="blog-checklist-title-group">
          <span className="blog-checklist-badge">Interactive Action Plan</span>
          <h3 className="blog-checklist-title">{title}</h3>
        </div>
        <div className="blog-checklist-stats">
          <span className="blog-checklist-count">
            <strong>{completedCount}</strong> / {totalCount} done
          </span>
          <div className="blog-checklist-progress-pill">
            <div
              className="blog-checklist-progress-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      <p className="blog-checklist-instructions">
        Click on any action item below as you implement it for your business:
      </p>

      <ul className="blog-checklist-list">
        {items.map((item, index) => {
          const isChecked = !!checkedState[index]
          return (
            <li
              key={index}
              className={`blog-checklist-item ${isChecked ? 'completed' : ''}`}
              onClick={() => toggleItem(index)}
              role="checkbox"
              aria-checked={isChecked}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                  e.preventDefault()
                  toggleItem(index)
                }
              }}
            >
              <span className="blog-checkbox-box">
                {isChecked && (
                  <svg
                    className="blog-checkmark-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </span>
              <span className="blog-checklist-text">{item}</span>
            </li>
          )
        })}
      </ul>

      {completedCount > 0 && (
        <div className="blog-checklist-footer">
          {completedCount === totalCount ? (
            <div className="blog-checklist-congrats">
              🎉 <strong>Awesome!</strong> You’ve completed every action step for this strategy.
            </div>
          ) : (
            <button
              className="blog-checklist-reset-btn"
              onClick={() => setCheckedState({})}
            >
              Reset checklist
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default BlogInteractiveChecklist
