'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Check, Sparkles, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const STORAGE_KEY = 'mommy-louise-migration-announcement'
const ONE_DAY = 24 * 60 * 60 * 1000
const STORE_URL = 'https://shop.mommylouisebudgetph.com/'

export function MigrationAnnouncementModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [dontShowAgain, setDontShowAgain] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const preference = window.localStorage.getItem(STORAGE_KEY)
    const dismissedAt = Number(preference)

    if (preference !== 'never' && (!dismissedAt || Date.now() - dismissedAt >= ONE_DAY)) {
      setIsOpen(true)
    }
  }, [])

  useEffect(() => {
    if (!isOpen) return

    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal()
        return
      }

      if (event.key !== 'Tab') return

      const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled])'
      )
      if (!focusableElements?.length) return

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, dontShowAgain])

  const closeModal = () => {
    window.localStorage.setItem(STORAGE_KEY, dontShowAgain ? 'never' : String(Date.now()))
    setIsOpen(false)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          aria-labelledby="migration-announcement-title"
          aria-modal="true"
          className="migration-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal()
          }}
          role="dialog"
        >
          <motion.div
            ref={dialogRef}
            className="migration-modal-panel"
            initial={{ opacity: 0, scale: 0.94, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 18 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            <span className="migration-sparkle migration-sparkle-left" aria-hidden="true"><Sparkles size={18} /></span>
            <span className="migration-sparkle migration-sparkle-right" aria-hidden="true"><Sparkles size={15} /></span>
            <button ref={closeButtonRef} className="migration-close-button" onClick={closeModal} type="button" aria-label="Close announcement">
              <X size={19} strokeWidth={1.8} />
            </button>

            <div className="migration-modal-content">
              <div className="migration-launch-badge"><Sparkles size={14} /> New Website Launch</div>
              <p className="migration-eyebrow">We&apos;re Moving!</p>
              <h2 id="migration-announcement-title">A Better Shopping Experience is Coming</h2>
              <div className="migration-copy">
                <p>We&apos;re excited to announce that Mommy Louise Budget PH is moving to our brand new online store!</p>
                <p>Starting soon, all products, new collections, exclusive promos, and future updates will be available at:</p>
                <a className="migration-store-link" href={STORE_URL} target="_blank" rel="noopener noreferrer">shop.mommylouisebudgetph.com</a>
                <p>Our new website is faster, easier to navigate, and designed to give you a better shopping experience across all devices.</p>
                <p>Thank you for supporting Mommy Louise Budget PH. We can&apos;t wait to welcome you to our new home!</p>
              </div>

              <div className="migration-action-stack">
                <a className="migration-primary-action" href={STORE_URL} target="_blank" rel="noopener noreferrer" onClick={closeModal}>
                  Visit Our New Store <ArrowUpRight size={16} />
                </a>
                <button className="migration-secondary-action" onClick={closeModal} type="button">Continue to Current Website</button>
              </div>

              <label className="migration-preference">
                <input checked={dontShowAgain} onChange={(event) => setDontShowAgain(event.target.checked)} type="checkbox" />
                <span className="migration-checkbox" aria-hidden="true"><Check size={12} strokeWidth={3} /></span>
                Don&apos;t show this again
              </label>
              <p className="migration-footer-note">The current website will remain available for a limited time during our migration.</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
