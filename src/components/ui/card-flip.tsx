import { ArrowRight, Repeat2 } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export interface CardFlipProps {
  title?: string
  subtitle?: string
  description?: string
  features?: string[]
  logo?: string
  className?: string
  onClick?: () => void
  joinLabel?: string
}

export default function CardFlip({
  title = 'Design Systems',
  subtitle = 'Explore the fundamentals',
  description = 'Dive deep into the world of modern UI/UX design.',
  features = ['UI/UX', 'Modern Design', 'Tailwind CSS', 'Kokonut UI'],
  logo,
  className,
  onClick,
  joinLabel = 'Join this forum',
}: CardFlipProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className={cn(
        'group relative h-[340px] w-full max-w-[300px] [perspective:2000px]',
        onClick && 'cursor-pointer',
        className,
      )}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={onClick}
    >
      <div
        className={cn(
          'relative h-full w-full',
          '[transform-style:preserve-3d]',
          'transition-[transform] duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]',
          'motion-reduce:transition-none',
          isFlipped ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]',
        )}
      >
        {/* Front */}
        <div
          className={cn(
            'absolute inset-0 h-full w-full',
            '[backface-visibility:hidden] [transform:rotateY(0deg)]',
            'overflow-hidden rounded-2xl',
            'bg-zinc-900',
            'border border-white/10',
            'shadow-lg',
            'transition-shadow duration-500',
            'group-hover:shadow-xl',
          )}
        >
          <div className="relative h-full overflow-hidden bg-gradient-to-b from-zinc-900 to-black">
            <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center pt-4">
              <div className="relative flex h-[130px] w-[200px] items-center justify-center">
                {[...Array(10)].map((_, i) => (
                  <div
                    className={cn(
                      'absolute h-[50px] w-[50px]',
                      'rounded-[140px]',
                      'animate-[club-scale_3s_linear_infinite]',
                      'motion-reduce:animate-none',
                      'opacity-0',
                      'shadow-[0_0_50px_rgba(204,0,0,0.55)]',
                      'group-hover:animate-[club-scale_2s_linear_infinite]',
                    )}
                    key={i}
                    style={{ animationDelay: `${i * 0.3}s` }}
                  />
                ))}
                {logo && (
                  <img
                    src={logo}
                    alt=""
                    className="relative z-10 h-24 w-24 rounded-full object-contain shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                  />
                )}
              </div>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 left-0 p-5">
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="space-y-1.5">
                <h3 className="font-semibold text-lg text-white leading-snug tracking-tighter transition-transform duration-500 ease-out group-hover:translate-y-[-4px]">
                  {title}
                </h3>
                <p className="line-clamp-2 text-sm text-zinc-300 tracking-tight transition-transform delay-[50ms] duration-500 ease-out group-hover:translate-y-[-4px]">
                  {subtitle}
                </p>
              </div>
              <div className="group/icon relative">
                <div className="absolute inset-[-8px] rounded-lg bg-gradient-to-br from-[#cc0000]/20 via-[#cc0000]/10 to-transparent transition-opacity duration-300" />
                <Repeat2
                  aria-hidden="true"
                  className="relative z-10 h-4 w-4 text-[#ff3d1f] transition-transform duration-300 group-hover/icon:-rotate-12 group-hover/icon:scale-110"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Back */}
        <div
          className={cn(
            'absolute inset-0 h-full w-full',
            '[backface-visibility:hidden] [transform:rotateY(180deg)]',
            'rounded-2xl p-6',
            'bg-gradient-to-b from-zinc-900 to-black',
            'border border-white/10',
            'shadow-lg',
            'flex flex-col',
            'transition-shadow duration-500',
            'group-hover:shadow-xl',
          )}
        >
          <div className="flex-1 space-y-5 text-center">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-white leading-snug tracking-tight transition-transform duration-500 ease-out group-hover:translate-y-[-2px]">
                {title}
              </h3>
              <p className="line-clamp-3 text-sm text-zinc-400 tracking-tight transition-transform duration-500 ease-out group-hover:translate-y-[-2px]">
                {description}
              </p>
            </div>

            <div className="space-y-2">
              {features.map((feature, index) => (
                <div
                  className="flex items-center justify-center gap-2 text-sm text-zinc-300 transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
                  key={feature}
                  style={{
                    transform: isFlipped ? 'translateY(0)' : 'translateY(-6px)',
                    opacity: isFlipped ? 1 : 0,
                    transitionDelay: `${index * 50 + 150}ms`,
                  }}
                >
                  <ArrowRight aria-hidden="true" className="h-3 w-3 text-[#ff3d1f]" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 border-white/10 border-t pt-5">
            <button
              className={cn(
                'group/start relative w-full',
                'flex items-center justify-center gap-2',
                '-m-3 rounded-xl p-3',
                'transition-[transform,background] duration-300',
                'bg-white/5',
                'hover:from-0% hover:from-[#cc0000]/15 hover:via-100% hover:via-[#cc0000]/5 hover:to-100% hover:to-transparent hover:bg-gradient-to-r',
                'hover:scale-[1.02] active:scale-[0.98]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cc0000] focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900',
              )}
              type="button"
            >
              <span className="font-medium text-sm text-white transition-colors duration-300 group-hover/start:text-[#ff6b52]">
                {joinLabel}
              </span>
              <div className="group/icon relative">
                <div className="absolute inset-[-6px] scale-90 rounded-lg bg-gradient-to-br from-[#cc0000]/20 via-[#cc0000]/10 to-transparent opacity-0 transition-[transform,opacity] duration-300 group-hover/start:scale-100 group-hover/start:opacity-100" />
                <ArrowRight
                  aria-hidden="true"
                  className="relative z-10 h-4 w-4 text-[#ff3d1f] transition-transform duration-300 group-hover/start:translate-x-0.5 group-hover/start:scale-110"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
