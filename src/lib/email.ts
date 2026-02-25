import nodemailer from 'nodemailer'
import { ContactFormInput } from '@/lib/validations'

// Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function sendContactEmail(data: ContactFormInput) {
  const { name, email, phone, company, subject, message } = data

  // Email to business
  const businessEmailContent = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
    <p><strong>Company:</strong> ${company || 'Not provided'}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, '<br>')}</p>
  `

  // Email to user
  const userEmailContent = `
    <h2>Thank You for Contacting Shairidge</h2>
    <p>Hi ${name},</p>
    <p>We received your message and appreciate you reaching out to us. Our team will review your inquiry and get back to you within 24 hours.</p>
    <hr>
    <p><strong>Your Message:</strong></p>
    <p>${message.replace(/\n/g, '<br>')}</p>
    <hr>
    <p>If you have any urgent matters, feel free to contact us directly:</p>
    <p>Email: ${process.env.CONTACT_EMAIL}</p>
    <p>Phone: ${process.env.CONTACT_PHONE}</p>
  `

  try {
    // Send to business
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact: ${subject}`,
      html: businessEmailContent,
    })

    // Send confirmation to user
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: 'We Received Your Message - Shairidge',
      html: userEmailContent,
    })

    return true
  } catch (error) {
    console.error('Email sending failed:', error)
    throw error
  }
}
