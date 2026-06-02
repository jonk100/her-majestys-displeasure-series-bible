/**
 * gv.ts — Global Variants
 * src/components/gv.ts
 *
 * A single source of truth for prop-to-CSS-token mappings shared across
 * all components in the project. Import only what you need.
 *
 * Usage:
 *   import { fontSize, spacing, bgColor } from "@/components/gv";
 *
 * CSS custom property pattern:
 *   Any of these values can also be passed directly via style="--my-var: ..."
 *   on the parent element, and consumed with var(--my-var, fallback) in CSS.
 */

// ─── TYPOGRAPHY ───────────────────────────────────────────────────────────────

/**
 * Clamped font size scale for responsive text.
 * Maps to --fs0 through --fs16 tokens (clamp() values).
 *
 * Use for: headings, body copy, quotes, descriptions —
 * anything that should scale fluidly with the viewport.
 *
 * @example
 * fontSize["sm"]  // "var(--fs2)"  — clamped ~0.75–0.9rem
 * fontSize["xl"]  // "var(--fs7)"  — clamped ~1.5–2.25rem
 */
export const fontSize = {
  "2xs": "var(--fsxxs)",  // clamped ~0.6–0.875rem
  xs:    "var(--fsxs)",  // clamped ~0.7–0.875rem
  sm:    "var(--fssm)",  // clamped ~0.75–0.9rem
  md:    "var(--fsmd)",  // clamped ~0.875–1.125rem
  lg:    "var(--fslg)",  // clamped ~1.125–1.5rem
  xl:    "var(--fsxl)",  // clamped ~1.5–2.25rem
  "2xl": "var(--fsxxl)",  // clamped ~2–2.75rem
  "3xl": "var(--fsxxxl)", // clamped ~3–3.875rem
  "4xl": "var(--fsxxxxl)", // clamped ~4–5.25rem
} as const satisfies Record<string, string>;

export type FontSize = keyof typeof fontSize;

/**
 * Fixed (non-clamped) font size scale for UI chrome.
 * Maps to literal rem values that sit at or near the low end of the
 * corresponding clamped token — so they feel consistent at small sizes
 * but won't grow unexpectedly on wide viewports.
 *
 * Use for: stamps, labels, badges, captions, photo labels, mono tags —
 * anything that should stay crisp and compact regardless of viewport.
 *
 * Correspondence to clamped scale (approximate):
 *   "3xs" ≈ fs-xxs floor  (0.55rem)
 *   "2xs" ≈ fs-xxs floor  (0.625rem)
 *   "xs"  ≈ fs-xs floor   (0.675rem)
 *   "sm"  ≈ fs-sm floor   (0.725rem)
 *   "md"  ≈ fs2 low end   (0.75rem)
 *   "lg"  ≈ fs3 low end   (0.875rem)
 *   "xl"  ≈ fs4 low end   (1rem)
 *   "2xl" ≈ fs5 low end   (1.125rem)
 *   "3xl" ≈ fs6 low end   (1.25rem)
 *
 * @example
 * fixedSize["2xs"] // "0.625rem" — stamp text, photo labels
 * fixedSize["md"]  // "0.75rem"  — section labels, badges
 * fixedSize["lg"]  // "0.875rem" — larger UI labels
 */
export const fixedSize = {
  "3xs": "var(--fs-xxxs)",   // ~ 0.550rem — stamps, classified tags
  "2xs": "var(--fs-xxs)",    // ≈ 0.625rem — photo labels, mono captions
  xs:    "var(--fs-xs)",     // ≈ 0.675rem — threat band text
  sm:    "var(--fs-sm)",     // ≈ 0.725rem — ribbon text, small badges
  md:    "var(--fs-md)",     // ≈ 0.750rem — section labels, eyebrows  
  lg:    "var(--fs-lg)",     // ≈ 0.875rem — larger labels, agent list
  xl:    "var(--fs-xl)",     // ≈ 1.000rem — prominent UI labels
  "2xl": "var(--fs-xxl)",    // ≈ 1.125rem — large fixed headings
  "3xl": "var(--fs-xxxl)",   // ≈ 1.250rem — display UI elements
} as const satisfies Record<string, string>;

export type FixedSize = keyof typeof fixedSize;

/**
 * Font family tokens.
 */
export const fontFamily = {
  serif: "var(--font-serif)",
  sans:  "var(--font-sans)",
  mono:  "var(--font-mono)",
} as const satisfies Record<string, string>;

export type FontFamily = keyof typeof fontFamily;

// ─── SPACING ─────────────────────────────────────────────────────────────────

/**
 * Spacing scale mapped to semantic size names.
 * Maps to the --space-* tokens in global.css.
 *
 * @example
 * spacing["sm"] // "var(--space-2)"
 * spacing["xl"] // "var(--space-7)"
 */
export const spacing = {
  "2xs": "var(--space-1)",
  xs:    "var(--space-2)",
  sm:    "var(--space-3)",
  md:    "var(--space-4)",
  lg:    "var(--space-5)",
  xl:    "var(--space-6)",
  "2xl": "var(--space-7)",
  "3xl": "var(--space-8)",
} as const satisfies Record<string, string>;

export type Spacing = keyof typeof spacing;

// ─── COLORS ───────────────────────────────────────────────────────────────────

/**
 * Named accent colours used across cards, badges, labels, and borders.
 * These are the two primary accent families in the project.
 *
 * @example
 * accentColor["blue"]  // "var(--accent-blue)"
 * accentColor["amber"] // "var(--color-amber)"
 */
export const accentColor = {
  blue:  "var(--accent-blue)",
  amber: "var(--color-amber)",
  red:   "var(--color-red)",
  muted: "var(--text-muted)",
  green: "var(--text-accent)",
} as const satisfies Record<string, string>;

export type AccentColor = keyof typeof accentColor;

/**
 * Background surface colors, from darkest to lightest.
 * Maps to the --bg* tokens.
 *
 * @example
 * bgColor["base"] // "var(--bg)"
 * bgColor["3"]    // "var(--bg3)"
 */
export const bgColor = {
  base: "var(--bg)",
  "0":  "var(--bg)",
  "1":  "var(--bg1)",
  "2":  "var(--bg2)",
  "3":  "var(--bg3)",
  "red":  "var(--bgred)",
  "orange":  "var(--bgorange)",
  "amber":  "var(--bgamber)",
  "gray":  "var(--bggray)",
  "sage":  "var(--bgsage)",
  "green":  "var(--bggreen)",
} as const satisfies Record<string, string>;

export type BgColor = keyof typeof bgColor;

export const fontColor = {
  "base":   "var(--fc)",
  "0":    "var(--fc)",
  "1":    "var(--fc1)",
  "2":    "var(--fc2)",
  "3":    "var(--fc3)",
  "green":    "var(--fcgreen)",
  "blue":    "var(--fcblue)",
  "red":    "var(--fcred)",
  "orange":    "var(--fcorange)",
  "amber":    "var(--fcamber)",
  "sage":    "var(--fcsage)",
  "zinc":    "var(--fczinc)",
  "muted":    "var(--fcmuted)",
} as const satisfies Record<string, string>;

export type FontColor = keyof typeof fontColor;

/**
 * Text color scale, from brightest to most muted.
 *
 * @example
 * textColor["1"]     // "var(--text1)"
 * textColor["muted"] // "var(--text-muted)"
 */
export const textColor = {
  base:   "var(--text)",
  "1":    "var(--text1)",
  "2":    "var(--text2)",
  "3":    "var(--text3)",
  "4":    "var(--text4)",
  "5":    "var(--text5)",
  muted:  "var(--text-muted)",
  subtle: "var(--text-subtle)",
  accent: "var(--text-accent)",
} as const satisfies Record<string, string>;

export type TextColor = keyof typeof textColor;

// ─── LAYOUT ───────────────────────────────────────────────────────────────────

/**
 * Grid column counts for the Grid primitive.
 */
export const gridColumns = {
  "1": "repeat(1, 1fr)",
  "2": "repeat(2, 1fr)",
  "3": "repeat(3, 1fr)",
  "4": "repeat(4, 1fr)",
} as const satisfies Record<string, string>;

export type GridColumns = keyof typeof gridColumns;

/**
 * Section background variants used by the Section primitive.
 */
export const sectionVariant = {
  dark:  "var(--bg2)",
  black: "var(--bg)",
  paper: "var(--bg3)",
} as const satisfies Record<string, string>;

export type SectionVariant = keyof typeof sectionVariant;

/**
 * Surface style variants used by the Surface primitive.
 */
export const surfaceVariant = {
  default:  "rgba(15, 14, 10, 0.55)",
  muted:    "rgba(200, 168, 75, 0.05)",
  cold:     "rgba(15, 14, 10, 0.82)",
  warm:     "rgba(200, 168, 75, 0.05)",
  glass:    "rgba(255, 255, 255, 0.03)",
} as const satisfies Record<string, string>;

export type SurfaceVariant = keyof typeof surfaceVariant;

// ─── CARD / COMPONENT VARIANTS ────────────────────────────────────────────────

/**
 * ProfileCard and WorldHalf visual variants.
 * Drives accent colour, image filter, and overlay style.
 */
export const cardVariant = {
  mi5:     { accent: accentColor.blue,  warm: false },
  lennon:  { accent: accentColor.blue,  warm: false },
  crown:   { accent: accentColor.amber, warm: true  },
  beatles: { accent: accentColor.amber, warm: true  },
} as const;

export type CardVariant = keyof typeof cardVariant;

/**
 * ProfileSection accent — maps the two-value "blue" | "amber" API
 * used in ProfileSection.astro to the full CSS token.
 */
export const sectionAccent = {
  blue:  accentColor.blue,
  amber: accentColor.amber,
} as const satisfies Record<string, string>;

export type SectionAccent = keyof typeof sectionAccent;

// ─── ANIMATION / TRANSITION ───────────────────────────────────────────────────

/**
 * Transition durations for hover states, reveals, and interactions.
 */
export const transition = {
  fast:   "120ms ease",
  base:   "var(--transition-base)", // 180ms ease
  slow:   "320ms ease",
  slower: "500ms ease",
} as const satisfies Record<string, string>;

export type Transition = keyof typeof transition;

// ─── BORDERS ─────────────────────────────────────────────────────────────────

/**
 * Named border styles.
 */
export const border = {
  soft:  "var(--border-soft)",
  faint: "var(--border-faint)",
  solid: "1px solid var(--bg4)",
} as const satisfies Record<string, string>;

export type Border = keyof typeof border;

export const letterSpacing = {
  tight:  "0.03rem",
  base:   "0.06rem", 
  wide:   "0.15rem",
  wider:  "0.18rem",
  widest: "0.25rem",
} as const satisfies Record<string, string>;

export type LetterSpacing = keyof typeof letterSpacing;