import * as React from 'react'
import { ArrowUpRight } from 'lucide-react'

export interface Stat { icon: React.ReactNode; label: string }
export interface AnimatedHikeCardProps {
  title: string
  images: string[]
  stats: Stat[]
  description: string
  href: string
  className?: string
}

/** Responsive adaptation of the supplied Card 25 stacked-image interaction.
 * https://21st.dev/@ravikatiyar162/components/card-25
 */
export const AnimatedHikeCard = React.forwardRef<HTMLAnchorElement, AnimatedHikeCardProps>(
  ({ title, images, stats, description, href, className = '' }, ref) => (
    <a ref={ref} href={href} className={`section-preview-card glowing-shadow ${className}`} aria-label={`Explore ${title}`}>
      <div className='section-preview-header'>
        <h3>{title}</h3><ArrowUpRight size={22} aria-hidden='true' />
      </div>
      <div className='section-preview-images' aria-hidden='true'>
        {images.slice(0, 3).map((src, index) => (
          <div key={src} className='section-preview-image' style={{
            '--stack-left': `${index * 10}%`,
            '--fan-left': `${index * 24}%`,
            '--fan-rotate': `${index * 5 - 5}deg`,
            zIndex: images.length - index,
          } as React.CSSProperties}>
            <img src={src} alt='' loading='lazy' decoding='async' width={576} height={380} />
          </div>
        ))}
      </div>
      <ul className='section-preview-stack' aria-label='Technical stack'>
        {stats.map(stat => <li key={stat.label}><span aria-hidden='true'>{stat.icon}</span>{stat.label}</li>)}
      </ul>
      <p>{description}</p>
      <span className='section-preview-cta'>Explore section <span aria-hidden='true'>→</span></span>
    </a>
  )
)
AnimatedHikeCard.displayName = 'AnimatedHikeCard'
