import { Service } from '@/types/business'
import Link from 'next/link'

interface ServiceCardProps {
  service: Service
}

const IconSvg = ({ icon }: { icon: string }) => {
  const iconMap: Record<string, JSX.Element> = {
    LineChart: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
    ),
    Briefcase: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
    ),
    DollarSign: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    ),
    TrendingUp: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
    ),
    Shield: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
    ),
    Cpu: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>
    ),
  }

  return (
    <div className="text-secondary">
      {iconMap[icon] || (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/></svg>
      )}
    </div>
  )
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-subtle hover:shadow-card transition-all duration-200 p-7 h-full flex flex-col border border-gray-100">
      {/* Icon */}
      <div className="mb-4">
        <IconSvg icon={service.icon} />
      </div>

      {/* Title */}
      <h3 className="font-serif text-xl text-primary mb-2">
        {service.name}
      </h3>

      {/* Subtitle */}
      <p className="text-accent text-sm font-medium mb-3">{service.title}</p>

      {/* Description */}
      <p className="text-gray-500 text-sm mb-5 flex-grow leading-relaxed">{service.description}</p>

      {/* Benefits */}
      <ul className="space-y-1.5 mb-5 text-sm">
        {service.benefits.slice(0, 3).map((benefit, idx) => (
          <li key={idx} className="text-gray-600 flex items-start">
            <span className="text-accent mr-2 text-xs mt-1">&#9670;</span>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href={`/services#${service.slug}`}
        className="inline-flex items-center text-sm font-medium text-primary border border-primary rounded-md px-4 py-2 text-center justify-center hover:bg-primary hover:text-white transition-all duration-200"
      >
        Learn More
      </Link>
    </div>
  )
}
