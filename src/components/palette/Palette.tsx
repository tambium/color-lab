import React from 'react';
import { hex } from 'wcag-contrast';

interface PaletteProps {
  palette: Map<string, Map<number, string>>;
  selectedShade: number;
  selectedShadeSet: string;
}

export const Palette: React.FC<PaletteProps> = ({
  palette,
  selectedShade,
  selectedShadeSet,
}) => {
  // Palettes are made uniform in length so we can pluck any for headers.
  const FIRST_SHADE_SET = [...Array.from(palette)][0][1];

  const PALETTE_SIZE = palette.size;
  const SHADE_SET_SIZE = FIRST_SHADE_SET.size;

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <span style={{ fontSize: 21 }}>Tambium colors</span>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `auto repeat(${SHADE_SET_SIZE}, 1fr)`,
          gridTemplateRows: `28px repeat(${PALETTE_SIZE}, 36px)`,
        }}
      >
        {[null, ...FIRST_SHADE_SET.keys()].map((key, idx) => (
          <div key={key || idx}>
            <span style={{ fontSize: 12, fontWeight: 500 }}>{key}</span>
          </div>
        ))}
        {[...palette.keys()].map((shadeSetName: string) => {
          const shadeSet = palette.get(shadeSetName);
          const shadeSetKeys = [...shadeSet.keys()];

          return [null, ...shadeSetKeys].map(
            (shadeSetShade: number | null, idx) => {
              const isSelected =
                selectedShade === shadeSetShade &&
                selectedShadeSet === shadeSetName;

              const color = shadeSet.get(shadeSetShade) || null;
              const hasColor = !!color;

              let comparitor;
              if (shadeSetShade >= 300) {
                comparitor = shadeSetKeys[idx - 1 - 5] || shadeSetKeys[0];
              } else {
                comparitor =
                  shadeSetKeys[idx - 1 + 5] ||
                  shadeSetKeys[shadeSetKeys.length - 1];
              }

              const ratio = hasColor
                ? hex(color, shadeSet.get(comparitor))
                : null;

              return (
                <div
                  key={shadeSetShade || idx}
                  style={{
                    alignItems: 'center',
                    backgroundColor: color,
                    border: `2px solid ${isSelected ? '#fff' : 'transparent'}`,
                    display: 'flex',
                    justifyContent: hasColor ? 'center' : 'flex-end',
                  }}
                >
                  <span
                    style={{
                      color: shadeSet.get(comparitor),
                      fontSize: 12,
                      fontWeight: 500,
                    }}
                  >
                    {ratio ? ratio.toFixed(2) : shadeSetName}
                  </span>
                </div>
              );
            },
          );
        })}
      </div>
    </div>
  );
};
