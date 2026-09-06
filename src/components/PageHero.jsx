import Container from './Container'
import SectionLabel from './SectionLabel'
function PageHero({ label, title, italicTitle, description }) {
  return <section className="page-hero"><Container><SectionLabel>{label}</SectionLabel><h1>{title}<br /><em>{italicTitle}</em></h1><p>{description}</p></Container></section>
}
export default PageHero
