import { readFileSync, writeFileSync } from 'node:fs'
import { runInNewContext } from 'node:vm'
const projects = runInNewContext(readFileSync('js/flagship-data.js', 'utf8') + '\nFLAGSHIP_PROJECTS')
const updates = runInNewContext(readFileSync('js/feed-data.js', 'utf8') + '\nLATEST_UPDATES')
// Follow the update feed's project ordering, then fill any remaining slots
// from the existing catalogue. No publication dates are invented.
const recentIds = [...new Set(updates.map(update => update.projectId).filter(Boolean))]
const ordered = [...recentIds.map(id => projects.find(project => project.id === id)).filter(Boolean), ...projects]
const recent = [...new Map(ordered.map(project => [project.id, project])).values()].slice(0, 3)
const portraits = [...readFileSync('testimonials/index.html', 'utf8').matchAll(/<img src="([^"]+)" alt="([^"]+)"/g)].slice(0, 3)
writeFileSync('src/homepage-content.generated.json', JSON.stringify({
  latest: updates.slice(0, 3).map(update => {
    const project = projects.find(project => project.id === update.projectId)
    return {
      src: update.image || update.thumbnail || project?.image || 'images/hero-cards/project-update.svg',
      alt: update.title,
      fallback: 'images/hero-cards/project-update.svg',
    }
  }),
  projects: recent.map(project => ({ src: project.image, alt: project.title, fallback: 'images/hero-cards/projects.svg' })),
  testimonials: portraits.map(([, src, alt]) => ({ src, alt, fallback: 'images/hero-cards/feedback.svg' })),
}, null, 2) + '\n')
