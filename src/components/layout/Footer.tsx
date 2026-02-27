'use client'

import Link from 'next/link'
import {
  SITE_NAME,
  CONTACT_INFO,
  NAVIGATION_LINKS,
  WHATSAPP_URL,
} from '@/lib/constants'
import { FaFacebook, FaLinkedin, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-gray-400">
      <div className="container mx-auto px-4 py-12">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl mb-4 text-white">{SITE_NAME}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Strategic financial guidance and business consulting solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-sm font-medium mb-4 text-gray-300 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans text-sm font-medium mb-4 text-gray-300 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="/services#financial" className="text-gray-500 hover:text-white transition-colors text-sm">
                  Financial Advisory
                </a>
              </li>
              <li>
                <a href="/services#consulting" className="text-gray-500 hover:text-white transition-colors text-sm">
                  Business Consulting
                </a>
              </li>
              <li>
                <a href="/services#tax" className="text-gray-500 hover:text-white transition-colors text-sm">
                  Tax Planning
                </a>
              </li>
              <li>
                <a href="/services#cashflow" className="text-gray-500 hover:text-white transition-colors text-sm">
                  Cash Flow Management
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-sm font-medium mb-4 text-gray-300 uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <FaPhone size={14} className="text-gray-500" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-gray-500 hover:text-white transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <FaEnvelope size={14} className="text-gray-500" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-500 hover:text-white transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <FaMapMarkerAlt size={14} className="text-gray-500" />
                <span className="text-gray-500">{CONTACT_INFO.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-gray-600 text-xs mb-4 md:mb-0">
            &copy; {currentYear} {SITE_NAME}. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-white transition-colors"
              aria-label="WhatsApp"
            >
              <FaPhone size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
