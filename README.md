# Her Majesty's Displeasure — Series Bible & Pitch Deck

A darkly satirical limited series pitch: **What if Prince Philip quietly unleashed MI5 on The Beatles?**

This repository contains the complete **series bible** and **pitch deck** — a data-driven, component-based website built with [Astro](https://astro.build). It's a living document that visualises the project's premise, tone, structural pillars, character breakdowns, and episode arc, all designed to be sent to producers, agents, and collaborators.

---

## The Series

| | |
|---|---|
| **Logline** | When The Beatles are awarded MBEs in 1965, Prince Philip responds not with pride — but by quietly unleashing MI5 to rein them in. Two hapless intelligence officers. Five years. One farcical conspiracy. The ultimate cosmic joke. |
| **Period** | 1965 – 1970 |
| **Genre** | Dark Political Satire |
| **Format** | Limited Series · 6 Episodes |

### Synopsis

A petty grievance at Buckingham Palace triggers a five-year covert operation. What begins as an aristocrat's wounded pride metastasises — through layers of bureaucracy, delusion, and incompetence — into a conspiracy that threatens to reshape history. It fails, spectacularly, because history cannot be managed. Art cannot be neutralised. And the universe is indifferent to the schemes of small men.

The series tracks the *miserable symmetry* of power: the rigid machinery of the state attempting to crush the chaotic influence of art, only to find itself utterly transformed — and humiliated — by the encounter.

### Tonal Comps

- **Patriot** (Steven Conrad) — bureaucratic melancholy, deadpan intelligence work
- **The Death of Stalin** (Iannucci) — institutional satire at its sharpest
- **The Royal Tenenbaums** (Anderson) — dysfunctional icon families, visual precision
- **Better Call Saul** (Gilligan) — procedural blindness, accumulating harm

---

### Pitch Deck Navigation

Every pitch deck page includes a `<PitchDeckNav>` component that shows page number (`X / 7`) and links to the previous/next page in the deck order:

| # | Page | Route |
|---|---|---|
| 1 | Cover | `/pitchdeck` |
| 2 | The Hook & Logline | `/pitchhook` |
| 3 | The World & Setting | `/world` |
| 4 | The Operatives — MI5 | `/mi5` |
| 5 | The Establishment | `/establishment` |
| 6 | The Central Collision | `/collision` |
| 7 | The Supporting Cast | `/supporting-cast` |

A `<CTA>` component is available in `src/components/ui/CTA.astro` for consistent call-to-action buttons (primary, outline, mono variants) throughout the site.

---

### Pitch Deck Navigation

Every pitch deck page includes a `<PitchDeckNav>` component that shows page number (`X / 7`) and links to the previous/next page in the deck order:

| # | Page | Route |
|---|---|---|
| 1 | Cover | `/pitchdeck` |
| 2 | The Hook & Logline | `/pitchhook` |
| 3 | The World & Setting | `/world` |
| 4 | The Operatives — MI5 | `/mi5` |
| 5 | The Establishment | `/establishment` |
| 6 | The Central Collision | `/collision` |
| 7 | The Supporting Cast | `/supporting-cast` |

A `<CTA>` component is available in `src/components/ui/CTA.astro` for consistent call-to-action buttons (primary, outline, mono variants) throughout the site.

---

### Pitch Deck Navigation

Every pitch deck page includes a `<PitchDeckNav>` component that shows page number (`X / 7`) and links to the previous/next page in the deck order:

| # | Page | Route |
|---|---|---|
| 1 | Cover | `/pitchdeck` |
| 2 | The Hook & Logline | `/pitchhook` |
| 3 | The World & Setting | `/world` |
| 4 | The Operatives — MI5 | `/mi5` |
| 5 | The Establishment | `/establishment` |
| 6 | The Central Collision | `/collision` |
| 7 | The Supporting Cast | `/supporting-cast` |

A `<CTA>` component is available in `src/components/ui/CTA.astro` for consistent call-to-action buttons (primary, outline, mono variants) throughout the site.

---

## Project Structure

```
/
├── context/               # Narrative source documents (premise, outlines, research)
├── public/                # Static assets — images, character portraits, pitch art
├── src/
│   ├── components/
│   │   ├── characters/    # Cast grid, character cards, agent profiles
│   │   ├── episodes/      # Episode timeline, tension bar, episode cards
│   │   ├── hero/          # Title hero, logline, meta display
│   │   ├── layout/        # Page layout, container, footer
│   │   ├── pillars/       # Thematic pillars (Power vs. Art, Bureaucracy, Celebrity)
│   │   ├── tone/          # Visual tone panels (cold royal / warm Beatles)
│   │   ├── typography/    # Heading, section heading, eyebrow, prose
│   │   └── ui/            # Primitives — Stack, Grid, Surface, Tag, ClassifiedBand, CompStrip
│   ├── data/              # All series data flows from a single source
│   ├── layouts/           # Astro layout and head components
│   ├── pages/             # Route pages (index.astro)
│   ├── styles/            # Global CSS, tokens, reset, utilities, typography
│   ├── types/             # TypeScript interfaces (character, episode, pillar, tone)
│   └── utils/             # Formatting helpers, classname utilities
├── astro.config.mjs       # Astro configuration
├── package.json
├── tsconfig.json
└── README.md
```

### Architecture Notes

- **Single source of truth** — all narrative data lives in `src/data/her-majestys-displeasure.ts` and flows into modular components.
- **Component primitives** — layout and UI primitives (`Stack`, `Grid`, `Surface`, `Tag`) keep the design systematic and the codebase composable.
- **Type-driven** — every data shape has a corresponding TypeScript interface in `src/types/`.
- **Satirical design language** — the visual palette mirrors the series' tone: cold symmetry for the royal/MI5 world, warm organic chaos for The Beatles' world.

---

## Commands

All commands run from the project root:

| Command | Action |
|---|---|
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start local dev server at `localhost:4321` |
| `pnpm build` | Build production site to `./dist/` |
| `pnpm preview` | Preview production build locally |

---

## Context Documents

The `context/` directory contains the source narrative documents that feed into the pitch deck:

- `01-Premise.md` — Full premise, loglines, tone, visual language, central dramatic question
- `prince-philip.md` — Philip character profile (motivations, arc, psychological profile)
- `queen-elizabeth.md` — Queen Elizabeth character profile
- `john-lennon.md` — John Lennon character profile
- `lord-mountbatten.md` — Mountbatten character profile
- `lennon-jesus-quote-and-context.md` — Research on the "more popular than Jesus" controversy
- `lennon-kenwood-era.md` — John's domestic life at Kenwood
- `lennon-key-influential-characters.md` — Key figures who shaped Lennon
- `lennon-quotes.md` — Compiled Lennon quotations for dialogue reference
- `queen-influential-prior-monarchs.md` — How prior monarchs shaped QEII
- `queen-quotes.md` — Compiled Queen Elizabeth quotations

### Character Detail Pages

Clicking character cards on the index page navigates to dedicated personnel-file pages:

| Route | Characters |
|---|---|
| `/pitchhook` | Pitch deck page — logline, hook, "Why Now?" thesis, Philip quote |
| `/world` | The setting & visual architecture — two Londons, 1965–1970 timeline |
| `/mi5` | Nigel Finch, Clive Barrow — MI5 operatives as classified personnel records |
| `/establishment` | Prince Philip, Lord Mountbatten — Crown executive briefing |
| `/collision` | John Lennon vs. Queen Elizabeth II — the central absurd ideological showdown |
| `/supporting-cast` | Paul McCartney, George Harrison, Brian Epstein, Ringo Starr — the collateral |

---

## License

This project is a creative work. All rights reserved.