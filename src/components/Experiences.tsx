import { motion } from 'motion/react'

export default function Experiences() {
  const cards = [
    { cat: 'PRIVATE CHARTER', title: 'AIRCRAFT & CREW', desc: 'Custom flight paths across continents...' },
    { cat: 'RACING PROGRAM', title: 'OFFSHORE & INSHORE', desc: 'Join our competitive racing calendar...' },
    { cat: 'CONCIERGE', title: '24 / 7 ACCESS', desc: 'Every detail handled — provisioning, berthing, customs...' }
  ]

  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      <video
        src="/videos/global maps.mp4"
        autoPlay loop muted playsInline
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 1 }}
      />
      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        minHeight: '100vh',
        padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)',
        gap: 'clamp(32px, 6vw, 80px)',
        alignContent: 'center'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '24px', height: '1px', background: 'rgba(147,197,253,0.6)' }} />
            <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'rgba(147,197,253,0.85)' }}>
              CURATED FOR MEMBERS
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(36px,4.5vw,72px)', fontWeight: 400, lineHeight: 0.95, color: 'white' }}>
            LIFE BEYOND<br/>THE CLOUDS
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.19,1,0.22,1] as any }}
              className="glass-card tactical-glass"
              style={{ padding: '24px 28px' }}
            >
              <div style={{ fontSize: '8px', letterSpacing: '0.3em', color: 'rgba(147,197,253,0.7)', marginBottom: '8px' }}>
                {card.cat}
              </div>
              <div style={{ fontSize: '18px', color: 'white', letterSpacing: '0.05em', marginBottom: '12px' }}>
                {card.title}
              </div>
              <div style={{ fontSize: '10px', lineHeight: 1.8, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.55)' }}>
                {card.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
