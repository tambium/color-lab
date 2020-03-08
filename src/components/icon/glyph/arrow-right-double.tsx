import React from 'react';

import { Icon } from '../Icon';

export const ArrowRightDouble = (props) => {
  return (
    <Icon
      glyph={() => (
        <svg width={24} height={24} viewBox="0 0 24 24">
          <g fill="currentColor" fillRule="nonzero">
            <path d="M20.303 12.896l-6.881 6.894a.565.565 0 01-.797 0l-.928-.922a.557.557 0 010-.792l5.555-5.576-5.555-5.576a.557.557 0 010-.792l.928-.922a.565.565 0 01.797 0l6.881 6.894c.22.219.22.573 0 .792z" />
            <path d="M12.803 12.896L5.922 19.79a.565.565 0 01-.797 0l-.928-.922a.557.557 0 010-.792L9.752 12.5 4.197 6.924a.557.557 0 010-.792l.928-.922a.565.565 0 01.797 0l6.881 6.894c.22.219.22.573 0 .792z" />
          </g>
        </svg>
      )}
      {...props}
    />
  );
};
