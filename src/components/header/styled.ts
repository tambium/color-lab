import { css } from '@emotion/core';
import { layers } from '../../constants';
import { HEADER_HEIGHT } from './constants';

export const headerStyle = css`
  align-items: center;
  // backdrop-filter: saturate(180%) blur(20px);
  background-color: rgba(255, 255, 255, 1);
  border-bottom: 1px solid #ececec;
  display: flex;
  justify-content: space-between;
  height: ${HEADER_HEIGHT}px;
  padding: 0 24px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${layers.navigation()};
`;
