import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'
import { useLang } from '../i18n/LanguageContext'
import { SOCIALS } from './SocialIcons'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="brand-lockup">
            <img src={logo} alt="Dravida Manavar Peravai" className="logo-badge" />
            <div>
              <div className="brand-name" style={{ fontSize: 15 }}>
                திராவிட மாணவர் பேரவை
              </div>
              <div className="brand-sub">Dravida Manavar Peravai</div>
            </div>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <h4>{t('footer.movement')}</h4>
              <Link to="/about">{t('nav.about')}</Link>
              <Link to="/leaders">{t('nav.leaders')}</Link>
              <Link to="/forums">{t('nav.forums')}</Link>
              <Link to="/events">{t('nav.events')}</Link>
              <Link to="/blog">{t('nav.blog')}</Link>
            </div>
            <div className="footer-col">
              <h4>{t('footer.leadership')}</h4>
              <a href="#" onClick={(e) => e.preventDefault()}>
                {t('founderPopup.founderTab')}
              </a>
              <a href="#" onClick={(e) => e.preventDefault()}>
                {t('founderPopup.secretaryTab')}
              </a>
            </div>
            <div className="footer-col">
              <h4>{t('footer.connect')}</h4>
              <Link to="/contact">{t('nav.contact')}</Link>
              {/* TODO: real contact details (email/phone/address) pending from user */}
              <div className="footer-social-row">
                {SOCIALS.map(({ id, Icon, href, label }) => (
                  <a key={id} href={href} className="footer-social-icon" aria-label={label}>
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {t('footer.rights')}</span>
          <span>{t('hero.eyebrow')}</span>
        </div>
      </div>
    </footer>
  )
}
