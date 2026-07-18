'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Gift, Heart, MapPin, PenLine, Sparkles, Truck, WalletCards } from 'lucide-react'
import { motion } from 'framer-motion'

const collections = [
  { title: 'Premium Collection', detail: 'Budget wallets made for everyday rituals.', image: '/images/binder-pink-personalized-wallet.png', href: '/products' },
  { title: 'Budget Wallets', detail: 'Beautiful organization for every peso.', image: '/images/binder-pink-pebbled-wallet.jpg', href: '/products' },
  { title: 'Savings Challenges', detail: 'Small, intentional steps toward more.', image: '/images/binder-elope-savings-challenge.png', href: '/products' },
  { title: 'Digital Downloads', detail: 'Thoughtfully designed for your routine.', image: '/images/budget-inserts.png', href: '/products' },
  { title: 'Personalized Items', detail: 'Made distinctly yours.', image: '/images/premium-personalized-wallet.jpg', href: '/products' },
]

const products = [
  { title: 'Tabbed Long Wallet', detail: 'A soft, structured home for your everyday budget.', image: '/images/budget-mystic-wallet.jpg' },
  { title: 'Personalized Binder', detail: 'A considered keepsake for your savings journey.', image: '/images/binder-pink-personalized-wallet.png' },
  { title: 'Cash Envelope Set', detail: 'A beautiful way to stay mindful with money.', image: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F612e33ce924343489c8c60716eeef140?format=webp&width=800&height=1200' },
  { title: '100 Envelope Challenge', detail: 'Turn your saving goals into a lasting ritual.', image: '/images/binder-elope-challenge-accessories.png' },
]

const galleryImages = [
  { image: '/images/binder-planner-flatlay-collection.png', alt: 'Cash stuffing desk essentials' },
  { image: '/images/budget-elegance-planner.jpg', alt: 'Premium budgeting planner' },
  { image: '/images/binder-wallet-collection-lineup.jpg', alt: 'Budget wallet collection' },
  { image: '/images/desk-organizer-bundle.jpg', alt: 'Budgeting workspace' },
]

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export function PremiumHome() {
  return (
    <>
      <section className="premium-hero relative">
        <Image src="/images/hero-background.jpg" alt="Pink personalized budget wallet beside coffee and flowers" fill priority sizes="100vw" className="premium-hero-image" />
        <div className="premium-hero-shade" />
        <motion.div initial="hidden" animate="visible" transition={{ duration: 0.65, staggerChildren: 0.12 }} className="premium-hero-content">
          <motion.p variants={reveal} className="premium-eyebrow">Beautiful budgeting, better life.</motion.p>
          <motion.h1 variants={reveal}>Organize your<br />money beautifully.</motion.h1>
          <motion.p variants={reveal} className="premium-hero-copy">Premium budget wallets, binders, and cash stuffing essentials thoughtfully designed for Filipino women.</motion.p>
          <motion.div variants={reveal} className="premium-action-row">
            <Link href="/products" className="premium-button">Shop collection <ArrowRight size={16} /></Link>
            <Link href="#best-sellers" className="premium-text-link">Explore best sellers</Link>
          </motion.div>
        </motion.div>
      </section>

      <section className="premium-trust-bar" aria-label="Our promises">
        {[
          [Sparkles, 'Premium quality', 'Crafted with care'],
          [PenLine, 'Personalized for you', 'Thoughtfully made yours'],
          [Truck, 'Nationwide & worldwide shipping', 'Delivered wherever you are'],
          [Heart, 'Made with love', 'Designed in the Philippines'],
        ].map(([Icon, title, detail]) => {
          const FeatureIcon = Icon as typeof Sparkles
          return <div className="premium-trust-item" key={title as string}><FeatureIcon size={20} strokeWidth={1.3} /><div><p>{title as string}</p><span>{detail as string}</span></div></div>
        })}
      </section>

      <section className="premium-section premium-collections" id="collections">
        <div className="premium-section-heading"><p className="premium-eyebrow">Made for the moments that matter</p><h2>Find your beautiful system.</h2><Link href="/products" className="premium-text-link">View all collections <ArrowRight size={15} /></Link></div>
        <div className="premium-collection-grid">
          {collections.map((collection, index) => (
            <motion.div key={collection.title} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.5, delay: index * 0.06 }} variants={reveal}>
              <Link href={collection.href} className={`premium-collection-card premium-collection-${index} relative`}>
                <Image src={collection.image} alt={collection.title} width={900} height={1100} sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 24vw" className="premium-card-image h-full w-full" />
                <div className="premium-image-tint" />
                <div className="premium-collection-label"><p>{collection.title}</p><span>{collection.detail}</span><b>Shop now <ArrowRight size={14} /></b></div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="premium-section premium-story-section">
        <div className="premium-story-copy">
          <p className="premium-eyebrow">More than just a wallet</p>
          <h2>Beautiful budgeting starts with intentional habits.</h2>
          <p className="premium-body-copy">A cash stuffing system gives each peso a purpose. It turns everyday spending into a gentler, more conscious routine—so you can make room for the life you are building.</p>
          <div className="premium-benefit-list">
            <div><WalletCards size={20} /><span><b>Make every peso visible</b>See exactly where your money goes.</span></div>
            <div><Gift size={20} /><span><b>Build habits that last</b>Small steps lead to meaningful change.</span></div>
            <div><Heart size={20} /><span><b>Save for what matters</b>Your goals deserve a beautiful place to grow.</span></div>
          </div>
          <Link href="/gallery" className="premium-text-link">Discover the cash stuffing method <ArrowRight size={15} /></Link>
        </div>
        <div className="premium-story-image relative min-h-[440px]"><Image src="/images/binder-complete-collection-set.png" alt="Open cash stuffing budget binder" width={1200} height={1000} sizes="(max-width: 900px) 100vw, 50vw" className="premium-card-image h-full w-full" /></div>
      </section>

      <section className="premium-section premium-products" id="best-sellers">
        <div className="premium-section-heading premium-heading-row"><div><p className="premium-eyebrow">Made to be used and loved</p><h2>Best sellers</h2></div><Link href="/products" className="premium-text-link">Shop all <ArrowRight size={15} /></Link></div>
        <div className="premium-product-grid">
          {products.map((product, index) => (
            <motion.article key={product.title} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.45, delay: index * 0.08 }} variants={reveal} className="premium-product-card">
              <Link href="/products" className="premium-product-image relative h-[360px]"><Image src={product.image} alt={product.title} width={900} height={1100} sizes="(max-width: 700px) 90vw, 25vw" className="premium-card-image h-full w-full" />{index === 0 && <span>Best seller</span>}</Link>
              <div><h3>{product.title}</h3><p>{product.detail}</p><Link href="/products" className="premium-text-link">View piece <ArrowRight size={14} /></Link></div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="premium-personalization">
        <div className="premium-personalization-image relative min-h-[410px]"><Image src="/images/premium-personalized-wallet.jpg" alt="Personalized blush budget wallet" width={1200} height={1400} sizes="(max-width: 900px) 100vw, 45vw" className="premium-card-image h-full w-full" /></div>
        <div className="premium-personalization-copy"><p className="premium-eyebrow">Made just for you</p><h2>Personalize your budgeting journey.</h2><p className="premium-body-copy">Choose the details that make your daily ritual feel distinctly yours.</p><div className="premium-steps">{[['01', 'Choose your color'], ['02', 'Add your name'], ['03', 'Pick your charms'], ['04', 'Choose your inserts']].map(([number, step]) => <div key={number}><span>{number}</span><p>{step}</p></div>)}</div><Link href="/products" className="premium-button">Design yours <ArrowRight size={16} /></Link></div>
      </section>

      <section className="premium-section premium-gallery-section">
        <div className="premium-section-heading"><p className="premium-eyebrow">A softer way to save</p><h2>Everyday moments, thoughtfully kept.</h2><p className="premium-body-copy">A glimpse into the rituals, desks, and little wins that make budgeting feel good.</p></div>
        <div className="premium-gallery-grid">{galleryImages.map((photo, index) => <div className={`premium-gallery-image premium-gallery-${index} relative h-[240px]`} key={photo.image}><Image src={photo.image} alt={photo.alt} width={900} height={900} sizes="(max-width: 700px) 50vw, 25vw" className="premium-card-image h-full w-full" /></div>)}</div>
      </section>

      <section className="premium-section premium-testimonials">
        <div className="premium-section-heading"><p className="premium-eyebrow">Loved by Filipino women</p><h2>Small rituals. Real progress.</h2></div>
        <div className="premium-testimonial-grid">{[
          ['“I look forward to filling my envelopes now. Everything is beautiful and so thoughtfully made.”', 'Kris A.', 'Quezon City'],
          ['“It makes saving feel possible, even with a busy household. My wallet feels like it was made for me.”', 'Marisa L.', 'Laguna'],
          ['“The quality is exceptional, from the packaging to every little detail. Worth every peso.”', 'Aira M.', 'Cebu City'],
        ].map(([quote, name, location]) => <article className="premium-review-card" key={name}><div className="premium-stars">★★★★★</div><blockquote>{quote}</blockquote><footer><span>{name}</span><small><MapPin size={12} /> {location}</small></footer></article>)}</div>
      </section>
    </>
  )
}
