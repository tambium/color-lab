import { Shade, ShadeSet } from '../../palettes';

/** Find palette with greatest number of shades */
const findLargestSet = (palette: ShadeSet[]): ShadeSet => {
  let max = 0,
    maxObj: ShadeSet = palette[0];

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
  largestSet,
}: {
  shadeSet: ShadeSet;
  largestSet: ShadeSet;
}): ShadeSet => {
  const largestSetLength = largestSet.shades.length;
  if (shadeSet.shades.length === largestSetLength) return shadeSet;

  const cpLargestShades = JSON.parse(JSON.stringify(largestSet.shades));
  cpLargestShades.forEach((shade) => (shade.hex = null));

  shadeSet.shades = [
    ...cpLargestShades.filter(
      (shade: Shade) =>
        !shadeSet.shades.find(
          (comparitor: Shade) => shade.shade === comparitor.shade,
        ),
    ),
    ...shadeSet.shades,
  ];

  return shadeSet;
};

/** Sort palette from lightest shade to darkest shade */
const sortShades = (shadeSet: ShadeSet): ShadeSet => {
  const cp = { ...shadeSet };
  cp.shades.sort((a, b) => a.shade - b.shade);
  return cp;
};

export const uniformPalette = (palette: ShadeSet[]): ShadeSet[] => {
  const largestSet = findLargestSet(palette);

  const adjustedPalette = [...palette];

  adjustedPalette.forEach((shadeSet) => {
    fillShades({ shadeSet, largestSet });
  });

  adjustedPalette.forEach((shadeSet) => {
    sortShades(shadeSet);
  });

  return adjustedPalette;
};
