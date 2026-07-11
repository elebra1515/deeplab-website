'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-navy/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3" aria-label="Deep Integrated Lab Services Limited home">
          <Image
            src="/logo.png"
            alt="Deep Integrated Lab Services Limited"
            width={280}
            height={80}
            priority
            className="h-14 w-auto"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 font-display font-medium text-navy">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative py-1 hover:text-amber-dark transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-navy text-paper px-5 py-2.5 text-sm tracking-wide hover:bg-steel transition-colors"
          >
            Request a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block h-0.5 w-6 bg-navy transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-6 bg-navy transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-navy transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-navy/10 bg-paper px-6 py-4 flex flex-col gap-4 font-display font-medium text-navy">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="bg-navy text-paper px-5 py-2.5 text-sm tracking-wide text-center"
          >
            Request a Quote
          </Link>
        </div>
      )}
    </header>
  )
}
