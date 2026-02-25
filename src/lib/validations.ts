import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.enum(['services', 'inquiry', 'proposal', 'other'], {
    errorMap: () => ({ message: 'Please select a subject' }),
  }),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message is too long'),
  preferWhatsApp: z.boolean().optional(),
})

export type ContactFormInput = z.infer<typeof contactFormSchema>
