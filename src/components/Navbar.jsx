import { useState, useRef, useEffect } from 'react'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#research', label: 'Research' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('menu')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
    }

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuOpen])

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 flex w-full items-center justify-between px-4 py-4 md:px-6 lg:px-8 transition-colors duration-300 ${
      scrolled ? 'bg-slate-950' : 'bg-transparent'
    }`}>
      <nav className="flex w-full items-center justify-between">
        <a href="#" className="font-mono text-2xl font-semibold tracking-tight text-yellow-700">
          VulaOps
        </a>

        {/* Center: Pill-shaped segmented control */}
        <div className="relative flex items-center" ref={dropdownRef}>
          <div className="flex rounded-md bg-slate-800/80 border border-slate-700/60 p-1 shadow-inner">
            <button
              type="button"
              onClick={() => {
                setActiveTab('menu')
                setMenuOpen(!menuOpen)
              }}
              className={`relative flex items-center gap-2 rounded-md px-4 py-2 text-md font-medium transition-all ${
                activeTab === 'menu'
                  ? 'bg-yellow-600 text-slate-800 shadow-sm'
                  : 'text-slate-500 hover:text-slate-400'
              }`}
            >
              <svg
                className={`h-3.5 w-3.5 ${activeTab === 'menu' ? 'text-slate-700' : 'text-slate-500'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <span>Menu</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab('solutions')
                setMenuOpen(false)
              }}
              className={`flex items-center gap-2 rounded-md px-4 py-2 text-md font-medium transition-all ${
                activeTab === 'solutions'
                  ? 'bg-stone-100 text-slate-800 shadow-sm'
                  : 'text-slate-500 hover:text-slate-400'
              }`}
            >
              <span>Our Solutions</span>
            </button>
          </div>

          {/* Dropdown menu */}
          {menuOpen && activeTab === 'menu' && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-lg border border-slate-700/50 bg-slate-800/95 backdrop-blur-xl shadow-xl py-2">
              <ul className="space-y-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block px-4 py-2.5 text-sm text-slate-300 transition hover:bg-slate-700/50 hover:text-white"
                      onClick={() => {
                        setMenuOpen(false)
                        setActiveTab('menu')
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right: CTA button */}
        <div className="flex items-center">
          <a
            href="#contact"
            className="rounded-lg bg-amber-400 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-amber-300"
          >
            Client Login
          </a>
        </div>
      </nav>
    </header>
  )
}
