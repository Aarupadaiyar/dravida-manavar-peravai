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
        'relative flex min-h-[26vh] sm:min-h-[29vh] md:min-h-[31vh] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-black z-0',
        className,
      )}
    >
      <div className="relative isolate z-0 flex w-full flex-1 scale-y-125 items-center justify-center">
        <div
          style={{ backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))` }}
          className="lamp-beam-in absolute inset-auto right-1/2 h-[4.9rem] sm:h-[5.85rem] md:h-[6.9rem] w-[22rem] overflow-visible bg-gradient-conic from-[#cc0000] via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute bottom-0 left-0 z-20 h-[3.95rem] sm:h-[4.4rem] md:h-[4.9rem] w-full bg-black [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute bottom-0 left-0 z-20 h-full w-40 bg-black [mask-image:linear-gradient(to_right,white,transparent)]" />
        </div>
        <div
          style={{ backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))` }}
          className="lamp-beam-in absolute inset-auto left-1/2 h-[4.9rem] sm:h-[5.85rem] md:h-[6.9rem] w-[22rem] bg-gradient-conic from-transparent via-transparent to-[#cc0000] text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute bottom-0 right-0 z-20 h-full w-40 bg-black [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute bottom-0 right-0 z-20 h-[3.95rem] sm:h-[4.4rem] md:h-[4.9rem] w-full bg-black [mask-image:linear-gradient(to_top,white,transparent)]" />
        </div>
        <div className="absolute top-1/2 h-[4.9rem] w-full translate-y-[1rem] scale-x-150 bg-black blur-2xl" />
        <div className="absolute top-1/2 z-50 h-[4.9rem] w-full bg-transparent opacity-10 backdrop-blur-md" />
        <div className="absolute inset-auto z-50 h-[3.4rem] sm:h-[3.95rem] md:h-[4.4rem] w-64 sm:w-80 md:w-[24rem] -translate-y-1/2 rounded-full bg-[#ff2020] opacity-75 blur-3xl" />
        <div className="lamp-beam-in absolute inset-auto z-30 h-[3.4rem] sm:h-[3.95rem] md:h-[4.4rem] w-48 sm:w-56 md:w-64 -translate-y-[2.2rem] sm:-translate-y-[2.45rem] md:-translate-y-[2.7rem] rounded-full bg-[#ff3030] blur-2xl" />
        <div className="lamp-beam-in absolute inset-auto z-50 h-0.5 w-[22rem] -translate-y-[2.7rem] sm:-translate-y-[2.9rem] md:-translate-y-[3.2rem] bg-[#ff3030]" />
        <div className="absolute inset-auto z-40 h-[3.95rem] sm:h-[4.4rem] md:h-[4.9rem] w-full -translate-y-[4.4rem] sm:-translate-y-[4.9rem] md:-translate-y-[5.4rem] bg-black" />
      </div>

      <div className="lamp-fade-in relative z-50 flex -translate-y-[4.9rem] sm:-translate-y-[5.85rem] md:-translate-y-[6.9rem] flex-col items-center px-5">
        {children}
      </div>
    </div>
  )
}
