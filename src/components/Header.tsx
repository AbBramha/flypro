import { useEffect, useRef } from 'react'

interface HeaderProps {
  menuOpen: boolean
  onBlogOpen: () => void
  onFleetOpen: () => void
  onJourneysOpen: () => void
  onMembershipOpen: () => void
  onAboutOpen: () => void
}

export default function Header({ 
  menuOpen, 
  onBlogOpen, 
  onFleetOpen, 
  onJourneysOpen, 
  onMembershipOpen, 
  onAboutOpen 
}: HeaderProps) {
  const pillRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (pillRef.current) {
        if (window.scrollY > 50) {
          pillRef.current.classList.add('scrolled')
        } else {
          pillRef.current.classList.remove('scrolled')
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={pillRef} className="navbar-pill">
      <div style={{
        borderRight: '1px solid rgba(12,12,14,0.08)',
        padding: '0 20px 0 14px',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M2 12L12 12L18 6H14L2 12Z" fill="#1c3557" />
          <path d="M5 14H11L14 11H8L5 14Z" fill="#1c3557" fillOpacity="0.4" />
        </svg>
        <span style={{ fontSize: '16px', letterSpacing: '0.28em', color: '#0c0c0e' }}>FLYPRO</span>
      </div>

      <div style={{ display: 'flex', height: '100%' }}>
        {[
          { label: 'JOURNEYS', handler: onJourneysOpen },
          { label: 'FLEET', handler: onFleetOpen },
          { label: 'MEMBERSHIP', handler: onMembershipOpen },
          { label: 'ABOUT US', handler: onAboutOpen },
          { label: 'BLOG', handler: onBlogOpen }
        ].map((item) => (
          <a
            key={item.label}
            href="#"
            onClick={(e) => {
              e.preventDefault()
              item.handler()
            }}
            style={{
              padding: '0 16px',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              fontSize: '10px',
              letterSpacing: '0.18em',
              color: 'rgba(12,12,14,0.55)',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#0c0c0e')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(12,12,14,0.55)')}
          >
            {item.label}
          </a>
        ))}
      </div>

      <button
        style={{
          background: '#1c3557',
          borderRadius: '100px',
          padding: '9px 22px',
          fontSize: '10px',
          color: 'white',
          transform: menuOpen ? 'translateX(calc(-1 * clamp(280px, 40vw, 440px)))' : 'none',
          transition: 'background 0.3s ease, transform 0.3s ease',
          margin: '0 6px',
          flexShrink: 0,
          border: 'none',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = '#253f63')}
        onMouseLeave={(e) => (e.currentTarget.style.background = '#1c3557')}
      >
        JOIN THE CLUB
      </button>
    </div>
  )
}
