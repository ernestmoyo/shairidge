'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, ContactFormInput } from '@/lib/validations'
import { Button } from '@/components/common/Button'
import toast from 'react-hot-toast'

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormInput) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error('Failed to send message')

      toast.success('Message sent successfully! We\'ll be in touch soon.')
      reset()
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          placeholder="John Doe"
          {...register('name')}
          className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-primary transition-colors"
        />
        {errors.name && (
          <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          placeholder="john@example.com"
          {...register('email')}
          className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-primary transition-colors"
        />
        {errors.email && (
          <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="+1 (555) 000-0000"
            {...register('phone')}
            className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        {/* Company */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Company Name
          </label>
          <input
            type="text"
            placeholder="Your Company"
            {...register('company')}
            className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Subject *
        </label>
        <select
          {...register('subject')}
          className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-primary transition-colors"
        >
          <option value="">Select a subject</option>
          <option value="services">Inquiry About Services</option>
          <option value="inquiry">General Inquiry</option>
          <option value="proposal">Proposal Request</option>
          <option value="other">Other</option>
        </select>
        {errors.subject && (
          <p className="text-red-600 text-sm mt-1">{errors.subject.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Message *
        </label>
        <textarea
          placeholder="Tell us about your inquiry..."
          rows={5}
          {...register('message')}
          className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-primary transition-colors resize-none"
        />
        {errors.message && (
          <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Checkbox */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="whatsapp"
          {...register('preferWhatsApp')}
          className="w-4 h-4 text-primary rounded focus:ring-2 focus:ring-primary"
        />
        <label htmlFor="whatsapp" className="text-sm text-gray-700">
          I prefer WhatsApp contact
        </label>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-[#243759] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}
