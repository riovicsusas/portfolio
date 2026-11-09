'use client'
import { Component, Suspense, lazy, useEffect, useState, type ReactNode } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowRightIcon, ArrowUpRightIcon } from 'lucide-react'
import { GlowingShadow } from './glowing-shadow'
const cn = (...classes: Array<string | false | null | undefined>) => classes.filter(Boolean).join(' ')
const focusRing = 'focus-visible:ring-ring/60 focus-visible:border-ring outline-none focus-visible:ring-[3px]'
const IdCard = lazy(() => import('./hero-lanyard'))
class CardBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() { return { failed: true } }
  render() { return this.state.failed ? <img className='hero-static-portrait' src='images/susas_profilepic.jpg' alt='' /> : this.props.children }
}
/* -------------------------------------------------------------------------- */
/*                               Greeting rotator                             */
/* -------------------------------------------------------------------------- */

const GreetingWord = ({ greetings, intervalMs = 2200 }: { greetings: string[]; intervalMs?: number }) => {
  const [index, setIndex] = useState(0)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion || greetings.length < 2) return

    const timer = setInterval(() => setIndex(prev => (prev + 1) % greetings.length), intervalMs)

    return () => clearInterval(timer)
  }, [greetings.length, intervalMs, reduceMotion])

  return (
    <>
      <span className='sr-only'>{greetings[0]}</span>
      <span aria-hidden='true' className='greeting-rotator'>
        {/* Invisible sizers reserve space for the widest greeting so surrounding text doesn't shift */}
        {greetings.map(word => (
          <span key={word} className='greeting-sizer'>
            {word}
          </span>
        ))}

        <AnimatePresence mode='wait' initial={false}>
          <motion.span
            key={greetings[index]}
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className='greeting-word'
          >
            {greetings[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </>
  )
}

/* -------------------------------------------------------------------------- */
/*                                 Hero section                               */
/* -------------------------------------------------------------------------- */

export type BrandLogo = {
  image: string
  name: string
}

export type ActionLink = {
  label: string
  href: string
}

export type HeroSection44Props = {
  greetings?: string[]
  name?: string
  role?: string
  description?: ReactNode
  availabilityLabel?: string
  profileImage?: string
  downloadAction?: ActionLink
  connectAction?: ActionLink
  brandLogos?: BrandLogo[]
  className?: string
  sectionContent?: ReactNode
}

// Fallbacks so the component still renders when mounted without props (e.g. in a preview sandbox).
const CDN_BASE = 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/zolt'

const DEFAULT_BRAND_LOGOS: BrandLogo[] = Array.from({ length: 20 }, (_, index) => {
  const position = String(index + 1).padStart(2, '0')

  return { image: `${CDN_BASE}/logo-${position}.png`, name: `Tech stack logo ${position}` }
})

export const HeroSection44 = ({
  greetings = ['Hello', 'नमस्ते', '你好', 'Ciao'],
  name = 'Zolt',
  role = 'Design engineer',
  description = "Design engineer based in Austin. I don't just bridge design and engineering - I own the entire experience, from the first sketch to the final shipped product.",
  availabilityLabel = 'Available',
  profileImage = `${CDN_BASE}/profile.png`,
  downloadAction = { label: 'Download CV', href: '#' },
  connectAction = { label: "Let's connect", href: '#' },
  brandLogos = DEFAULT_BRAND_LOGOS,
  className,
  sectionContent
}: HeroSection44Props) => {
  const [showCard, setShowCard] = useState(false)
  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px) and (prefers-reduced-motion: no-preference)')
    const update = () => setShowCard(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])
  return (
    <section aria-label='Introduction' className={cn('portfolio-hero bg-background text-foreground overflow-x-clip lg:relative', className)}>
      <div className='max-sm:pt-20 sm:py-16 lg:pt-32 lg:pb-24'>
        <div className='mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>
          <div className='space-y-6 lg:max-w-lg'>
            <span className='bg-card text-primary border-border inline-flex h-6.5 w-fit items-center gap-1 rounded-full border px-2 text-xs font-medium'>
              <span className='relative inline-flex size-1.5' aria-hidden='true'>
                <span className='bg-primary/40 absolute -inset-0.5 rounded-full opacity-75 motion-safe:animate-[ping_1.8s_cubic-bezier(0,0,0.2,1)_infinite]' />
                <span className='bg-primary relative inline-flex size-1.5 rounded-full' />
              </span>
              {availabilityLabel}
            </span>

            <h1 className='mb-2 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[64px] lg:font-bold'>
              <GreetingWord greetings={greetings} />, I’m {name}.
            </h1>

            <p className='text-muted-foreground text-xl font-medium sm:text-2xl lg:text-3xl'>{role}</p>

            <p className='text-muted-foreground mb-8 max-w-2xl text-base'>{description}</p>

            <div className='flex items-center gap-2.5 pt-2'>
              <GlowingShadow
                href={downloadAction.href}
                className={cn(
                  'border-border bg-background hover:bg-muted inline-flex h-11 items-center justify-center rounded-full border px-4 text-base font-medium whitespace-nowrap transition-colors',
                  focusRing
                )}
              >
                {downloadAction.label}
              </GlowingShadow>

              <GlowingShadow
                href={connectAction.href}
                className={cn(
                  'connect-glow border-border bg-card group inline-flex h-11 items-center justify-center gap-2.5 rounded-full border pr-4 pl-4 text-base font-medium whitespace-nowrap shadow-sm transition-[padding] duration-300 hover:pl-2 focus-visible:pl-2',
                  focusRing
                )}
              >
                <span className='bg-primary relative flex size-2.5 items-center justify-center overflow-hidden rounded-full transition-all duration-300 group-hover:size-6.5 group-focus-visible:size-6.5'>
                  <ArrowRightIcon
                    aria-hidden='true'
                    className='text-primary-foreground absolute size-4.5 -translate-x-3 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100'
                  />
                </span>
                {connectAction.label}
              </GlowingShadow>
            </div>
            {sectionContent}

          </div>
        </div>
      </div>

      {showCard && <CardBoundary><Suspense fallback={null}><IdCard
        frontImage={profileImage}
        className='mx-auto mt-8 aspect-4/5 w-full max-w-80 max-lg:hidden lg:absolute lg:-top-31 lg:right-0 lg:left-0 lg:z-10 lg:mt-0 lg:aspect-auto lg:h-182 lg:max-w-none'
      /></Suspense></CardBoundary>}

    </section>
  )
}


export default HeroSection44
