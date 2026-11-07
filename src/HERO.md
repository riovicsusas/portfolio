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
