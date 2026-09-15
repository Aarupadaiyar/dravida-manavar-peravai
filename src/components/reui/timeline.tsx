import * as React from 'react'
import { cn } from '@/lib/utils'

interface TimelineChildProps {
  children: React.ReactNode
  className?: string
}

export function Timeline({ children, className }: TimelineChildProps) {
  return <div className={cn('timeline-root', className)}>{children}</div>
}

export function TimelineItem({ children, className }: TimelineChildProps) {
  return <div className={cn('timeline-item', className)}>{children}</div>
}

export function TimelineHeader({ children, className }: TimelineChildProps) {
  return <div className={cn('timeline-item-header', className)}>{children}</div>
}

export function TimelineSeparator({ className }: { className?: string }) {
  return <div className={cn('timeline-separator', className)} />
}

export function TimelineIndicator({ children, className }: { children?: React.ReactNode; className?: string }) {
  return <div className={cn('timeline-indicator', className)}>{children}</div>
}

export function TimelineDate({ children, className }: TimelineChildProps) {
  return <span className={cn('timeline-date', className)}>{children}</span>
}

export function TimelineTitle({ children, className }: TimelineChildProps) {
  return <span className={cn('timeline-title', className)}>{children}</span>
}

export function TimelineContent({ children, className }: TimelineChildProps) {
  return <div className={cn('timeline-content', className)}>{children}</div>
}
