'use client'

import Link from 'next/link'
import { Button } from '@/components/common/Button'

export const CTASection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/stock/cta-handshake.jpg')" }}
          />
          <div className="absolute inset-0 bg-primary/90" />

          <div className="relative z-10 px-8 py-16 text-center text-white">
            {/* Decorative shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3"></div>

            <div className="relative z-10">
              <span className="inline-block bg-accent/20 text-accent text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
                Get Started
              </span>
              <h2 className="font-serif text-3xl md:text-4xl mb-5 text-white">
                Ready to Transform Your Financial Future?
              </h2>

              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Get in touch with our team today and discover how we can help you achieve your financial goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-accent hover:bg-[#a3832a] text-white">
                    Schedule a Consultation
                  </Button>
                </Link>
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, '') || '27818946763'}?text=Hello, I'd like to discuss your services`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white hover:text-primary">
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
