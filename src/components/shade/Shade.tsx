import React from 'react';
import { css } from '@emotion/core';
import { ShadeSet } from '../../palettes';
import { headCellStyle, ColorCell } from '../../shared';
import { Table } from '../table';

interface ShadeProps {
  palette: ShadeSet[];
  position: Array<number>;
}

export const Shade: React.FC<ShadeProps> = ({ palette, position }) => {
  const selectedShade = palette[position[1]].shades[position[0]];
  const { shade } = selectedShade;

  const head = {
    cells: palette.map((shadeSet, idx) => ({
      key: shadeSet.title || idx,
      content: shadeSet.title,
      style: css`
        ${headCellStyle};
        padding-bottom: 8px;
      `,
    })),
  };

  const rows = [
    {
      key: `shade-row`,
      cells: palette.map((shadeSet, idx) => {
        const target = shadeSet.shades[position[0]];
        const isSelected = palette[position[1]] === shadeSet;

        return {
          key: shadeSet.title || idx,
          content: <ColorCell hex={target.hex} isSelected={isSelected} />,
        };
      }),
    },
  ];

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <span style={{ fontSize: 21 }}>{shade}</span>
      </div>
      <Table head={head} rows={rows} />
    </div>
  );
};
