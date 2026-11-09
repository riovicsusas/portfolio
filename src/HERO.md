# Homepage hero

The static homepage mounts a React island from `src/hero.tsx`. The supplied 21st.dev Hero Section 44 implementation lives in `components/ui/shadcn-studio-hero-section-44.tsx`; its desktop-only Three.js/Rapier lanyard is loaded separately from `hero-lanyard.tsx`. Component source: https://21st.dev/@clevision/components/shadcn-studio-hero-section-44 (user-supplied export). The lanyard design is adapted from the React Bits example, as noted in the original component.

Run from the repository root with Node 24:

```sh
npm ci --cache /tmp/portfolio-npm-cache
npm run typecheck
npm run build
python3 -m http.server 8000 --bind 127.0.0.1
```

Vite builds TypeScript/React and Tailwind utilities into `assets/hero/`. Keep those generated files with source changes: the existing GitHub Pages workflow publishes static files without a build step. No React migration of the other pages is required. Tailwind preflight is omitted to preserve the existing site styles. Dependencies are pinned in `package-lock.json`.

The card uses the existing local profile image and a local clip texture. It is omitted on small screens and when reduced motion is requested; WebGL failure falls back to a static portrait. The greeting also respects reduced motion. The existing Daily Drivers script renders only tools with image logos, hides duplicate logos from assistive technology, and retains the standard labeled strip on other pages. Its motion pauses on hover and stops under reduced motion.

## Gravity Stars background

`components/ui/gravity-stars.tsx` adapts the user-supplied component from https://21st.dev/@educalvolpz/components/gravity-stars. It mounts into the decorative, fixed `starsRoot` separately from the hero. Document pointer listeners let the stars respond behind links and the draggable card without intercepting clicks or touch scrolling. The canvas scales its particle count on mobile, follows the site's theme, freezes for reduced motion, and suspends animation in hidden tabs. The demo heading is intentionally omitted. The former radial gallery, its scroll instruction, and homepage GSAP scripts are removed.

## Glowing borders and tool labels

`components/ui/glowing-shadow.tsx` adapts the supplied Designali component (https://21st.dev/@designali-in/components/glowing-shadow) to semantic links, with shared scoped styles in `src/glowing-shadow.css`. Static professional-channel links and native logo buttons use the same CSS. Animated radial border color and a hover/focus halo preserve readable button surfaces. Tool buttons reveal their names on hover/focus, toggle the reveal on touch/click, and clear it with Escape. The marquee pauses during interaction; duplicate buttons stay out of the keyboard and accessibility sequence. Reduced-motion mode uses static borders.

## Distinct mobile homepage

Below 768px, `src/hero.tsx` uses `matchMedia` to mount the lazy-loaded `src/mobile-portfolio.tsx` instead of the desktop hero. It responds to resizing without User-Agent sniffing. The mobile layout adapts the user-supplied https://21st.dev/@romanvasnev/components/portfolio-hero component, stored in `components/ui/portfolio-hero.tsx`, with Matter.js skill badges, a profile/bio, contact CTA, professional links, vertically stacked section cards. `src/mobile-portfolio.css` scopes its layout to avoid legacy resets. Mobile is intentionally a scrollable composition. The existing logo strip follows it; the separate desktop link rail is hidden on mobile. The shared galaxy remains behind both layouts, with fewer stars on mobile. Mobile links, CTA, cards, and carousel arrow controls use the same glowing border styles as desktop.

Reduced motion renders static badges instead of starting the physics engine. The four section cards use stacked page previews and technical-stack metadata. Local cover art uses Lucide icons rather than external stock images. Gmail and LinkedIn retain their destinations; WhatsApp and Upwork use Contact until direct profile details are supplied. Run `npm ci`, `npm run typecheck`, and `npm run build` after component edits; retain the complete regenerated `assets/hero/` directory for static Pages deployment.


## Mobile section cards

`components/ui/card-25.tsx` adapts the supplied https://21st.dev/@ravikatiyar162/components/card-25 reference. All four cards link to existing sections and are vertically stacked at the mobile content width. Page screenshots in `images/section-previews/` supply local preview imagery; regenerate them after destination-page design changes. Metadata contains relevant tools instead of hiking statistics. Hover, keyboard focus, and touch press fan out the images; reduced motion removes the transition. The previous mobile quick-link grid and horizontal carousel are no longer mounted.


## Shared section cards and contact-only glow

`src/section-content.ts` defines the shared folder overviews and imagery. `src/section-cards.tsx` renders a vertical mobile list or a desktop carousel with two full cards per view, arrow controls, keyboard navigation, and mouse dragging. Card metadata no longer includes technical-stack labels. The desktop cards replace its former four navigation buttons. Short desktop windows allow scrolling so the expanded content stays accessible.

`npm run build` first runs `scripts/generate-homepage-data.mjs`, which refreshes `src/homepage-content.generated.json` from the existing project catalogue, update feed, and testimonial HTML. Project thumbnails follow the feed's project order (deduplicated, first three), then catalogue order as a fallback. Testimonial portraits reuse the first three existing testimonial image URLs. Failed external image loads receive local illustrative placeholders. About uses the profile photo and local artwork; Latest Updates uses the first three feed entries’ own images, or their linked project thumbnails when no update-specific image is provided. Only `.connect-glow` retains animated glow; other homepage controls retain visible static borders and focus outlines.
