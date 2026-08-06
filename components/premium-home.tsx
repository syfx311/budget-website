'use client'

import Image from 'next/image'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

const shopUrl = 'https://shop.mommylouisebudgetph.com/'

const stories = [
  { title: 'Budget Binder', label: '01 / THE FOUNDATION', image: '/images/budget-binder-elegance.jpg' },
  { title: 'Inserts', label: '02 / THE RITUAL', image: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F533dd43327394981beb18ad6f1071f2c?format=webp&width=800&height=1200' },
  { title: 'Savings Challenges', label: '03 / THE FUTURE', image: '/images/binder-elope-savings-challenge.png' },
  { title: 'Accessories', label: '04 / THE DETAILS', image: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F36e9fdc418dd457ca4be4ac83377ee54?format=webp&width=800&height=1200' },
]

const featuredPieces = [
  { title: 'The Everyday Edit', image: '/images/binder-pink-personalized-wallet.png', size: 'large' },
  { title: 'The Savings Ritual', image: '/images/binder-elope-challenge-accessories.png', size: 'small' },
  { title: 'The Personal Touch', image: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2Ffd246266eb26448cb1897ce6cf4cce61?format=webp&width=800&height=1200', size: 'small' },
]

const fadeUp = {
  initial: { opacity: 0, y: 34 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8, ease: 'easeOut' as const },
}

export function PremiumHome() {
  return (
    <div className="luxury-home">
      <section className="luxury-hero relative" aria-labelledby="luxury-hero-title">
        <Image src="/images/hero-background.jpg" alt="A blush budget binder arranged for a quiet morning ritual" fill priority sizes="100vw" className="luxury-hero-image" />
        <div className="luxury-hero-overlay" />
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className="luxury-hero-copy">
          <p className="luxury-kicker">MOMMY LOUISE'S BUDGET PH</p>
          <h1 id="luxury-hero-title"><span className="luxury-hero-word">{'  '}Save</span><br /><span className="luxury-hero-script">Beautifully.</span></h1>
          <div className="luxury-hero-actions">
            <a href={shopUrl} className="luxury-button">Shop collection <ArrowUpRight size={15} /></a>
          </div>
        </motion.div>
        <a className="luxury-scroll-cue" href="#designed" aria-label="Scroll to discover"><span>Scroll to discover</span><ArrowDown size={15} /></a>
      </section>

      <section id="designed" className="luxury-product-film" aria-labelledby="designed-title">
        <div className="luxury-film-sticky">
          <motion.div className="luxury-film-copy" {...fadeUp}>
            <p className="luxury-kicker">A daily companion</p>
            <h2 id="designed-title">Designed around<br />your life.</h2>
          </motion.div>
          <motion.div className="luxury-binder-stage" initial={{ opacity: 0, rotate: -8, scale: 0.86 }} whileInView={{ opacity: 1, rotate: 0, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}>
            <div className="luxury-binder-light" />
            <Image src="https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F3403a3c2686f4f4c80ba772d8a2613e4?format=webp&width=800&height=1200" alt="Pink quilted budget planner" width={1100} height={1100} sizes="(max-width: 767px) 90vw, 54vw" className="luxury-binder-image" />
            <span className="luxury-film-detail luxury-detail-one">Thoughtfully Made</span>
            <span className="luxury-film-detail luxury-detail-two">Every peso, in its place</span>
          </motion.div>
        </div>
      </section>

      <section className="luxury-manifesto" aria-labelledby="manifesto-title">
        <motion.h2 id="manifesto-title" {...fadeUp}>Money,<br /><em>but make it</em><br />beautiful.</motion.h2>
      </section>

      <section className="luxury-stories" aria-label="Explore the collection">
        <div className="luxury-section-intro"><p className="luxury-kicker">The collection</p><span>Scroll to explore</span></div>
        <div className="luxury-story-rail">
          <div className="luxury-story-track">
            {stories.map((story) => (
              <a href={shopUrl} className="luxury-story-card relative" key={story.title}>
                <Image src={story.image} alt={story.title} fill sizes="(max-width: 767px) 88vw, 72vw" className="luxury-story-image" />
                <div className="luxury-story-wash" />
                <div className="luxury-story-copy"><p>{story.label}</p><h2>{story.title}</h2><span>Discover <ArrowUpRight size={14} /></span></div>
              </a>
            ))}
            <div className="luxury-story-marquee-copy" aria-hidden="true">
              {stories.map((story) => (
                <a href={shopUrl} className="luxury-story-card relative" key={`marquee-${story.title}`} tabIndex={-1}>
                  <Image src={story.image} alt="" fill sizes="(max-width: 767px) 88vw, 72vw" className="luxury-story-image" />
                  <div className="luxury-story-wash" />
                  <div className="luxury-story-copy"><p>{story.label}</p><h2>{story.title}</h2><span>Discover <ArrowUpRight size={14} /></span></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="luxury-lifestyle relative" aria-labelledby="lifestyle-title">
        <Image src="/images/desk-organizer-bundle.jpg" alt="Budget binder on an organized desk in warm morning light" fill sizes="100vw" className="luxury-lifestyle-image" />
        <div className="luxury-lifestyle-wash" />
        <motion.div className="luxury-lifestyle-copy" {...fadeUp}><p className="luxury-kicker">The little things</p><h2 id="lifestyle-title">More than<br />a binder.</h2><p>A quieter way to make space for what matters.</p></motion.div>
      </section>

      <section className="luxury-featured" aria-labelledby="featured-title">
        <motion.div className="luxury-featured-heading" {...fadeUp}><p className="luxury-kicker">Made to keep</p><h2 id="featured-title">Featured<br /><em>collection.</em></h2><a href={shopUrl} className="luxury-quiet-link">View all pieces <ArrowUpRight size={14} /></a></motion.div>
        <div className="luxury-featured-grid">
          {featuredPieces.map((piece, index) => <motion.a href={shopUrl} key={piece.title} className={`luxury-featured-piece luxury-featured-${piece.size} relative`} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: index * 0.12 }}><Image src={piece.image} alt={piece.title} fill sizes="(max-width: 767px) 100vw, 50vw" className="luxury-featured-image" /><div className="luxury-piece-label"><span>{piece.title}</span><ArrowUpRight size={16} /></div></motion.a>)}
        </div>
      </section>

      <section className="luxury-community" aria-labelledby="community-title">
        <div className="luxury-community-photo relative"><Image src="/images/binder-planner-flatlay-collection.png" alt="A considered cash stuffing ritual" fill sizes="(max-width: 767px) 100vw, 50vw" className="luxury-community-image" /></div>
        <div className="luxury-community-copy"><p className="luxury-kicker">Our community</p><h2 id="community-title">For the life<br />you&apos;re building.</h2><div className="luxury-names"><span>“Aira M.”</span><span>“Kris A.”</span><span>“Marisa L.”</span></div></div>
      </section>

      <section className="luxury-final-cta relative" aria-labelledby="final-cta-title">
        <Image src="/images/budget-elegance-planner.jpg" alt="Elegant budget planner and binder collection" fill sizes="100vw" className="luxury-final-image" />
        <div className="luxury-final-wash" />
        <motion.div className="luxury-final-copy" {...fadeUp}><p className="luxury-kicker">A beautiful beginning</p><h2 id="final-cta-title">Ready to build<br />your future?</h2><a href={shopUrl} className="luxury-button">Shop collection <ArrowUpRight size={15} /></a></motion.div>
      </section>
    </div>
  )
}
