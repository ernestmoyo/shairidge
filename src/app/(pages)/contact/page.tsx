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
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-poppins text-5xl md:text-6xl font-bold mb-6">
            Let&#39;s Connect
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Have questions? Our team is here to help and will respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl text-primary mb-4">
                <FaPhone className="mx-auto" />
              </div>
              <h3 className="font-poppins text-xl font-bold text-primary mb-2">Phone</h3>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                {CONTACT_INFO.phone}
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl text-secondary mb-4">
                <FaEnvelope className="mx-auto" />
              </div>
              <h3 className="font-poppins text-xl font-bold text-secondary mb-2">Email</h3>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-gray-600 hover:text-secondary transition-colors"
              >
                {CONTACT_INFO.email}
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl text-accent mb-4">
                <FaClock className="mx-auto" />
              </div>
              <h3 className="font-poppins text-xl font-bold text-accent mb-2">Hours</h3>
              <p className="text-gray-600">{CONTACT_INFO.hours}</p>
            </div>
          </div>

          {/* Form and Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="font-poppins text-2xl font-bold text-primary mb-6">
                Send us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-poppins text-2xl font-bold text-primary mb-6">
                Other Ways to Reach Us
              </h2>

              <div className="bg-white p-8 rounded-lg shadow-md mb-6">
                <h3 className="font-poppins text-xl font-bold text-primary mb-4">
                  Address
                </h3>
                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="text-secondary mt-1 flex-shrink-0" size={24} />
                  <p className="text-gray-600">{CONTACT_INFO.address}</p>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-green-50 p-8 rounded-lg shadow-md border-l-4 border-green-500 mb-6">
                <h3 className="font-poppins text-xl font-bold text-green-700 mb-4">
                  Chat on WhatsApp
                </h3>
                <p className="text-gray-600 mb-4">
                  Need quick assistance? Chat with us directly on WhatsApp for immediate support.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  Open WhatsApp
                </a>
              </div>

              {/* Response Guarantee */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Response Guarantee:</strong> We typically respond to all inquiries within 24 hours during business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <FaMapMarkerAlt size={48} className="text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Map coming soon</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
