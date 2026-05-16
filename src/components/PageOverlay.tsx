import { motion, AnimatePresence } from 'motion/react'
import React from 'react'

export interface PageOverlayProps {
  isOpen: boolean
  onClose: () => void
  pageName: string
  children: React.ReactNode
}

export default function PageOverlay({ isOpen, onClose, pageName, children }: PageOverlayProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] as any }}
          style={{
            position: 'fixed', inset: 0, zIndex: 200,
            backgroundColor: 'var(--bg-base)', overflowY: 'auto'
          }}
        >
          <div style={{
            position: 'sticky', top: 0, zIndex: 10,
            height: 72, backgroundColor: 'rgba(248,246,242,0.92)',
            backdropFilter: 'blur(24px) saturate(180%)',
            borderBottom: '1px solid rgba(12,12,14,0.07)',
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 clamp(24px,6vw,80px)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ fontSize: 'clamp(14px,1.5vw,16px)', letterSpacing: '0.28em', color: '#0c0c0e' }}>FLYPRO</span>
              <span style={{ color: 'rgba(12,12,14,0.3)', fontSize: 12 }}>/</span>
              <span style={{ fontSize: 10, letterSpacing: '0.2em', color: 'rgba(12,12,14,0.5)' }}>{pageName}</span>
            </div>
            <button onClick={onClose} style={{
              padding: '9px 22px', fontSize: 10, letterSpacing: '0.2em',
              color: 'rgba(12,12,14,0.6)', background: 'transparent',
              border: '1px solid rgba(12,12,14,0.1)', borderRadius: 100,
              cursor: 'pointer', fontFamily: 'var(--font-serif)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#0c0c0e'; e.currentTarget.style.border = '1px solid rgba(12,12,14,0.3)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(12,12,14,0.6)'; e.currentTarget.style.border = '1px solid rgba(12,12,14,0.1)'; }}
            >
              × CLOSE
            </button>
          </div>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
