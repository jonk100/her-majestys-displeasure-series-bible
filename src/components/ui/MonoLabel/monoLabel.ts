/// <reference path="./MonoLabel.astro" />
/**
 * monoLabel.ts
 * Component variants
 */

/** MonoLabel Variants */
export type MonoLabelVariant = 
  | "tag" 
  | "caption" 
  | "headline" 
  | "card";

export const MONO_LABEL_VARIANT_CLASSES: Record<MonoLabelVariant, string> = {
  tag:     "mono-label--tag",
  caption: "mono-label--caption",
  headline: "mono-label--headline",
  card:    "mono-label--card",
};