import React from "react";
import { BORDER_WIDTH, PADDING, SHADE_WIDTH } from "../../constants";

export const Color = ({ palette, palettePosition }) => {
  const shadeSet = palette[palettePosition[1]];
  const { title } = shadeSet;

  return (
    <React.Fragment>
      <div style={{ marginBottom: 16 }}>
        <span style={{ fontSize: 21 }}>{title}</span>
      </div>
      <table style={{ borderSpacing: 0 }}>
        <thead>
          <tr>
            {shadeSet.shades.map(shade => (
              <th key={shade.shade} style={{ paddingBottom: 8 }}>
                <span
                  style={{
                    color: "#8992A1",
                    fontSize: 12,
                    fontWeight: 500
                  }}
                >
                  {shade.shade}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {shadeSet.shades.map((shade, idx) => {
              const isSelected = palettePosition[0] === idx;

              return (
                <td
                  key={idx}
                  style={{
                    backgroundColor: shade.hex ? shade.hex : "transparent",
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
