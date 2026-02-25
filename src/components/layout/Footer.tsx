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
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-poppins font-bold text-2xl mb-4">{SITE_NAME}</h3>
            <p className="text-blue-100">
              Strategic financial guidance and business consulting solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-poppins font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="/services#financial" className="text-blue-100 hover:text-white transition-colors">
                  Financial Advisory
                </a>
              </li>
              <li>
                <a href="/services#consulting" className="text-blue-100 hover:text-white transition-colors">
                  Business Consulting
                </a>
              </li>
              <li>
                <a href="/services#tax" className="text-blue-100 hover:text-white transition-colors">
                  Tax Planning
                </a>
              </li>
              <li>
                <a href="/services#cashflow" className="text-blue-100 hover:text-white transition-colors">
                  Cash Flow Management
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-poppins font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FaPhone size={18} />
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-blue-100 hover:text-white transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope size={18} />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-blue-100 hover:text-white transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt size={18} />
                <span className="text-blue-100">{CONTACT_INFO.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-400 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-blue-100 text-sm mb-4 md:mb-0">
            &copy; {currentYear} {SITE_NAME}. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-100 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-100 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-100 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-100 hover:text-white transition-colors"
              aria-label="WhatsApp"
            >
              <FaPhone size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
