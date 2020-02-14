import React from "react";
import { hexToHsluv } from "hsluv";
import { CartesianGrid, Line, LineChart } from "recharts";
import { BORDER_WIDTH, PADDING, SHADE_WIDTH } from "../../constants";

export const Color = ({ palette, palettePosition }) => {
  const shadeSet = palette[palettePosition[1]];
  const { title } = shadeSet;

  let lightness = [];
  shadeSet.shades.map(shade => {
    lightness.push({
      shade: shade.shade,
      lightness: hexToHsluv(shade.hex)[2]
    });
  });

  return (
    <React.Fragment>
      <div style={{ marginBottom: 16 }}>
        <span style={{ fontSize: 21 }}>{title}</span>
      </div>
      <table style={{ borderSpacing: 0, marginBottom: 32 }}>
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
      <div style={{ marginBottom: 16 }}>
        <span style={{ fontWeight: 500 }}>Lightness</span>
      </div>
      <div
        style={{
          backgroundColor: "#F9FAFC",
          border: "1px solid #E7E7E9",
          width: 540
        }}
      >
        <table style={{ borderSpacing: 0, borderBottom: "1px solid #E7E7E9" }}>
          <tbody>
            <tr>
              {lightness.map(shade => (
                <td
                  key={shade.shade}
                  style={{
                    minWidth: SHADE_WIDTH,
                    paddingBottom: PADDING,
                    paddingTop: PADDING,
                    textAlign: "center"
                  }}
                >
                  <span
                    style={{
                      color: "#8992A1",
                      fontSize: 12,
                      fontWeight: 500
                    }}
                  >
                    {shade.lightness.toFixed(1)}
                  </span>
                </td>
              ))}
            </tr>
          </tbody>
        </table>

        <LineChart
          background="red"
          data={lightness}
          width={540}
          height={175}
          margin={{
            right: 27,
            left: 27
          }}
        >
          <CartesianGrid stroke="none" />
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="lightness"
            stroke="#8884d8"
            strokeWidth={2}
          />
        </LineChart>
      </div>
    </React.Fragment>
  );
};
