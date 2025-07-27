'use client'

import Accordion from './GenericAccordion';

export default function FAQPage() {
  return (
    <section className="min-h-full bg-black px-4 md:py-10 md:px-16 text-white pb-30 md:pb-60">
      <h1 className='title-bold text-center justify-between text-red-700 mb-10'>FAQs</h1>
      <div className='w-[75vw] mx-auto'>
        <Accordion
          question="What are the security standards you follow for web designing?"
          answer="Helekin upholds unique security standards to serve our clients, keeping a high priority on safety and security. We keep utmost confidentiality on the data from the client side and undertake optimal measures to store the client data securely. Each and every stage of design and development is subjected to a security check and we never back down from our assigned responsibilities."
        />
        <Accordion
          question="How do you choose the languages for the projects?"
          answer="We evaluate the client's requirements, scalability, performance needs, and team expertise before selecting the best language for the project."
        />
        <Accordion
          question="Do you provide post-launch support?"
          answer="Yes, we offer post-launch support, including bug fixes, updates, and technical assistance to ensure your project remains stable and secure."
        />
      </div>
    </section>
  )
}
