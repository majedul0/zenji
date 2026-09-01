import { useEffect, useState } from 'react'
import './Navbar.css'

const LINKS = [
  { label: 'Drop', href: '#drop' },
  { label: 'Collection', href: '#collection' },
  { label: 'Lookbook', href: '#lookbook' },
  { label: 'Our Story', href: '#story' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#top" className="navbar__logo" data-cursor-grab>
          ZEN<span>JI</span>
        </a>

        <nav className="navbar__links">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} data-cursor-grab>
              {link.label}
            </a>
          ))}
          <a href="#drop" className="navbar__more" data-cursor-grab>
            More
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
              <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </nav>

        <div className="navbar__actions">
          <form className="navbar__search" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Search..." aria-label="Search" />
            <button type="submit" aria-label="Submit search" data-cursor-grab>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>

          <a href="#cart" className="navbar__icon" aria-label="Cart" data-cursor-grab>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6h15l-1.5 9h-12L6 6zM6 6L5 3H2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="9.5" cy="20" r="1.4" fill="currentColor" />
              <circle cx="17.5" cy="20" r="1.4" fill="currentColor" />
            </svg>
          </a>

          <a href="#account" className="navbar__icon" aria-label="Account" data-cursor-grab>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="8" r="3.6" stroke="currentColor" strokeWidth="1.6" />
              <path d="M4.5 20c1.5-4 4.2-6 7.5-6s6 2 7.5 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </a>

          <button
            type="button"
            className={`navbar__burger ${open ? 'is-open' : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            data-cursor-grab
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`navbar__mobile ${open ? 'is-open' : ''}`}>
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)} data-cursor-grab>
            {link.label}
          </a>
        ))}
        <a href="#drop" onClick={() => setOpen(false)} data-cursor-grab>
          Shop the Drop
        </a>
      </div>
    </header>
  )
}
