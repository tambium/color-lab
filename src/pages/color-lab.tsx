import React from 'react';
import { ColorLab as ColorLabComponent } from '../components/color-lab';

interface ColorLabProps {}

const ColorLab: React.FC<ColorLabProps> = ({}) => {
  return (
    <React.Fragment>
      <ColorLabComponent />
    </React.Fragment>
  );
};

export default ColorLab;
