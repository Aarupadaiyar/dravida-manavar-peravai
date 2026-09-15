import { Landmark, Megaphone, Flag, Sparkles } from 'lucide-react'
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from './reui/timeline'
import { useLang } from '../i18n/LanguageContext'
import type { TranslationKey } from '../i18n/translations'
import { Reveal } from './core/Reveal'

const ITEMS: { date: TranslationKey; title: TranslationKey; body: TranslationKey; Icon: typeof Landmark }[] = [
  { date: 'history.item1.date', title: 'history.item1.title', body: 'history.item1.body', Icon: Landmark },
  { date: 'history.item2.date', title: 'history.item2.title', body: 'history.item2.body', Icon: Megaphone },
  { date: 'history.item3.date', title: 'history.item3.title', body: 'history.item3.body', Icon: Flag },
  { date: 'history.item4.date', title: 'history.item4.title', body: 'history.item4.body', Icon: Sparkles },
]

export default function History() {
  const { t } = useLang()

  return (
    <section className="section history-section" id="history">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">{t('history.eyebrow')}</div>
          <h2 className="section-title">{t('history.title')}</h2>
        </div>
        <Timeline>
          {ITEMS.map((item, i) => (
            <TimelineItem key={item.date}>
              <Reveal delayMs={i * 100}>
                <TimelineHeader>
                  <TimelineSeparator />
                  <TimelineDate>{t(item.date)}</TimelineDate>
                  <TimelineTitle>{t(item.title)}</TimelineTitle>
                  <TimelineIndicator>
                    <item.Icon size={14} />
                  </TimelineIndicator>
                </TimelineHeader>
                <TimelineContent>{t(item.body)}</TimelineContent>
              </Reveal>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  )
}
