import type { AnimatedHikeCardProps } from '../components/ui/card-25'
import content from './homepage-content.generated.json'

export const sections: AnimatedHikeCardProps[] = [
  { title: 'Latest Updates', href: 'latest/', images: content.latest, description: 'Recent project releases, operational improvements, and technical investigations from the activity timeline.' },
  { title: 'Projects', href: 'projects/', images: content.projects, description: 'Five domain studies and a Capstone on fulfillment, catalog governance, automation, and margin protection.' },
  { title: 'About Me', href: 'about/', images: [
    { src: 'images/susas_profilepic.jpg', alt: 'Riovic Matthew Susas' },
    { src: 'images/hero-cards/systems.svg', alt: 'Connected systems illustration' },
    { src: 'images/hero-cards/workspace.svg', alt: 'Technical workspace illustration' },
  ], description: 'My engineering background, certifications, technical approach, and résumé.' },
  { title: 'Evidence & Verification', href: 'evidence/', images: [
    { src: 'images/hero-cards/systems.svg', alt: 'Systems verification illustration' },
    { src: 'images/hero-cards/projects.svg', alt: 'Technical project illustration' },
    { src: 'images/hero-cards/project-update.svg', alt: 'Verification report illustration' },
  ], description: 'What the offline checks verify, what they model, and where live platform testing remains outstanding.' },
]
