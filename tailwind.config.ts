import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A2B4A',
        secondary: '#3B4F6B',
        accent: '#B8962E',
        surface: '#F8F7F4',
        'surface-alt': '#F0EDE8',
        charcoal: '#1C1C1E',
      },
      fontFamily: {
        serif: ['var(--font-dm-serif)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0 1px 4px rgba(0,0,0,0.08)',
        card: '0 2px 8px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
}

export default config
