'use client'

import Accordion from './GenericAccordion'
import { motion } from 'framer-motion'

// Reuse animation style from form
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { when: 'beforeChildren', staggerChildren: 0.2, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring' as const, stiffness: 100 },
  },
}

export default function FAQPage() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-[#070707] to-black border-t border-white/10 overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      {/* Noise overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10"></div>

      <div className="container relative z-10 mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-100px' }} // same as form
          variants={containerVariants}
          className="w-full mx-auto overflow-hidden p-8 md:p-12"
        >
          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600"
          >
            FAQ
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="w-full md:w-[75%] mx-auto space-y-6"
          >
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
