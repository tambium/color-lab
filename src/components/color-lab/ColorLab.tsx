import * as React from 'react';
import { Layout } from '.';
import { Header } from '../header';
import { Color } from '../color-next';
import { Palette } from '../palette-next';
import { Shade } from '../shade-next';
import { Tambium } from '../../palettes';
import { uniformPalette } from '../../utilities';
import { useMultiKeyPress } from '../../hooks';

interface ColorLabProps {}

export const ColorLab: React.FC<ColorLabProps> = () => {
  const [palette, setPalette] = React.useState(uniformPalette(Tambium));
  const [position, setPosition] = React.useState([5, 4]);

  useMultiKeyPress(['shift+up'], (e) => {
    setPosition((p) => (p[1] > 0 ? [p[0], p[1] - 1] : p));
  });

  useMultiKeyPress(['shift+down'], (e) => {
    setPosition((p) => (p[1] < palette.length - 1 ? [p[0], p[1] + 1] : p));
  });

  useMultiKeyPress(['shift+left'], (e) => {
    setPosition((p) => (p[0] > 0 ? [p[0] - 1, p[1]] : p));
  });

  useMultiKeyPress(['shift+right'], (e) => {
    setPosition((p) =>
      palette[p[0]] && p[0] < palette[p[0]].shades.length - 1
        ? [p[0] + 1, p[1]]
        : p,
    );
  });

  return (
    <React.Fragment>
      <Header />
      <Layout
        columnA={<Palette palette={palette} position={position} />}
        columnB={<Color palette={palette} position={position} />}
        columnC={<Shade palette={palette} position={position} />}
      />
    </React.Fragment>
  );
};
