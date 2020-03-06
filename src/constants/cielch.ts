export const LOWER_BOUND = 'lb';
export const UPPER_BOUND = 'ub';

export const LIGHTNESS = 'l';
export const CHROMA = 'c';
export const HUE = 'h';

export const LIGHTNESS_RANGE = new Map([
  [LOWER_BOUND, 0],
  [UPPER_BOUND, 100],
]);

export const CHROMA_RANGE = new Map([
  [LOWER_BOUND, 0],
  [UPPER_BOUND, 230],
]);

export const HUE_RANGE = new Map([
  [LOWER_BOUND, 0],
  [UPPER_BOUND, 360],
]);

export const RANGES = new Map([
  [LIGHTNESS, LIGHTNESS_RANGE],
  [CHROMA, CHROMA_RANGE],
  [HUE, HUE_RANGE],
]);

export const BOUNDS = new Map([
  [LIGHTNESS, LIGHTNESS_RANGE],
  [CHROMA, CHROMA_RANGE],
  [HUE, HUE_RANGE],
]);

export const PROPERTY_NAMES = new Map([
  [LIGHTNESS, 'Lightness'],
  [CHROMA, 'Chroma'],
  [HUE, 'Hue'],
]);

export const PROPERTIES = [LIGHTNESS, CHROMA, HUE];
