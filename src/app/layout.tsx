import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Remittra - Your All-in-One Multi-Currency Wallet',
  description: 'Experience the future of digital finance with seamless multi-currency management, secure transactions, and innovative savings solutions.',
  keywords: 'fintech, multi-currency wallet, digital finance, P2P transfers, virtual cards',
  authors: [{ name: 'Remittra Team' }],
  openGraph: {
    title: 'Remittra - Your All-in-One Multi-Currency Wallet',
    description: 'Experience the future of digital finance with seamless multi-currency management.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}