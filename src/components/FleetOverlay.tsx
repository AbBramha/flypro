import { motion, AnimatePresence } from 'motion/react'
import FleetVideo from './FleetVideo'

interface FleetOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export default function FleetOverlay({ isOpen, onClose }: FleetOverlayProps) {
  const fleetItems = [
    {
      src: '/videos/white jet fleet.mp4',
      name: 'GLOBAL EXPRESS 7500',
      delay: 0,
      specs: [
        { label: 'RANGE', value: '7,700 NM' },
        { label: 'SPEED', value: 'MACH 0.925' }
      ]
    },
    {
      src: '/videos/black jet fleet.mp4',
      name: 'GULFSTREAM G650ER',
      delay: 0.12,
      specs: [
        { label: 'RANGE', value: '7,500 NM' },
        { label: 'SPEED', value: 'MACH 0.90' }
      ]
    },
    {
      src: '/videos/blue jet fleet.mp4',
      name: 'FALCON 8X',
      delay: 0.24,
      specs: [
        { label: 'RANGE', value: '6,450 NM' },
        { label: 'SPEED', value: 'MACH 0.90' }
      ]
    }
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{ position: 'fixed', inset: 0, zIndex: 110, display: 'flex', background: '#050a14' }}
        >
          {fleetItems.map((item, i) => (
            <FleetVideo 
              key={i} 
              videoSrc={item.src} 
              name={item.name} 
              specs={item.specs} 
              delay={item.delay} 
              isOpen={isOpen}
            />
          ))}

          <button 
            onClick={onClose}
            style={{ 
              position: 'absolute', top: '40px', right: '40px', zIndex: 20,
              padding: '12px 24px', background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)',
              color: 'white', fontSize: '10px', letterSpacing: '0.2em', borderRadius: '100px', cursor: 'pointer'
            }}
          >
            × CLOSE
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
