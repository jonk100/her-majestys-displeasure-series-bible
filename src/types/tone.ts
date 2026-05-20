/**
 * Tone section types.
 */

export interface TonePanelData {
  tag: string;
  title: string;
  description: string;

  variant?: "cold" | "warm";
}
