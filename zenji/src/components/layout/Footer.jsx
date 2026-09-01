import logoMark from '../../assets/brand/logo-mark.png'
import './Footer.css'

const COLUMNS = [
  {
    title: 'Drops',
    links: [
      { label: 'Home', href: '#top' },
      { label: 'Drop', href: '#drop' },
      { label: 'Collection', href: '#collection' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { label: 'Lookbook', href: '#lookbook' },
      { label: 'Our Story', href: '#story' },
      { label: 'Collection', href: '#collection' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'TikTok', href: '#' },
      { label: 'Instagram', href: '#' },
      { label: 'Facebook', href: '#' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'FAQ', href: '#' },
      { label: 'Reviews', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'Help', href: '#' },
      { label: 'Return Policy', href: '#' },
      { label: 'Contact Us', href: '#' },
    ],
  },
]

const SOCIALS = [
  { label: 'TikTok', href: '#', modifier: 'is-tiktok', icon: 'tiktok' },
  { label: 'Instagram', href: '#', modifier: 'is-instagram', icon: 'instagram' },
  { label: 'Facebook', href: '#', modifier: 'is-facebook', icon: 'facebook' },
]

function SocialIcon({ name }) {
  if (name === 'tiktok') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#08050c" aria-hidden="true">
        <path d="M16.6 5.82c-1.36-1.02-2.2-2.62-2.2-4.38h-3.09v14.02c0 1.44-1.18 2.62-2.62 2.62a2.62 2.62 0 0 1-2.62-2.62c0-1.74 1.68-3.05 3.4-2.51V9.6a5.79 5.79 0 0 0-6.49 5.71c0 3.18 2.65 5.71 5.75 5.71 3.18 0 5.75-2.58 5.75-5.75V9.02a7.35 7.35 0 0 0 4.3 1.38V7.31s-1.88.1-3.24-1.49z" />
      </svg>
    )
  }
  if (name === 'instagram') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5.5" />
        <circle cx="12" cy="12" r="4.3" />
        <circle cx="17.4" cy="6.6" r="1.15" fill="#fff" stroke="none" />
      </svg>
    )
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#fff" />
      <path
        fill="#1877f2"
        d="M13.65 20.5v-7.02h2.36l.35-2.73h-2.71v-1.75c0-.79.22-1.33 1.35-1.33h1.44V5.24c-.25-.03-1.1-.11-2.09-.11-2.07 0-3.48 1.26-3.48 3.58v2h-2.36v2.73h2.36v7.02h2.78z"
      />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <img src={logoMark} alt="ZENJI" className="footer__logo-mark" />

          <p className="footer__tagline">
            Wear the story. Anime-inspired streetwear for those who refuse to fade in. Every drop limited. No
            restocks. Ever.
          </p>

          <p className="footer__follow">Follow The Lore</p>
          <div className="footer__socials">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className={`footer__social ${social.modifier}`}
                data-cursor-grab
              >
                <SocialIcon name={social.icon} />
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__columns">
          <span className="footer__watermark" aria-hidden="true">
            ZENJI
          </span>
          {COLUMNS.map((col) => (
            <div className="footer__col" key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} data-cursor-grab>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} ZENJI. All drops are final. No restocks. Ever.</span>
        <div className="footer__bottom-right">
          <a href="#" data-cursor-grab>
            Privacy
          </a>
          <a href="#" data-cursor-grab>
            Terms
          </a>
          <a href="#" data-cursor-grab>
            Cookies
          </a>
          <span className="footer__bottom-tag">
            <span className="footer__dot" />
            Anime-inspired. Street-built. Community-owned.
          </span>
        </div>
      </div>
    </footer>
  )
}
