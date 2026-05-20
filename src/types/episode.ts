/**
 * Episode timeline types.
 */

export interface Episode {
  number: string;
  title: string;

  scenes: string;
  timeframe: string;

  summary: string;

  tension: number;
  tensionLabel: string;
}
