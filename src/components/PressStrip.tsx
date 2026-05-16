export default function PressStrip() {
  const press = [
    "CONDÉ NAST TRAVELLER",
    "ROBB REPORT",
    "MOTOR YACHT",
    "OCEAN LIVING",
    "FINANCIAL TIMES WEEKEND"
  ]

  return (
    <section style={{ 
      background: 'white', 
      borderTop: '1px solid rgba(12,12,14,0.07)', 
      borderBottom: '1px solid rgba(12,12,14,0.07)', 
      padding: 'clamp(28px,4vw,40px) clamp(24px,6vw,96px)' 
    }}>
      <div style={{ fontSize: '8px', letterSpacing: '0.35em', color: 'rgba(12,12,14,0.3)', marginBottom: '20px', textAlign: 'center' }}>
        AS FEATURED IN
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '16px 32px' }}>
        {press.map((p, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <span style={{ fontSize: '9px', letterSpacing: '0.28em', color: 'rgba(12,12,14,0.32)' }}>{p}</span>
            {i < press.length - 1 && (
              <span style={{ color: 'rgba(12,12,14,0.2)' }}>·</span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
