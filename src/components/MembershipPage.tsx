import PageOverlay from './PageOverlay'

interface MembershipPageProps {
  isOpen: boolean
  onClose: () => void
}

export default function MembershipPage({ isOpen, onClose }: MembershipPageProps) {
  return (
    <PageOverlay isOpen={isOpen} onClose={onClose} pageName="MEMBERSHIP">
      
      <div style={{ padding: 'clamp(48px,6vw,80px)', paddingBottom: 'clamp(32px,4vw,48px)', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(36px,5vw,72px)', margin: '0 0 24px 0', fontWeight: 400, color: '#0c0c0e' }}>
          JOIN THE CLUB.
        </h2>
        <p style={{ fontSize: '11px', lineHeight: 1.8, color: 'rgba(12,12,14,0.6)', maxWidth: '600px', margin: '0 auto 32px auto', textTransform: 'none' }}>
          Membership to FLYPRO is an invitation to unparalleled private aviation luxury. Review our tiers below to find the level of access that aligns with your lifestyle.
        </p>
        <button style={{ background: 'var(--accent)', color: 'white', padding: '12px 32px', fontSize: '9px', letterSpacing: '0.2em', border: 'none', borderRadius: '2px', cursor: 'pointer' }}>
          APPLY NOW
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px', padding: 'clamp(32px,4vw,48px)' }}>
        
        <div className="card" style={{ padding: '40px' }}>
          <div style={{ fontSize: '8px', letterSpacing: '0.3em', color: 'rgba(12,12,14,0.4)', marginBottom: '8px' }}>ENTRY TIER</div>
          <div style={{ fontSize: '12px', letterSpacing: '0.2em', color: 'var(--accent)', marginBottom: '16px' }}>SIGNATURE</div>
          <div style={{ fontSize: '32px', color: '#0c0c0e', marginBottom: '32px' }}>$48,000 / YEAR</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
            {["25 FLIGHT HOURS ALLOCATION", "STANDARD CONCIERGE ACCESS", "HANGAR PRIVILEGES", "FLIGHT TRAINING WAITLIST"].map((f, i) => (
              <div key={i} style={{ fontSize: '9px', color: 'rgba(12,12,14,0.6)', letterSpacing: '0.1em' }}>• {f}</div>
            ))}
          </div>
          <button style={{ width: '100%', background: 'var(--accent)', color: 'white', padding: '14px', fontSize: '9px', letterSpacing: '0.2em', border: 'none', borderRadius: '2px', cursor: 'pointer' }}>APPLY</button>
        </div>

        <div style={{ background: '#1c3557', color: 'white', padding: '40px', borderRadius: '3px', boxShadow: '0 8px 48px rgba(28,53,87,0.3)', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '40px', right: '40px', background: 'rgba(147,197,253,0.2)', color: 'rgba(147,197,253,0.9)', fontSize: '8px', letterSpacing: '0.2em', padding: '4px 12px', borderRadius: '2px' }}>MOST POPULAR</div>
          <div style={{ fontSize: '8px', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}>PREMIUM TIER</div>
          <div style={{ fontSize: '12px', letterSpacing: '0.2em', color: 'white', marginBottom: '16px' }}>COMMODORE</div>
          <div style={{ fontSize: '32px', color: 'white', marginBottom: '32px' }}>$96,000 / YEAR</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
            {["60 FLIGHT HOURS ALLOCATION", "PRIORITY CONCIERGE (24/7)", "GLOBAL HANGAR ACCESS", "GUARANTEED AIRCRAFT AVAILABILITY"].map((f, i) => (
              <div key={i} style={{ fontSize: '9px', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em' }}>• {f}</div>
            ))}
          </div>
          <button style={{ width: '100%', background: 'transparent', color: 'white', border: '1px solid white', padding: '14px', fontSize: '9px', letterSpacing: '0.2em', borderRadius: '2px', cursor: 'pointer' }}>APPLY</button>
        </div>

        <div className="card" style={{ padding: '40px' }}>
          <div style={{ fontSize: '8px', letterSpacing: '0.3em', color: 'rgba(12,12,14,0.4)', marginBottom: '8px' }}>ULTIMATE TIER</div>
          <div style={{ fontSize: '12px', letterSpacing: '0.2em', color: 'var(--accent)', marginBottom: '16px' }}>FOUNDERS' CIRCLE</div>
          <div style={{ fontSize: '20px', color: '#0c0c0e', marginBottom: '40px', marginTop: '12px' }}>BY INVITATION ONLY</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
            {["UNLIMITED FLIGHT HOURS", "DEDICATED LIFESTYLE MANAGER", "NEW AIRCRAFT ACQUISITION", "BOARD VOTING PRIVILEGES"].map((f, i) => (
              <div key={i} style={{ fontSize: '9px', color: 'rgba(12,12,14,0.6)', letterSpacing: '0.1em' }}>• {f}</div>
            ))}
          </div>
          <button style={{ width: '100%', background: 'transparent', border: '1px solid var(--accent)', color: 'var(--accent)', padding: '14px', fontSize: '9px', letterSpacing: '0.2em', borderRadius: '2px', cursor: 'pointer' }}>ENQUIRE</button>
        </div>

      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', padding: 'clamp(32px,4vw,48px)', borderTop: '1px solid rgba(12,12,14,0.07)', gap: '24px' }}>
        {["PRIVATE HANGARS", "CAPTAIN ON CALL", "GLOBAL SLOTS", "CATERING"].map((p, i) => (
          <div key={i}>
            <div style={{ fontSize: '24px', color: 'var(--accent)', marginBottom: '16px' }}>·</div>
            <div style={{ fontSize: '10px', letterSpacing: '0.1em', color: '#0c0c0e', marginBottom: '8px' }}>{p}</div>
            <div style={{ fontSize: '9px', lineHeight: 1.6, color: 'rgba(12,12,14,0.5)', textTransform: 'none' }}>Seamless access and preferential rates globally.</div>
          </div>
        ))}
      </div>

    </PageOverlay>
  )
}
