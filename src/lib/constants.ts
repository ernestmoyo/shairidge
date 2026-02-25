// WhatsApp Configuration
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+1234567890'
export const WHATSAPP_MESSAGE = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || 'Hello Shairidge'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`

// Site Configuration
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://shairidge.com'
export const SITE_NAME = 'Shairidge'
export const SITE_DESCRIPTION =
  'Strategic financial guidance and business consulting solutions tailored to your success.'

// Navigation
export const NAVIGATION_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Team', href: '/team' },
  { name: 'Contact', href: '/contact' },
]

// Colors
export const COLORS = {
  primary: '#1e3a8a',
  secondary: '#0d9488',
  accent: '#d97706',
  dark: '#1f2937',
  light: '#f9fafb',
}

// Contact Information (to be filled from business documents)
export const CONTACT_INFO = {
  email: 'inquiries@shairidge.com',
  phone: '+1-234-567-8900',
  address: 'Your Business Address',
  hours: 'Monday - Friday, 9:00 AM - 5:00 PM',
}
