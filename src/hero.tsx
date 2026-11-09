import { Component, Suspense, lazy, useEffect, useState, type ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import { HeroSection44 } from '../components/ui/shadcn-studio-hero-section-44'
import GravityStars from '../components/ui/gravity-stars'
import './hero.css'
import './glowing-shadow.css'

class HeroBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() { return { failed: true } }
  render() {
    return this.state.failed ? <section className='hero-fallback'><h1>Riovic Matthew G. Susas</h1><p>E-Commerce Systems Analyst</p><nav aria-label='Explore portfolio'><a href='latest/'>Latest Updates</a><a href='projects/'>Projects</a><a href='about/'>About Me</a><a href='testimonials/'>Testimonials</a></nav></section> : this.props.children
  }
}
const MobilePortfolio = lazy(() => import('./mobile-portfolio'))
function useMobileLayout() {
  const [mobile, setMobile] = useState(() => window.matchMedia('(max-width: 767px)').matches)
  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)')
    const update = () => setMobile(media.matches)
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])
  return mobile
}
function ResponsiveHomepage() {
  const mobile = useMobileLayout()
  return mobile ? <MobilePortfolio /> : <HeroSection44
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
}
const mount = document.getElementById('heroRoot')
if (mount) createRoot(mount).render(
  <HeroBoundary><Suspense fallback={<div className='hero-loading'>Loading introduction…</div>}>
    <ResponsiveHomepage />
  </Suspense></HeroBoundary>
)

function ResponsiveStars() {
  const mobile = useMobileLayout()
  return <GravityStars className='homepage-stars' color='var(--text)' count={mobile ? 120 : 180} connectDistance={110} tint={0.5} starSize={1.4} speed={0.5} gravity={0.8} />
}
const starsMount = document.getElementById('starsRoot')
if (starsMount) createRoot(starsMount).render(
  <ResponsiveStars />
)
