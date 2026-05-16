import { motion } from 'motion/react'

interface SpecDrawerProps {
  jet: {
    name: string
    description: string
    specs: {
      category: string
      items: { label: string; value: string }[]
    }[]
  }
  onClose: () => void
}

export default function SpecDrawer({ jet, onClose }: SpecDrawerProps) {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 300, display: 'flex', justifyContent: 'flex-end' }}>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ position: 'absolute', inset: 0, background: 'rgba(5,10,20,0.4)', backdropFilter: 'blur(8px)' }}
      />
      
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        style={{ position: 'relative', width: 'clamp(320px, 40vw, 600px)', height: '100%', background: 'white', overflowY: 'auto', padding: '80px clamp(24px, 5vw, 60px)' }}
      >
        <button onClick={onClose} style={{ position: 'absolute', top: '32px', left: '32px', background: 'none', border: 'none', fontSize: '11px', letterSpacing: '0.2em', cursor: 'pointer', color: 'rgba(12,12,14,0.4)' }}>
          × CLOSE
        </button>

        <div style={{ marginBottom: '64px' }}>
          <div style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'var(--accent)', marginBottom: '16px' }}>TECHNICAL SPECIFICATIONS</div>
          <h3 style={{ fontSize: 'clamp(32px,3vw,48px)', color: '#0c0c0e', fontWeight: 400, lineHeight: 1, marginBottom: '24px' }}>{jet.name}</h3>
          <p style={{ fontSize: '11px', lineHeight: 1.8, color: 'rgba(12,12,14,0.6)', textTransform: 'none' }}>{jet.description}</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {jet.specs.map((cat, i) => (
            <div key={i}>
              <div style={{ fontSize: '8px', letterSpacing: '0.35em', color: 'rgba(12,12,14,0.3)', marginBottom: '20px', borderBottom: '1px solid rgba(12,12,14,0.06)', paddingBottom: '8px' }}>{cat.category}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {cat.items.map((item, j) => (
                  <div key={j} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
                    <div style={{ fontSize: '10px', letterSpacing: '0.15em', color: 'rgba(12,12,14,0.5)' }}>{item.label}</div>
                    <div style={{ width: '40px', height: '1px', background: 'rgba(12,12,14,0.06)', margin: '0 12px 4px' }} />
                    <div style={{ fontSize: '11px', letterSpacing: '0.1em', color: '#0c0c0e' }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '80px' }}>
          <button style={{ width: '100%', background: '#1c3557', color: 'white', padding: '18px', fontSize: '10px', letterSpacing: '0.2em', border: 'none', borderRadius: '2px', cursor: 'pointer' }}>
            REQUEST CHARTER DATA
          </button>
        </div>
      </motion.div>
    </div>
  )
}
