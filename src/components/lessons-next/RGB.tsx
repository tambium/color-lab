import React from 'react';
import { convert } from 'chromatism';

const RGB_DATA = [
  '#8C98A8',
  '#7E95ED',
  '#69B1E0',
  '#71CC97',
  '#EBC073',
  '#E79E6C',
  '#E77D67',
  '#C987D1',
  '#A28EDF',
];

interface SwatchProps {
  backgroundColor: string;
  height?: number;
  width?: number;
}

const Swatch: React.FC<SwatchProps> = ({
  backgroundColor,
  height = 24,
  width = 24,
}) => (
  <div
    style={{
      backgroundColor,
      height,
      width,
    }}
  />
);

export const RGB: React.FC = () => {
  return (
    <div>
      <span
        style={{
          display: 'block',
          fontSize: 14,
          fontWeight: 500,
        }}
      >
        RGB
      </span>
      <div
        style={{
          backgroundColor: '#F8FAFC',
          display: 'inline-flex',
          padding: 48,
          marginBottom: 48,
        }}
      >
        {RGB_DATA.map((color, idx) => {
          const isLast = idx === RGB_DATA.length - 1;
          const rgb = convert(color).rgb;
          return (
            <div key={color} style={{ marginRight: isLast ? undefined : 24 }}>
              <div style={{ display: 'flex', marginBottom: 48 }}>
                <Swatch backgroundColor={`rgb(${rgb.r}, 0, 0)`} width={8} />
                <Swatch backgroundColor={`rgb(0, ${rgb.g}, 0)`} width={8} />
                <Swatch backgroundColor={`rgb(0, 0, ${rgb.b})`} width={8} />
              </div>
              <Swatch backgroundColor={color} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
