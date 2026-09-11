import { useState } from 'react'
import { Parallax } from 'react-scroll-parallax'
import Container from '../components/Container'
import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'
import SectionLabel from '../components/SectionLabel'
import { contactChannels, contactFaqs } from '../data/siteData'

function Contact() {
  const [openFaq, setOpenFaq] = useState(0)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index)
  }

  return (
    <>
      <PageHero
        label="Let's talk"
        title="Your business deserves"
        italicTitle="to stand out."
        description="Whether you want more brand awareness, more qualified leads, or consistent online growth, our team is ready to guide you with result-driven strategies."
        badge1="✦ Direct Founder Strategy"
        badge2="● 24h Response Time"
      />

      {/* Core Mission Statement Banner */}
      <section className="section contact-statement-section" aria-label="Brand philosophy">
        <Container>
          <div className="contact-statement-card">
            <SectionLabel>Our Commitment</SectionLabel>
            <h2>
              Every business deserves a<br />
              <em>strong digital presence.</em>
            </h2>
            <p>
              At Adora Solution, we believe that local businesses and startups should not have to wrestle with confusing technical jargon or inflated agency bills. Whether you need to craft high-converting Meta Ads, produce daily engagement reels, or elevate your brand aesthetics, our team handles everything so you can focus on running your business.
            </p>
            <div className="statement-quote-badge">
              <span>✦ Reach out to us today — Adora Solution is just a message away.</span>
            </div>
          </div>
        </Container>
      </section>

      {/* 4 Direct Channel Cards */}
      <section className="section contact-channels-section" aria-labelledby="channels-title">
        <Container>
          <div className="contact-channels-header">
            <SectionLabel>Direct access</SectionLabel>
            <h2 id="channels-title">Choose how you want<br /><em>to connect with us.</em></h2>
          </div>

          <div className="contact-channels-grid">
            {contactChannels.map((channel, idx) => {
              const speeds = [-4, 3, -3, 4]
              return (
                <Parallax
                  key={channel.id}
                  speed={speeds[idx]}
                  className="contact-channel-col"
                >
                  <a
                    href={channel.link}
                    target={channel.isExternal ? '_blank' : '_self'}
                    rel={channel.isExternal ? 'noopener noreferrer' : ''}
                    className="contact-channel-card"
                  >
                    <div className="channel-card-top">
                      <span className="channel-badge">● {channel.badge}</span>
                      <span className="channel-arrow">↗</span>
                    </div>
                    <h3>{channel.title}</h3>
                    <strong className="channel-value">{channel.value}</strong>
                    <p>{channel.subtitle}</p>
                  </a>
                </Parallax>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Main Contact Section with Form */}
      <section className="section contact contact-section numa-contact-section" aria-labelledby="contact-form-title">
        <Container className="contact-grid numa-contact-grid">
          <Parallax speed={-4} className="numa-contact-info-col">
            <SectionLabel>Get in touch</SectionLabel>
            <h2 id="contact-form-title">
              Start with<br />
              <em>a simple conversation.</em>
            </h2>
            <p>
              Tell us about your business, your target customers, and your growth goals. We will analyze your presence and send back a complimentary action plan.
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
              <a
                href="https://wa.me/919824900460?text=Hi%20Adora%20Solution,%20I%20want%20to%20enquire%20about%20Digital%20Marketing."
                className="numa-contact-link numa-whatsapp-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="link-icon">💬</span> Chat on WhatsApp (Fastest)
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
              <div className="contact-pill">
                <span>🔒</span>
                <small>100% confidential discussion</small>
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

      {/* Frequently Asked Questions */}
      <section className="section contact-faq-section" aria-labelledby="faq-title">
        <Container>
          <div className="contact-faq-header">
            <SectionLabel>Common questions</SectionLabel>
            <h2 id="faq-title">Frequently asked<br /><em>before getting started.</em></h2>
            <p>Everything you need to know about partnering with Adora Solution.</p>
          </div>

          <div className="contact-faq-grid">
            {contactFaqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div
                  key={index}
                  className={`faq-card ${isOpen ? 'is-open' : ''}`}
                  onClick={() => toggleFaq(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleFaq(index) }}
                  aria-expanded={isOpen}
                >
                  <div className="faq-question-row">
                    <h3>{faq.question}</h3>
                    <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                  </div>
                  {isOpen && <p className="faq-answer">{faq.answer}</p>}
                </div>
              )
            })}
          </div>
        </Container>
      </section>
    </>
  )
}

export default Contact
