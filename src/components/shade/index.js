import React from "react";
import { BORDER_WIDTH, PADDING, SHADE_WIDTH } from "../../constants";

export const Shade = ({ palette, palettePosition }) => {
  const selectedShade = palette[palettePosition[1]].shades[palettePosition[0]];
  const { shade } = selectedShade;

  return (
    <React.Fragment>
      <div style={{ marginBottom: 16 }}>
        <span style={{ fontSize: 21 }}>{shade}</span>
      </div>
      <table style={{ borderSpacing: 0 }}>
        <thead>
          <tr>
            {palette.map(colorSet => {
              return (
                <th key={colorSet.title} style={{ paddingBottom: 8 }}>
                  <span
                    style={{
                      color: "#8992A1",
                      fontSize: 12,
                      fontWeight: 500
                    }}
                  >
                    {colorSet.title}
                  </span>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {palette.map((colorSet, idx) => {
              const target = colorSet.shades[palettePosition[0]];
              const isSelected = palette[palettePosition[1]] === colorSet;
              return (
                <td
                  key={idx}
                  style={{
                    backgroundColor: target.hex ? target.hex : "transparent",
                    border: isSelected
                      ? `${BORDER_WIDTH}px solid #FFF`
                      : `${BORDER_WIDTH}px solid transparent`,
                    minWidth: SHADE_WIDTH,
                    paddingBottom: PADDING,
                    paddingTop: PADDING,
                    textAlign: "center"
                  }}
                >
                  <span
                    style={{
                      color: "transparent",
                      fontSize: 12,
                      fontWeight: 500
                    }}
                  >
                    -
                  </span>
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};
