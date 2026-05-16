import { motion } from 'motion/react'

export default function Academy() {
  const modules = [
    { num: '01', title: 'AERODYNAMICS', pct: 75 },
    { num: '02', title: 'METEOROLOGY', pct: 60 },
    { num: '03', title: 'FLIGHT SYSTEMS', pct: 85 },
    { num: '04', title: 'AIR TRAFFIC', pct: 50 },
    { num: '05', title: 'AVIONICS', pct: 40 },
    { num: '06', title: 'CAPTAINCY', pct: 70 }
  ]

  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      <video
        src="/videos/black jet parked with people.mp4"
        autoPlay loop muted playsInline
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 1 }}
      />
      <div style={{ position: 'relative', zIndex: 10, padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)' }}>
        <div style={{ marginBottom: '60px' }}>
          <div style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'rgba(147,197,253,0.85)', marginBottom: '16px' }}>FLYPRO ACADEMY</div>
          <h2 style={{ fontSize: 'clamp(40px,6vw,80px)', fontWeight: 400, lineHeight: 0.9, color: 'white', maxWidth: '600px' }}>
            MASTER THE<br />SKY.<br /><em>MASTER<br/>YOURSELF.</em>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px', marginTop: '48px' }}>
          {modules.map((m, i) => (
            <div key={i} className="glass-mid" style={{ padding: '28px 28px 24px', borderRadius: '4px' }}>
              <div style={{ fontSize: '64px', color: 'rgba(255,255,255,0.08)', lineHeight: 1, marginBottom: '-8px' }}>{m.num}</div>
              <div style={{ fontSize: '8px', letterSpacing: '0.35em', color: 'rgba(147,197,253,0.6)', marginBottom: '10px' }}>MODULE</div>
              <div style={{ fontSize: '13px', letterSpacing: '0.12em', color: 'white', marginBottom: '8px' }}>{m.title}</div>
              <div style={{ fontSize: '9px', lineHeight: 1.8, color: 'rgba(255,255,255,0.5)' }}>Comprehensive theoretical and practical training for our members.</div>
              <div style={{ marginTop: '16px' }}>
                <div style={{ height: '2px', background: 'rgba(255,255,255,0.08)', borderRadius: '1px', width: '100%', overflow: 'hidden' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${m.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.1, ease: [0.19,1,0.22,1] }}
                    style={{ height: '100%', background: 'var(--accent)' }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
