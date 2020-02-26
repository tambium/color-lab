import { lch as d3lch, HCLColor } from 'd3-color';
import { setPrecision } from '../numbers';
import { BOUNDS, UPPER_BOUND, LOWER_BOUND } from '../../constants';

interface DisplayableProps {
  lch: HCLColor;
  property: string;
  precision: number;
  height: number;
}

const DOWNWARD = 'downward';
const UPWARD = 'upward';

export const findDisplayableBoundaries = ({
  lch,
  property,
  precision,
  height,
}: DisplayableProps) => {
  let l, c, h;
  l = setPrecision(lch.l);
  c = setPrecision(lch.c);
  h = setPrecision(lch.h);

  const bounds = BOUNDS.get(property);
  const range =
    bounds.get(UPPER_BOUND) * precision - bounds.get(LOWER_BOUND) * precision;

  const multiplier = (height * precision) / range;

  const displayable = [];
  for (let i = 0; i < range; i += multiplier) {
    const modifier = setPrecision((range - i) / precision);
    const props = { l, c, h, [property]: modifier };
    const testcase = d3lch(props.l, props.c, props.h).displayable();
    displayable.push(testcase);
  }

  const boundaries = [];
  displayable.reduce(function(accumulator, currentValue, currentIndex) {
    if (accumulator !== currentValue) {
      /**
       * false -> true: downward direction
       * true -> false: upward direction
       */

      const direction = !accumulator && currentValue ? UPWARD : DOWNWARD;
      boundaries.push({
        idx: currentIndex / precision,
        direction,
        top: (currentIndex / displayable.length) * 100,
      });
    }

    return currentValue;
  });

  console.log(boundaries);

  return boundaries;
};
