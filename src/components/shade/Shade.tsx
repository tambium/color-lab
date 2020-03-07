import React from 'react';
import { ChartSet } from '../chart-set';
import { ExtendedShade } from '../../palettes';

interface ShadeProps {
  palette: Map<string, Map<number, ExtendedShade>>;
  selectedShade: number | null;
  selectedShadeSet: string | null;
}

export const Shade: React.FC<ShadeProps> = ({
  palette,
  selectedShade,
  selectedShadeSet,
}) => {
  if (!selectedShade) return null;

  const shades = new Map();
  palette.forEach((value, key, map) => {
    shades.set(key, value.get(selectedShade));
  });

  const SHADES_SIZE = shades.size;

  return (
    <React.Fragment>
      <div style={{ marginBottom: 16 }}>
        <span style={{ fontSize: 21 }}>{selectedShade}</span>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${SHADES_SIZE}, 1fr)`,
          gridTemplateRows: '28px 36px',
          position: 'relative',
          marginBottom: 24,
        }}
      >
        {[...shades.keys()].map((key) => {
          return (
            <div key={key}>
              <span style={{ fontSize: 12, fontWeight: 500 }}>{key}</span>
            </div>
          );
        })}
        {[...shades.keys()].map((key) => {
          const color = shades.get(key);
          const { hex } = color;
          const isSelected = selectedShadeSet === key;
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
      <ChartSet columnCount={SHADES_SIZE} columnData={shades} />
    </React.Fragment>
  );
};
