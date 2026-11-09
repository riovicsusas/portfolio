import * as React from 'react'
import { ArrowUpRight } from 'lucide-react'

export interface CardImage { src: string; alt?: string; fallback?: string }
export interface AnimatedHikeCardProps {
  title: string
  images: Array<string | CardImage>
  description: string
  href: string
  className?: string
}

/** Responsive adaptation of the supplied Card 25 stacked-image interaction.
 * https://21st.dev/@ravikatiyar162/components/card-25
 */
export const AnimatedHikeCard = React.forwardRef<HTMLAnchorElement, AnimatedHikeCardProps>(
  ({ title, images, description, href, className = '' }, ref) => (
    <a ref={ref} href={href} className={`section-preview-card glowing-shadow ${className}`} aria-label={`Explore ${title}`}>
      <div className='section-preview-header'>
        <h3>{title}</h3><ArrowUpRight size={22} aria-hidden='true' />
      </div>
      <div className='section-preview-images' aria-hidden='true'>
        {images.slice(0, 3).map((image, index) => {
          const { src, alt = "", fallback } = typeof image === "string" ? { src: image } : image
          return (
          <div key={src} className='section-preview-image' style={{
            '--stack-left': `${index * 10}%`,
            '--fan-left': `${index * 24}%`,
            '--fan-rotate': `${index * 5 - 5}deg`,
            zIndex: images.length - index,
          } as React.CSSProperties}>
            <img src={src} alt={alt} title={alt} loading='lazy' decoding='async' width={576} height={380} onError={fallback ? event => { const img = event.currentTarget; if (img.dataset.fallback) return; img.dataset.fallback = 'true'; img.src = fallback } : undefined} />
          </div>
        )})}
      </div>
      <p>{description}</p>
      <span className='section-preview-cta'>Explore section <span aria-hidden='true'>→</span></span>
    </a>
  )
)
AnimatedHikeCard.displayName = 'AnimatedHikeCard'
