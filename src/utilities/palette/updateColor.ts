import { lch, HCLColor } from 'd3-color';
import { RANGES, UPPER_BOUND, LOWER_BOUND } from '../../constants';
import { setPrecision } from '../numbers';

export const updateColor = ({
  adjustment,
  color,
  direction,
  property,
}: {
  adjustment: number;
  color: HCLColor;
  direction: number;
  property: string;
}) => {
  const targetPropertyValue = color[property];
  const range = RANGES.get(property);

  let updatedValue = setPrecision(targetPropertyValue + adjustment * direction);

  if (direction === 1 && updatedValue > range.get(UPPER_BOUND)) {
    updatedValue = range.get(LOWER_BOUND);
  }
  if (direction === -1 && updatedValue < range.get(LOWER_BOUND)) {
    updatedValue = range.get(UPPER_BOUND);
  }

  const props = {
    l: color.l,
    c: color.c,
    h: color.h,
    [property]: updatedValue,
  };

  const updatedLch = lch(props.l, props.c, props.h);
  return updatedLch;
};
