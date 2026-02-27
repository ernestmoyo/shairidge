'use client'

import { WHATSAPP_URL } from '@/lib/constants'
import { FaWhatsapp } from 'react-icons/fa'

export const WhatsAppWidget = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-primary hover:bg-[#243759] text-white rounded-full p-3.5 shadow-subtle transition-all duration-200 hover:shadow-card"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={22} />
    </a>
  )
}
