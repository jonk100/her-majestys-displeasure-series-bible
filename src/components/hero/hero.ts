/**
 * Hero component types.
 */

export interface HeroMetaItem {
  label: string;
  value: string;
}

export interface HeroData {
  fileRef: string;
  title: string;
  subtitle: string;
  logline: string;
  meta: HeroMetaItem[];
}
