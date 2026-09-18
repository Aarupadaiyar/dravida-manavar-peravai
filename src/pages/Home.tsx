import Hero from '../components/Hero'
import ManifestoSplit from '../components/ManifestoSplit'
import LeadersPreview from '../components/LeadersPreview'
import ForumsPreview from '../components/ForumsPreview'
import LeadershipSpotlight from '../components/LeadershipSpotlight'
import Stats from '../components/Stats'
import Cta from '../components/Cta'
import { Reveal } from '../components/core/Reveal'
import { useLang } from '../i18n/LanguageContext'

export default function Home() {
  const { t } = useLang()

  return (
    <>
      <Hero />

      <section className="section">
        <div className="wrap">
          <Reveal className="why-strip">
            <h2 className="section-title">{t('home.whyTitle')}</h2>
            <p>{t('home.whyBody')}</p>
          </Reveal>
        </div>
      </section>

      <ManifestoSplit />
      <LeadersPreview />
      <ForumsPreview />
      <LeadershipSpotlight />
      <Stats />
      <Cta />
    </>
  )
}
