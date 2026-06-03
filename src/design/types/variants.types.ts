//** Themes  */
//**       `../styles/variants/themes.css`  */
export type ComponentTheme = 
| "primary"   | "ghost" 
| "secondary" | "outline" 
| "accent"    | "default" 
| "success"   | "warning" 
| "danger"
;

//** Radius */
//**     `../styles/variants/shapes.css` */
export type ComponentRadius = 
| "none" | "sm"  | "md" 
| "lg"   | "xl"  | "full"
;

//**     Block Type        */
//**                        ` */
export type BlockType = 
| 'body'   | 'body-sm'   | 'h1'        
| 'h2'     | 'h3'        | 'h4' 
| 'h5'        | 'heading-1' 
| 'heading-2' | 'heading-3' 
| 'heading-4' | 'heading-5' 
| 'caption'   | 'label' 
| 'lead'
;
//** Text Tone  */
//**         `../styles/tokens/colors.css` */
export type TextTone = 
| 'default'   | 'muted' 
| 'subtle'    | 'accent' 
| 'primary'   | 'secondary' 
| 'danger'    | 'success' 
| 'currentColor'
;
//** Spacing */
//**      `../styles/variants/spacing.css` */
export type SpacingScale = 
| "none"  | "3xs"   | "2xs"       
| "xs"    | "sm"    | "md"
| "lg"    | "xl"    | "2xl"  
| "3xl"   | "fluid"     
;
//** Frames */
//**     `../styles/variants/frames.css`  */
export type FrameVariant = 
| 'light'   | 'dark' 
| 'glass'   | 'polaroid' 
| 'minimal' | 'accent' 
| 'primary' | 'secondary' 
| 'none'
;
//** Effects   */
//**          `../styles/variants/effects.css` */
export type ComponentEffect = 
| 'screen'    | 'glow' 
| 'grayscale' | 'glass' 
| 'shimmer'   | 'fade-up' 
| 'fade-down' | 'fade-down-hero'
;
//**         */
//**  Shapes - `../styles/variants/shapes.css` */
export type ComponentShape = 
| 'landscape' | 'portrait' 
| 'square'    | 'circle' 
| 'none'
;
//**    Component entrance and loop animations  */
//**     `@/design/styles/motion.css` */
export type AnimationType = 
| 'slide-up'  | 'slide-down' 
| 'fade-in'   | 'pulse' 
| 'float'     | 'spin' 
| 'none'
;
//**         */
//**   Layers `../styles/variants/layers.css`
export type ComponentLayer = 
| "-1" | "0"  | "1"  | "2" 
| "3"  | "4"  | "5"
;
export type Sizes =   //* SIZES */
| "xs"      | "sm" 
| "md"      | "base" 
| "lg"      | "xl" 
| "icon"    | "icon-sm" 
| "icon-lg"
;
export type WrapperSize =  //* SIZES */
| "xs"    | "sm"
| "md"    | "base" 
| "lg"    | "xl" 
| "full"  | "screen"
;
//**  */
//**  Components using flexbox properties: */
export interface FlexboxProps {
  gap?: SpacingScale;
  wrap?: boolean;
  align?: 
  | 'start' 
  | 'center' 
  | 'end' 
  | 'stretch' 
  | 'baseline'
  ;
  justify?: 
  | 'start' 
  | 'center' 
  | 'end' 
  | 'space-between' 
  | 'space-around'
  ;  
}