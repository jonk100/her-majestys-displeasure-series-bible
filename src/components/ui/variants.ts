/**
 * src/components/ui/variants.ts
 * - UI component variants to be imported by other components
 * in the same directory.
 * 
 */

/** CTA visual variants */
export const ctaVariant = {
  primary: {
    bg:     "var(--accent-blue3)",
    color:  "#fff",
    border: "var(--accent-blue3)",
    hoverBg:     "var(--accent-blue2)",
    hoverBorder: "var(--accent-blue2)",
  },
  outline: {
    bg:     "transparent",
    color:  "var(--accent-blue)",
    border: "var(--accent-blue)",
    hoverBg:     "var(--accent-blue-subtle)",
    hoverBorder: "var(--accent-blue)",
  },
  mono: {
    bg:     "rgba(255, 255, 255, 0.06)",
    color:  "var(--text3)",
    border: "var(--border-faint)",
    hoverBg:     "rgba(255, 255, 255, 0.1)",
    hoverBorder: "var(--text-muted)",
  },
} as const;

export type CtaVariant = keyof typeof ctaVariant;

/** Surface visual variants — bg and border per variant */
export const surfaceVariant = {
  default:  { bg: "rgba(15, 14, 10, 0.55)",  border: "none" },
  muted:    { bg: "rgba(200, 168, 75, 0.05)", border: "none" },
  cold:     { bg: "rgba(15, 14, 10, 0.82)",   border: "var(--border-soft)" },
  warm:     { bg: "rgba(200, 168, 75, 0.05)", border: "var(--border-soft)" },
  outlined: { bg: "transparent",              border: "var(--border-soft)" },
  glass:    { bg: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255,255,255,0.08)" },
} as const;

export type SurfaceVariant = keyof typeof surfaceVariant;

/** Section background variants */
export const sectionVariant = {
  dark:  "var(--bg2)",
  black: "var(--bg)",
  paper: "var(--bg3)",
} as const;

export type SectionVariant = keyof typeof sectionVariant;

/** ThreatBand / QuoteBand color themes */
export const bandTheme = {
  threat: { color: "var(--red-text5)",  bg: "transparent" },
  quote:  { color: "var(--text-muted)", bg: "var(--bg2)"  },
  amber:  { color: "var(--color-amber)", bg: "transparent" },
} as const;

export type BandTheme = keyof typeof bandTheme;

/** Badge/faction label variants — drives color and border */
export const badgeVariant = {
  blue:  { color: "var(--accent-blue)",  border: "var(--accent-blue)"  },
  amber: { color: "var(--color-amber)",  border: "var(--color-amber)"  },
  red:   { color: "var(--color-red)",    border: "var(--color-red)"    },
  muted: { color: "var(--text-muted)",   border: "var(--border-faint)" },
} as const;

export type BadgeVariant = keyof typeof badgeVariant;

/** SectionLabel accent — same two-value API used across ProfileSection,
 *  CardSections, WorldHalf trait labels */
export const sectionLabelVariant = {
  blue:  "var(--accent-blue)",
  amber: "var(--color-amber)",
  muted: "var(--text-muted)",
  green: "var(--text-accent)",
} as const;

export type SectionLabelVariant = keyof typeof sectionLabelVariant;

/** MonoLabel size presets — fixed sizes only, these are always UI chrome */
export const monoLabelSize = {
  xs:  "0.55rem",  // nav sub-labels, classified counts
  sm:  "0.65rem",  // photo labels, image captions
  md:  "0.75rem",  // section labels, eyebrows
  lg:  "0.875rem", // larger badges, prominent labels
} as const;

export type MonoLabelSize = keyof typeof monoLabelSize;