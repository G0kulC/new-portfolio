# CLAUDE.md — AI Assistant Guide for new-portfolio

This file describes the codebase structure, conventions, and development workflows for AI assistants working on this repository.

---

## Project Overview

A modern React portfolio/agency website showcasing AI, automation, and web development services. Built with Vite and React 18, featuring smooth scroll interactions, GSAP animations, and a responsive design system.

**Owner:** Bogdan Kolomiyets
**Tech stack:** React 18, Vite 5, GSAP, Lenis, React Router v6
**No TypeScript** — the project uses `.jsx`/`.js` files only
**No testing framework** — no tests exist yet

---

## Repository Structure

```
new-portfolio/
├── index.html              # HTML entry point, meta tags, page title
├── vite.config.js          # Vite config: React plugin, .avif/.woff2/.mp4 asset support
├── package.json            # Scripts, dependencies
├── src/
│   ├── main.jsx            # React root, ReactDOM.createRoot
│   ├── App.jsx             # Router, Lenis smooth scroll, route config, loading screen
│   ├── components/
│   │   ├── Navbar.jsx      # Static + floating nav, full-screen overlay menu
│   │   ├── Footer.jsx      # Three-column footer with nav, socials, email CTA
│   │   ├── LoadingScreen.jsx   # First-visit animated counter 0→100%
│   │   └── LogoSVG.jsx     # SVG logo, accepts width/height/className props
│   ├── pages/
│   │   ├── HomePage.jsx        # Landing page: hero, projects, about, testimonials, FAQ, CTA
│   │   ├── PortfolioPage.jsx   # Grid of 5 portfolio projects
│   │   ├── ProjectDetailPage.jsx  # Dynamic /portfolio/:slug page
│   │   ├── ProcessPage.jsx     # 5-step process walkthrough
│   │   ├── AboutPage.jsx       # About, philosophy, polaroid images
│   │   └── ContactPage.jsx     # Contact form with success state
│   ├── hooks/
│   │   └── useScrollReveal.js  # IntersectionObserver → adds .in-view to .reveal elements
│   ├── styles/
│   │   └── global.css          # All styles (~1,600 lines), design tokens, component styles
│   └── assets/
│       ├── fonts/              # Lektorat (display) + PP Neue Montreal (body) — WOFF2
│       └── images/             # ~70 images: .avif (primary), .webp, .jpg, .mp4
```

---

## Development Workflow

### Commands

```bash
npm run dev       # Start Vite dev server (hot reload)
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
```

### Branch strategy

- Develop on feature branches prefixed with `claude/`
- Never commit directly to `main` or `master`
- Push with: `git push -u origin <branch-name>`

---

## Routing

Routes are defined in `src/App.jsx` using React Router v6 `<BrowserRouter>`:

| Path | Component |
|------|-----------|
| `/` | HomePage |
| `/portfolio` | PortfolioPage |
| `/portfolio/:slug` | ProjectDetailPage |
| `/process` | ProcessPage |
| `/about` | AboutPage |
| `/contact` | ContactPage |

Scroll-to-top on route change is handled in `App.jsx` via a `useEffect` that calls `lenis.scrollTo(0, { immediate: true })`.

---

## Design System

All design tokens live in `src/styles/global.css` as CSS custom properties.

### Colors

```css
--color-brand: #f05235          /* Primary orange-red */
--color-neutral-darker: #1b1a18 /* Near-black background */
--color-brand-lightest: #eae6dd /* Off-white / cream */
--color-brand-light: #ffd880    /* Warm yellow accent */
```

### Typography

Two custom fonts loaded via `@font-face` from `src/assets/fonts/`:

- **Lektorat** (`font-weight: 800`) — display headings, condensed style
- **PP Neue Montreal** (`font-weight: 400`) — body text, general UI
- **Palatino Linotype** — accent/serif use in select sections

Font sizes use responsive `clamp()` values (e.g., `--fs-h1`, `--fs-h2`, `--fs-body`).

### Spacing scale

`--sp-2xs` (0.5rem) → `--sp-2xl` (16rem)

### Utility classes

- `.reveal` — marks elements for scroll-based reveal (handled by `useScrollReveal`)
- `.reveal-delay-1`, `.reveal-delay-2`, `.reveal-delay-3` — staggered reveal delays
- `.in-view` — added by `useScrollReveal` when element enters viewport
- `.show-tablet`, `.hide-tablet` — responsive visibility helpers

---

## Animation Patterns

### GSAP (complex choreography)

Used for: menu open/close clip-path wipes, hero text stagger, loading screen counter, parallax on scroll.

```js
// Pattern: animate refs created with useRef
const ref = useRef(null);
gsap.to(ref.current, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.8, ease: 'power3.out' });
```

GSAP instances should be cleaned up in `useEffect` return functions to prevent leaks on unmount.

### Scroll reveal (IntersectionObserver)

Add `.reveal` class to any element. `useScrollReveal` (called once in `App.jsx` or per-page) observes all `.reveal` elements and adds `.in-view` when they cross the 0.12 threshold with a `-60px` bottom rootMargin.

CSS handles the actual visual transition via `.reveal` + `.in-view` class combinations in `global.css`.

### Lenis smooth scroll

Initialized in `App.jsx`. The `lenis` instance is attached to the global `window.lenis` for access elsewhere. Use `window.lenis.scrollTo(target)` when programmatic scrolling is needed.

### Loading screen

`LoadingScreen.jsx` fires a custom `appReady` DOM event when the counter reaches 100. Hero animations in `HomePage.jsx` listen for `appReady` before starting. Session storage key `loadingShown` prevents replay on return visits.

---

## Component Conventions

- **Functional components only** — no class components
- **Hooks:** `useState`, `useEffect`, `useRef`, `useCallback` from React
- **Data as constants:** Large data sets (projects, FAQs, testimonials) are defined as arrays/objects at the top of the file that uses them, not in separate data files
- **Image imports:** Use ES module static imports (`import imgSrc from '../assets/images/foo.avif'`)
- **No prop-types** — no runtime type checking is used

### Naming conventions

| Thing | Convention | Example |
|-------|-----------|---------|
| Components | PascalCase | `HomePage`, `Navbar` |
| Files | PascalCase for components | `HomePage.jsx` |
| CSS classes | kebab-case | `.nav-component`, `.btn-cta` |
| JS variables/hooks | camelCase | `menuOpen`, `useScrollReveal` |
| Data constants | SCREAMING_SNAKE_CASE | `PROJECTS`, `FAQS` |

---

## Key Files to Know

| File | Purpose |
|------|---------|
| `src/App.jsx` | Lenis init, route definitions, loading screen orchestration |
| `src/styles/global.css` | **All** styles — design tokens + every component style |
| `src/components/Navbar.jsx` | Most complex component — handles static, floating, and overlay nav states |
| `src/pages/HomePage.jsx` | Longest page — contains all homepage section data and animations |
| `src/pages/ProjectDetailPage.jsx` | Dynamic routing via `useParams`, gallery pairing logic |
| `src/hooks/useScrollReveal.js` | Shared scroll-reveal logic using IntersectionObserver |

---

## Styling Guidelines

- **All styles go in `global.css`** — there are no CSS modules or styled-components
- Add new component styles as clearly commented sections (e.g., `/* === COMPONENT NAME === */`)
- Use existing CSS variables for colors, spacing, and font sizes — do not hardcode values
- Prefer CSS transitions over GSAP for simple hover/state changes
- Use GSAP only for multi-step animations or those requiring precise timing control
- Responsive breakpoints are defined with standard `@media` queries; tablet breakpoint is ~768px

---

## Assets

- **Images:** Prefer `.avif` format for new images; `.webp` as fallback
- **Fonts:** Already loaded — do not add additional web fonts without good reason
- **Videos:** `.mp4` format, referenced as static imports via Vite
- Vite is configured to handle `.avif`, `.woff2`, and `.mp4` as assets in `vite.config.js`

---

## Common Gotchas

1. **Lenis + GSAP scroll conflict:** When using `gsap.to(window, { scrollTo: ... })`, use `window.lenis.scrollTo()` instead to avoid jank.
2. **Loading screen gate:** Hero animations depend on the `appReady` event. Any animation tied to page load must listen for this event if it's on the homepage.
3. **Project slugs:** `ProjectDetailPage` matches routes using the `slug` field on each project object in `PortfolioPage.jsx`. Adding a project requires adding the slug there.
4. **No test runner:** There is no Jest/Vitest setup. Manual testing in browser is the current approach.
5. **CSS-only file:** All styles are in one file. When editing, search for the relevant section comment before adding new styles to avoid duplication.
