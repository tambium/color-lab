/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';

import { containerStyle } from './styled';

interface LayoutProps {
  columnA: React.ReactNode;
  columnB: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({
  columnA: ColumnA,
  columnB: ColumnB,
}) => {
  return (
    <main css={containerStyle}>
      {ColumnA}
      {ColumnB}
    </main>
  );
};
