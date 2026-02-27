// WhatsApp Configuration
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+27818946763'
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
  primary: '#1A2B4A',
  secondary: '#3B4F6B',
  accent: '#B8962E',
  dark: '#1C1C1E',
  light: '#F8F7F4',
}

// Contact Information (to be filled from business documents)
export const CONTACT_INFO = {
  email: 'inquiries@shairidge.com',
  phone: '+27 81 894 6763',
  address: 'Your Business Address',
  hours: 'Monday - Friday, 9:00 AM - 5:00 PM',
}
