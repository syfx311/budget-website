'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ShoppingCart, ZoomIn, X, Wallet, Tag, DollarSign, Heart, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function TabbedWalletLanding() {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null)
  const [selectedColor, setSelectedColor] = useState<'blush' | 'beige'>('blush')

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  }

  return (
    <div className="wallet-product-page">
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex justify-center mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary border border-primary/20">
              <Sparkles className="w-4 h-4" />
              New Arrival
            </span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <button
                onClick={() => setEnlargedImage('https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F725333fb26e64e46a0624eacebf950b6?format=webp&width=800&height=1200')}
                className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl border border-border/50 group cursor-pointer w-full"
              >
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F725333fb26e64e46a0624eacebf950b6?format=webp&width=800&height=1200"
                  alt="Tabbed Long Wallet - Closed View in Blush Pink"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </button>
              <div>
                <button
                  onClick={() => setEnlargedImage('https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F733f3b5baede4679b3bbcb157f95b97e?format=webp&width=800&height=1200')}
                  className="relative aspect-square overflow-hidden rounded-2xl shadow-lg border border-border/50 group cursor-pointer w-full"
                >
                  <Image
                    src="https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F733f3b5baede4679b3bbcb157f95b97e?format=webp&width=800&height=1200"
                    alt="Tabbed Long Wallet - Interior with Budget Tabs in Blush Pink"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 25vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </button>
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h1 className="font-signature text-5xl md:text-6xl text-foreground mb-3">
                  Tabbed Long Wallet
                </h1>
                <h2 className="text-2xl text-primary font-semibold font-noto-sans">
                  Beautifully organized budgeting starts here.
                </h2>
              </div>

              <p className="text-foreground/80 text-lg leading-relaxed font-noto-sans">
                Designed for budgeting enthusiasts and cash stuffing lovers, the Tabbed Long Wallet keeps your cash, cards, and essentials perfectly organized in one elegant place. Stylish on the outside, functional on the inside.
              </p>

              <div className="flex gap-3 pt-2">
                <Button asChild className="px-8 py-6 text-lg font-semibold rounded-full">
                  <a href="#pre-order">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Pre-Order Now
                  </a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="px-8 py-6 text-lg font-semibold rounded-full"
                >
                  <a href="#features">View Features</a>
                </Button>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-foreground/70 font-noto-sans">
                  <span className="font-semibold text-foreground">Estimated Arrival:</span> Mid-July
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="text-3xl md:text-4xl font-semibold text-center mb-12 text-foreground"
          >
            Why Choose the Tabbed Long Wallet
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Tag,
                title: 'Organized Budgeting',
                desc: 'Labeled tabs help separate your spending categories.',
              },
              {
                icon: Heart,
                title: 'Elegant Design',
                desc: 'Minimalist style suitable for everyday use.',
              },
              {
                icon: Wallet,
                title: 'Spacious Storage',
                desc: 'Fits cash, cards, receipts, and budgeting essentials.',
              },
              {
                icon: DollarSign,
                title: 'Built for Cash Stuffing',
                desc: 'Perfect for envelope budgeting and cash stuffing methods.',
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="premium-surface p-6 hover:shadow-[0_16px_34px_rgba(57,43,35,0.1)]"
              >
                <feature.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2 font-noto-sans">
                  {feature.title}
                </h3>
                <p className="text-sm text-foreground/70 font-noto-sans">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section id="features" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="text-3xl md:text-4xl font-semibold mb-12 text-foreground"
          >
            Everything You Need in One Wallet
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              {...fadeInUp}
              className="space-y-4"
            >
              <div className="space-y-3">
                <FeatureItem text="Long wallet design" />
                <FeatureItem text="Labeled budgeting tabs" />
                <div className="ml-6 space-y-2 mb-3">
                  {['Grocery', 'Food', 'Shopping', 'Fun', 'Bills', 'Miscellaneous'].map((tab) => (
                    <FeatureItem key={tab} text={tab} isSubItem />
                  ))}
                </div>
                <FeatureItem text="Multiple card slots" />
                <FeatureItem text="Spacious cash compartment" />
                <FeatureItem text="Durable premium materials" />
                <FeatureItem text="Easy everyday organization" />
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border border-border/50"
            >
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F733f3b5baede4679b3bbcb157f95b97e?format=webp&width=800&height=1200"
                alt="Wallet interior with organized budget tabs in Blush Pink"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Color Variants */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="text-3xl md:text-4xl font-semibold text-center mb-12 text-foreground"
          >
            Available Colors
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                id: 'blush',
                name: 'Blush Pink',
                desc: 'Soft, feminine, timeless.',
                image: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F8955c5eb5cfa4bbe9b13b4e9ade66e9a?format=webp&width=800&height=1200',
              },
              {
                id: 'beige',
                name: 'Beige',
                desc: 'Clean, classic, and minimalist.',
                image: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F0e15929160c24159a65b44a98254a0d5?format=webp&width=800&height=1200',
              },
            ].map((color) => (
              <motion.button
                key={color.id}
                {...fadeInUp}
                onClick={() => setSelectedColor(color.id as 'blush' | 'beige')}
                className={`group rounded-2xl overflow-hidden border-2 transition-all cursor-pointer ${
                  selectedColor === color.id
                    ? 'border-primary shadow-lg'
                    : 'border-border/50 hover:border-border'
                }`}
              >
                <div className="relative h-80">
                  <Image
                    src={color.image}
                    alt={color.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-semibold text-white font-noto-sans">{color.name}</h3>
                    <p className="text-white/90 text-sm font-noto-sans">{color.desc}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Why You'll Love It */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="text-3xl md:text-4xl font-semibold text-center mb-12 text-foreground"
          >
            Why You'll Love It
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Budget Better',
                desc: 'Organize every peso with clearly labeled spending categories.',
              },
              {
                title: 'Stay Stylish',
                desc: "A beautiful wallet you'll love carrying every day.",
              },
              {
                title: 'Save Time',
                desc: 'Find your cash and cards quickly without the clutter.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <h3 className="text-xl font-semibold text-foreground mb-3 font-noto-sans">
                  {item.title}
                </h3>
                <p className="text-foreground/80 font-noto-sans">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Banner */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="relative h-96 rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F725333fb26e64e46a0624eacebf950b6?format=webp&width=800&height=1200"
              alt="Tabbed Long Wallet lifestyle shot - elegant and organized in Blush Pink"
              fill
              className="object-cover"
              sizes="100vw"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 flex flex-col justify-center items-start p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4 font-signature max-w-2xl">
                Pretty Outside. Organized Inside.
              </h2>
              <p className="text-white/90 text-lg max-w-2xl font-noto-sans">
                Budgeting becomes more enjoyable when your essentials are beautifully organized. Whether you're planning your weekly expenses or managing your monthly budget, the Tabbed Long Wallet helps keep everything in its place.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pre-Order Information */}
      <section id="pre-order" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="text-3xl md:text-4xl font-semibold text-center mb-12 text-foreground"
          >
            Pre-Order Information
          </motion.h2>

          <motion.div
            {...fadeInUp}
            className="premium-surface p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-sm text-foreground/70 font-semibold font-noto-sans uppercase tracking-wide mb-2">
                  Availability
                </p>
                <p className="text-2xl font-semibold text-foreground font-noto-sans">Pre-Order</p>
              </div>
              <div>
                <p className="text-sm text-foreground/70 font-semibold font-noto-sans uppercase tracking-wide mb-2">
                  Estimated Arrival
                </p>
                <p className="text-2xl font-semibold text-foreground font-noto-sans">Mid-July</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-t border-b border-border">
              <div>
                <p className="text-sm text-foreground/70 font-semibold font-noto-sans uppercase tracking-wide mb-3">
                  Available Colors
                </p>
                <ul className="space-y-2 font-noto-sans">
                  <li className="text-foreground">Blush Pink</li>
                  <li className="text-foreground">Beige</li>
                </ul>
              </div>
              <div>
                <p className="text-sm text-foreground/70 font-semibold font-noto-sans uppercase tracking-wide mb-3">
                  Perfect For
                </p>
                <ul className="space-y-2 font-noto-sans">
                  <li className="text-foreground">• Cash Stuffing</li>
                  <li className="text-foreground">• Budget Planning</li>
                  <li className="text-foreground">• Everyday Wallet</li>
                  <li className="text-foreground">• Financial Organization</li>
                </ul>
              </div>
            </div>

            <div className="pt-8">
              <Button asChild className="w-full px-8 py-6 text-lg font-semibold rounded-full">
                <a href="https://www.facebook.com/profile.php?id=100087797289721" target="_blank" rel="noopener noreferrer">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Pre-Order Yours Today
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="text-3xl md:text-4xl font-semibold text-center mb-12 text-foreground"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.div {...fadeInUp}>
            <Accordion type="single" collapsible className="space-y-3">
              {[
                {
                  q: 'What is a tabbed long wallet?',
                  a: 'A budgeting wallet with labeled dividers that makes organizing cash simple and convenient. Each tab corresponds to a specific budget category, making it perfect for the cash stuffing method.',
                },
                {
                  q: 'Is this wallet good for cash stuffing?',
                  a: 'Yes. It was designed specifically for cash stuffing and envelope budgeting. The labeled tabs help you organize different spending categories in one elegant wallet.',
                },
                {
                  q: 'What colors are available?',
                  a: 'The Tabbed Long Wallet comes in two beautiful colors: Blush Pink and Beige. Both are designed to be timeless and work with any style.',
                },
                {
                  q: 'When will my order arrive?',
                  a: 'Estimated arrival is Mid-July. This is a pre-order item, and we will confirm the exact shipping date closer to the delivery window.',
                },
                {
                  q: 'What materials are used?',
                  a: 'The wallet is crafted from durable premium materials designed to last. The materials are chosen specifically for their quality, durability, and elegant appearance.',
                },
                {
                  q: 'How can I place a pre-order?',
                  a: 'Click the "Pre-Order Yours Today" button and contact us via Facebook Messenger, or reach out through our contact form. We\'ll guide you through the ordering process.',
                },
              ].map((item, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="rounded-[20px] border border-[#ece7e2] bg-[#fffbf9] px-6 py-3 data-[state=open]:bg-[#f8f3ef]"
                >
                  <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary font-noto-sans">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 font-noto-sans pt-2">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="wallet-cta-section py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            {...fadeInUp}
            className="text-3xl md:text-4xl font-semibold mb-6 text-foreground"
          >
            Ready to Organize Your Budget Beautifully?
          </motion.h2>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground/80 mb-8 font-noto-sans"
          >
            Upgrade your budgeting routine with a wallet that's as beautiful as it is practical.
          </motion.p>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <Button asChild className="px-10 py-7 text-xl font-semibold rounded-full shadow-lg hover:shadow-xl">
              <a href="https://www.facebook.com/profile.php?id=100087797289721" target="_blank" rel="noopener noreferrer">
                <ShoppingCart className="w-6 h-6 mr-2" />
                Pre-Order Yours Today
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Enlarged Image Lightbox */}
      {enlargedImage && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setEnlargedImage(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 flex items-center justify-center z-[70] p-4"
            onClick={() => setEnlargedImage(null)}
          >
            <button
              onClick={() => setEnlargedImage(null)}
              className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors z-20"
              aria-label="Close image"
            >
              <X className="w-8 h-8 text-white" />
            </button>
            <div
              className="relative w-full h-full max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={enlargedImage}
                alt="Enlarged wallet image"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
              Press ESC or click X to close
            </p>
          </motion.div>
        </>
      )}
    </div>
  )
}

function FeatureItem({ text, isSubItem }: { text: string; isSubItem?: boolean }) {
  return (
    <div className={`flex items-start gap-3 ${isSubItem ? 'text-foreground/70' : 'text-foreground'}`}>
      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
        <span className="w-2 h-2 bg-primary rounded-full" />
      </span>
      <span className={`font-noto-sans ${isSubItem ? 'text-sm' : ''}`}>{text}</span>
    </div>
  )
}
