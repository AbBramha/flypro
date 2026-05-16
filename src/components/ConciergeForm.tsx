export default function ConciergeForm() {
  return (
    <section style={{ background: 'white', padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
        
        <div>
          <div style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'var(--accent)', marginBottom: '16px' }}>CONCIERGE</div>
          <h2 style={{ fontSize: 'clamp(40px,6vw,80px)', color: '#0c0c0e', fontWeight: 400, lineHeight: 0.9, marginBottom: '32px' }}>
            START YOUR<br />NEXT MISSION.
          </h2>
          <p style={{ fontSize: '12px', lineHeight: 1.8, color: 'rgba(12,12,14,0.6)', maxWidth: '400px', textTransform: 'none' }}>
            Our lifestyle managers are available 24/7 to orchestrate every detail of your travel. From slot procurement to bespoke onshore arrangements.
          </p>
          <div style={{ marginTop: '48px' }}>
            <div style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(12,12,14,0.4)', marginBottom: '8px' }}>DIRECT ENQUIRY</div>
            <div style={{ fontSize: '16px', color: '#0c0c0e' }}>+44 20 7946 0123</div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div className="form-group">
              <label style={{ fontSize: '8px', letterSpacing: '0.2em', color: 'rgba(12,12,14,0.4)', display: 'block', marginBottom: '12px' }}>FULL NAME</label>
              <input type="text" placeholder="GIOVANNI MARCHETTI" style={{ width: '100%', border: 'none', borderBottom: '1px solid rgba(12,12,14,0.1)', padding: '12px 0', fontSize: '11px', outline: 'none', background: 'transparent' }} />
            </div>
            <div className="form-group">
              <label style={{ fontSize: '8px', letterSpacing: '0.2em', color: 'rgba(12,12,14,0.4)', display: 'block', marginBottom: '12px' }}>EMAIL ADDRESS</label>
              <input type="email" placeholder="G.MARCHETTI@PRO.COM" style={{ width: '100%', border: 'none', borderBottom: '1px solid rgba(12,12,14,0.1)', padding: '12px 0', fontSize: '11px', outline: 'none', background: 'transparent' }} />
            </div>
          </div>
          <div className="form-group">
            <label style={{ fontSize: '8px', letterSpacing: '0.2em', color: 'rgba(12,12,14,0.4)', display: 'block', marginBottom: '12px' }}>INTERESTED AIRCRAFT</label>
            <select style={{ width: '100%', border: 'none', borderBottom: '1px solid rgba(12,12,14,0.1)', padding: '12px 0', fontSize: '11px', outline: 'none', background: 'transparent', appearance: 'none' }}>
              <option>GLOBAL EXPRESS 7500</option>
              <option>GULFSTREAM G650ER</option>
              <option>FALCON 8X</option>
            </select>
          </div>
          <div className="form-group">
            <label style={{ fontSize: '8px', letterSpacing: '0.2em', color: 'rgba(12,12,14,0.4)', display: 'block', marginBottom: '12px' }}>MISSION DETAILS</label>
            <textarea placeholder="DESCRIBE YOUR PLANNED ITINERARY..." rows={4} style={{ width: '100%', border: 'none', borderBottom: '1px solid rgba(12,12,14,0.1)', padding: '12px 0', fontSize: '11px', outline: 'none', background: 'transparent', resize: 'none' }} />
          </div>
          <button style={{ width: '100%', background: '#1c3557', color: 'white', padding: '18px', fontSize: '10px', letterSpacing: '0.2em', border: 'none', borderRadius: '2px', cursor: 'pointer', marginTop: '16px' }}>
            SUBMIT ENQUIRY
          </button>
        </div>

      </div>
    </section>
  )
}
