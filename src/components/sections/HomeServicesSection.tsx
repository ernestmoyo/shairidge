'use client'

import { ServiceCard } from '@/components/cards/ServiceCard'
import { Button } from '@/components/common/Button'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Service } from '@/types/business'

export const HomeServicesSection = () => {
  const [services, setServices] = useState<Service[]>([])

  useEffect(() => {
    const loadServices = async () => {
      try {
        const response = await fetch('/data/services.json')
        const data = await response.json()
        setServices(data.slice(0, 3)) // Show first 3 services
      } catch (error) {
        console.error('Failed to load services:', error)
      }
    }

    loadServices()
  }, [])

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive financial and business consulting solutions designed to drive your success
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/services">
            <Button size="lg" variant="primary">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
