import { useState } from 'react'

export default function Introduction() {
  const [expanded, setExpanded] = useState(true)

  return (
    <section className="area-1 hidden">
      <div className="content-wrapper">
        <img src="/img/dept.svg" alt="DEPT® logo" />
        <h1>DEPT® weather planner</h1>
        <div className="read-more-container">
          <div className="read-more">
            <p>
              Picture this: an application that doesn&apos;t just tell you the weather,
              but also helps you plan your activities around it. Imagine knowing exactly the perfect day to plan that hike,
              or when to avoid the outdoor concert due to an unexpected shower. That&apos;s exactly what the Dept Weather Planner offers you.
              {expanded && (
                <span className="read-more-text">
                  {' '}Built with cutting-edge technologies, our weather planner brings you accurate, real-time weather data with a slick and user-friendly interface.
                  But it&apos;s not just a weather app; it&apos;s an intuitive daily planner that syncs with the weather. With a range of activities to choose from,
                  it suggests the best options based on current and forecasted weather conditions.
                </span>
              )}
            </p>
            <button className="read-more-btn" onClick={() => setExpanded(!expanded)}>
              {expanded ? 'Read less' : 'Read more'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
