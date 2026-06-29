'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Facebook, ZoomIn, X } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function ComingSoonContent() {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null)

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Gingham Background */}
      <div className="absolute inset-0 gingham-pattern opacity-30" />

      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center justify-center mb-4"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary border border-primary/20">
            <Sparkles className="w-4 h-4" />
            Coming Soon
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="font-signature text-4xl md:text-5xl lg:text-6xl text-center mb-2 text-foreground"
        >
          Tabbed Long Wallet
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center text-lg font-noto-sans text-primary mb-6 font-semibold"
        >
          Stay Stylish. Stay Organized.
        </motion.p>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="text-center text-foreground/80 mb-8 text-base leading-relaxed font-noto-sans"
        >
          The perfect companion for every budgeting enthusiast. Designed to keep your finances organized while adding a touch of elegance to your everyday essentials. Whether you're using the cash stuffing method or simply want a more organized wallet, this beautifully crafted long wallet helps you manage your budget with ease.
        </motion.p>

        {/* Product Images */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 gap-4 mb-8"
        >
          <button
            onClick={() => setEnlargedImage('/images/wallet-1.jpg')}
            className="relative aspect-square overflow-hidden rounded-2xl shadow-lg border border-border/50 group cursor-pointer"
          >
            <Image
              src="/images/wallet-1.jpg"
              alt="Mommy Louise Budgeting Wallet - Closed View"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              priority
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </button>
          <button
            onClick={() => setEnlargedImage('/images/wallet-2.jpg')}
            className="relative aspect-square overflow-hidden rounded-2xl shadow-lg border border-border/50 group cursor-pointer"
          >
            <Image
              src="/images/wallet-2.jpg"
              alt="Mommy Louise Budgeting Wallet - Interior with Dividers"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              priority
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </button>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mb-8"
        >
          <h3 className="text-lg font-semibold text-foreground mb-4 font-noto-sans">Features</h3>
          <div className="space-y-2 mb-6">
            <FeatureBullet text="Elegant and minimalist design" />
            <FeatureBullet text="Available in Blush Pink and Beige" />
            <FeatureBullet text="Labeled budget tabs for easy organization" />
            <FeatureBullet text="Spacious compartments for cash, cards, and budgeting essentials" />
          </div>

          <h3 className="text-lg font-semibold text-foreground mb-4 font-noto-sans">Budget Tabs Included</h3>
          <div className="space-y-2 mb-6">
            <FeatureBullet text="Grocery" />
            <FeatureBullet text="Food" />
            <FeatureBullet text="Shopping" />
            <FeatureBullet text="Fun" />
            <FeatureBullet text="Bills" />
            <FeatureBullet text="Miscellaneous" />
          </div>

          <h3 className="text-lg font-semibold text-foreground mb-4 font-noto-sans">Why You'll Love It</h3>
          <p className="text-foreground/80 text-sm font-noto-sans leading-relaxed mb-6">
            Beautiful on the outside, organized on the inside. The Tabbed Long Wallet makes budgeting more enjoyable by keeping your spending categories neat and easily accessible. It's the perfect everyday wallet for anyone who values both functionality and style.
          </p>

          <h3 className="text-lg font-semibold text-foreground mb-4 font-noto-sans">Pre-Order Information</h3>
          <div className="space-y-2">
            <div className="flex gap-3 text-sm">
              <span className="font-semibold text-foreground min-w-fit">Availability:</span>
              <span className="text-foreground/80">Pre-Order</span>
            </div>
            <div className="flex gap-3 text-sm">
              <span className="font-semibold text-foreground min-w-fit">Estimated Arrival:</span>
              <span className="text-foreground/80">Mid-July</span>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-3"
        >
          <p className="text-center text-foreground/80 text-sm font-noto-sans mb-4">
            Reserve yours today and take the first step toward smarter, more stylish budgeting.
          </p>
          <Button
            asChild
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-6 text-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
          >
            <a
              href="https://www.facebook.com/profile.php?id=100087797289721"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-5 h-5" />
              Send Inquiry via Facebook
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Enlarged Image Lightbox */}
      {enlargedImage && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setEnlargedImage(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
            key="lightbox-backdrop"
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
            <div className="relative w-full h-full max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
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
    </section>
  )
}

function FeatureBullet({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 text-foreground/80">
      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
        <span className="w-2 h-2 bg-primary rounded-full" />
      </span>
      <span className="text-sm font-noto-sans">{text}</span>
    </div>
  )
}
