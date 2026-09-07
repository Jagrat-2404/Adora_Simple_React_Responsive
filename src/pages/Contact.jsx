import { Parallax } from 'react-scroll-parallax'
import Container from '../components/Container'
import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'
import SectionLabel from '../components/SectionLabel'

function Contact() {
  return (
    <>
      <PageHero
        label="Let's talk"
        title="Your business deserves"
        italicTitle="to stand out."
        description="Whether you want more awareness, more leads, or stronger online growth, our team is ready to help with result-driven digital marketing."
        badge1="✦ Direct Founder Strategy"
        badge2="● 24h Response Time"
      />

      <section className="section contact contact-section numa-contact-section">
        <Container className="contact-grid numa-contact-grid">
          <Parallax speed={-4} className="numa-contact-info-col">
            <SectionLabel>Get in touch</SectionLabel>
            <h2>
              Start with<br />
              <em>a conversation.</em>
            </h2>
            <p>
              Tell us about your business and goals. We will explore the right social media and advertising strategy to help you reach more customers.
            </p>

            <div className="contact-details numa-contact-details">
              <a href="mailto:info@adorasolution.in" className="numa-contact-link">
                <span className="link-icon">✉</span> info@adorasolution.in
              </a>
              <a href="tel:+919824900460" className="numa-contact-link">
                <span className="link-icon">📞</span> +91 98249 00460
              </a>
              <a href="tel:+919327780465" className="numa-contact-link">
                <span className="link-icon">📞</span> +91 93277 80465
              </a>
            </div>

            <div className="numa-contact-floating-strip">
              <div className="contact-pill">
                <span>⚡</span>
                <small>Quick 30-min discovery call</small>
              </div>
              <div className="contact-pill">
                <span>✓</span>
                <small>No obligation audit included</small>
              </div>
            </div>
          </Parallax>

          <Parallax speed={5} className="numa-contact-form-col">
            <div className="numa-form-card">
              <ContactForm />
            </div>
          </Parallax>
        </Container>
      </section>
    </>
  )
}

export default Contact
