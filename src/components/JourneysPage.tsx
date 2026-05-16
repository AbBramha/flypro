import { motion } from 'motion/react'
import PageOverlay from './PageOverlay'

interface JourneysPageProps {
  isOpen: boolean
  onClose: () => void
}

export default function JourneysPage({ isOpen, onClose }: JourneysPageProps) {
  const destinations = [
    { name: "EUROPE", sub: "SWISS ALPS", desc: "Geneva to Samedan. Direct access to the Engadin valley...", dur: "FLIGHT: 45M", sea: "WINTER" },
    { name: "NORTH AMERICA", sub: "ASPEN & TETON", desc: "Challenging approaches handled with precision...", dur: "FLIGHT: 2H", sea: "WINTER" },
    { name: "ASIA PACIFIC", sub: "TOKYO & MALDIVES", desc: "Long-range missions across the Pacific Rim...", dur: "FLIGHT: 10H+", sea: "YEAR-ROUND" },
    { name: "MIDDLE EAST", sub: "DUBAI & DOHA", desc: "Connecting the world's commercial hubs...", dur: "FLIGHT: 7H", sea: "OCTOBER" },
    { name: "CARIBBEAN", sub: "ST. BARTS", desc: "Short-field performance into Gustaf III Airport...", dur: "FLIGHT: 1H", sea: "SPRING" },
    { name: "AFRICA", sub: "CAPE TOWN", desc: "Direct from London. The ultimate long-haul mission...", dur: "FLIGHT: 11H", sea: "SUMMER" }
  ]

  return (
    <PageOverlay isOpen={isOpen} onClose={onClose} pageName="JOURNEYS">
      
      <div style={{ padding: 'clamp(48px,6vw,80px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'clamp(32px, 6vw, 80px)', alignItems: 'end' }}>
        <h2 style={{ fontSize: 'clamp(36px,5vw,72px)', margin: 0, fontWeight: 400, color: '#0c0c0e', lineHeight: 0.95 }}>
          THE WORLD'S FINEST CITIES.<br/>YOUR FLIGHT PATH.
        </h2>
        <div>
          <p style={{ fontSize: '11px', lineHeight: 1.8, color: 'rgba(12,12,14,0.6)', marginBottom: '24px', textTransform: 'none' }}>
            Our flight planners curate bespoke missions tailored to your exact schedule. From high-season ski destinations to critical commercial hubs, we manage every slot and permit.
          </p>
          <button style={{ background: 'var(--accent)', color: 'white', padding: '12px 28px', fontSize: '9px', letterSpacing: '0.2em', border: 'none', borderRadius: '2px', cursor: 'pointer' }}>
            REQUEST A CUSTOM MISSION
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(360px,1fr))', gap: '2px', background: 'rgba(12,12,14,0.06)' }}>
        {destinations.map((d, i) => (
          <div key={i} className="card" style={{ overflow: 'hidden', borderRadius: 0, border: 'none' }}>
            <div style={{ height: '200px', background: 'linear-gradient(135deg, #1c2d45 0%, #2a4a73 100%)', position: 'relative', padding: '24px' }}>
              <div style={{ fontSize: '8px', letterSpacing: '0.35em', color: 'rgba(147,197,253,0.85)' }}>{d.name}</div>
              <div style={{ position: 'absolute', bottom: '24px', left: '24px' }}>
                <div style={{ fontSize: 'clamp(20px,3vw,32px)', color: 'white', marginBottom: '4px' }}>{d.sub}</div>
                <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)' }}>EXCLUSIVE SLOTS & FBO ACCESS</div>
              </div>
            </div>
            <div style={{ padding: '28px 32px', background: 'white' }}>
              <div style={{ display: 'flex', gap: '32px', marginBottom: '16px' }}>
                <div>
                  <span style={{ fontSize: '8px', color: 'rgba(12,12,14,0.4)', letterSpacing: '0.2em', display: 'block', marginBottom: '2px' }}>EST. DURATION</span>
                  <span style={{ fontSize: '10px', color: '#0c0c0e', letterSpacing: '0.1em' }}>{d.dur}</span>
                </div>
                <div>
                  <span style={{ fontSize: '8px', color: 'rgba(12,12,14,0.4)', letterSpacing: '0.2em', display: 'block', marginBottom: '2px' }}>BEST SEASON</span>
                  <span style={{ fontSize: '10px', color: '#0c0c0e', letterSpacing: '0.1em' }}>{d.sea}</span>
                </div>
              </div>
              <div style={{ fontSize: '11px', lineHeight: 1.9, color: 'rgba(12,12,14,0.7)', marginBottom: '24px', textTransform: 'lowercase' }}>
                {d.desc}
              </div>
              <button style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'var(--accent)', background: 'none', border: 'none', cursor: 'pointer', padding: 0, position: 'relative' }} className="journey-btn">
                REQUEST MISSION DATA
                <motion.span 
                  style={{ position: 'absolute', bottom: '-4px', left: 0, height: '1px', background: 'var(--accent)' }} 
                  initial={{ width: '0%' }}
                  whileHover={{ width: '100%' }}
                />
              </button>
            </div>
          </div>
        ))}
      </div>

    </PageOverlay>
  )
}
