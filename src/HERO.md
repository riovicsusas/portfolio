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
