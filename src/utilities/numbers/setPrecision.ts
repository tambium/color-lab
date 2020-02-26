import { PRECISION } from '../../constants';

export const setPrecision = (number: number, precision = PRECISION.get(1)) => {
  return Math.round((number + Number.EPSILON) * precision) / precision;
};
