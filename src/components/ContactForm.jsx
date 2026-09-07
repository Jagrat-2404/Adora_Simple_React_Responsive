import { useState } from 'react'
function ContactForm() {
  const [sent, setSent] = useState(false)
  const submit = event => { event.preventDefault(); setSent(true); event.currentTarget.reset() }
  return <form className="contact-form" onSubmit={submit}>
    {sent && <p className="success">Thank you—we&apos;ll be in touch soon.</p>}
    <label>Name<input required placeholder="What's your name?" /></label>
    <label>Email address<input required type="email" placeholder="Write your email address here" /></label>
    <label>Your message<textarea required rows="4" placeholder="Tell us about your business and goals" /></label>
    <button className="button button-peach form-button" type="submit">Send <span>→</span></button>
  </form>
}
export default ContactForm
