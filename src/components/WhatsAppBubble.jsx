function WhatsAppBubble() {
  return (
    <aside aria-label="WhatsApp Quick Contact">
      <a
        href="https://wa.me/919824900460?text=Hi%20Adora%20Solution,%20I%20want%20to%20enquire%20about%20Digital%20Marketing."
        className="floating-whatsapp-bubble"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Adora Solution on WhatsApp"
      >
        <span className="whatsapp-icon-svg" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.073-2.158-.535-1.503-.625-2.457-2.157-2.531-2.257-.075-.101-.606-.807-.606-1.537 0-.73.383-1.088.519-1.238.136-.149.297-.187.398-.187.1 0 .201 0 .288.005.093.004.22-.034.344.263.125.297.428 1.042.466 1.118.038.075.063.163.013.262-.05.1-.075.163-.15.251-.075.088-.158.196-.226.264-.075.075-.153.157-.066.307.088.15.39 1.118 1.258 1.76.702.52 1.341.678 1.545.765.204.088.324.075.444-.063.12-.138.519-.606.657-.813.138-.207.276-.173.466-.103.19.069 1.203.567 1.41.67.207.103.345.153.395.238.05.088.05.513-.094.918zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.957-1.398C8.423 21.493 10.153 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
          </svg>
        </span>
        <span className="whatsapp-bubble-label">Chat on WhatsApp</span>
      </a>
    </aside>
  )
}

export default WhatsAppBubble
