'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Service } from '@/types/business'

const IconSvg = ({ icon }: { icon: string }) => {
  const iconMap: Record<string, JSX.Element> = {
    LineChart: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
    ),
    Briefcase: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
    ),
    DollarSign: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    ),
    TrendingUp: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
    ),
    Shield: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
    ),
    Cpu: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>
    ),
    Phone: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
    ),
    Users: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
  }

  return iconMap[icon] || (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/></svg>
  )
}

const extraCards = [
  { name: 'Free Consultation', icon: 'Phone', href: '/contact' },
  { name: 'Meet Our Team', icon: 'Users', href: '/team' },
]

export const HeroSection = () => {
  const [services, setServices] = useState<Service[]>([])

  useEffect(() => {
    const loadServices = async () => {
      try {
        const response = await fetch('/data/services.json')
        const data = await response.json()
        setServices(data)
      } catch (error) {
        console.error('Failed to load services:', error)
      }
    }
    loadServices()
  }, [])

  return (
    <section className="relative text-white overflow-hidden">
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/stock/hero-finance.jpg')" }}
      />
      <div className="absolute inset-0 bg-primary/85" />

      <div className="relative z-10 container mx-auto px-4 pt-16 pb-20">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-[3.25rem] leading-tight mb-4 text-white">
            Healthier business, stronger future
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Strategic financial guidance and business consulting to help you grow with confidence
          </p>
        </div>

        {/* Icon Card Grid - 4 columns like Bankrate */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services#${service.slug}`}
              className="bg-white rounded-xl p-5 flex flex-col items-center text-center gap-3 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <div className="text-primary group-hover:text-accent transition-colors">
                <IconSvg icon={service.icon} />
              </div>
              <span className="text-primary text-sm font-medium leading-tight">
                {service.name}
              </span>
            </Link>
          ))}
          {extraCards.map((card) => (
            <Link
              key={card.name}
              href={card.href}
              className="bg-white rounded-xl p-5 flex flex-col items-center text-center gap-3 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <div className="text-primary group-hover:text-accent transition-colors">
                <IconSvg icon={card.icon} />
              </div>
              <span className="text-primary text-sm font-medium leading-tight">
                {card.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
