import React from 'react';
import { lch, rgb } from 'd3-color';

interface PerceptuallyUniformProps {}

export const PerceptuallyUniform: React.FC<PerceptuallyUniformProps> = () => {
  return (
    <React.Fragment>
      {new Array(360).fill(null).map((_el, idx) => {
        const color = rgb(lch(50, 50, idx));
        const { r, g, b } = color;
        return (
          <div
            key={idx}
            style={{
              backgroundColor: `rgb(${r}, ${g}, ${b})`,
              height: 60,
              width: `${100 / 360}%`,
            }}
          />
        );
      })}
    </React.Fragment>
  );
};
