import { PortfolioTemplate, type PortfolioBadge } from '../components/ui/portfolio-hero'
import { Boxes, Braces, Headset, ShoppingBag, Table2, Truck, Workflow, Wrench, Zap } from 'lucide-react'
import { AnimatedHikeCard, type AnimatedHikeCardProps } from '../components/ui/card-25'
import './mobile-portfolio.css'

const badges: PortfolioBadge[] = [
  { label: 'SHOPIFY PLUS', bg: '#c6e795', border: '#b0ce81', color: '#213817' },
  { label: 'AUTOMATION' }, { label: '3PL LOGISTICS' }, { label: 'MATRIXIFY' },
  { label: 'SHOPIFY FLOW', bg: '#bba5ef', border: '#a68bde', color: '#271443' },
  { label: 'WAREHOUSE ROUTING' }, { label: 'SYSTEMS THINKING' },
  { label: 'CUSTOMER OPERATIONS' },
]
const previews = (folder: string) => [1, 2, 3].map(index => `images/section-previews/${folder}-${index}.jpg`)
const sections: AnimatedHikeCardProps[] = [
  {
    title: 'Latest Updates', href: 'latest/', images: previews('latest'),
    stats: [{ icon: <Zap />, label: 'Shopify Flow' }, { icon: <Boxes />, label: 'ShipBob' }, { icon: <Braces />, label: 'Admin API' }],
    description: 'An activity timeline covering order-state controls, fulfillment routing, catalog changes, and webhook diagnostics.',
  },
  {
    title: 'Projects', href: 'projects/', images: previews('projects'),
    stats: [{ icon: <ShoppingBag />, label: 'Shopify Plus' }, { icon: <Table2 />, label: 'Matrixify' }, { icon: <Workflow />, label: 'GraphQL' }],
    description: 'Case studies across six operational domains and a capstone investigation, from logistics and catalog governance to automation and support.',
  },
  {
    title: 'About Me', href: 'about/', images: previews('about'),
    stats: [{ icon: <ShoppingBag />, label: 'Shopify Plus' }, { icon: <Headset />, label: 'Gorgias' }, { icon: <Wrench />, label: 'DevTools' }],
    description: 'My engineering background, certifications, technical competencies, and résumé—with a closer look at how I approach e-commerce operations.',
  },
  {
    title: 'Testimonials', href: 'testimonials/', images: previews('testimonials'),
    stats: [{ icon: <Zap />, label: 'Shopify Flow' }, { icon: <Truck />, label: 'ShipBob' }, { icon: <Headset />, label: 'Gorgias' }],
    description: 'Client feedback on automation, margin protection, bulk catalog work, and frontline operations, presented in an interactive testimonial gallery.',
  },
]
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
    sectionContent={<nav className="mobile-section-cards" aria-label="Portfolio sections">
      {sections.map(section => <AnimatedHikeCard key={section.href} {...section} />)}
    </nav>}
  />
}
