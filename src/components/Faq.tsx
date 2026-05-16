import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    { q: "HOW DOES MEMBERSHIP WORK?", a: "Membership is offered across three distinct tiers. Each tier grants access to our fleet, bespoke concierge services, and exclusive events. Annual dues apply, and certain tiers require invitation." },
    { q: "WHAT AIRCRAFT ARE IN THE FLEET?", a: "Our current fleet consists of three exceptional jets: Global Express 7500 (Flagship), Gulfstream G650ER (Performance), and Falcon 8X (Agile Explorer). All are maintained to factory standards and crewed by our full-time professional staff." },
    { q: "CAN I CHARTER FOR CORPORATE MISSIONS?", a: "Yes. Our concierge team handles full-service corporate charters, including discrete meeting arrangements, specialized dining, and multi-leg global itineraries." },
    { q: "IS FLYPRO AVAILABLE INTERNATIONALLY?", a: "We operate globally. Our primary routes cover the Americas, Europe, and Asia, with extended global reach available upon request." },
    { q: "HOW DO I JOIN THE ACADEMY PROGRAMME?", a: "The Academy Programme is available from the Commodore tier upwards. Members receive comprehensive training in aviation systems and cockpit procedures under expert guidance." },
    { q: "WHAT DOES THE CONCIERGE SERVICE COVER?", a: "Everything. From private hangar access and luxury transfers to securing rare catering and arranging international customs clearances. We handle every detail." }
  ]

  return (
    <section style={{ background: 'var(--bg-base)' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <div style={{ width: '40px', height: '1px', background: 'var(--accent)' }} />
          <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'var(--accent)' }}>FAQ</span>
        </div>
        <h2 style={{ fontSize: 'clamp(40px,6vw,80px)', color: '#0c0c0e', fontWeight: 400, lineHeight: 0.95, marginBottom: '64px' }}>
          WHAT YOU NEED TO KNOW.
        </h2>

        <div>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} style={{ borderBottom: '1px solid rgba(12,12,14,0.08)' }}>
                <div 
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', padding: '24px 0' }}
                >
                  <div style={{ fontSize: '12px', letterSpacing: '0.12em', color: isOpen ? '#0c0c0e' : 'rgba(12,12,14,0.6)', transition: 'color 0.3s' }}>
                    {faq.q}
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ fontSize: '14px', color: 'var(--accent)' }}
                  >
                    ↓
                  </motion.div>
                </div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ fontSize: '10px', lineHeight: 1.9, letterSpacing: '0.15em', color: 'rgba(12,12,14,0.52)', padding: '0 0 24px 0', textTransform: 'uppercase' }}>
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
