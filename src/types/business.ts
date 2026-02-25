export interface Service {
  id: string
  name: string
  title: string
  icon: string
  description: string
  benefits: string[]
  slug: string
}

export interface TeamMember {
  id: string
  name: string
  title: string
  bio: string
  image: string
  expertise: string[]
  linkedinUrl?: string
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  subject: 'services' | 'inquiry' | 'proposal' | 'other'
  message: string
  preferWhatsApp?: boolean
}
