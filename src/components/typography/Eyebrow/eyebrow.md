# Shared Typography System + Eyebrow Primitive

Build a reusable typography variant system where components consume shared semantic variants, tokens are centrally typed and reusable, primitives stay thin and compositional, and Astro components stay simple.

---

## Structure

```text
src/
├── components/
│   └── ui/
│       └── eyebrow/
│           ├── Eyebrow.astro
│           └── eyebrow.css
├── styles/
│   └── typography/
│       ├── typography.types.ts
│       ├── typography.ts
│       └── typography.css
```

---

## `typography.types.ts`

```ts
/** Semantic text sizes. */
export type TextSize = "micro" | "xs" | "sm" | "md" | "lg";

/** Semantic text tones. */
export type TextTone = "default" | "muted" | "subtle" | "accent" | "inverse";

/** Semantic text weights. */
export type TextWeight = "regular" | "medium" | "semibold" | "bold";
```

---

## `typography.ts`

```ts
import type { TextSize, TextTone, TextWeight } from "./typography.types";

/** Maps semantic size variants to CSS utility classes. */
export const TEXT_SIZE_CLASSES: Record<TextSize, string> = {
  micro: "text-size--micro",
  xs:    "text-size--xs",
  sm:    "text-size--sm",
  md:    "text-size--md",
  lg:    "text-size--lg",
};

/** Maps semantic tone variants to CSS utility classes. */
export const TEXT_TONE_CLASSES: Record<TextTone, string> = {
  default: "text-tone--default",
  muted:   "text-tone--muted",
  subtle:  "text-tone--subtle",
  accent:  "text-tone--accent",
  inverse: "text-tone--inverse",
};

/** Maps semantic weight variants to CSS utility classes. */
export const TEXT_WEIGHT_CLASSES: Record<TextWeight, string> = {
  regular:  "text-weight--regular",
  medium:   "text-weight--medium",
  semibold: "text-weight--semibold",
  bold:     "text-weight--bold",
};
```

---

## `typography.css`

```css
/* Sizes */
.text-size--micro { font-size: var(--font-size-micro); }
.text-size--xs    { font-size: var(--font-size-xs); }
.text-size--sm    { font-size: var(--font-size-sm); }
.text-size--md    { font-size: var(--font-size-md); }
.text-size--lg    { font-size: var(--font-size-lg); }

/* Tones */
.text-tone--default { color: var(--text-primary); }
.text-tone--muted   { color: var(--text-muted); }
.text-tone--subtle  { color: var(--text-subtle); }
.text-tone--accent  { color: var(--text-accent); }
.text-tone--inverse { color: var(--text-inverse); }

/* Weights */
.text-weight--regular  { font-weight: 400; }
.text-weight--medium   { font-weight: 500; }
.text-weight--semibold { font-weight: 600; }
.text-weight--bold     { font-weight: 700; }
```

> Import `typography.css` once in your layout or `global.css` — not per component. Astro deduplicates at build time, but the mental model stays cleaner when it's treated as a global sheet.

---

## `Eyebrow.astro`

```astro
---
/**
 * Small uppercase section label.
 * Composes shared typography variants; only owns its own structural styles.
 */

import "./eyebrow.css";

import {
  TEXT_SIZE_CLASSES,
  TEXT_TONE_CLASSES,
  TEXT_WEIGHT_CLASSES,
} from "../../../styles/typography/typography";

import type { TextSize, TextTone, TextWeight } from "../../../styles/typography/typography.types";

interface Props {
  /** HTML tag to render. Defaults to `p`. */
  as?: keyof HTMLElementTagNameMap;
  size?: TextSize;
  tone?: TextTone;
  weight?: TextWeight;
}

const {
  as: Tag = "p",
  size   = "micro",
  tone   = "muted",
  weight = "bold",
} = Astro.props satisfies Props;

const classes = [
  "eyebrow",
  TEXT_SIZE_CLASSES[size],
  TEXT_TONE_CLASSES[tone],
  TEXT_WEIGHT_CLASSES[weight],
].join(" ");
---

<Tag class={classes}>
  <slot />
</Tag>
```

---

## `eyebrow.css`

```css
.eyebrow {
  display: inline-block;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  line-height: 1.1;
}
```

---

## Design Principle

The shared system defines **what variants mean**. Components decide **how to use them**.

```
✓  muted · accent · micro · semibold
✗  heroEyebrow · cardEyebrow · footerMetadata
```

Semantic names age well. Component-specific names don't.

---

## Consuming the System

Any future component imports the same three maps and types — no redefinition needed:

```ts
import { TEXT_SIZE_CLASSES, TEXT_TONE_CLASSES, TEXT_WEIGHT_CLASSES } from "@/styles/typography/typography";
import type { TextSize, TextTone, TextWeight } from "@/styles/typography/typography.types";
```

Candidates: `Label`, `Caption`, `MetaText`, `Kicker`, `Badge`, `Overline`, `QuoteAttribution`, `CardMetadata`.