import * as React from 'react';
import { Layout } from '.';
import { Header } from '../header';
import { Palette } from '../palette-next';
import { Tambium } from '../../palettes';
import { uniformPalette } from '../../utilities';

interface ColorLabProps {}

export const ColorLab: React.FC<ColorLabProps> = () => {
  const [palette, setPalette] = React.useState(uniformPalette(Tambium));
  const [position, setPosition] = React.useState([5, 4]);

  return (
    <React.Fragment>
      <Header />
      <Layout
        columnA={<Palette palette={palette} position={position} />}
        columnB={<div>B</div>}
        columnC={<div>C</div>}
      />
    </React.Fragment>
  );
};
