/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';

import { headerSection, headerStyle } from './styled';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header css={headerStyle}>
      <div css={headerSection}>
        <div style={{ marginRight: 32 }}>
          <span style={{ fontWeight: 500 }}>Colors</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ marginRight: 8 }}>
            <span style={{ fontSize: 14, fontWeight: 500 }}>Palette</span>
          </div>
          <select>
            <option value="tambium">Tambium</option>
          </select>
        </div>
      </div>
      <div css={headerSection}>
        <div style={{ marginRight: 8 }}>
          <button>Reset</button>
        </div>
        <button>Copy CSS</button>
      </div>
    </header>
  );
};
