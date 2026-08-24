import * as React from 'react'
import { createPortal } from 'react-dom'
import { motion, MotionConfig, type Transition, type Variants } from 'framer-motion'
import { XIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface MorphingDialogContextValue {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  uniqueId: string
}

const MorphingDialogContext = React.createContext<MorphingDialogContextValue | null>(null)

function useMorphingDialog() {
  const ctx = React.useContext(MorphingDialogContext)
  if (!ctx) {
    throw new Error('MorphingDialog components must be used within a <MorphingDialog>.')
  }
  return ctx
}

interface MorphingDialogProps {
  children: React.ReactNode
  transition?: Transition
}

export function MorphingDialog({ children, transition }: MorphingDialogProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const uniqueId = React.useId()
  const value = React.useMemo(() => ({ isOpen, setIsOpen, uniqueId }), [isOpen, uniqueId])

  return (
    <MorphingDialogContext.Provider value={value}>
      <MotionConfig transition={transition}>{children}</MotionConfig>
    </MorphingDialogContext.Provider>
  )
}

interface MorphingDialogTriggerProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export function MorphingDialogTrigger({ children, className, style }: MorphingDialogTriggerProps) {
  const { setIsOpen, isOpen } = useMorphingDialog()
  return (
    <div
      className={cn('cursor-pointer', className)}
      style={style}
      onClick={() => setIsOpen(true)}
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setIsOpen(true)
        }
      }}
    >
      {children}
    </div>
  )
}

interface MorphingDialogImageProps {
  src: string
  alt: string
  className?: string
}

export function MorphingDialogImage({ src, alt, className }: MorphingDialogImageProps) {
  return <img src={src} alt={alt} className={className} />
}

interface MorphingDialogTextProps {
  children: React.ReactNode
  className?: string
}

export function MorphingDialogTitle({ children, className }: MorphingDialogTextProps) {
  return <h3 className={cn('font-semibold', className)}>{children}</h3>
}

export function MorphingDialogSubtitle({ children, className }: MorphingDialogTextProps) {
  return <p className={className}>{children}</p>
}

interface MorphingDialogContentProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export function MorphingDialogContent({ children, className, style }: MorphingDialogContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className={className}
      style={style}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </motion.div>
  )
}

export function MorphingDialogClose({ className }: { className?: string }) {
  const { setIsOpen } = useMorphingDialog()
  return (
    <button
      type="button"
      onClick={() => setIsOpen(false)}
      aria-label="Close dialog"
      className={cn(
        'absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition-colors hover:bg-black/70',
        className,
      )}
    >
      <XIcon size={16} />
    </button>
  )
}

interface MorphingDialogDescriptionProps {
  children: React.ReactNode
  className?: string
  disableLayoutAnimation?: boolean
  variants?: Variants
}

export function MorphingDialogDescription({ children, className, variants }: MorphingDialogDescriptionProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants ?? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function MorphingDialogContainer({ children }: { children: React.ReactNode }) {
  const { isOpen, setIsOpen } = useMorphingDialog()
  const [mounted, setMounted] = React.useState(false)
  const [shouldRender, setShouldRender] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  React.useEffect(() => {
    if (isOpen) {
      setShouldRender(true)
      return
    }
    if (!shouldRender) return
    const timeout = window.setTimeout(() => setShouldRender(false), 220)
    return () => window.clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  React.useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen, setIsOpen])

  if (!mounted || !shouldRender) return null

  return createPortal(
    <motion.div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.2 }}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </motion.div>,
    document.body,
  )
}
