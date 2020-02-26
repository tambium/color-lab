import { ShadeSet } from '../../palettes';

/** Find palette with greatest number of shades */
const findLargestSet = (palette: ShadeSet[]) => {
  let max = 0,
    maxObj: any = [];
  palette.forEach((shadeSet) => {
    if (shadeSet.shades.length > max) {
      max = shadeSet.shades.length;
      maxObj = shadeSet;
    }
  });

  return maxObj;
};

/** Fill set to match longest shade set  */
const fillShades = ({
  shadeSet,
  largestSetLength,
}: {
  shadeSet: ShadeSet;
  largestSetLength: number;
}) => {
  if (shadeSet.shades.length === largestSetLength) return shadeSet;

  const toAdd = largestSetLength - shadeSet.shades.length;
  for (let i = 0; i < toAdd; i++) {
    shadeSet.shades.unshift({ hex: undefined, shade: undefined });
  }

  return shadeSet;
};

/** Sort palette from lightest shade to darkest shade */
const sortShades = (shadeSet: { title: string; shades: any[] }) =>
  shadeSet.shades.sort((a, b) => a.shade - b.shade);

export const uniformPalette = (palette: ShadeSet[]) => {
  const largestSet = findLargestSet(palette);
  const largestSetLength = largestSet.shades.length;

  const adjustedPalette = palette;

  adjustedPalette.forEach((shadeSet) => {
    fillShades({ shadeSet, largestSetLength });
  });

  adjustedPalette.forEach((shadeSet) => {
    sortShades(shadeSet);
  });

  return adjustedPalette;
};
