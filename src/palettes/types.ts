import { HCLColor } from 'd3-color';

export type ShadeHex = string | undefined;
export type ShadeIdentifier = number | undefined;
export type ShadeSetTitle = string;

export type Shade = {
  hex: ShadeHex;
  shade: ShadeIdentifier;
};

export type ShadeSet = {
  title: ShadeSetTitle;
  shades: Shade[];
};

export type ExtendedShade = {
  hex: ShadeHex;
  lch: HCLColor;
};
