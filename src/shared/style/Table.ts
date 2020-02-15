import { css } from '@emotion/core';
import styled from '@emotion/styled';

export const headCellStyle = css`
  color: #8992a1;
  font-size: 12px;
  font-weight: 500;
`;

interface CellProps {
  color?: string;
  isSelected: boolean;
  hex: string;
}

export const ColorCell = styled.td<CellProps>`
  background-color: ${(p) => (p.hex ? p.hex : 'transparent')};
  border: 2px solid ${(p) => (p.isSelected ? '#FFF' : 'transparent')};
  ${(p) => p.color && `color: ${p.color};`};
  font-size: 12px;
  font-weight: 500;
  padding-bottom: 8px;
  padding-top: 8px;
  text-align: center;
  min-width: 56px;
  height: 40px;
`;
