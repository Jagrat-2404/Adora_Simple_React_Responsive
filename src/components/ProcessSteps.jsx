import { processSteps } from '../data/siteData'
function ProcessSteps() { return <div className="process-steps">{processSteps.map(step => <article key={step.number}><span>{step.number}</span><h2>{step.title}</h2><p>{step.description}</p><b>→</b></article>)}</div> }
export default ProcessSteps
