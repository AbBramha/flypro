export default function Footer() {
  return (
    <footer style={{ position: 'relative', overflow: 'hidden', minHeight: '480px' }}>
      <video
        src="/videos/black jet parked in wet weather.mp4"
        autoPlay loop muted playsInline
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(5,10,20,0.75) 0%, rgba(5,10,20,0.82) 100%)' }} />

      <div style={{ position: 'relative', zIndex: 10, padding: 'clamp(64px,8vw,100px) clamp(24px,6vw,96px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'clamp(32px, 6vw, 80px)' }}>
          
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
                <path d="M2 12L12 12L18 6H14L2 12Z" fill="white" />
                <path d="M5 14H11L14 11H8L5 14Z" fill="white" fillOpacity="0.4" />
              </svg>
              <span style={{ fontSize: '20px', letterSpacing: '0.28em', color: 'white' }}>FLYPRO</span>
            </div>
            <div style={{ fontSize: '9px', letterSpacing: '0.28em', color: 'rgba(255,255,255,0.4)', marginTop: '16px' }}>
              SINCE 1975. THE SKY IS YOURS.
            </div>
          </div>

          <div>
            <div style={{ fontSize: '8px', letterSpacing: '0.35em', color: 'rgba(147,197,253,0.7)', marginBottom: '20px' }}>NAVIGATION</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {["Journeys", "Fleet", "Membership", "Academy", "Blog"].map(l => (
                <a key={l} href="#" style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.85)'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>{l}</a>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontSize: '8px', letterSpacing: '0.35em', color: 'rgba(147,197,253,0.7)', marginBottom: '20px' }}>SERVICES</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {["Private Charter", "Corporate Events", "Race Programme", "Concierge", "Press & Media"].map(l => (
                <a key={l} href="#" style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.85)'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>{l}</a>
              ))}
            </div>
          </div>

        </div>

        <div style={{ marginTop: '64px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '8px', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.2em' }}>
            © 2025 FLYPRO PRIVATE JET CLUB. ALL RIGHTS RESERVED.
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#" style={{ fontSize: '8px', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.2em', textDecoration: 'none' }}>PRIVACY POLICY</a>
            <a href="#" style={{ fontSize: '8px', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.2em', textDecoration: 'none' }}>TERMS</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
