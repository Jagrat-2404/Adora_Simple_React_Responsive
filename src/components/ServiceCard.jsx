import { Link } from 'react-router-dom'
function ServiceCard({ service }) { return <article className="service-card"><div className="service-icon">{service.icon}</div><div><p className="service-index">{service.number} / {service.name}</p><h2>{service.title}</h2><p>{service.description}</p><ul>{service.points.map(point => <li key={point}>✓ {point}</li>)}</ul></div><Link className="text-link service-link" to="/contact">Let’s talk <span>↗</span></Link></article> }
export default ServiceCard
