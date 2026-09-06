import Container from '../components/Container'
import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'
function Contact() { return <><PageHero label="Say hello" title="Ready when" italicTitle="you are." description="Have a project, an idea, or a feeling that something could be working better? Tell us a little about it."/><section className="section contact"><Container className="contact-grid"><div><h2>Let’s make<br /><em>something useful.</em></h2><p>We’ll reply by email or phone, usually with a few straightforward questions. If there’s a fit, we’ll suggest a short call and a simple next step.</p><div className="contact-details"><a href="mailto:info@adorasolution.in">info@adorasolution.in</a><a href="tel:+919824900460">+91 98249 00460</a></div></div><ContactForm /></Container></section></> }
export default Contact
