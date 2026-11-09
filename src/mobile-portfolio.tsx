import { useLayoutEffect, useRef } from 'react'
import { PortfolioTemplate, type PortfolioBadge } from '../components/ui/portfolio-hero'
import { SectionCards } from './section-cards'
import './mobile-portfolio.css'

const badges: PortfolioBadge[] = [
  { label: 'SHOPIFY PLUS', bg: '#c6e795', border: '#b0ce81', color: '#213817' },
  { label: 'AUTOMATION' }, { label: '3PL LOGISTICS' }, { label: 'MATRIXIFY' },
  { label: 'SHOPIFY FLOW', bg: '#bba5ef', border: '#a68bde', color: '#271443' },
  { label: 'WAREHOUSE ROUTING' }, { label: 'SYSTEMS THINKING' },
  { label: 'CUSTOMER OPERATIONS' },
]
function MobileDailyDrivers() {
  const slot = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    const drivers = document.querySelector<HTMLElement>('.drivers-logos')
    const host = slot.current
    if (!drivers || !host || !drivers.parentNode) return
    const originalParent = drivers.parentNode
    const originalNext = drivers.nextSibling
    host.appendChild(drivers)
    return () => {
      originalParent.insertBefore(drivers, originalNext?.parentNode === originalParent ? originalNext : null)
    }
  }, [])
  return <div className='mobile-drivers-slot' ref={slot} />
}

export default function MobilePortfolio() {
  return <PortfolioTemplate
    name="Riovic Matthew Susas"
    role="E-commerce Systems Analyst"
    bio="**I connect the moving parts of e-commerce.** From Shopify Plus to warehouse routing and automation, I turn complex operations into **clear, reliable systems.**"
    avatar="images/susas_profilepic.jpg"
    links={[
      { label: 'Gmail', icon: 'images/professional/gmail.svg', href: 'mailto:riovic.susas@gmail.com' },
      { label: 'LinkedIn', icon: 'images/professional/linkedin.svg', href: 'https://www.linkedin.com/in/riovicsusas' },
      { label: 'WhatsApp', icon: 'images/professional/whatsapp.svg', href: 'contact/' },
      { label: 'Upwork', icon: 'images/professional/upwork.svg', href: 'contact/' },
    ]}
    badges={badges} autoplay={0} dragHint={false}
    dailyDrivers={<MobileDailyDrivers />}
    sectionContent={<SectionCards layout='stack' />}
  />
}
