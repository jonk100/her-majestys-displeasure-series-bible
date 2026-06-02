/**
 * Local constants for the Eyebrow component.
 * Handles behaviour specific to eyebrows that doesn't belong in the shared typography system.
 */

/**
 * Maps the lowercase boolean to its corresponding CSS utility class.
 * Default eyebrow behaviour is uppercase; passing `lowercase` opts out.
 */
export const EYEBROW_TRANSFORM_CLASSES: Record<"upper" | "lower", string> = {
  upper: "eyebrow--uppercase",
  lower: "eyebrow--lowercase",
};