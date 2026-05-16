import PageOverlay from './PageOverlay'

interface AboutPageProps {
  isOpen: boolean
  onClose: () => void
}

export default function AboutPage({ isOpen, onClose }: AboutPageProps) {
  return (
    <PageOverlay isOpen={isOpen} onClose={onClose} pageName="ABOUT">
      
      <div style={{ display: 'grid', gridTemplateColumns: '0.6fr 1fr', padding: 'clamp(48px,6vw,80px)', gap: '80px', alignItems: 'center' }}>
        <h2 style={{ fontSize: 'clamp(40px,6vw,80px)', color: '#0c0c0e', fontWeight: 400, lineHeight: 0.95, marginBottom: '24px', margin: 0 }}>
          FIFTY YEARS IN THE SKY.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          <div>
            <div style={{ fontSize: '32px', color: 'var(--accent)', marginBottom: '8px' }}>50+</div>
            <div style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(12,12,14,0.5)' }}>YEARS OF EXCELLENCE</div>
          </div>
          <div>
            <div style={{ fontSize: '32px', color: 'var(--accent)', marginBottom: '8px' }}>3</div>
            <div style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(12,12,14,0.5)' }}>EXCEPTIONAL AIRCRAFT</div>
          </div>
          <div>
            <div style={{ fontSize: '32px', color: 'var(--accent)', marginBottom: '8px' }}>12</div>
            <div style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(12,12,14,0.5)' }}>COUNTRIES SERVED</div>
          </div>
          <div>
            <div style={{ fontSize: '32px', color: 'var(--accent)', marginBottom: '8px' }}>1,400+</div>
            <div style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(12,12,14,0.5)' }}>GLOBAL MEMBERS</div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', padding: 'clamp(32px,4vw,48px)', borderTop: '1px solid rgba(12,12,14,0.07)', gap: '40px' }}>
        {["DISCRETION", "PRECISION", "HERITAGE", "ADVENTURE"].map((v, i) => (
          <div key={i} style={{ borderTop: '2px solid var(--accent)', paddingTop: '20px' }}>
            <div style={{ fontSize: '12px', letterSpacing: '0.15em', color: '#0c0c0e', marginBottom: '12px' }}>{v}</div>
            <div style={{ fontSize: '10px', lineHeight: 1.8, color: 'rgba(12,12,14,0.6)', textTransform: 'none' }}>
              We uphold the highest standards in every interaction, ensuring our members experience nothing but the absolute best.
            </div>
          </div>
        ))}
      </div>

      <div style={{ maxWidth: '720px', padding: 'clamp(32px,4vw,48px)', margin: '0 auto' }}>
        <h3 style={{ fontSize: '14px', letterSpacing: '0.2em', color: 'var(--accent)', marginBottom: '40px', textAlign: 'center' }}>OUR HISTORY</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {[
            { y: "1975", text: "Founded in Monaco by Édouard Marchetti with a single aircraft..." },
            { y: "1981", text: "Expanded to a three-aircraft fleet serving the European capitals exclusively..." },
            { y: "1994", text: "Transatlantic operations launched; inaugural Caribbean season..." },
            { y: "2003", text: "Pacific programme introduced; Polynesia and New Zealand routes established..." },
            { y: "2012", text: "Academy programme launched, formalising our sailing education offering..." },
            { y: "2025", text: "Celebrating fifty years, FLYPRO continues to define private aviation excellence..." }
          ].map((item, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '24px', borderBottom: i === 5 ? 'none' : '1px solid rgba(12,12,14,0.07)', padding: '20px 0' }}>
              <div style={{ fontSize: '13px', letterSpacing: '0.1em', color: 'var(--accent)', fontWeight: 'bold' }}>{item.y}</div>
              <div style={{ fontSize: '11px', lineHeight: 1.8, color: 'rgba(12,12,14,0.7)', textTransform: 'none' }}>{item.text}</div>
            </div>
          ))}
        </div>
      </div>

    </PageOverlay>
  )
}
