import { useEffect, useRef } from 'react'

interface Ripple {
  x: number
  y: number
  age: number
  active: boolean
}

export default function RippleTrail() {
  const ripplesRef = useRef<Ripple[]>(Array(80).fill(null).map(() => ({ x: 0, y: 0, age: 1, active: false })))
  const lastMouseRef = useRef({ x: -100, y: -100 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - lastMouseRef.current.x
      const dy = e.clientY - lastMouseRef.current.y
      const dist = Math.sqrt(dx*dx + dy*dy)

      if (dist > 25) {
        lastMouseRef.current = { x: e.clientX, y: e.clientY }
        const ripples = ripplesRef.current
        const inactive = ripples.find(r => !r.active)
        if (inactive) {
          inactive.x = e.clientX
          inactive.y = e.clientY
          inactive.age = 0
          inactive.active = true
        }
      }
    }

    let animationFrameId: number
    const render = () => {
      const container = containerRef.current
      if (container) {
        const children = container.children
        ripplesRef.current.forEach((r, i) => {
          if (r.active) {
            r.age += 0.012
            if (r.age >= 1) {
              r.active = false
            }
            
            const el = children[i] as HTMLElement
            if (el) {
              if (r.active) {
                const size = 20 + r.age * (300 - 20)
                const opacity = 1 - Math.pow(r.age, 1.2)
                el.style.transform = `translate(${r.x - size/2}px, ${r.y - size/2}px)`
                el.style.width = `${size}px`
                el.style.height = `${size}px`
                el.style.opacity = `${opacity}`
                el.style.display = 'block'
              } else {
                el.style.display = 'none'
              }
            }
          }
        })
      }
      animationFrameId = requestAnimationFrame(render)
    }

    window.addEventListener('mousemove', handleMouseMove)
    render()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <>
      <svg style={{ width: 0, height: 0, position: 'absolute' }}>
        <filter id="liquid-trail">
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="30" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
      <div ref={containerRef} style={{ position: 'fixed', inset: 0, zIndex: 30, pointerEvents: 'none' }}>
        {ripplesRef.current.map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              borderRadius: '50%',
              backdropFilter: 'url(#liquid-trail) blur(1px)',
              boxShadow: 'inset 0 0 30px rgba(255,255,255,0.1), 0 0 15px rgba(147,197,253,0.15)',
              display: 'none'
            }}
          />
        ))}
      </div>
    </>
  )
}
