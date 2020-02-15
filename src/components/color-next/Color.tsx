import React from 'react';
import { ShadeSet } from '../../palettes';
import { Table } from '../table';
import { colorTableHead } from '../../shared/table';
import { ColorCell } from '../../shared';

interface ColorProps {
  palette: ShadeSet[];
  position: Array<number>;
}

export const Color: React.FC<ColorProps> = ({ palette, position }) => {
  const shadeSet = palette[position[1]];
  const { title } = shadeSet;

  const head = colorTableHead({ palette, withSpacer: false });

  const rows = [
    {
      key: `color-row`,
      cells: shadeSet.shades.map((shade, xIdx) => {
        const isSelected = xIdx === position[0];

        return {
          key: shade.shade || xIdx,
          content: <ColorCell hex={shade.hex} isSelected={isSelected} />,
        };
      }),
    },
  ];

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <span style={{ fontSize: 21 }}>{title}</span>
      </div>
      <Table head={head} rows={rows} />
    </div>
  );
};
