import React from 'react';

interface ShadeProps {
  palette: Map<string, Map<number, string>>;
  selectedShade: number | null;
}

export const Shade: React.FC<ShadeProps> = ({ palette, selectedShade }) => {
  if (!selectedShade) return null;

  const shades = new Map();
  palette.forEach((value, key, map) => {
    shades.set(key, value.get(selectedShade));
  });

  const SHADES_SIZE = shades.size;

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <span style={{ fontSize: 21 }}>{selectedShade}</span>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${SHADES_SIZE}, 1fr)`,
          gridTemplateRows: '24px 140px',
          position: 'relative',
        }}
      ></div>
    </div>
  );
};
