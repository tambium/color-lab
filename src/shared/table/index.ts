import { css } from '@emotion/core';
import { headCellStyle } from '../style';

export const colorTableHead = ({ palette, withSpacer }) => {
  return {
    cells: [
      ...(withSpacer ? [{}] : []), // spacer for first column
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
