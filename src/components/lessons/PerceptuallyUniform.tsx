import React from 'react';
import { hsluvToRgb } from 'hsluv';

interface PerceptuallyUniformProps {
  lightnessSaturation: number;
}

export const PerceptuallyUniform: React.FC<PerceptuallyUniformProps> = ({
  lightnessSaturation,
}) => {
  return (
    <React.Fragment>
      {new Array(360).fill(null).map((_el, idx) => {
        const colorHSLuv = (h, s, l) => {
          const rgb = hsluvToRgb([h, s, l]);
          return `rgb(${rgb[0] * 255}, ${rgb[1] * 255}, ${rgb[2] * 255})`;
        };

        return (
          <div
            key={idx}
            style={{
              backgroundColor: colorHSLuv(
                idx,
                lightnessSaturation,
                lightnessSaturation,
              ),
              height: 60,
              width: `${100 / 360}%`,
            }}
          />
        );
      })}
    </React.Fragment>
  );
};
