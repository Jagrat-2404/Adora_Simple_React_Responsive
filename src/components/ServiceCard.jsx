import { Link } from 'react-router-dom'
import Icon from './Icon'
function ServiceCard({ service }) { return <article className="service-card"><div className="service-icon"><Icon name={service.icon} size={25} /></div><div><p className="service-index">{service.number} / {service.name}</p><h2>{service.title}</h2><p>{service.description}</p><ul>{service.points.map(point => <li key={point}><Icon name="check" size={14} /> {point}</li>)}</ul></div><Link className="text-link service-link" to="/contact">Let’s talk <Icon name="arrow" size={15} /></Link></article> }
export default ServiceCard
