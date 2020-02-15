/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { contrastRatio } from 'chromatism';
import { hex } from 'wcag-contrast';
import { ShadeSet } from '../../palettes';
import { Table } from '../table';
import { headCellStyle } from '../../shared';

type PaletteProps = {
  palette: ShadeSet[];
  position: Array<number>;
};

export const Palette: React.FC<PaletteProps> = ({ palette, position }) => {
  const createHead = () => {
    return {
      cells: [
        {}, // spacer for first column
        ...palette[0].shades.map((shade, idx) => ({
          key: shade.shade || idx,
          content: shade.shade,
          style: [
            headCellStyle,
            css`
              padding-bottom: 8px;
            `,
          ],
        })),
      ],
    };
  };

  const head = createHead();

  const rows = palette.map((shadeSet: ShadeSet, yIdx: number) => {
    return {
      key: `row-${yIdx}-${shadeSet.title}`,
      cells: [
        {
          content: (
            <td
              css={[
                headCellStyle,
                css`
                  text-align: right;
                  padding-right: 8px;
                  padding-left: 0;
                `,
              ]}
            >
              {shadeSet.title}
            </td>
          ),
        },
        ...shadeSet.shades.map((shade, xIdx) => {
          const isSelected = xIdx === position[0] && yIdx === position[1];

          const textColor = shade.hex
            ? contrastRatio(shade.hex).hex
            : 'transparent';

          return {
            key: shade.shade || xIdx,
            content: (
              <td
                style={{
                  backgroundColor: shade.hex || 'transparent',
                  border: `2px solid ${isSelected ? '#FFF' : 'transparent'}`,
                  color: textColor,
                  fontSize: 12,
                  fontWeight: 500,
                  paddingBottom: 8,
                  paddingTop: 8,
                  textAlign: 'center',
                }}
              >
                {shade.hex ? hex(textColor, shade.hex).toFixed(2) : ''}
              </td>
            ),
          };
        }),
      ],
    };
  });

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <span style={{ fontSize: 21 }}>Tambium colors</span>
      </div>

      <Table head={head} rows={rows} />
    </div>
  );
};
