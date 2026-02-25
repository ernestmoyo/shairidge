import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import '@/styles/globals.css'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Shairidge | Financial Advisors & Business Consultants',
  description:
    'Strategic financial guidance and business consulting solutions tailored to your success. Expert team with years of industry experience.',
  keywords: ['financial advisory', 'business consulting', 'finance', 'consulting'],
  openGraph: {
    title: 'Shairidge | Financial Advisors & Business Consultants',
    description: 'Strategic financial guidance and business consulting solutions.',
    url: 'https://shairidge.com',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
