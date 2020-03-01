import facepaint from 'facepaint';

export const breakpoints = {
  sm: 420,
  md: 768,
  lg: 920,
  xl: 1120,
};

export const mq = facepaint([
  `@media(min-width: ${breakpoints.sm}px)`,
  `@media(min-width: ${breakpoints.md}px)`,
  `@media(min-width: ${breakpoints.lg}px)`,
  `@media(min-width: ${breakpoints.xl}px)`,
]);

export const layers = {
  navigation: (): number => 200,
};
