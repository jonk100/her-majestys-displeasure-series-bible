/**
 * src/components/characters/variants.ts
 * - Character-related component variants to be imported by other components
 * in the same directory.
 */
import { accentColor } from "@gv/";



/** Character card visual variants */


export const cardVariant = {
  mi5:     { accent: accentColor.blue,  warm: false },
  lennon:  { accent: accentColor.blue,  warm: false },
  crown:   { accent: accentColor.amber, warm: true  },
  beatles: { accent: accentColor.amber, warm: true  },
} as const;

export type CardVariant = keyof typeof cardVariant;

/** 
 * 
 */