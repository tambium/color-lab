/** Find palette with greatest number of shades */
const findLargestSet = palette => {
  let largest = { shades: [] };
  palette.forEach(set => {
    largest = set.shades.length > largest.shades.length ? set : largest;
  });
  return largest;
};

/** Fill set to match longest shade set  */
const fillShades = ({ shadeSet, largestSetLength }) => {
  if (shadeSet.shades.length === largestSetLength) return shadeSet;

  const toAdd = largestSetLength - shadeSet.shades.length;
  for (let i = 0; i < toAdd; i++) {
    shadeSet.shades.unshift({});
  }

  return shadeSet;
};

/** Sort palette from lightest shade to darkest shade */
const sortShades = shadeSet =>
  shadeSet.shades.sort((a, b) => a.shade - b.shade);

export const uniformPalette = palette => {
  const largestSet = findLargestSet(palette);
  const largestSetLength = largestSet.shades.length;

  let adjustedPalette = palette;

  adjustedPalette.forEach(shadeSet => {
    fillShades({ shadeSet, largestSetLength });
  });

  adjustedPalette.forEach(shadeSet => {
    sortShades(shadeSet);
  });

  return adjustedPalette;
};
