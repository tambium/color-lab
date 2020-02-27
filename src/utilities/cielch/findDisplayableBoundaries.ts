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
        weighted: (currentIndex / displayable.length) * 100,
      });
    }

    return currentValue;
  });

  const renderable = [];

  /**
   * does upward boundary have downward boundary before it?
   *    yes -> start: previous.weighted -- end: current.weighted
   *    no  -> start: 0%                -- end: current.weighted
   *
   * does downward boundary have upward boundary after it?
   *    yes -> start: current.weighted  -- end: next.weighted
   *    no  -> start: current.weighted  -- end: 100%
   */

  for (let i = 0; i < boundaries.length; i++) {
    const current = boundaries[i];
    let previous, next;
    if (boundaries[i - 1]) previous = boundaries[i - 1];
    if (boundaries[i + 1]) next = boundaries[i + 1];

    if (current.direction === UPWARD) {
      if (previous && previous.direction === DOWNWARD) {
        renderable.push({
          ...current,
          top: previous.weighted,
          bottom: current.weighted,
        });
      }
      if (!previous || previous.direction !== DOWNWARD) {
        renderable.push({
          ...current,
          top: 0,
          bottom: current.weighted,
        });
      }
    }

    if (current.direction === DOWNWARD) {
      if (next && next.direction === UPWARD) {
        renderable.push({
          ...current,
          top: current.weighted,
          bottom: next.weighted,
        });
      }
      if (!next || next.direction !== UPWARD) {
        renderable.push({
          ...current,
          top: current.weighted,
          bottom: 100,
        });
      }
    }
  }

  return renderable;
};
