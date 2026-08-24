import * as React from 'react'
import { cn } from '@/lib/utils'

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        'relative flex min-h-[38vh] sm:min-h-[42vh] md:min-h-[46vh] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-slate-950 z-0',
        className,
      )}
    >
      <div className="relative isolate z-0 flex w-full flex-1 scale-y-125 items-center justify-center">
        <div
          style={{ backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))` }}
          className="lamp-beam-in absolute inset-auto right-1/2 h-[7.2rem] sm:h-[8.6rem] md:h-[10.1rem] w-[22rem] overflow-visible bg-gradient-conic from-red-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute bottom-0 left-0 z-20 h-[5.8rem] sm:h-[6.5rem] md:h-[7.2rem] w-full bg-slate-950 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute bottom-0 left-0 z-20 h-full w-40 bg-slate-950 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </div>
        <div
          style={{ backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))` }}
          className="lamp-beam-in absolute inset-auto left-1/2 h-[7.2rem] sm:h-[8.6rem] md:h-[10.1rem] w-[22rem] bg-gradient-conic from-transparent via-transparent to-red-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute bottom-0 right-0 z-20 h-full w-40 bg-slate-950 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute bottom-0 right-0 z-20 h-[5.8rem] sm:h-[6.5rem] md:h-[7.2rem] w-full bg-slate-950 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </div>
        <div className="absolute top-1/2 h-[7.2rem] w-full translate-y-[1.45rem] scale-x-150 bg-slate-950 blur-2xl" />
        <div className="absolute top-1/2 z-50 h-[7.2rem] w-full bg-transparent opacity-10 backdrop-blur-md" />
        <div className="absolute inset-auto z-50 h-[5rem] sm:h-[5.8rem] md:h-[6.5rem] w-64 sm:w-80 md:w-[24rem] -translate-y-1/2 rounded-full bg-red-500 opacity-50 blur-3xl" />
        <div className="lamp-beam-in absolute inset-auto z-30 h-[5rem] sm:h-[5.8rem] md:h-[6.5rem] w-48 sm:w-56 md:w-64 -translate-y-[3.25rem] sm:-translate-y-[3.6rem] md:-translate-y-[4rem] rounded-full bg-red-400 blur-2xl" />
        <div className="lamp-beam-in absolute inset-auto z-50 h-0.5 w-[22rem] -translate-y-[4rem] sm:-translate-y-[4.3rem] md:-translate-y-[4.7rem] bg-red-400" />
        <div className="absolute inset-auto z-40 h-[5.8rem] sm:h-[6.5rem] md:h-[7.2rem] w-full -translate-y-[6.5rem] sm:-translate-y-[7.2rem] md:-translate-y-[7.9rem] bg-slate-950" />
      </div>

      <div className="lamp-fade-in relative z-50 flex -translate-y-[7.2rem] sm:-translate-y-[8.6rem] md:-translate-y-[10.1rem] flex-col items-center px-5">
        {children}
      </div>
    </div>
  )
}
