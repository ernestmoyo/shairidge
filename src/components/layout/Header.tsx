'use client'

import Link from 'next/link'
import { NAVIGATION_LINKS, SITE_NAME } from '@/lib/constants'
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa'
import { useState } from 'react'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-primary/90 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-2.5 flex items-center justify-between">
        {/* Logo/Brand */}
        <Link href="/" className="font-serif text-2xl text-white">
          {SITE_NAME}
        </Link>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex items-center gap-8">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button + Search - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/contact">
            <button className="border border-white/40 text-white px-5 py-2 text-sm font-medium rounded-md transition-all duration-200 hover:bg-white hover:text-primary">
              Get Started
            </button>
          </Link>
          <button className="text-gray-300 hover:text-white transition-colors" aria-label="Search">
            <FaSearch size={16} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <FaTimes size={22} className="text-white" />
          ) : (
            <FaBars size={22} className="text-white" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-primary">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-300 hover:text-white transition-colors py-2 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              <button className="w-full border border-white/40 text-white px-5 py-2.5 text-sm font-medium rounded-md transition-all duration-200 hover:bg-white hover:text-primary">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
