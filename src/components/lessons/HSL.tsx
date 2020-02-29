import React from 'react';

interface HSLProps {
  lightnessSaturation: number;
}

export const HSL: React.FC<HSLProps> = ({ lightnessSaturation }) => {
  return (
    <React.Fragment>
      {new Array(360).fill(null).map((_el, idx) => {
        const hsl = `hsl(${idx}, ${lightnessSaturation}%, ${lightnessSaturation}%)`;
        return (
          <div
            key={idx}
            style={{
              backgroundColor: hsl,
              height: 60,
              width: `${100 / 360}%`,
            }}
          />
        );
      })}
    </React.Fragment>
  );
};
