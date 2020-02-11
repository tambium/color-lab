import React from "react";
import { contrastRatio } from "chromatism";
import { hex } from "wcag-contrast";

/** Sort palette from lightest shade to darkest shade */
const sortShades = shades => shades.sort((a, b) => a.shade - b.shade);

/** Find palette with greatest number of shades */
const largestSet = palette => {
  let largest = { shades: [] };
  palette.forEach(set => {
    largest = set.shades.length > largest.shades.length ? set : largest;
  });
  return largest;
};

/** Fill set to match longest shade set  */
const fillShades = ({ shades, targetLength }) => {
  if (shades.length === targetLength) return shades;

  const toAdd = targetLength - shades.length;
  shades.unshift(new Array(toAdd).fill(null));

  return shades;
};

const SHADE_WIDTH = 54;

export const Palette = ({ palette }) => {
  const largest = largestSet(palette);

  return (
    <div>
      <table style={{ borderSpacing: 0 }}>
        <thead>
          <tr>
            <th />
            {sortShades(largest.shades).map(shade => (
              <th key={shade.shade} style={{ paddingBottom: 8 }}>
                <span
                  style={{ color: "#8992A1", fontSize: 12, fontWeight: 500 }}
                >
                  {shade.shade}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {palette.map(color => {
            const adjustedShades = fillShades({
              shades: sortShades(color.shades),
              targetLength: largest.shades.length
            });

            return (
              <tr key={color.title}>
                <td
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginRight: 8,
                    width: 40
                  }}
                >
                  <span
                    style={{ color: "#8992A1", fontSize: 12, fontWeight: 500 }}
                  >
                    {color.title}
                  </span>
                </td>

                {adjustedShades.map((shade, idx) => {
                  const textColor = contrastRatio(shade.hex).hex;

                  /** Shade may be null if shades manipulated to match longest set */
                  return (
                    <td
                      key={idx}
                      style={{
                        backgroundColor: shade.hex ? shade.hex : "transparent",
                        minWidth: SHADE_WIDTH,
                        paddingBottom: 6,
                        paddingTop: 6,
                        textAlign: "center"
                      }}
                    >
                      <span
                        style={{
                          color: textColor,
                          fontSize: 12,
                          fontWeight: 500
                        }}
                      >
                        {hex(textColor, shade.hex).toFixed(2)}
                      </span>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
