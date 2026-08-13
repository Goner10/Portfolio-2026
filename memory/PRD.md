# PRD — Portfolio Gonzalo Martí Peirats

## Problem statement (original)
Premium personal portfolio website for Spanish web developer Gonzalo Martí Peirats. Editorial, elegant, non-generic design. Bilingual ES/EN with persistent switcher. Sections: Hero (illustrated portrait), About, 4 real client projects, Skills, Process, CV download, Contact, Footer. Frontend-only (no backend), no contact form (direct links only), default language Spanish.

## User choices
- Assets provided via ZIP upload (portrait, project screenshots, phone mockups, CV PDF)
- Contact: direct elegant links only (email, GitHub, LinkedIn) — no backend/form
- Default language: Spanish
- 21st.dev references: minimalist-hero (3-column editorial hero, portrait + circle) and cinematic-footer (giant background text, back-to-top)

## Architecture
- Frontend-only: React 18 + Vite 5 at /app/frontend (supervisor `yarn start`, port 3000). Backend intentionally absent (supervisor backend FATAL is expected).
- Structure: src/components (Navbar, Footer, Reveal), src/sections (Hero, About, Projects, Skills, Process, CVSection, Contact), src/data/projects.js, src/i18n (LanguageContext + translations), src/styles (tokens.css, sections.css)
- Assets at /app/frontend/public/assets (portrait, projects, cv). Desktop screenshots cropped from browser-chrome originals + compressed to JPEG via PIL.
- i18n: React context, localStorage key `gmp-lang`, default `es`.

## Design system
- Fonts: Fraunces (display serif), Instrument Sans (body), Spline Sans Mono (meta/labels)
- Palette: ivory #F7F3EC / #EFE9DD, ink #22201C, muted blue #2F4C63, sage #7C8B72, sand #C8A96E, dark footer/skills #1B1916
- Motion: framer-motion entrance + whileInView reveals, subtle hero parallax, prefers-reduced-motion respected

## Implemented (June 2026)
- [x] Hero: editorial split — giant serif name (italic blue second line), role, tagline, 3 CTAs, portrait over sage circle w/ parallax, availability badge, socials + coords strip
- [x] About: lead paragraph, facts list (dl), "Lo que aporto" 3-card grid
- [x] Projects: 4 alternating art-directed cases (browser frame + floating phone mockup + outlined index numeral), brief/solution, tech chips, visit + repo links (all 4 real clients: Glops i Llandes 2024, La Divina Comedia 2025, Seguros Redondo 2026, SaniTattoo 2026)
- [x] Skills: dark section, 4 capability groups + tech pills + soft skills
- [x] Process: 5 numbered editorial steps
- [x] CV: card with PDF download (/assets/cv/Gonzalo-Marti-CV-2026.pdf)
- [x] Contact: giant italic "Hablemos.", mailto link, GitHub/LinkedIn rows
- [x] Footer: dark, giant GONZALO background text, back-to-top, links, lang switch, copyright
- [x] Bilingual ES/EN complete, persisted; responsive incl. mobile burger menu
- [x] Testing agent iteration_1: 100% pass, no issues

## Backlog / next
- P1: Project detail modal/pages using remaining screenshots (carta, contacto, tablet shots per project)
- P2: OG/social meta images, sitemap, favicon refinement
- P2: Light scroll-progress or section transitions polish
- P2: Deployment (static build)
