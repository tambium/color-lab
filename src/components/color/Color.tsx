import React from 'react';
import { ChartSet } from '../chart-set';
import { ExtendedShade } from '../../palettes';

interface ColorProps {
  palette: Map<string, Map<number, ExtendedShade>>;
  selectedShade: number;
  selectedShadeSet: string | null;
}

export const Color: React.FC<ColorProps> = ({
  palette,
  selectedShade,
  selectedShadeSet,
}) => {
  const shadeSet = palette.get(selectedShadeSet);
  if (!shadeSet) return null;

  const SHADE_SET_SIZE = shadeSet.size;

  return (
    <React.Fragment>
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
          const { hex } = color;
          const isSelected = selectedShade === key;

          return (
            <div
              key={key}
              style={{
                backgroundColor: hex,
                border: `2px solid ${isSelected ? '#FFF' : 'transparent'}`,
              }}
            />
          );
        })}
      </div>
      <ChartSet columnCount={SHADE_SET_SIZE} columnData={shadeSet} />
    </React.Fragment>
  );
};
