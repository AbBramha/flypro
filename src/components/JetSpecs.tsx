import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { jets } from '../data/jets'
import SpecDrawer from './SpecDrawer'

export default function JetSpecs() {
  const [selectedJet, setSelectedJet] = useState<string | null>(null)

  const currentJet = jets.find(j => j.id === selectedJet)

  return (
    <section id="fleet-section" style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)' }}>
      <video
        src="/videos/black jet parked with people.mp4"
        autoPlay loop muted playsInline
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(5,10,20,0.7) 0%, rgba(5,10,20,0.85) 100%)' }} />

      <div style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ marginBottom: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
          <div>
            <div style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'var(--accent)', marginBottom: '16px' }}>THE FLEET</div>
            <h2 style={{ fontSize: 'clamp(40px,6vw,80px)', color: 'white', fontWeight: 400, lineHeight: 0.9, margin: 0 }}>
              THREE LEVELS<br />OF PERFORMANCE.
            </h2>
          </div>
          <div style={{ maxWidth: '400px', fontSize: '11px', lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', textTransform: 'none' }}>
            Our fleet is composed of the world's most advanced business aircraft. Each maintained to factory standards and staffed by a dedicated crew of aviation professionals.
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: 'rgba(255,255,255,0.05)' }}>
          {jets.map((jet, i) => (
            <motion.div 
              key={jet.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(16px)', padding: '32px', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.05)' }}
              onClick={() => setSelectedJet(jet.id)}
            >
              <div style={{ aspectRatio: '9/16', overflow: 'hidden', position: 'relative', marginBottom: '32px', borderRadius: '2px' }}>
                <video 
                  className="yacht-card-video" 
                  src={`/videos/${jet.id === 'ocean-eclipse' ? 'white jet fleet' : jet.id === 'black-sovereign' ? 'black jet fleet' : 'blue jet fleet'}.mp4`} 
                  autoPlay loop muted playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s var(--ease-luxury)' }} 
                />
                <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px' }}>
                  <div style={{ fontSize: '8px', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.6)', marginBottom: '8px' }}>{jet.year} EDITION</div>
                  <div style={{ fontSize: '24px', color: 'white', letterSpacing: '-0.01em' }}>{jet.name}</div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
                <div>
                  <div style={{ fontSize: '8px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)', marginBottom: '4px' }}>LENGTH</div>
                  <div style={{ fontSize: '12px', color: 'white' }}>{jet.length}</div>
                </div>
                <div>
                  <div style={{ fontSize: '8px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)', marginBottom: '4px' }}>CAPACITY</div>
                  <div style={{ fontSize: '12px', color: 'white' }}>{jet.guests}</div>
                </div>
              </div>

              <button style={{ 
                width: '100%', 
                background: 'rgba(255,255,255,0.05)', 
                border: '1px solid rgba(255,255,255,0.1)', 
                padding: '16px', 
                fontSize: '10px', 
                letterSpacing: '0.2em',
                color: 'white',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
              >
                VIEW SPECIFICATIONS
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedJet && currentJet && (
          <SpecDrawer 
            jet={currentJet} 
            onClose={() => setSelectedJet(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  )
}
