import styled from '@emotion/styled';
import { mq } from '../../constants';

export const ColorCell = styled.span`
  ${(p) => (p.color ? `color: ${p.color};` : null)};
  font-size: 12px;
  font-weight: 500;
  ${mq({
    paddingLeft: [2, 4, 8],
    paddingRight: [2, 4, 8],
  })};
`;
