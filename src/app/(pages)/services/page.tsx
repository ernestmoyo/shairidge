import type { Metadata } from 'next'
import { ServiceCard } from '@/components/cards/ServiceCard'
import { Button } from '@/components/common/Button'
import Link from 'next/link'
import servicesData from '../../../../public/data/services.json'

export const metadata: Metadata = {
  title: 'Our Services | Shairidge Financial Advisors',
  description: 'Discover our comprehensive financial advisory and business consulting services designed for success.',
}

// Sample process steps
const processSteps = [
  {
    number: 1,
    title: 'Understanding Your Needs',
    description: 'Analyzing challenges and opportunities, understanding client needs and objectives.',
  },
  {
    number: 2,
    title: 'Tailored Solutions',
    description: 'Crafting customized solutions aligned with your unique business goals and circumstances.',
  },
  {
    number: 3,
    title: 'Precise Implementation',
    description: 'Implementing with precision and efficiency, keeping you informed every step of the way.',
  },
  {
    number: 4,
    title: 'Continuous Improvement',
    description: 'Monitoring outcomes and fostering continuous improvement for lasting results.',
  },
]

// Sample FAQ
const faqs = [
  {
    question: 'How often should I review my financial plan?',
    answer:
      'We recommend quarterly reviews to ensure your plan stays aligned with market conditions and your goals. Annual comprehensive reviews are standard practice.',
  },
  {
    question: 'What are your fees?',
    answer:
      'Our fees are transparent and competitive. We offer flexible arrangements including percentage of assets managed, flat fees, or hourly consultations.',
  },
  {
    question: 'How do we get started?',
    answer:
      'Simply contact us to schedule a free consultation. We\'ll discuss your needs and determine the best approach for your situation.',
  },
  {
    question: 'Are my assets secure?',
    answer:
      'Yes. Assets are held with reputable custodians and fully insured. We maintain strict security and compliance standards.',
  },
]

export default function ServicesPage() {
  const services = servicesData

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl mb-5 text-white">
            Our Services
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Comprehensive financial and business solutions tailored to your unique needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service: any) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-[2.5rem] text-center text-primary mb-14">
            Our Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-serif text-lg mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="font-serif text-lg text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-[2.5rem] text-center text-primary mb-14">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-subtle border border-gray-100">
                <h3 className="font-serif text-lg text-primary mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-5 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&#39;s discuss which services are right for your unique situation.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent hover:bg-[#a3832a] text-white">
              Schedule Your Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
