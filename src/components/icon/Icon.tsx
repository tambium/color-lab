import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import { sizes } from './constants';
import { sizeOpts } from './types';

interface IconProps {
  glyph?: (props: { role: string }) => ReactElement;
  dangerouslySetGlyph?: string;
  label: string;
  primaryColor?: string;
  secondaryColor?: string;
  size?: sizeOpts;
}

interface WrapperProps {
  primaryColor?: string;
  secondaryColor?: string;
  size?: sizeOpts;
}

const getSize = ({ size }: WrapperProps): string | null =>
  size ? `height: ${sizes[size]}; width: ${sizes[size]};` : null;

export const IconWrapper = styled('span')<WrapperProps>`
  ${getSize} color: ${(p: WrapperProps): string =>
  p.primaryColor || 'currentColor'};
  display: inline-block;
  fill: ${(p: WrapperProps): string => p.secondaryColor || '#FFF'};
  flex-shrink: 0;
  line-height: 1;
  > svg {
    ${getSize} max-height: 100%;
    max-width: 100%;
    overflow: hidden;
    pointer-events: none;
    vertical-align: bottom;
  }
`;

export const Icon: React.FC<IconProps> = ({
  label,
  glyph: Glyph,
  primaryColor,
  secondaryColor,
  size,
}) => {
  return (
    <IconWrapper
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
      size={size}
      aria-label={label}
    >
      {Glyph ? <Glyph role="presentation" /> : null}
    </IconWrapper>
  );
};
