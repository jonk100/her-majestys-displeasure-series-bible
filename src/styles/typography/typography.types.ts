/** Semantic fluid text sizes. Scale with the viewport. */
export type TextSize =
  | "xxs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "xxl";

/** Semantic fixed text sizes. Never scale with the viewport. */
export type TextSizeFixed =
  | "xxs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "xxl";

/** Semantic text tones. */
export type TextTone =
  | "default"
  | "muted"
  | "subtle"
  | "inverse"
  | "accent"
  | "blue"
  | "green"
  | "red"
  | "amber"
  | "orange"
  | "neutral";

/** Numeric text weights. */
export type TextWeight =
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

/** Tracking (letter spacing) scale. */
export type TextTracking =
  | "tightest"
  | "tighter"
  | "tight"
  | "normal"
  | "wide"
  | "wider"
  | "widest";

/** Leading (line height) scale. */
export type TextLeading =
  | "none"
  | "tightest"
  | "tighter"
  | "tight"
  | "normal"
  | "loose"
  | "looser"
  | "loosest";