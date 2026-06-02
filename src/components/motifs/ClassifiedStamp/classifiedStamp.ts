/// <reference path="./ClassifiedStamp.astro" />

/**
 * classifiedStamp.ts
 *
 * Shared visual variants and size mappings for ClassifiedStamp.
 */

export const classifiedStampVariant = {
  blue: {
    color: "var(--accent-blue)",
    border: "var(--accent-blue)",
  },

  amber: {
    color: "var(--color-amber)",
    border: "var(--color-amber)",
  },

  red: {
    color: "var(--color-red)",
    border: "var(--color-red)",
  },

  muted: {
    color: "var(--text-muted)",
    border: "var(--border-faint)",
  },

  green: {
    color: "var(--text-accent)",
    border: "var(--text-accent)",
  },
} as const;

export const classifiedStampSize = {
  xs: "0.55rem",
  sm: "0.65rem",
  md: "0.75rem",
  lg: "0.875rem",
} as const;