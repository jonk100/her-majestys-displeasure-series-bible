/// <reference path="./ClassifiedStamp.astro" />

/**
 * ClassifiedStamp.types.ts
 *
 * Shared prop types for ClassifiedStamp.
 */

import type {
  classifiedStampVariant,
  classifiedStampSize,
} from "./classifiedStamp";

export interface ClassifiedStampProps {
  /**
   * Visible stamp text.
   */
  label: string;

  /**
   * Visual accent variant.
   *
   * @default "muted"
   */
  variant?: keyof typeof classifiedStampVariant;

  /**
   * Mono label size.
   *
   * @default "md"
   */
  size?: keyof typeof classifiedStampSize;

  /**
   * Automatically uppercase text.
   *
   * @default true
   */
  uppercase?: boolean;
}