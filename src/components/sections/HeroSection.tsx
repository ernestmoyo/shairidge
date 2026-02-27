'use client'

import Link from 'next/link'
import { Button } from '@/components/common/Button'

export const HeroSection = () => {
  return (
    <section className="relative bg-primary text-white flex items-center justify-center overflow-hidden" style={{ minHeight: '80vh' }}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%), linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%)', backgroundSize: '60px 60px', backgroundPosition: '0 0, 30px 30px' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center py-16">
        <h1 className="font-serif text-4xl md:text-[3.5rem] leading-tight mb-6">
          Driving Growth Through Strategy,<br />Finance & Digital Innovation
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto font-light">
          We help businesses strengthen financial discipline, optimize operations, and embrace digital transformation for measurable impact.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link href="/contact">
            <Button size="lg" className="bg-accent hover:bg-[#a3832a] text-white">
              Get Started Today
            </Button>
          </Link>
          <Link href="/services" className="inline-flex items-center text-gray-300 hover:text-white transition-colors text-base font-medium gap-1 justify-center py-3">
            Learn More &rarr;
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="border-t border-white/15 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-serif text-accent mb-1">15+</div>
              <p className="text-gray-400 text-sm">Years of Experience</p>
            </div>
            <div>
              <div className="text-2xl font-serif text-accent mb-1">500+</div>
              <p className="text-gray-400 text-sm">Clients Served</p>
            </div>
            <div>
              <div className="text-2xl font-serif text-accent mb-1">$2B+</div>
              <p className="text-gray-400 text-sm">Assets Managed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
