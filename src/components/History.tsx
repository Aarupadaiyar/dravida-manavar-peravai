import { Landmark, Newspaper, Video, BookOpen, Users, GraduationCap, HandCoins, HeartHandshake, Flag } from 'lucide-react'
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

interface HistoryEntry {
  date: TranslationKey
  title: TranslationKey
  body: TranslationKey
  Icon: typeof Landmark
}

const ITEMS: HistoryEntry[] = [
  { date: 'history.item1.date', title: 'history.item1.title', body: 'history.item1.body', Icon: Landmark },
  { date: 'history.item2.date', title: 'history.item2.title', body: 'history.item2.body', Icon: Newspaper },
  { date: 'history.item3.date', title: 'history.item3.title', body: 'history.item3.body', Icon: Video },
  { date: 'history.item4.date', title: 'history.item4.title', body: 'history.item4.body', Icon: BookOpen },
  { date: 'history.item5.date', title: 'history.item5.title', body: 'history.item5.body', Icon: Users },
  { date: 'history.item6.date', title: 'history.item6.title', body: 'history.item6.body', Icon: GraduationCap },
  { date: 'history.item7.date', title: 'history.item7.title', body: 'history.item7.body', Icon: HandCoins },
  { date: 'history.item8.date', title: 'history.item8.title', body: 'history.item8.body', Icon: HeartHandshake },
  { date: 'history.item9.date', title: 'history.item9.title', body: 'history.item9.body', Icon: Flag },
  { date: 'history.item10.date', title: 'history.item10.title', body: 'history.item10.body', Icon: Newspaper },
]

function HistoryRow({ items, delayOffset }: { items: HistoryEntry[]; delayOffset: number }) {
  const { t } = useLang()
  return (
    <Timeline>
      {items.map((item, i) => (
        <TimelineItem key={item.date}>
          <Reveal delayMs={(delayOffset + i) * 60}>
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
  )
}

export default function History() {
  const { t } = useLang()
  const row1 = ITEMS.slice(0, 5)
  const row2 = ITEMS.slice(5, 10)

  return (
    <section className="section history-section" id="history">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">{t('history.eyebrow')}</div>
          <h2 className="section-title">{t('history.title')}</h2>
        </div>
        <div className="history-rows">
          <HistoryRow items={row1} delayOffset={0} />
          <HistoryRow items={row2} delayOffset={5} />
        </div>
      </div>
    </section>
  )
}
