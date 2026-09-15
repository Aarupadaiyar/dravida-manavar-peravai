import { Landmark, BookOpen, Newspaper, GraduationCap } from 'lucide-react'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from './core/morphing-dialog'
import { useLang } from '../i18n/LanguageContext'
import { Reveal } from './core/Reveal'

export default function ParallelBody() {
  const { t } = useLang()

  return (
    <section className="section" id="parallel-body">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">{t('parallelBody.eyebrow')}</div>
          <h2 className="section-title">{t('parallelBody.title')}</h2>
        </div>
        <div className="parallel-grid">
          <Reveal>
            <a href="#" className="parallel-card">
              <span className="parallel-card-icon">
                <Landmark size={20} />
              </span>
              <h3>{t('parallelBody.diyatp.name')}</h3>
              <p>{t('parallelBody.diyatp.desc')}</p>
            </a>
          </Reveal>

          <Reveal delayMs={80}>
            <a href="#" className="parallel-card">
              <span className="parallel-card-icon">
                <BookOpen size={20} />
              </span>
              <h3>{t('parallelBody.karunchattai.name')}</h3>
              <p>{t('parallelBody.karunchattai.desc')}</p>
            </a>
          </Reveal>

          <Reveal delayMs={160}>
            <MorphingDialog transition={{ type: 'spring', bounce: 0.05, duration: 0.25 }}>
              <MorphingDialogTrigger className="parallel-card is-clickable">
                <span className="parallel-card-icon">
                  <Newspaper size={20} />
                </span>
                <h3>{t('parallelBody.muzhakkam.name')}</h3>
                <p>{t('parallelBody.muzhakkam.desc')}</p>
                <span className="parallel-card-more">{t('parallelBody.muzhakkam.readMore')}</span>
              </MorphingDialogTrigger>
              <MorphingDialogContainer>
                <MorphingDialogContent className="leader-dialog-content">
                  <div className="leader-dialog-body">
                    <MorphingDialogTitle className="leader-dialog-name">
                      {t('parallelBody.muzhakkam.name')}
                    </MorphingDialogTitle>
                    <MorphingDialogDescription
                      disableLayoutAnimation
                      variants={{
                        initial: { opacity: 0, y: 24 },
                        animate: { opacity: 1, y: 0 },
                        exit: { opacity: 0, y: 24 },
                      }}
                    >
                      <p className="leader-dialog-bio">{t('parallelBody.muzhakkam.full')}</p>
                    </MorphingDialogDescription>
                  </div>
                  <MorphingDialogClose />
                </MorphingDialogContent>
              </MorphingDialogContainer>
            </MorphingDialog>
          </Reveal>

          <Reveal delayMs={240}>
            <a href="#" className="parallel-card">
              <span className="parallel-card-icon">
                <GraduationCap size={20} />
              </span>
              <h3>{t('parallelBody.palli.name')}</h3>
              <p>{t('parallelBody.palli.desc')}</p>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
