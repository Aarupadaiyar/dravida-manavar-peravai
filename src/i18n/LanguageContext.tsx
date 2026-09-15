import * as React from 'react'
import { translations, type TranslationKey } from './translations'

type Lang = 'ta' | 'en'

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  toggleLang: () => void
  t: (key: TranslationKey) => string
}

const LanguageContext = React.createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'dmp-lang'

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Lang>(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      return stored === 'en' || stored === 'ta' ? stored : 'ta'
    } catch {
      return 'ta'
    }
  })

  const setLang = React.useCallback((next: Lang) => {
    setLangState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // ignore
    }
  }, [])

  const toggleLang = React.useCallback(() => {
    setLang(lang === 'ta' ? 'en' : 'ta')
  }, [lang, setLang])

  const t = React.useCallback((key: TranslationKey) => translations[key][lang], [lang])

  const value = React.useMemo(() => ({ lang, setLang, toggleLang, t }), [lang, setLang, toggleLang, t])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang() {
  const ctx = React.useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within a LanguageProvider')
  return ctx
}
