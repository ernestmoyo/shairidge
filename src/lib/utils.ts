export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes
    .filter((cls): cls is string => typeof cls === 'string' && cls.length > 0)
    .join(' ')
}

export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  return cleaned.replace(/(\d{1,3})(\d{1,3})(\d{1,4})/, '($1) $2-$3')
}
