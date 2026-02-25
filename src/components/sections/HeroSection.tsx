'use client'

import Link from 'next/link'
import { Button } from '@/components/common/Button'

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-blue-800 to-secondary text-white flex items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center py-20">
        <h1 className="font-poppins text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Strategic Financial Guidance<br />for Your Future
        </h1>

        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Expert financial advisory and business consulting services tailored to help you achieve your goals and build lasting wealth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/contact">
            <Button size="lg" className="bg-accent hover:bg-yellow-600">
              Get Started Today
            </Button>
          </Link>
          <Link href="/services">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Learn More
            </Button>
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-blue-400">
          <div>
            <div className="text-4xl font-bold mb-2">15+</div>
            <p className="text-blue-100">Years of Experience</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">500+</div>
            <p className="text-blue-100">Clients Served</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">$2B+</div>
            <p className="text-blue-100">Assets Managed</p>
          </div>
        </div>
      </div>
    </section>
  )
}
