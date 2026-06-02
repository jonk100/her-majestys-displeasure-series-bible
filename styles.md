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
/** Semantic text sizes (fluid / clamped)
 * used for fluid-width text, like headlines and body copy.
 */
export type TextSize = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

/** Semantic text sizes (fixed)
 * used for small UI pices like labels, icons, etc.
 */
export type TextSizeFixed = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

/** Semantic text weights. */
export type TextWeight = "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";

/** Semantic leading (line heights) and tracking (letter spacing) */
export type TextLeading = "none" | "tightest" | "tighter" | "tight" | "normal" | "loose" | "looser" | "loosest";
export type TextTracking = "tightest" | "tighter" | "tight" | "normal" | "wide" | "wider" | "widest";

/** Semantic text tones. */
export type TextTone = "default"  | "muted"  | "subtle"  | "inverse"  | "accent"  | "blue"  | "green"  | "red"  | "amber"  | "orange"  | "neutral";
```

---

## `typography.ts`

```ts
import type { TextSize, TextSizeFixed, TextTone, TextWeight, TextLeading, TextTracking } from "./typography.types.ts";

/** Maps semantic fluid size variants to CSS utility classes. */
export const TEXT_SIZE_CLASSES: Record<TextSize, string> = {
  xxs: "text-size--xxs",
  xs:  "text-size--xs",
  sm:  "text-size--sm",
  md:  "text-size--md",
  lg:  "text-size--lg",
  xl:  "text-size--xl",
  xxl: "text-size--xxl",
};

/** Maps semantic fixed size variants to CSS utility classes. */
export const TEXT_SIZE_FIXED_CLASSES: Record<TextSizeFixed, string> = {
  xxs: "text-size-fixed--xxs",
  xs:  "text-size-fixed--xs",
  sm:  "text-size-fixed--sm",
  md:  "text-size-fixed--md",
  lg:  "text-size-fixed--lg",
  xl:  "text-size-fixed--xl",
  xxl: "text-size-fixed--xxl",
};

/** Maps semantic tone variants to CSS utility classes. */
export const TEXT_TONE_CLASSES: Record<TextTone, string> = {
  default: "text-tone--default",
  muted:   "text-tone--muted",
  subtle:  "text-tone--subtle",
  inverse: "text-tone--inverse",
  accent:  "text-tone--accent",
  blue:    "text-tone--blue",
  green:   "text-tone--green",
  red:     "text-tone--red",
  amber:   "text-tone--amber",
  orange:  "text-tone--orange",
  neutral: "text-tone--neutral",
};

/** Maps numeric weight variants to CSS utility classes. */
export const TEXT_WEIGHT_CLASSES: Record<TextWeight, string> = {
  "100": "text-weight--100",
  "200": "text-weight--200",
  "300": "text-weight--300",
  "400": "text-weight--400",
  "500": "text-weight--500",
  "600": "text-weight--600",
  "700": "text-weight--700",
  "800": "text-weight--800",
  "900": "text-weight--900",
};

/** Maps line-height (leading) variants to CSS utility classes. */
export const TEXT_LEADING_CLASSES: Record<TextLeading, string> = {
  none:   "text-leading--none",
  tightest: "text-leading--tightest",
  tighter: "text-leading--tighter",
  tight:  "text-leading--tight",
  normal: "text-leading--normal",
  loose:  "text-leading--loose",
  looser: "text-leading--looser",
  loosest: "text-leading--loosest",
};

/** Maps letter-spacing (tracking) variants to CSS utility classes. */
export const TEXT_TRACKING_CLASSES: Record<TextTracking, string> = {
  tightest: "text-tracking--tightest",
  tighter: "text-tracking--tighter",
  tight:   "text-tracking--tight",
  normal:  "text-tracking--normal",
  wide:    "text-tracking--wide",
  wider:   "text-tracking--wider",
  widest:  "text-tracking--widest",
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