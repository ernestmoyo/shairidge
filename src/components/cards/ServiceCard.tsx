import { Service } from '@/types/business'
import { Button } from '@/components/common/Button'
import Link from 'next/link'

interface ServiceCardProps {
  service: Service
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
  const IconMap: Record<string, React.ReactNode> = {
    LineChart: '📈',
    Briefcase: '💼',
    DollarSign: '$',
    TrendingUp: '📊',
  }

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 p-8 h-full flex flex-col">
      {/* Icon */}
      <div className="text-5xl mb-4">{IconMap[service.icon] || '•'}</div>

      {/* Title */}
      <h3 className="font-poppins text-2xl font-bold text-primary mb-3">
        {service.name}
      </h3>

      {/* Subtitle */}
      <p className="text-secondary font-semibold mb-4">{service.title}</p>

      {/* Description */}
      <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>

      {/* Benefits */}
      <ul className="space-y-2 mb-6 text-sm">
        {service.benefits.slice(0, 3).map((benefit, idx) => (
          <li key={idx} className="text-gray-700 flex items-start">
            <span className="text-accent mr-2">✓</span>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link href={`/services#${service.slug}`}>
        <Button variant="secondary" className="w-full">
          Learn More
        </Button>
      </Link>
    </div>
  )
}
