import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { TabbedWalletLanding } from '@/components/tabbed-wallet-landing'
import { Footer } from '@/components/contact'

export const metadata: Metadata = {
  title: 'Tabbed Long Wallet | Cash Stuffing Budget Wallet | Mommy Louise Budget PH',
  description: 'Stay organized in style with our elegant Tabbed Long Wallet. Designed for cash stuffing, budgeting, and everyday use with labeled tabs for groceries, bills, shopping, food, fun, and more. Available in Blush Pink and Beige. Pre-order yours today.',
  keywords: [
    'tabbed long wallet',
    'budget wallet',
    'cash stuffing wallet',
    'cash stuffing philippines',
    'budgeting wallet',
    'wallet with tabs',
    'cash envelope wallet',
    'budgeting accessories philippines',
  ],
  openGraph: {
    title: 'Tabbed Long Wallet | Cash Stuffing Budget Wallet | Mommy Louise Budget PH',
    description: 'Elegant Tabbed Long Wallet designed for cash stuffing and budget planning. Available in Blush Pink and Beige. Pre-order now for Mid-July delivery.',
    type: 'website',
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
}

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <TabbedWalletLanding />
      </div>
      <Footer />
    </main>
  )
}
