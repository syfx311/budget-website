'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, ShoppingBag, X } from 'lucide-react'
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

  return (
    <>
      <div className="announcement-bar">Free shipping on qualifying orders · Made with love in the Philippines</div>
      <motion.header initial={{ y: -32, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.45 }} className="site-header">
        <nav className="site-nav" aria-label="Primary navigation">
          <Link href="/" className="brand-lockup" onClick={() => setMobileMenuOpen(false)}>
            <Image src="/images/logo.png" alt="Mommy Louise Budget PH" width={46} height={46} className="brand-mark" priority />
            <span><b>mommy louise&apos;s</b><small>Budget PH</small></span>
          </Link>
          <div className="site-links">
            {navigation.map((item) => <Link key={item.label} href={item.href}>{item.label}</Link>)}
          </div>
          <div className="site-nav-actions">
            <Link href="/orders" className="nav-order-link"><ShoppingBag size={17} /><span>Orders</span></Link>
            <a href="#contact" className="nav-cta">Start your journey</a>
          </div>
          <button type="button" className="mobile-menu-toggle" aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen((open) => !open)}>{mobileMenuOpen ? <X size={21} /> : <Menu size={22} />}</button>
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
