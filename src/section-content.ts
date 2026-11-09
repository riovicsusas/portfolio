import type { AnimatedHikeCardProps } from '../components/ui/card-25'
import content from './homepage-content.generated.json'

export const sections: AnimatedHikeCardProps[] = [
  { title: 'Latest Updates', href: 'latest/', images: content.latest, description: 'Recent project releases, operational improvements, and technical investigations from the activity timeline.' },
  { title: 'Projects', href: 'projects/', images: content.projects, description: 'Six operational domains and a capstone investigation, covering fulfillment, catalog governance, automation, and support.' },
  { title: 'About Me', href: 'about/', images: [
    { src: 'images/susas_profilepic.jpg', alt: 'Riovic Matthew Susas' },
    { src: 'images/hero-cards/systems.svg', alt: 'Connected systems illustration' },
    { src: 'images/hero-cards/workspace.svg', alt: 'Technical workspace illustration' },
  ], description: 'My engineering background, certifications, technical approach, and résumé.' },
  { title: 'Testimonials', href: 'testimonials/', images: content.testimonials, description: 'Client perspectives on automation, margin protection, catalog work, and frontline operations.' },
]
