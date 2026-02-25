'use client'

import { WHATSAPP_URL } from '@/lib/constants'
import { FaWhatsapp } from 'react-icons/fa'

export const WhatsAppWidget = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:shadow-xl animate-pulse"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  )
}
