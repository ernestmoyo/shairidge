'use client'

import Link from 'next/link'
import { NAVIGATION_LINKS, SITE_NAME } from '@/lib/constants'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-subtle">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo/Brand */}
        <Link href="/" className="font-serif text-2xl text-primary">
          {SITE_NAME}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-primary transition-colors text-sm font-medium tracking-wide"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <Link href="/contact">
            <button className="border-[1.5px] border-primary text-primary px-5 py-2 text-sm font-medium rounded-md transition-all duration-200 hover:bg-primary hover:text-white">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <FaTimes size={22} className="text-primary" />
          ) : (
            <FaBars size={22} className="text-primary" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-600 hover:text-primary transition-colors py-2 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              <button className="w-full border-[1.5px] border-primary text-primary px-5 py-2.5 text-sm font-medium rounded-md transition-all duration-200 hover:bg-primary hover:text-white">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
