import React from 'react';

interface HSLProps {
  lightnessSaturation: number;
}

export const HSL: React.FC<HSLProps> = ({ lightnessSaturation }) => {
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
          HSL
        </span>
        <span style={{ color: '#8992A1', fontSize: 14 }}>
          “Notice that some of these colors appear lighter or more saturated
          than others. For example, the blues appear especially dark and the
          yellows and greens appear especially light.”
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
          const hsl = `hsl(${idx}, ${lightnessSaturation}%, ${lightnessSaturation}%)`;
          return (
            <div
              key={idx}
              style={{
                backgroundColor: hsl,
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
