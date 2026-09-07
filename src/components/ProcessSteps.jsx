import { Parallax } from 'react-scroll-parallax'
import { processSteps } from '../data/siteData'

function ProcessSteps() {
  const speeds = [-8, 2, -12]

  return (
    <div className="process-steps numa-process-grid">
      {processSteps.map((step, index) => (
        <Parallax
          key={step.number}
          speed={speeds[index % speeds.length]}
          className={`numa-process-col proc-col-${index + 1}`}
        >
          <article className="numa-proc-card">
            <div className="numa-proc-top">
              <span className="numa-proc-num">{step.number}</span>
              <span className="numa-proc-phase">Stage 0{index + 1}</span>
            </div>
            <h2>{step.title}</h2>
            <p>{step.description}</p>
            <div className="numa-proc-arrow">
              <span>Next Step</span>
              <b>→</b>
            </div>
          </article>
        </Parallax>
      ))}
    </div>
  )
}

export default ProcessSteps
