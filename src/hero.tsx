import { Component, Suspense, type ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import { HeroSection44 } from '../components/ui/shadcn-studio-hero-section-44'
import './hero.css'

class HeroBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() { return { failed: true } }
  render() {
    return this.state.failed ? <section className='hero-fallback'><h1>Riovic Matthew G. Susas</h1><p>E-Commerce Systems Analyst</p><nav aria-label='Explore portfolio'><a href='latest/'>Latest Updates</a><a href='projects/'>Projects</a><a href='about/'>About Me</a><a href='testimonials/'>Testimonials</a></nav></section> : this.props.children
  }
}
const mount = document.getElementById('heroRoot')
if (mount) createRoot(mount).render(
  <HeroBoundary><Suspense fallback={<div className='hero-loading'>Loading introduction…</div>}>
    <HeroSection44
      greetings={['Hello', 'Kumusta', 'Welcome']}
      name='Riovic'
      role='E-Commerce Systems Analyst'
      availabilityLabel='Technical operations · Systems & automation'
      description='I connect the moving parts of e-commerce. From Shopify Plus to warehouse routing and automation, I turn complex operations into clear, reliable systems.'
      profileImage='images/susas_profilepic.jpg'
      downloadAction={{ label: 'View résumé', href: 'RESUME-Riovic-Matthew-TechOps-Systems-Analyst.md' }}
      connectAction={{ label: 'Let’s connect', href: 'contact/' }}
      brandLogos={[]}
    />
  </Suspense></HeroBoundary>
)
