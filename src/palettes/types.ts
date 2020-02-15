export type Shade = {
  hex: string | undefined;
  shade: number | undefined;
};

export type ShadeSet = {
  title: string;
  shades: Shade[];
};
