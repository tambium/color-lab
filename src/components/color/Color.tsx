import React from 'react';
import { color, lch } from 'd3-color';
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

  const length = shadeSet.shades.length;

  const DIMENSIONS = [length * 56, 175];

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
      <div style={{ marginBottom: 32 }}>
        <Table head={head} rows={rows} />
      </div>

      <div
        style={{
          backgroundColor: '#F9FAFC',
          border: '1px solid #D5DBE1',
          height: DIMENSIONS[1],
          overflow: 'hidden',
          position: 'relative',
          width: DIMENSIONS[0],
        }}
      >
        {shadeSet.shades.map((shade, idx) => {
          const c = color(shade.hex);
          return (
            <div
              key={shade.hex || idx}
              style={{
                backgroundColor: shade.hex,
                borderRadius: '50%',
                border: '1px solid #B9C2CC',
                height: 16,
                left: (idx + 1) * 56 - 56 / 2 - 8,
                position: 'absolute',
                bottom: 0 - 8 + (DIMENSIONS[1] / 100) * lch(c).l,
                width: 16,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
