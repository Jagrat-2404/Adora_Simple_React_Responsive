import Container from '../components/Container'
import PageHero from '../components/PageHero'
import Icon from '../components/Icon'
import { projects } from '../data/siteData'
function Portfolio() { return <><PageHero label="Selected work" title="Things we’ve" italicTitle="helped build." description="A few examples of digital products, websites and experiences our team can create."/><section className="section portfolio"><Container><div className="project-grid">{projects.map(project => <article className="project-card" key={project.title}><div className="project-image"><Icon name={project.icon} size={56} /></div><div className="project-content"><span className="project-category">{project.category}</span><h3>{project.title}</h3><p>{project.description}</p></div></article>)}</div></Container></section></> }
export default Portfolio
