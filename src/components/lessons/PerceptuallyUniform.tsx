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
      <div style={{ marginBottom: 24 }}>
        <span
          style={{
            display: 'block',
            fontSize: 14,
            fontWeight: 500,
            marginBottom: 8,
          }}
        >
          Perceptually uniform
        </span>
        <span style={{ color: '#8992A1', fontSize: 14 }}>
          “These colors appear to blend together, and each color appears to be
          just as light and as saturated as the rest. This is perceptual
          uniformity at work.”
        </span>
      </div>
      <div
        style={{
          backgroundColor: '#F8FAFC',
          display: 'inline-flex',
          padding: 48,
          marginBottom: 24,
        }}
      >
        {new Array(360).fill(null).map((el, idx) => {
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
                width: 2,
              }}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
};
