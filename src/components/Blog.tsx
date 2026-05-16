import { motion } from 'motion/react'
import PageOverlay from './PageOverlay'

interface BlogProps {
  isOpen: boolean
  onClose: () => void
}

export default function Blog({ isOpen, onClose }: BlogProps) {
  const articles = [
    { title: "THE POLAR CORRIDOR", cat: "DESTINATIONS", num: "01", date: "JAN 2025" },
    { title: "ALTITUDE & WELLNESS", cat: "LIFESTYLE", num: "02", date: "DEC 2024" },
    { title: "THE TRANSATLANTIC REWRITTEN", cat: "JOURNEYS", num: "03", date: "NOV 2024" },
    { title: "AERODYNAMICS IN THE AGE OF SILENCE", cat: "ENGINEERING", num: "04", date: "OCT 2024" }
  ]

  return (
    <PageOverlay isOpen={isOpen} onClose={onClose} pageName="JOURNAL">
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', minHeight: '480px', marginBottom: 0 }}>
        <div style={{ background: 'linear-gradient(135deg, #1c2d45, #2a4a73)', padding: 'clamp(48px,6vw,80px)', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <span style={{ fontSize: '8px', letterSpacing: '0.3em', background: 'var(--accent)', padding: '4px 8px', borderRadius: '2px' }}>FEATURED</span>
            <div style={{ fontSize: '9px', letterSpacing: '0.2em', marginTop: '16px', color: 'rgba(255,255,255,0.6)' }}>FEBRUARY 2025</div>
          </div>
          <div>
            <div style={{ width: '40px', height: '1px', background: 'rgba(147,197,253,0.5)', marginBottom: '16px' }} />
            <h2 style={{ fontSize: 'clamp(32px,4vw,64px)', fontWeight: 400, lineHeight: 0.95, margin: '0 0 24px 0' }}>THE SILENT<br/>PASSAGE</h2>
            <div style={{ fontSize: '11px', lineHeight: 1.8, color: 'rgba(255,255,255,0.7)', maxWidth: '400px', textTransform: 'none' }}>
              Our flagship Global Express 7500 charts a new course through the untouched northern corridors, redefining long-haul luxury in extreme environments.
            </div>
          </div>
        </div>
        <div style={{ background: 'white', padding: 'clamp(48px,6vw,80px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontStyle: 'italic', fontSize: 'clamp(20px,2vw,28px)', color: '#0c0c0e', lineHeight: 1.4, marginBottom: '40px', textTransform: 'none' }}>
            "There is a profound luxury in absolute silence. When you reach cruising altitude and the world falls away, the perspective is impossibly vast."
          </div>
          <a href="#" style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--accent)', textDecoration: 'none', fontWeight: 'bold' }}>CONTINUE READING →</a>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', padding: 'clamp(40px,5vw,64px)' }}>
        {articles.map((a, i) => (
          <motion.div
            key={i}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            style={{ borderRadius: '4px', overflow: 'hidden', border: '1px solid rgba(12,12,14,0.06)' }}
          >
            <div style={{ height: '180px', background: 'linear-gradient(135deg, #1c2d45, #2a4a73)', padding: '24px', display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '8px', letterSpacing: '0.3em', color: 'white' }}>{a.cat}</span>
              <span style={{ fontSize: '8px', color: 'rgba(255,255,255,0.4)' }}>{a.num}</span>
            </div>
            <div style={{ background: 'white', padding: '24px' }}>
              <div style={{ fontSize: '8px', letterSpacing: '0.2em', color: 'rgba(12,12,14,0.4)', marginBottom: '12px' }}>{a.date}</div>
              <div style={{ fontSize: '16px', color: '#0c0c0e', marginBottom: '16px', lineHeight: 1.2 }}>{a.title}</div>
              <div style={{ fontSize: '10px', lineHeight: 1.6, color: 'rgba(12,12,14,0.6)', marginBottom: '24px', textTransform: 'none' }}>An exploration of our latest aircraft and insights into the world of luxury aviation and curated missions.</div>
              <a href="#" style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'var(--accent)', textDecoration: 'none' }}>READ MORE</a>
            </div>
          </motion.div>
        ))}
      </div>

    </PageOverlay>
  )
}
