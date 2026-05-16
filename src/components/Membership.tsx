import { motion } from 'motion/react'

export default function Membership() {
  return (
    <section style={{ background: 'var(--bg-base)', padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
        <div style={{ width: '40px', height: '1px', background: 'var(--accent)' }} />
        <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'var(--accent)' }}>MEMBERSHIP</span>
      </div>
      <h2 style={{ fontSize: 'clamp(40px,6vw,80px)', color: '#0c0c0e', fontWeight: 400, lineHeight: 0.95, marginBottom: '64px' }}>
        SELECT YOUR TIER.
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'clamp(32px, 6vw, 80px)', alignItems: 'start' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          {/* SIGNATURE */}
          <div className="card" style={{ padding: '32px' }}>
            <div style={{ fontSize: '8px', letterSpacing: '0.3em', color: 'rgba(12,12,14,0.4)', marginBottom: '8px' }}>TIER 1</div>
            <div style={{ fontSize: '9px', letterSpacing: '0.25em', color: 'var(--accent)', marginBottom: '16px' }}>SIGNATURE / ENTRY LEVEL</div>
            <div style={{ fontSize: '40px', color: '#0c0c0e', fontWeight: 400, marginBottom: '4px' }}>$12,000</div>
            <div style={{ fontSize: '9px', color: 'rgba(12,12,14,0.4)', marginBottom: '24px' }}>/ YEAR</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '9px', letterSpacing: '0.1em', color: 'rgba(12,12,14,0.6)' }}>
              {["DEDICATED BERTH ACCESS","RACE ENTRY DISCOUNTS","CONCIERGE HOTLINE","2 GUEST PASSES / YEAR"].map((f, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: 'var(--accent)' }}>•</span> {f}</li>
              ))}
            </ul>
            <button style={{ width: '100%', background: 'var(--accent)', color: 'white', padding: '12px', fontSize: '10px', letterSpacing: '0.2em', borderRadius: '2px', border: 'none', cursor: 'pointer' }}>APPLY NOW</button>
          </div>

          {/* COMMODORE */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.08, duration: 0.6 }}
            className="card-accent" 
            style={{ padding: '32px', position: 'relative' }}
          >
            <div style={{ display: 'inline-block', background: 'var(--accent)', color: 'white', fontSize: '8px', letterSpacing: '0.3em', padding: '4px 12px', borderRadius: '2px', marginBottom: '16px' }}>MOST POPULAR</div>
            <div style={{ fontSize: '8px', letterSpacing: '0.3em', color: 'rgba(12,12,14,0.4)', marginBottom: '8px' }}>TIER 2</div>
            <div style={{ fontSize: '9px', letterSpacing: '0.25em', color: 'var(--accent)', marginBottom: '16px' }}>COMMODORE / PROFESSIONAL</div>
            <div style={{ fontSize: '40px', color: 'var(--accent)', fontWeight: 400, marginBottom: '4px' }}>$24,000</div>
            <div style={{ fontSize: '9px', color: 'rgba(12,12,14,0.4)', marginBottom: '24px' }}>/ YEAR</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '9px', letterSpacing: '0.1em', color: 'rgba(12,12,14,0.6)' }}>
              {["PRIORITY BERTHING GLOBALLY","COMPLIMENTARY RACE ENTRIES","DEDICATED LIFESTYLE CONCIERGE","UNLIMITED GUEST PASSES"].map((f, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: 'var(--accent)' }}>•</span> {f}</li>
              ))}
            </ul>
            <button style={{ width: '100%', background: 'var(--accent)', color: 'white', padding: '12px', fontSize: '10px', letterSpacing: '0.2em', borderRadius: '2px', border: 'none', cursor: 'pointer' }}>APPLY NOW</button>
          </motion.div>

          {/* FOUNDERS */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.16, duration: 0.6 }}
            className="card" 
            style={{ padding: '32px' }}
          >
            <div style={{ fontSize: '8px', letterSpacing: '0.3em', color: 'rgba(12,12,14,0.4)', marginBottom: '8px' }}>TIER 3</div>
            <div style={{ fontSize: '9px', letterSpacing: '0.25em', color: 'var(--accent)', marginBottom: '16px' }}>FOUNDERS' CIRCLE / INVITATION ONLY</div>
            <div style={{ fontSize: '18px', color: '#0c0c0e', fontWeight: 400, marginBottom: '37px', marginTop: '16px' }}>BY INVITATION</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '9px', letterSpacing: '0.1em', color: 'rgba(12,12,14,0.6)' }}>
              {["PRIVATE YACHT ACQUISITION CONSULTING","BOARD MEMBERSHIP VOTING RIGHTS","EXOTIC PROVISIONING ACCESS","ANNUAL GALA VIP INVITATION"].map((f, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: 'var(--accent)' }}>•</span> {f}</li>
              ))}
            </ul>
            <button style={{ width: '100%', background: 'transparent', border: '1px solid var(--accent)', color: 'var(--accent)', padding: '12px', fontSize: '10px', letterSpacing: '0.2em', borderRadius: '2px', cursor: 'pointer' }}>ENQUIRE</button>
          </motion.div>

        </div>

        <div style={{ position: 'sticky', top: '120px', borderRadius: '4px', overflow: 'hidden' }}>
          <video 
            src="/videos/private jet interior.mp4" 
            autoPlay loop muted playsInline
            style={{ width: '100%', height: '560px', objectFit: 'cover', display: 'block' }} 
          />
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(5,10,20,0.9) 0%, rgba(5,10,20,0.6) 40%, transparent 80%)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '32px' }}>
            <div style={{ fontSize: '8px', letterSpacing: '0.3em', color: 'rgba(147,197,253,0.85)', marginBottom: '12px' }}>OCEAN ECLIPSE — MAIN SALON</div>
            <div style={{ fontSize: '11px', lineHeight: 1.8, color: 'rgba(255,255,255,0.7)', maxWidth: '280px' }}>
              EXPERIENCE UNPARALLELED CRAFTSMANSHIP. EVERY TIER UNLOCKS A NEW DIMENSION OF LUXURY AT SEA.
            </div>
            <button className="glass-mid" style={{ marginTop: '20px', padding: '12px 28px', color: 'white', fontSize: '9px', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '2px', cursor: 'pointer' }}>
              APPLY FOR MEMBERSHIP
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
