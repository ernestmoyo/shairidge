import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import Script from 'next/script'
import '@/styles/globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppWidget } from '@/components/common/WhatsAppWidget'

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
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  )
}
