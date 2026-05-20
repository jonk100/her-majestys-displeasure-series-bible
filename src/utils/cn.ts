/**
 * Lightweight className utility.
 *
 * Inputs:
 * - Strings
 * - Falsy values
 *
 * Output:
 * - Combined class string
 */

export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}
