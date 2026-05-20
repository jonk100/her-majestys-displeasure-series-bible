/**
 * Character-related types.
 */

export interface CharacterCardData {
  file: string;
  name: string;
  role: string;
  quote: string;
  image?: string;
  description?: string;
}

export interface CastItemData {
  name: string;
  tag: string;
  description: string;
  image?: string;
}
