import { Link } from 'react-router-dom'
import Button from './Button'
import logo from '../assets/logo.jpg'
import { useLang } from '../i18n/LanguageContext'

const LINKS = [
  { to: '/', key: 'nav.home' as const },
  { to: '/about', key: 'nav.about' as const },
  { to: '/leaders', key: 'nav.leaders' as const },
  { to: '/events', key: 'nav.events' as const },
  { to: '/contact', key: 'nav.contact' as const },
]

export default function Navbar() {
  const { lang, setLang, t } = useLang()

  return (
    <nav className="navbar">
      <Link to="/">
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
        <Button>{t('nav.join')}</Button>
      </div>
    </nav>
  )
}
