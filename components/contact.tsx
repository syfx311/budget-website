'use client'

import Link from 'next/link'
import { Facebook, Mail, MessageCircle, Youtube } from 'lucide-react'
import { motion } from 'framer-motion'

export function Contact() {
  return (
    <section id="contact" className="premium-contact">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.5 }} className="premium-contact-inner">
        <p className="premium-eyebrow">A note from Mommy Louise</p>
        <h2>Begin your most beautiful budgeting ritual.</h2>
        <p>Whether you are setting aside your first savings or creating a system for your whole family, we&apos;re here to make the start feel simple.</p>
        <div className="premium-action-row premium-contact-actions"><a href="https://www.facebook.com/profile.php?id=100087797289721" target="_blank" rel="noopener noreferrer" className="premium-button"><MessageCircle size={17} /> Message us</a><Link href="/orders" className="premium-text-link">Browse orders <span>→</span></Link></div>
      </motion.div>
    </section>
  )
}

export function Footer() {
  const footerGroups = [
    { title: 'Explore', links: [{ label: 'Budget App', href: '/app' }, { label: 'Gallery', href: '/gallery' }, { label: 'Journal', href: '/blog' }, { label: 'Our Story', href: '/about-mommy-louise' }] },
    { title: 'Support', links: [{ label: 'Cash Stuffing Guide', href: '/cash-stuffing-philippines' }, { label: 'Budget Binders', href: '/budget-binder-philippines' }, { label: 'Savings Challenges', href: '/savings-challenge-philippines' }] },
  ]

  return <footer className="premium-footer"><div className="premium-footer-grid"><div className="premium-footer-brand"><Link href="/" className="shop-footer-wordmark"><span className="shop-footer-script">mommy louise&apos;s</span><span className="shop-footer-label">BUDGET PH</span></Link><p>Thoughtfully designed budgeting tools for a gentler, more intentional life.</p><div className="footer-socials"><a href="https://www.facebook.com/profile.php?id=100087797289721" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={17} /></a><a href="https://www.tiktok.com/@mommylouiseee" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-3.77A4.83 4.83 0 0 1 15.69 1h-3.58v14.32a2.65 2.65 0 1 1-2.65-2.65c.25 0 .49.04.71.1V9.13a6.23 6.23 0 1 0 5.52 6.19V8.47a8.37 8.37 0 0 0 3.9.96V6.69Z" /></svg></a><a href="https://www.youtube.com/channel/UCHFl5W8x4mgy5LiEkiu0UCw" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube size={17} /></a><a href="mailto:admin.mommylouisebudgetph@gmail.com" aria-label="Email"><Mail size={17} /></a></div></div>{footerGroups.map((group) => <div key={group.title}><h3>{group.title}</h3><ul>{group.links.map((link) => <li key={`${group.title}-${link.label}`}><Link href={link.href}>{link.label}</Link></li>)}</ul></div>)}<div className="premium-footer-newsletter"><h3>Stay in the loop</h3><p>Quiet reminders, new pieces, and practical money notes.</p><a className="premium-text-link" href="https://www.facebook.com/profile.php?id=100087797289721" target="_blank" rel="noopener noreferrer">Get in touch <span>→</span></a></div></div><div className="premium-footer-bottom"><p>© {new Date().getFullYear()} Mommy Louise Budget PH. All rights reserved.</p><p>Made with care in the Philippines.</p></div></footer>
}
