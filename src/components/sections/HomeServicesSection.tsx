'use client'

import { ServiceCard } from '@/components/cards/ServiceCard'
import { Button } from '@/components/common/Button'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Service } from '@/types/business'

export const HomeServicesSection = () => {
  const [services, setServices] = useState<Service[]>([])

  useEffect(() => {
    const loadServices = async () => {
      try {
        const response = await fetch('/data/services.json')
        const data = await response.json()
        setServices(data.slice(0, 3))
      } catch (error) {
        console.error('Failed to load services:', error)
      }
    }

    loadServices()
  }, [])

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header with image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-14">
          <div>
            <span className="inline-block bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
              Our Expertise
            </span>
            <h2 className="font-serif text-3xl md:text-[2.5rem] text-primary mb-4">
              Comprehensive Solutions for Your Business
            </h2>
            <p className="text-gray-500">
              From financial management to digital transformation, we deliver results that matter. Our team brings decades of experience to every engagement.
            </p>
          </div>
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/stock/financial-charts.jpg"
              alt="Financial analysis and charts"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/services">
            <Button size="lg" variant="outline">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
