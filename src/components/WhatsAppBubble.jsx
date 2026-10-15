import Icon from './Icon'

function WhatsAppBubble() {
  return (
    <aside aria-label="WhatsApp Quick Contact">
      <a
        href="https://wa.me/919824900460?text=Hi%20Adora%20Solution,%20I%20want%20to%20enquire%20about%20Digital%20Marketing."
        className="floating-whatsapp-bubble"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Adora Solution on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <span className="whatsapp-icon-svg" aria-hidden="true">
          <Icon name="whatsapp" size={58} />
        </span>
      </a>
    </aside>
  )
}

export default WhatsAppBubble
