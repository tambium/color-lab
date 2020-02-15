/** @jsx jsx */
import * as React from 'react';
import { jsx, SerializedStyles } from '@emotion/core';
import { tableStyle } from './styled';

interface RowCellType {
  key?: string | number;
  content?: React.ReactNode | string;
  style?: SerializedStyles;
}

export type HeadCellType = RowCellType;

interface HeadType {
  cells: Array<HeadCellType>;
}

export type RowType = {
  cells: Array<RowCellType>;
  key?: string;
};

interface TableProps {
  head: HeadType;
  rows: Array<RowType>;
}

export const Table: React.FC<TableProps> = ({ head, rows }) => {
  const { cells: headCells } = head;

  return (
    <table css={tableStyle}>
      {head && (
        <thead>
          <tr>
            {headCells.map((cell: RowCellType, idx: number) => {
              return (
                <th key={cell.key || idx} css={cell.style}>
                  {cell.content}
                </th>
              );
            })}
          </tr>
        </thead>
      )}
      <tbody>
        {rows.map((row, idx) => (
          <tr key={row.key || idx}>
            {row.cells.map((cell, idx) => {
              return (
                <React.Fragment key={cell.key || idx}>
                  {cell.content}
                </React.Fragment>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
