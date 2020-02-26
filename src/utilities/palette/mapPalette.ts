import { ShadeSet } from '../../palettes';

export const mapPalette = (palette: ShadeSet[]) => {
  const map = new Map();

  palette.forEach((shadeSet: ShadeSet) => {
    const shades = new Map();
    shadeSet.shades.forEach((shade) => {
      shades.set(shade.shade, shade.hex);
    });

    map.set(shadeSet.title, shades);
  });

  return map;
};
