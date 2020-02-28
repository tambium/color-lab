import { css } from '@emotion/core';
import { mq } from '../../constants';

const SPACING = 24;

export const containerStyle = css`
  display: flex;
  flex-wrap: wrap;
  padding: ${SPACING}px;
`;

export const leftWrapper = css`
  flex: 1;
  ${mq({
    flexBasis: ['100%', null, null, 'auto'],
    marginRight: [null, null, null, null, `${SPACING / 2}px`],
    marginBottom: [24, null, null, null, null, 0],
  })};
`;

export const rightWrapper = css`
  display: flex;
  flex: 2;
  flex-wrap: wrap;
  ${mq({
    flexBasis: ['100%', null, null, 'auto'],
    marginLeft: [null, null, null, null, `${SPACING / 2}px`],
  })};
`;

export const colLeft = css`
  flex: 1;
  ${mq({
    marginRight: [null, null, `${SPACING / 2}px`],
    flexBasis: ['100%', null, 'auto'],
  })};
`;

export const colRight = css`
  flex: 1;
  ${mq({
    marginLeft: [null, null, `${SPACING / 2}px`],
    flexBasis: ['100%', null, 'auto'],
  })};
`;
