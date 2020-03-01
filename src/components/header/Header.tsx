/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { headerStyle } from './styled';
import { ProjectIdentifier } from '../header';

interface HeaderProps {
  children?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header css={headerStyle}>
      <ProjectIdentifier />
      {children && children}
    </header>
  );
};
