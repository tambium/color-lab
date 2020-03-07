import { lch } from 'd3-color';
import { RANGES, UPPER_BOUND, LOWER_BOUND } from '../../constants';
import { ExtendedShade } from '../../palettes';

export const updateColor = ({
  adjustment,
  color,
  direction,
  property,
}: {
  adjustment: number;
  color: ExtendedShade;
  direction: number;
  property: string;
}): ExtendedShade => {
  const targetPropertyValue = color.lch[property];
  const range = RANGES.get(property);

  let updatedValue = targetPropertyValue + adjustment * direction;

  if (direction === 1 && updatedValue > range.get(UPPER_BOUND)) {
    updatedValue = range.get(LOWER_BOUND);
  }
  if (direction === -1 && updatedValue < range.get(LOWER_BOUND)) {
    updatedValue = range.get(UPPER_BOUND);
  }

  const {
    lch: { l, c, h },
  } = color;

  const props = {
    l,
    c,
    h,
    [property]: updatedValue,
  };

  const updatedLch = lch(props.l, props.c, props.h);
  return {
    hex: updatedLch.hex(),
    lch: updatedLch,
  };
};
