import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Button from './Button'
import logo from '../assets/logo.jpg'
import { useLang } from '../i18n/LanguageContext'

const LINKS = [
  { to: '/', key: 'nav.home' as const },
  { to: '/about', key: 'nav.about' as const },
  { to: '/leaders', key: 'nav.leaders' as const },
  { to: '/forums', key: 'nav.forums' as const },
  { to: '/events', key: 'nav.events' as const },
  { to: '/contact', key: 'nav.contact' as const },
]

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <nav className="navbar">
      <Link to="/" onClick={() => setMenuOpen(false)}>
        <img src={logo} alt="Dravida Manavar Peravai" className="logo-badge" />
      </Link>
      <div className="nav-links">
        {LINKS.map((link) => (
          <Link key={link.key} to={link.to} className="nav-link">
            {t(link.key)}
          </Link>
        ))}
      </div>
      <div className="nav-actions">
        <div className="lang-toggle" role="group" aria-label="Language">
          <button
            type="button"
            className={`lang-toggle-opt ${lang === 'ta' ? 'active' : ''}`}
            onClick={() => setLang('ta')}
          >
            தமிழ்
          </button>
          <button
            type="button"
            className={`lang-toggle-opt ${lang === 'en' ? 'active' : ''}`}
            onClick={() => setLang('en')}
          >
            EN
          </button>
        </div>
        <Button className="nav-join-btn" onClick={() => navigate('/join')}>
          {t('nav.join')}
        </Button>
        <button
          type="button"
          className="nav-hamburger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}>
        {LINKS.map((link) => (
          <Link key={link.key} to={link.to} className="mobile-menu-link" onClick={() => setMenuOpen(false)}>
            {t(link.key)}
          </Link>
        ))}
        <Button className="mobile-menu-join" onClick={() => navigate('/join')}>
          {t('nav.join')}
        </Button>
      </div>
    </nav>
  )
}
