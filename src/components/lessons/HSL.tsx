import React from 'react';

interface HSLProps {}

export const HSL: React.FC<HSLProps> = () => {
  return (
    <React.Fragment>
      {new Array(360).fill(null).map((_el, idx) => {
        const hsl = `hsl(${idx}, 50%, 50%)`;
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
