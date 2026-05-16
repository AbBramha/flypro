import { useState, useEffect } from 'react'
import { motion } from 'motion/react'

interface HeroProps {
  fleetOpen: boolean
  menuOpen: boolean
}

export default function Hero({ fleetOpen, menuOpen }: HeroProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
  }

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.96, ease: [0.22, 1, 0.36, 1] as any } }
  }

  return (
    <>
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        filter: fleetOpen ? 'blur(100px)' : 'blur(0px)',
        transition: fleetOpen ? 'filter 1.56s cubic-bezier(0.19,1,0.22,1)' : 'filter 1.3s cubic-bezier(0.19,1,0.22,1)'
      }}>
        <video 
          src="/videos/hero section video.mp4" 
          autoPlay loop muted playsInline
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center' }} 
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.45) 100%)'
        }} />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={fleetOpen ? 'hidden' : 'visible'}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 20,
          pointerEvents: 'none'
        }}
      >
        <div style={{
          position: 'absolute',
          top: '50%',
          left: 'clamp(24px, 6vw, 96px)',
          transform: 'translateY(-52%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          textAlign: 'left',
          maxWidth: 'clamp(340px, 48vw, 640px)'
        }}>
          <motion.div variants={textVariants} style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '28px', height: '1px', background: 'rgba(255,255,255,0.5)' }} />
            <span style={{ fontSize: '9px', letterSpacing: '0.35em', color: 'rgba(255,255,255,0.7)' }}>
              PRIVATE MEMBERSHIP · EST. 1975
            </span>
          </motion.div>

          <div style={{ overflow: 'hidden' }}>
            <motion.div variants={textVariants} style={{ fontStyle: 'normal', fontSize: 'clamp(48px, 9.5vw, 130px)', fontWeight: 400, lineHeight: 0.91, letterSpacing: '-0.01em', textTransform: 'uppercase', color: 'white', textShadow: '0 4px 32px rgba(0,0,0,0.35)' }}>THE SKY</motion.div>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <motion.div variants={textVariants} style={{ fontStyle: 'italic', fontSize: 'clamp(48px, 9.5vw, 130px)', fontWeight: 400, lineHeight: 0.91, letterSpacing: '-0.01em', textTransform: 'uppercase', color: 'white', textShadow: '0 4px 32px rgba(0,0,0,0.35)' }}>IS YOURS.</motion.div>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <motion.div variants={textVariants} style={{ fontStyle: 'normal', fontSize: 'clamp(48px, 9.5vw, 130px)', fontWeight: 400, lineHeight: 0.91, letterSpacing: '-0.01em', textTransform: 'uppercase', color: 'white', textShadow: '0 4px 32px rgba(0,0,0,0.35)' }}>CLAIM IT</motion.div>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <motion.div variants={textVariants} style={{ fontStyle: 'italic', fontSize: 'clamp(48px, 9.5vw, 130px)', fontWeight: 400, lineHeight: 0.91, letterSpacing: '-0.01em', textTransform: 'uppercase', color: 'white', textShadow: '0 4px 32px rgba(0,0,0,0.35)' }}>NOW.</motion.div>
          </div>

          <motion.div variants={textVariants} style={{
            marginTop: '28px',
            fontSize: 'clamp(10px,1vw,11px)',
            letterSpacing: '0.2em',
            maxWidth: '340px',
            lineHeight: 1.9,
            color: 'rgba(255,255,255,0.6)',
            textShadow: '0 2px 8px rgba(0,0,0,0.3)'
          }}>
            A PRIVATE WORLD IN THE CLOUDS. CURATED JOURNEYS, THREE EXTRAORDINARY AIRCRAFT, AND A CIRCLE OF MEMBERS WHO UNDERSTAND THAT TRUE LUXURY HAS NO ALTITUDE LIMIT.
          </motion.div>
        </div>
      </motion.div>

      {!scrolled && (
        <div style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', zIndex: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div style={{ fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.3)' }}>SCROLL</div>
          <div style={{ width: '1px', height: '48px', background: 'rgba(255,255,255,0.2)', position: 'relative', overflow: 'hidden' }}>
            <div className="scroll-dot" style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'rgba(255,255,255,0.6)', position: 'absolute', top: 0, left: '-1px' }} />
          </div>
        </div>
      )}

      <button
        className="glass-mid"
        style={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          zIndex: 50,
          transform: menuOpen ? 'translateX(calc(-1 * clamp(260px,38vw,420px)))' : fleetOpen ? 'translateX(200px)' : 'none',
          opacity: fleetOpen ? 0 : 1,
          padding: 'clamp(12px,1.2vw,16px) clamp(24px,3vw,40px)',
          fontSize: 'clamp(11px,1vw,14px)',
          letterSpacing: '0.2em',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.5s cubic-bezier(0.19,1,0.22,1)'
        }}
      >
        JOIN THE CLUB
      </button>
    </>
  )
}
