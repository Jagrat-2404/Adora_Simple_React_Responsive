import Container from '../components/Container'
import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'
function Contact() {
  return <><PageHero label="Let's talk" title="Your business deserves" italicTitle="to stand out." description="Whether you want more awareness, more leads, or stronger online growth, our team is ready to help with result-driven digital marketing." />
    <section className="section contact contact-section"><Container className="contact-grid"><div><h2>Start with<br /><em>a conversation.</em></h2><p>Tell us about your business and goals. We will explore the right social media and advertising strategy to help you reach more customers.</p><div className="contact-details"><a href="mailto:info@adorasolution.in">info@adorasolution.in</a><a href="tel:+919824900460">+91 98249 00460</a><a href="tel:+919327780465">+91 93277 80465</a></div></div><ContactForm /></Container></section>
  </>
}
export default Contact
