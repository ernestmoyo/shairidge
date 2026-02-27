import type { Metadata } from 'next'
import { ContactForm } from '@/components/forms/ContactForm'
import { CONTACT_INFO, WHATSAPP_URL } from '@/lib/constants'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Contact Us | Shairidge Financial Advisors',
  description: 'Get in touch with our team for financial advisory and business consulting services.',
}

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl mb-5 text-white">
            Let&#39;s Connect
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Have questions? Our team is here to help and will respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Contact Info Cards */}
            <div className="bg-white p-7 rounded-lg shadow-subtle text-center border border-gray-100">
              <div className="text-primary mb-4">
                <FaPhone className="mx-auto" size={24} />
              </div>
              <h3 className="font-serif text-lg text-primary mb-2">Phone</h3>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="text-gray-500 hover:text-primary transition-colors text-sm"
              >
                {CONTACT_INFO.phone}
              </a>
            </div>

            <div className="bg-white p-7 rounded-lg shadow-subtle text-center border border-gray-100">
              <div className="text-secondary mb-4">
                <FaEnvelope className="mx-auto" size={24} />
              </div>
              <h3 className="font-serif text-lg text-secondary mb-2">Email</h3>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-gray-500 hover:text-secondary transition-colors text-sm"
              >
                {CONTACT_INFO.email}
              </a>
            </div>

            <div className="bg-white p-7 rounded-lg shadow-subtle text-center border border-gray-100">
              <div className="text-accent mb-4">
                <FaClock className="mx-auto" size={24} />
              </div>
              <h3 className="font-serif text-lg text-accent mb-2">Hours</h3>
              <p className="text-gray-500 text-sm">{CONTACT_INFO.hours}</p>
            </div>
          </div>

          {/* Form and Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-7 rounded-lg shadow-subtle border border-gray-100">
              <h2 className="font-serif text-2xl text-primary mb-6">
                Send us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-2xl text-primary mb-6">
                Other Ways to Reach Us
              </h2>

              <div className="bg-white p-7 rounded-lg shadow-subtle mb-6 border border-gray-100">
                <h3 className="font-serif text-lg text-primary mb-4">
                  Address
                </h3>
                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="text-secondary mt-1 flex-shrink-0" size={18} />
                  <p className="text-gray-500 text-sm">{CONTACT_INFO.address}</p>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-surface-alt p-7 rounded-lg shadow-subtle border-l-2 border-primary mb-6">
                <h3 className="font-serif text-lg text-primary mb-3">
                  Chat on WhatsApp
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  Need quick assistance? Chat with us directly on WhatsApp for immediate support.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 bg-primary text-white text-sm rounded-md hover:bg-[#243759] transition-colors"
                >
                  Open WhatsApp
                </a>
              </div>

              {/* Response Guarantee */}
              <div className="bg-surface p-5 rounded-lg border border-gray-100">
                <p className="text-xs text-gray-500">
                  <strong className="text-primary">Response Guarantee:</strong> We typically respond to all inquiries within 24 hours during business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-surface-alt rounded-lg h-96 flex items-center justify-center border border-gray-200">
            <div className="text-center">
              <FaMapMarkerAlt size={36} className="text-gray-300 mx-auto mb-4" />
              <p className="text-gray-400 text-sm">Map coming soon</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
