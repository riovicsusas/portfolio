import { useRef, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { AnimatedHikeCard } from '../components/ui/card-25'
import { sections } from './section-content'
import './section-cards.css'

export function SectionCards({ layout }: { layout: 'stack' | 'carousel' }) {
  const track = useRef<HTMLDivElement>(null)
  const drag = useRef({ active: false, moved: false, x: 0, scroll: 0 })
  const [position, setPosition] = useState(0)
  const move = (direction: number) => {
    const el = track.current
    if (!el) return
    const step = el.clientWidth + 16
    el.scrollTo({ left: el.scrollLeft + direction * step, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
  }
  if (layout === 'stack') return <nav className='mobile-section-cards' aria-label='Portfolio sections'>{sections.map(section => <AnimatedHikeCard key={section.href} {...section} />)}</nav>
  return <section className='desktop-section-carousel' aria-label='Explore portfolio'>
    <div className='desktop-section-track' ref={track} tabIndex={0}
      onScroll={() => { const el = track.current; if (el) setPosition(el.scrollLeft / Math.max(1, el.scrollWidth - el.clientWidth)) }}
      onKeyDown={event => { if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); move(event.key === 'ArrowRight' ? 1 : -1) } }}
      onDragStart={event => event.preventDefault()}
      onPointerDown={event => { if (event.pointerType !== 'mouse' || event.button !== 0) return; drag.current = { active: true, moved: false, x: event.clientX, scroll: event.currentTarget.scrollLeft } }}
      onPointerMove={event => { const state = drag.current; if (!state.active) return; const delta = event.clientX - state.x; if (Math.abs(delta) > 6) { state.moved = true; event.currentTarget.setPointerCapture(event.pointerId); event.currentTarget.classList.add('is-dragging') } if (state.moved) { event.preventDefault(); event.currentTarget.scrollLeft = state.scroll - delta } }}
      onPointerUp={event => { drag.current.active = false; event.currentTarget.classList.remove('is-dragging'); if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId) }}
      onPointerCancel={() => { drag.current.active = false; track.current?.classList.remove('is-dragging') }}
      onClickCapture={event => { if (drag.current.moved) { event.preventDefault(); drag.current.moved = false } }}>
      {sections.map(section => <AnimatedHikeCard key={section.href} {...section} />)}
    </div>
    <div className='desktop-section-controls'>
      <button type='button' onClick={() => move(-1)} disabled={position < .01} aria-label='Previous portfolio cards'><ArrowLeft size={15} /></button>
      <span aria-live='polite'>{1 + Math.round(position * 2)}–{2 + Math.round(position * 2)} / 4</span>
      <button type='button' onClick={() => move(1)} disabled={position > .99} aria-label='Next portfolio cards'><ArrowRight size={15} /></button>
    </div>
  </section>
}
