/**
 * Shared formatting utilities.
 */

/**
 * Convert text to uppercase mono labels.
 */
export function formatLabel(value: string): string {
  return value.toUpperCase();
}

/**
 * Convert newline-separated text into paragraphs.
 */
export function splitParagraphs(value: string): string[] {
  return value
    .split("\n")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}
