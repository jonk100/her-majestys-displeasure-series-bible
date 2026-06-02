/// <reference path="./Heading.astro" />
/**
 * heading.ts
 * Local constants for the Heading component.
 */
import type { HeadingLevel, HeadingVariant } from "./Heading.types";

/** Maps heading level to its CSS utility class. */
export const HEADING_LEVEL_CLASSES: Record<HeadingLevel, string> = {
  1: "heading--level-1",
  2: "heading--level-2",
  3: "heading--level-3",
  4: "heading--level-4",
  5: "heading--level-5",
};

/** Maps heading variant to its CSS utility class. */
export const HEADING_VARIANT_CLASSES: Record<HeadingVariant, string> = {
  display: "heading--display",
  section: "heading--section",
  card:    "heading--card",
  mono:    "heading--mono",
};