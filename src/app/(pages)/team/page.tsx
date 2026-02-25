import type { Metadata } from 'next'
import { TeamCard } from '@/components/cards/TeamCard'
import { Button } from '@/components/common/Button'
import Link from 'next/link'
import teamData from '../../../../public/data/team.json'

export const metadata: Metadata = {
  title: 'Our Team | Shairidge Financial Advisors',
  description: 'Meet our experienced team of financial and business consultants.',
}

export default function TeamPage() {
  const team = teamData.filter((member: any) => member.name)

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-poppins text-5xl md:text-6xl font-bold mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Experienced professionals dedicated to your financial success and business growth
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-poppins text-4xl font-bold text-primary mb-6">
              About Shairidge
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              Our company collaborates with businesses to enhance resilience, efficiency, and
              preparedness for the future by merging financial expertise, operational excellence,
              and digital innovation.
            </p>
            <p className="text-gray-600 text-lg mb-4">
              We believe in building long-term relationships based on trust, transparency, and
              personalized service. Every client is unique, and we tailor our approach to match your
              specific needs and objectives.
            </p>

            {/* Mission & Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-blue-50 rounded-lg">
                <h3 className="font-poppins text-xl font-bold text-primary mb-3">Mission</h3>
                <p className="text-gray-600">
                  To empower businesses to thrive by combining financial discipline, strategic clarity, and digital innovation. We partner with organizations to optimize operations, strengthen governance, and embrace technology.
                </p>
              </div>
              <div className="p-6 bg-teal-50 rounded-lg">
                <h3 className="font-poppins text-xl font-bold text-secondary mb-3">Vision</h3>
                <p className="text-gray-600">
                  To be recognized as the leading advisor that transforms complexity into clarity, helping organizations thrive in the digital age.
                </p>
              </div>
              <div className="p-6 bg-yellow-50 rounded-lg">
                <h3 className="font-poppins text-xl font-bold text-accent mb-3">Values</h3>
                <p className="text-gray-600">
                  Integrity, excellence, client focus, and continuous innovation drive everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-poppins text-4xl font-bold text-center text-primary mb-16">
            Our Experts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member: any) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-poppins text-4xl font-bold text-center text-primary mb-16">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Expertise',
                description: 'Decades of combined experience in financial advisory and business consulting.',
              },
              {
                title: 'Personalized Approach',
                description: 'Customized strategies tailored to your unique goals and circumstances.',
              },
              {
                title: 'Transparency',
                description: 'Clear communication and full transparency in all our dealings.',
              },
              {
                title: 'Results-Driven',
                description: 'Focused on delivering measurable results and long-term value.',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 border-l-4 border-accent">
                <h3 className="font-poppins text-xl font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get in touch with our team today and let&#39;s discuss how we can help you succeed.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent hover:bg-yellow-600">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
