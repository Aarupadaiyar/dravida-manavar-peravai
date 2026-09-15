import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'

type Tab = 'founder' | 'secretary'

export default function FounderPopup() {
  const [open, setOpen] = useState(false)
  const [tab, setTab] = useState<Tab>('founder')
  const [mounted, setMounted] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)
  const { t } = useLang()

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (open) {
      setShouldRender(true)
      return
    }
    if (!shouldRender) return
    const timeout = window.setTimeout(() => setShouldRender(false), 220)
    return () => window.clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        className="founder-fab"
        onClick={() => setOpen(true)}
        aria-label={t('founderPopup.trigger')}
      >
        <MessageCircle size={24} />
      </button>

      {mounted &&
        shouldRender &&
        createPortal(
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: open ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="founder-panel"
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: open ? 1 : 0, scale: open ? 1 : 0.94, y: open ? 0 : 16 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="founder-panel-tabs">
                <button
                  type="button"
                  className={`founder-panel-tab ${tab === 'founder' ? 'active' : ''}`}
                  onClick={() => setTab('founder')}
                >
                  {t('founderPopup.founderTab')}
                </button>
                <button
                  type="button"
                  className={`founder-panel-tab ${tab === 'secretary' ? 'active' : ''}`}
                  onClick={() => setTab('secretary')}
                >
                  {t('founderPopup.secretaryTab')}
                </button>
              </div>
              <div className="founder-panel-body">
                {tab === 'founder' ? (
                  <>
                    <h3 className="founder-panel-name">{t('founderPopup.founderName')}</h3>
                    <p className="founder-panel-role">{t('founderPopup.founderRole')}</p>
                    <p className="founder-panel-title">{t('founderPopup.founderTitle')}</p>
                    <p className="founder-panel-text">{t('founderPopup.founderBody')}</p>
                  </>
                ) : (
                  <>
                    <h3 className="founder-panel-name">{t('founderPopup.secretaryName')}</h3>
                    <p className="founder-panel-role">{t('founderPopup.secretaryRole')}</p>
                    <p className="founder-panel-title">{t('founderPopup.secretaryTitle')}</p>
                    <p className="founder-panel-text">{t('founderPopup.secretaryBody')}</p>
                  </>
                )}
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition-colors hover:bg-black/70"
              >
                <X size={16} />
              </button>
            </motion.div>
          </motion.div>,
          document.body,
        )}
    </>
  )
}
