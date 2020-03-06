import { ShadeSet, Shade } from '../../palettes';

export const extendPalette = (palette: ShadeSet[]) => {
  const map = new Map();

  palette.forEach((shadeSet: ShadeSet) => {
    const shades = new Map();
    shadeSet.shades.forEach((shade: Shade) => {
      console.log(shade);
    });
  });

  return palette;
};
