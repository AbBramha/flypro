import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface StaggeredMenuProps {
  isOpen: boolean
  onToggle: () => void
  onFleetOpen: () => void
}

export default function StaggeredMenu({ isOpen, onToggle, onFleetOpen }: StaggeredMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const prelayer1Ref = useRef<HTMLDivElement>(null)
  const prelayer2Ref = useRef<HTMLDivElement>(null)
  const navItemsRef = useRef<(HTMLLIElement | null)[]>([])
  const socialsRef = useRef<HTMLDivElement>(null)
  const menuLabelRef = useRef<HTMLSpanElement>(null)
  const closeLabelRef = useRef<HTMLSpanElement>(null)
  const timelineRef = useRef<gsap.core.Timeline | null>(null)

  useEffect(() => {
    timelineRef.current = gsap.timeline({ paused: true })

    timelineRef.current
      // Cycle label text
      .to(menuLabelRef.current, { y: '-100%', duration: 0.4, ease: 'power3.inOut' }, 0)
      .to(closeLabelRef.current, { y: '-100%', duration: 0.4, ease: 'power3.inOut' }, 0)
      
      // Prelayers slide in
      .to(prelayer1Ref.current, { x: 0, duration: 0.6, ease: 'power4.out' }, 0)
      .to(prelayer2Ref.current, { x: 0, duration: 0.6, ease: 'power4.out' }, 0.08)
      
      // Panel slides in
      .to(panelRef.current, { x: 0, duration: 0.8, ease: 'power4.out' }, 0.15)
      
      // Prelayers slide out
      .to([prelayer1Ref.current, prelayer2Ref.current], { x: '-100%', duration: 0.5, ease: 'power3.in' }, 0.5)

      // Nav items stagger in
      .fromTo(navItemsRef.current.map(el => el?.firstElementChild), 
        { x: -40, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out', stagger: 0.06 }, 0.6)
      
      .fromTo(socialsRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 }, 0.8)

  }, [])

  useEffect(() => {
    if (isOpen) {
      timelineRef.current?.play()
    } else {
      timelineRef.current?.reverse()
    }
  }, [isOpen])

  return (
    <>
      <button className={`menu-toggle ${isOpen ? 'is-open' : ''}`} onClick={onToggle}>
        <div className="menu-toggle-label">
          <span ref={menuLabelRef} style={{ top: '0%' }}>MENU</span>
          <span ref={closeLabelRef} style={{ top: '100%' }}>CLOSE</span>
        </div>
        <span className="menu-toggle-icon">+</span>
      </button>

      <div ref={prelayer1Ref} className="menu-prelayer menu-prelayer-1" />
      <div ref={prelayer2Ref} className="menu-prelayer menu-prelayer-2" />

      <div ref={panelRef} className="menu-panel">
        <ul className="menu-nav">
          {[
            { label: 'HOME', action: onToggle },
            { label: 'OUR FLEET', action: () => { onToggle(); setTimeout(onFleetOpen, 600); } },
            { label: 'MEMBERSHIP', action: onToggle },
            { label: 'REGATTAS & EVENTS', action: onToggle },
            { label: 'ACADEMY', action: onToggle },
            { label: 'CONTACT', action: onToggle }
          ].map((item, i) => (
            <li key={item.label} ref={el => navItemsRef.current[i] = el}>
              <a onClick={item.action}>{item.label}</a>
            </li>
          ))}
        </ul>

        <div ref={socialsRef} className="menu-socials">
          <span className="menu-socials-title">FOLLOW</span>
          <div className="menu-socials-links">
            <a href="#">INSTAGRAM</a>
            <a href="#">FACEBOOK</a>
            <a href="#">TWITTER</a>
          </div>
        </div>
      </div>
    </>
  )
}
