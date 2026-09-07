import Container from '../components/Container'
import PageHero from '../components/PageHero'

const terms = [
  ['Payment terms', 'Premium packages require a 60% advance payment, with the balance due before final delivery. Other packages require full payment before work begins. The minimum engagement is two months, followed by a six-month contract upon mutual satisfaction. Agency fees cover our services only and do not include platform ad spend. Once work has started, payments are non-refundable.'],
  ['Ad budget', 'Clients fund their advertising budget directly on platforms such as Meta and Instagram. Adora Solution is not responsible for platform payment failures or deductions.'],
  ['Revisions and edits', 'Each project includes two rounds of minor revisions, such as text, colour, or layout adjustments. Major scope changes, complete redesigns, or additional revision rounds may involve extra fees and time.'],
  ['Timelines', 'Project timelines are discussed and confirmed at the start. Work begins within 24–48 hours of receiving the advance payment. Clients should provide feedback and approvals within 48–72 hours; delayed materials or approvals may affect delivery timelines.'],
  ['Client responsibilities', 'Clients must provide required access, accurate business information, and materials they have the right to use. Delays in access, content, approvals, or information can affect campaign execution and results.'],
  ['Confidentiality and data', 'Both parties will treat shared business information as confidential and use it only to deliver the agreed services. Unless requested otherwise in writing, Adora Solution may showcase work in its portfolio. Client data and project files are retained for three months after contract completion, then deleted from our systems.'],
  ['Performance disclaimer', 'We optimise campaigns carefully, but specific leads, sales, or engagement cannot be guaranteed. Results depend on factors including market conditions, platform algorithms, competition, pricing, product quality, and client responsiveness. Campaigns generally require 30–60 days of testing and optimisation.'],
  ['Two-month minimum package', 'During the initial two-month engagement, campaign structures, targeting, creatives, designs, and related materials remain the intellectual property of Adora Solution. Use or duplication requires prior written consent. Ownership after continuation is governed by the ownership terms below.'],
  ['Termination and cancellation', 'Either party may terminate after the two-month minimum period with 15 days’ written notice. Payments for completed work, active campaigns, and third-party costs remain due. Advance payments and mid-project cancellations are non-refundable.'],
  ['Liability', 'Adora Solution is not liable for indirect or unforeseen damages. Liability is limited to the fees paid for the relevant project or contract period. Clients remain responsible for the legal and platform-policy compliance of their business, advertisements, and content.'],
  ['Ownership', 'For premium packages, ownership of agreed creative assets, campaigns, strategies, and deliverables transfers after full payment. For other packages, Adora Solution retains ownership and grants a limited business-use licence. Unpaid deliverables remain the property of Adora Solution.'],
  ['Force majeure', 'We are not responsible for delays or failures caused by events beyond our control, including platform outages, natural disasters, government action, policy changes, or technical issues. Timelines may be extended accordingly.'],
  ['Rush work', 'Expedited work outside the agreed timeline may incur additional fees. Rush requests must be agreed in writing before work begins.'],
  ['Testimonials and referrals', 'We may request honest reviews, testimonials, and referrals. With permission, testimonials may be used in our marketing materials, website, and social media.'],
  ['Non-solicitation', 'During the contract and for one year after it ends, clients agree not to directly hire or solicit Adora Solution team members for employment or freelance work.'],
  ['Dispute resolution', 'Both parties will first attempt to resolve disputes through good-faith discussion. If unresolved within 30 days, matters are subject to the jurisdiction of Surat courts, Gujarat, India.'],
  ['Amendments', 'Adora Solution may update these terms for new contracts. Existing clients remain governed by the terms agreed when their contract was signed and will be notified of significant changes.'],
  ['Advance payment acknowledgement', 'By making an advance payment, the client confirms they have read, understood, and agreed to these terms and conditions.'],
]

function Terms() {
  return <><PageHero label="Our terms" title="Terms and" italicTitle="conditions." description="Clear terms that guide our work together." />
    <section className="section terms"><Container><p className="terms-intro">Thank you for choosing Adora Solution. We aim to provide clear, straightforward, and effective services. These terms explain how we work together.</p><div className="terms-list">{terms.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><h2>{title}</h2><p>{text}</p></div></article>)}</div></Container></section>
  </>
}
export default Terms
