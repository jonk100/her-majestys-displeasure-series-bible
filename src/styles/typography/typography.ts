import type { TextSize, TextSizeFixed, TextTone, TextWeight, TextLeading, TextTracking } from "./typography.types.ts";

/** Maps semantic fluid size variants to CSS utility classes. */
export const TEXT_SIZE_CLASSES: Record<TextSize, string> = {
  xxs: "text-size--xxs",
  xs:  "text-size--xs",
  sm:  "text-size--sm",
  md:  "text-size--md",
  lg:  "text-size--lg",
  xl:  "text-size--xl",
  xxl: "text-size--xxl",
};

/** Maps semantic fixed size variants to CSS utility classes. */
export const TEXT_SIZE_FIXED_CLASSES: Record<TextSizeFixed, string> = {
  xxs: "text-size-fixed--xxs",
  xs:  "text-size-fixed--xs",
  sm:  "text-size-fixed--sm",
  md:  "text-size-fixed--md",
  lg:  "text-size-fixed--lg",
  xl:  "text-size-fixed--xl",
  xxl: "text-size-fixed--xxl",
};

/** Maps semantic tone variants to CSS utility classes. */
export const TEXT_TONE_CLASSES: Record<TextTone, string> = {
  default: "text-tone--default",
  muted:   "text-tone--muted",
  subtle:  "text-tone--subtle",
  inverse: "text-tone--inverse",
  accent:  "text-tone--accent",
  blue:    "text-tone--blue",
  green:   "text-tone--green",
  red:     "text-tone--red",
  amber:   "text-tone--amber",
  orange:  "text-tone--orange",
  neutral: "text-tone--neutral",
};

/** Maps numeric weight variants to CSS utility classes. */
export const TEXT_WEIGHT_CLASSES: Record<TextWeight, string> = {
  "100": "text-weight--100",
  "200": "text-weight--200",
  "300": "text-weight--300",
  "400": "text-weight--400",
  "500": "text-weight--500",
  "600": "text-weight--600",
  "700": "text-weight--700",
  "800": "text-weight--800",
  "900": "text-weight--900",
};

/** Maps line-height (leading) variants to CSS utility classes. */
export const TEXT_LEADING_CLASSES: Record<TextLeading, string> = {
  none:   "text-leading--none",
  tightest: "text-leading--tightest",
  tighter: "text-leading--tighter",
  tight:  "text-leading--tight",
  normal: "text-leading--normal",
  loose:  "text-leading--loose",
  looser: "text-leading--looser",
  loosest: "text-leading--loosest",
};

/** Maps letter-spacing (tracking) variants to CSS utility classes. */
export const TEXT_TRACKING_CLASSES: Record<TextTracking, string> = {
  tightest: "text-tracking--tightest",
  tighter: "text-tracking--tighter",
  tight:   "text-tracking--tight",
  normal:  "text-tracking--normal",
  wide:    "text-tracking--wide",
  wider:   "text-tracking--wider",
  widest:  "text-tracking--widest",
};