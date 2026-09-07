import { useEffect, useRef, useState } from 'react'
import { Parallax } from 'react-scroll-parallax'

const stories = [
  {
    number: '01',
    eyebrow: 'Start with clarity',
    title: 'A strategy your business can actually use.',
    copy: 'We find the audience, message and channels that make the strongest first impression.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1100&q=85',
    alt: 'A team planning a marketing strategy together',
  },
  {
    number: '02',
    eyebrow: 'Create what connects',
    title: 'Content that makes people pause and remember.',
    copy: 'Thoughtful visuals and clear words turn your everyday work into a brand people want to follow.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1100&q=85',
    alt: 'Creative team sharing ideas in a meeting',
  },
  {
    number: '03',
    eyebrow: 'Keep growing',
    title: 'Campaigns that turn attention into action.',
    copy: 'We review what is working, refine the next move, and build steady momentum for your business.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1100&q=85',
    alt: 'Colleagues reviewing a marketing report',
  },
]

function GrowthParallax() {
  const [active, setActive] = useState(0)
  const stepRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(Number(entry.target.dataset.index))
      }),
      { rootMargin: '-35% 0px -45% 0px', threshold: 0 },
    )
    stepRefs.current.forEach((step) => step && observer.observe(step))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="growth-parallax" aria-labelledby="growth-story-title">
      <div className="growth-parallax-intro">
        <p className="section-label"><i />Scroll to see the difference</p>
        <h2 id="growth-story-title">Small steps.<br /><em>Real momentum.</em></h2>
      </div>
      <div className="growth-story">
        <div className="growth-steps" aria-label="Our approach">
          {stories.map((story, index) => <article
            className={active === index ? 'is-active' : ''}
            data-index={index}
            key={story.number}
            ref={(element) => { stepRefs.current[index] = element }}
          >
            <span>{story.number}</span>
            <p>{story.eyebrow}</p>
            <h3>{story.title}</h3>
            <div className="growth-step-copy">{story.copy}</div>
          </article>)}
        </div>
        <div className="growth-visual" aria-live="polite">
          <Parallax speed={-8} className="growth-orb growth-orb-one" />
          <Parallax speed={7} className="growth-orb growth-orb-two" />
          <div className="growth-photo-frame">
            {stories.map((story, index) => <img key={story.image} className={active === index ? 'is-active' : ''} src={story.image} alt={active === index ? story.alt : ''} />)}
          </div>
          <div className="growth-caption"><span>{stories[active].number}</span><strong>{stories[active].eyebrow}</strong></div>
        </div>
      </div>
    </section>
  )
}

export default GrowthParallax
