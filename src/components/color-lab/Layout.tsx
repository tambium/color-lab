/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';

import { layoutStyle } from './styled';

interface LayoutProps {
  columnA: React.ReactNode;
  columnB: React.ReactNode;
  columnC: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({
  columnA: ColumnA,
  columnB: ColumnB,
  columnC: ColumnC,
}) => {
  return (
    <main css={layoutStyle}>
      {ColumnA}
      {ColumnB}
      {ColumnC}
    </main>
  );
};
