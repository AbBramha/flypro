import { motion } from 'motion/react'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <video
        src="/videos/blue jet parked in wet weather.mp4"
        autoPlay loop muted playsInline
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(5,10,20,0.65) 0%, rgba(5,10,20,0.8) 100%)' }} />

      <div style={{ position: 'relative', zIndex: 10, padding: 'clamp(80px,10vw,140px) 0' }}>
        <div style={{ paddingLeft: 'clamp(24px,6vw,96px)', marginBottom: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '40px', height: '1px', background: 'var(--accent)' }} />
            <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'var(--accent)' }}>MEMBER VOICES</span>
          </div>
          <h2 style={{ fontSize: 'clamp(40px,6vw,80px)', color: 'white', fontWeight: 400, lineHeight: 0.95 }}>
            THOSE WHO KNOW.
          </h2>
        </div>

        <div className="testimonial-rail scrollbar-hide" style={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          gap: '20px',
          padding: '20px clamp(24px,6vw,96px)'
        }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.6, ease: [0.19,1,0.22,1] as any }}
              style={{ 
                flexShrink: 0, 
                width: 'clamp(280px,30vw,380px)', 
                padding: '36px',
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '4px'
              }}
            >
              <div style={{ fontStyle: 'italic', fontSize: '12px', lineHeight: 1.9, color: 'rgba(255,255,255,0.7)', marginBottom: '28px', textTransform: 'uppercase' }}>
                {t.quote}
              </div>
              <div style={{ width: '24px', height: '1px', background: 'var(--accent)', marginBottom: '20px' }} />
              <div style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'white', marginBottom: '4px' }}>
                {t.name}
              </div>
              <div style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)' }}>
                {t.role} / {t.tag}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
