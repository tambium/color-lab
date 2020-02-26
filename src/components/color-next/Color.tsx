import React from 'react';
import { lch as d3lch } from 'd3-color';
import { RANGES, PRECISION } from '../../constants';
import { findDisplayableBoundaries, setPrecision } from '../../utilities';

interface ColorProps {
  palette: Map<string, Map<number, string>>;
  selectedShadeSet: string | null;
}

const CHART_HEIGHT = 140;

export const Color: React.FC<ColorProps> = ({ palette, selectedShadeSet }) => {
  const shadeSet = palette.get(selectedShadeSet);
  if (!shadeSet) return null;

  const SHADE_SET_SIZE = shadeSet.size;

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <span style={{ fontSize: 21 }}>{selectedShadeSet}</span>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${SHADE_SET_SIZE}, 1fr)`,
          gridTemplateRows: '28px 36px',
          position: 'relative',
          marginBottom: 24,
        }}
      >
        {[...shadeSet.keys()].map((key) => {
          return (
            <div key={key}>
              <span style={{ fontSize: 12, fontWeight: 500 }}>{key}</span>
            </div>
          );
        })}
        {[...shadeSet.keys()].map((key) => {
          const color = shadeSet.get(key);
          return <div key={key} style={{ backgroundColor: color }} />;
        })}
      </div>
      {[...RANGES.keys()].map((property) => {
        return (
          <div
            key={property}
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${SHADE_SET_SIZE}, 1fr)`,
              gridTemplateRows: `28px ${CHART_HEIGHT}px`,
              position: 'relative',
              marginBottom: 24,
            }}
          >
            {[...shadeSet.keys()].map((key) => {
              const color = shadeSet.get(key);
              const lchified = d3lch(color);
              const propertyValue = setPrecision(lchified[property]);

              return (
                <div
                  key={`${property}-${key}`}
                  style={{
                    alignItems: 'center',
                    borderTop: `3px solid ${color}`,
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ fontSize: 12, fontWeight: 500 }}>
                    {propertyValue}
                  </span>
                </div>
              );
            })}
            {[...shadeSet.keys()].map((key) => {
              const color = shadeSet.get(key);
              const lchified = d3lch(color);
              const propertyValue = setPrecision(lchified[property]);

              const boundaries = findDisplayableBoundaries({
                lch: lchified,
                property,
                precision: PRECISION.get(1),
                height: CHART_HEIGHT,
              });

              return (
                <div
                  key={`${property}-${key}`}
                  style={{ position: 'relative' }}
                >
                  {boundaries.map((boundary) => {
                    const { direction, top } = boundary;
                    return (
                      <div
                        key={`${property}-${key}-${boundary.idx}`}
                        style={{
                          backgroundColor: 'red',
                          left: 0,
                          position: 'absolute',
                          top: direction === 'upward' ? 0 : `${top}%`,
                          bottom:
                            direction === 'upward' ? `calc(100% - ${top}%)` : 0,
                          right: 0,
                        }}
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
