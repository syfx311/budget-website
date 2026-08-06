import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { TabbedWalletLanding } from '@/components/tabbed-wallet-landing'
import { Footer } from '@/components/contact'

export const metadata: Metadata = {
  title: 'Tabbed Long Wallet | Cash Stuffing Budget Wallet | Mommy Louise Budget PH',
  description:
    'Stay organized in style with our elegant Tabbed Long Wallet. Designed for cash stuffing, budgeting, and everyday use with labeled tabs for groceries, bills, shopping, food, fun, and more. Available in Blush Pink and Beige. Pre-order yours today.',
  keywords: [
    'tabbed long wallet',
    'budget wallet',
    'cash stuffing wallet',
    'cash stuffing philippines',
    'budgeting wallet',
    'wallet with tabs',
    'cash envelope wallet',
    'budgeting accessories philippines',
    'mommy louise',
  ],
  openGraph: {
    title: 'Tabbed Long Wallet | Cash Stuffing Budget Wallet | Mommy Louise Budget PH',
    description:
      'Elegant Tabbed Long Wallet designed for cash stuffing and budget planning. Available in Blush Pink and Beige. Pre-order now for Mid-July delivery.',
    type: 'website',
    url: '/tabbed-long-wallet',
    images: [
      {
        url: 'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F725333fb26e64e46a0624eacebf950b6?format=webp&width=800&height=1200',
        width: 1200,
        height: 1200,
        alt: 'Tabbed Long Wallet - Mommy Louise Budget PH',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tabbed Long Wallet | Cash Stuffing Budget Wallet',
    description: 'Elegant budget wallet with labeled tabs. Pre-order now for Mid-July delivery.',
    images: ['https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F725333fb26e64e46a0624eacebf950b6?format=webp&width=800&height=1200'],
  },
  alternates: {
    canonical: 'https://mommylouisebudgetph.com/tabbed-long-wallet',
  },
}

export default function TabbedLongWalletPage() {
  const productSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: 'Tabbed Long Wallet',
    description:
      'Elegant long wallet with labeled budgeting tabs designed for cash stuffing and budget planning. Features six labeled compartments for Grocery, Food, Shopping, Fun, Bills, and Miscellaneous.',
    brand: {
      '@type': 'Brand',
      name: 'Mommy Louise Budget PH',
    },
    image: [
      'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F725333fb26e64e46a0624eacebf950b6?format=webp&width=800&height=1200',
      'https://cdn.builder.io/api/v1/image/assets%2F8c358e96430c4451949ddae1cc8ed29a%2F733f3b5baede4679b3bbcb157f95b97e?format=webp&width=800&height=1200',
    ],
    offers: {
      '@type': 'AggregateOffer',
      availability: 'https://schema.org/PreOrder',
      priceCurrency: 'PHP',
      price: 'Contact for pricing',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: '1',
    },
    color: ['Blush Pink', 'Beige'],
    material: 'Premium textile with durable construction',
    category: 'Wallets & Accessories',
  }

  return (
    <main className="min-h-screen">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <div className="pt-16">
        <TabbedWalletLanding />
      </div>
      <Footer />
    </main>
  )
}
