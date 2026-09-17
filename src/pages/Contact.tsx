import { Link } from 'react-router-dom'
import { Mail, Landmark, Users, MessageSquare, CalendarDays, ArrowUpRight } from 'lucide-react'
import { SOCIALS } from '../components/SocialIcons'
import { Reveal } from '../components/core/Reveal'
import { useLang } from '../i18n/LanguageContext'

const QUICK_LINKS = [
  { to: '/about', titleKey: 'nav.about' as const, Icon: Landmark },
  { to: '/leaders', titleKey: 'nav.leaders' as const, Icon: Users },
  { to: '/forums', titleKey: 'nav.forums' as const, Icon: MessageSquare },
  { to: '/events', titleKey: 'nav.events' as const, Icon: CalendarDays },
]

export default function Contact() {
  const { t } = useLang()

  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="page-header">
          <span className="page-header-icon">
            <Mail size={22} />
          </span>
          <div className="eyebrow">{t('page.contactEyebrow')}</div>
          <h1 className="section-title">{t('page.contactTitle')}</h1>
        </Reveal>

        <Reveal className="contact-block" delayMs={80}>
          <div className="contact-pending">{t('page.contactPending')}</div>
          <h3 className="contact-social-title">{t('page.contactSocialTitle')}</h3>
          <div className="contact-social-row">
            {SOCIALS.map(({ id, Icon, href, label }) => (
              <a key={id} href={href} className="footer-social-icon" aria-label={label}>
                <Icon />
              </a>
            ))}
          </div>
          <Link to="/join" className="btn-primary">
            {t('nav.join')}
          </Link>
        </Reveal>

        <div className="contact-quick-links">
          {QUICK_LINKS.map((link, i) => (
            <Reveal key={link.to} delayMs={160 + i * 80}>
              <Link to={link.to} className="contact-quick-link">
                <span className="contact-quick-link-icon">
                  <link.Icon size={18} />
                </span>
                <span>{t(link.titleKey)}</span>
                <ArrowUpRight size={16} className="contact-quick-link-arrow" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
