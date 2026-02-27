'use client'

import Link from 'next/link'
import { Button } from '@/components/common/Button'

export const CTASection = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
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
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, '') || '1234567890'}?text=Hello, I'd like to discuss your services`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white hover:text-primary">
              Chat on WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
