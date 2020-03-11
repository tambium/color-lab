import React from 'react';
import { ColorLab as ColorLabComponent } from '../components/color-lab';
import { Tambium } from '../palettes';

const ColorLab: React.FC = () => {
  return (
    <React.Fragment>
      <ColorLabComponent basePalette={Tambium} />
    </React.Fragment>
  );
};

export default ColorLab;
