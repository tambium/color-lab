import { lch } from 'd3-color';
import {
  ShadeSetTitle,
  ShadeIdentifier,
  ShadeHex,
  ExtendedShade,
} from '../../palettes';

export const extendPalette = (
  palette: Map<ShadeSetTitle, Map<ShadeIdentifier, ShadeHex>>,
): Map<ShadeSetTitle, Map<ShadeIdentifier, ExtendedShade>> => {
  const cp: Map<ShadeSetTitle, Map<ShadeIdentifier, any>> = new Map(palette);

  cp.forEach((value, key, map) => {
    value.forEach((value, key, childMap) => {
      const lchified = lch(value);
      childMap.set(key, {
        hex: value,
        lch: lchified,
      });
    });
  });

  return cp;
};
