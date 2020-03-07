import * as React from 'react';
import { hex as wcagHex } from 'wcag-contrast';
import { ColorCell } from './styled';
import { ExtendedShade } from '../../palettes';

interface PaletteProps {
  palette: Map<string, Map<number, ExtendedShade>>;
  selectedShade: number;
  selectedShadeSet: string;
  setPosition: any;
}

export const Palette: React.FC<PaletteProps> = ({
  palette,
  selectedShade,
  selectedShadeSet,
  setPosition,
}) => {
  // Palettes are made uniform in length so we can pluck any for headers.
  const FIRST_SHADE_SET = [...Array.from(palette)][0][1];

  const PALETTE_SIZE = palette.size;
  const SHADE_SET_SIZE = FIRST_SHADE_SET.size;

  return (
    <React.Fragment>
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
              const { hex } = color || {};
              const hasColor = !!color;

              let comparitor;
              if (shadeSetShade >= 300) {
                comparitor = shadeSetKeys[idx - 1 - 5] || shadeSetKeys[0];
              } else {
                comparitor =
                  shadeSetKeys[idx - 1 + 5] ||
                  shadeSetKeys[shadeSetKeys.length - 1];
              }

              const { hex: hexComparitor } = shadeSet.get(comparitor) || {};

              const ratio = hasColor ? wcagHex(hex, hexComparitor) : null;

              return (
                <div
                  key={shadeSetShade || idx}
                  // onClick={() => {
                  //   if (hasColor) {
                  //     setPosition(
                  //       new Map<any, any>([
                  //         [SHADE_SET, shadeSetName],
                  //         [SHADE, shadeSetShade],
                  //       ]),
                  //     );
                  //   }
                  // }}
                  style={{
                    alignItems: 'center',
                    backgroundColor: hex,
                    border: `2px solid ${isSelected ? '#fff' : 'transparent'}`,
                    cursor: hasColor ? 'pointer' : undefined,
                    display: 'flex',
                    justifyContent: hasColor ? 'center' : 'flex-end',
                  }}
                >
                  <ColorCell
                    color={hasColor ? shadeSet.get(comparitor).hex : null}
                  >
                    {hasColor ? ratio.toFixed(2) : shadeSetName}
                  </ColorCell>
                </div>
              );
            },
          );
        })}
      </div>
    </React.Fragment>
  );
};
