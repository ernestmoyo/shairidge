import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validations'
import { sendContactEmail } from '@/lib/email'

// Simple rate limiting (in-memory for demo - use Redis in production)
const rateLimits = new Map<string, number[]>()

function checkRateLimit(ip: string, limit: number = 5, windowMs: number = 3600000): boolean {
  const now = Date.now()
  const timestamps = rateLimits.get(ip) || []

  // Remove old timestamps outside the window
  const recentTimestamps = timestamps.filter((ts) => now - ts < windowMs)

  if (recentTimestamps.length >= limit) {
    return false
  }

  recentTimestamps.push(now)
  rateLimits.set(ip, recentTimestamps)
  return true
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP
    const ip =
      request.headers.get('x-forwarded-for') ||
      request.headers.get('x-real-ip') ||
      'unknown'

    // Rate limiting: 5 requests per hour per IP
    if (!checkRateLimit(ip, 5, 3600000)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Parse request body
    const body = await request.json()

    // Validate data
    const validatedData = contactFormSchema.parse(body)

    // Send email
    await sendContactEmail(validatedData)

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)

    if (error instanceof Error && error.message.includes('validation')) {
      return NextResponse.json(
        { error: 'Invalid form data' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}
