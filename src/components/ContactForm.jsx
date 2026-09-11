import { useState } from 'react'

function ContactForm() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: 'Social Media Marketing',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSent(true)
    }, 600)
  }

  const handleReset = () => {
    setSent(false)
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      service: 'Social Media Marketing',
      message: '',
    })
  }

  return (
    <div className="contact-form-container">
      {sent ? (
        <div className="contact-form-success" role="alert">
          <div className="success-icon">✓</div>
          <h3>Message Received!</h3>
          <p>
            Thank you, <strong>{formData.firstName || 'there'}</strong>. We have received your details and will get back to you within 24 hours with a custom strategy.
          </p>
          <div className="success-actions">
            <a
              className="button button-peach success-whatsapp-btn"
              href={`https://wa.me/919824900460?text=Hi%20Adora%20Solution,%20my%20name%20is%20${encodeURIComponent(
                formData.firstName + ' ' + formData.lastName
              )}.%20I%20just%20submitted%20an%20inquiry%20for%20${encodeURIComponent(formData.service)}.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Chat on WhatsApp Now ↗</span>
            </a>
            <button
              type="button"
              className="success-reset-btn"
              onClick={handleReset}
            >
              Send another message
            </button>
          </div>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-header">
            <h3>Send an Inquiry</h3>
            <p>Fill in your details and we will get back to you with a free audit & proposal.</p>
          </div>

          <div className="form-row-two">
            <label>
              First Name*
              <input
                required
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="e.g. Rahul"
              />
            </label>
            <label>
              Last Name*
              <input
                required
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="e.g. Patel"
              />
            </label>
          </div>

          <div className="form-row-two">
            <label>
              Email Address*
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
              />
            </label>
            <label>
              Phone / WhatsApp*
              <input
                required
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98249 00460"
              />
            </label>
          </div>

          <label>
            Service Required*
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="form-select"
            >
              <option value="Social Media Marketing">Social Media Marketing</option>
              <option value="Performance Meta Ads">Performance Meta Ads</option>
              <option value="Both Social Media & Meta Ads">Both Social Media & Meta Ads</option>
              <option value="Creative Graphic Designing">Creative Graphic Designing</option>
              <option value="Growth Strategy Consultation">Growth Strategy Consultation</option>
            </select>
          </label>

          <label>
            Your Message / Business Goals*
            <textarea
              required
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your business, current marketing challenges, and goals..."
            />
          </label>

          <button
            className="button button-peach form-button"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Send Inquiry'} <span>→</span>
          </button>
        </form>
      )}
    </div>
  )
}

export default ContactForm
