'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/products' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about-mommy-louise' },
  { label: 'new website', href: 'https://shop.mommylouisebudgetph.com/' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    let previousScrollY = window.scrollY
    const onScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 30)
      setIsVisible(currentScrollY < 80 || currentScrollY < previousScrollY)
      previousScrollY = currentScrollY
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="announcement-bar">Free shipping on qualifying orders · Made with love in the Philippines</div>
      <motion.header animate={{ y: isVisible ? 0 : -120 }} transition={{ duration: 0.35, ease: 'easeOut' }} className={`site-header ${isScrolled ? 'site-header-scrolled' : ''}`}>
        <nav className="site-nav" aria-label="Primary navigation">
          <div className="site-links">
            {navigation.map((item) => <Link key={item.label} href={item.href}>{item.label}</Link>)}
          </div>
          <div className="site-nav-actions">
            <Link href="/orders" className="nav-order-link">Orders</Link>
            <a href="#contact" className="nav-cta">Start your journey</a>
          </div>
          <button type="button" className="mobile-menu-toggle" aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen((open) => !open)}>{mobileMenuOpen ? <X size={20} /> : <Menu size={21} />}</button>
        </nav>
        <AnimatePresence>
          {mobileMenuOpen && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.24 }} className="mobile-navigation">
            {navigation.map((item) => <Link href={item.href} key={item.label} onClick={() => setMobileMenuOpen(false)}>{item.label}</Link>)}
            <Link href="/orders" onClick={() => setMobileMenuOpen(false)}>Orders</Link>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="premium-button">Start your journey</a>
          </motion.div>}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
