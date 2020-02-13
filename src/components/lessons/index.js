import React from "react";
import { convert } from "chromatism";
import { hsluvToRgb } from "hsluv";

const RGB_SET = [
  "#8C98A8",
  "#7E95ED",
  "#69B1E0",
  "#71CC97",
  "#EBC073",
  "#E79E6C",
  "#E77D67",
  "#C987D1",
  "#A28EDF"
];

export const Lessons = ({ maxWidth }) => {
  const [ls, setLS] = React.useState(50);

  return (
    <div
      style={{ maxWidth, marginLeft: "auto", marginRight: "auto", padding: 24 }}
    >
      <div style={{ marginBottom: 24 }}>
        <span
          style={{
            display: "block",
            fontWeight: 500,
            marginBottom: 8
          }}
        >
          Lessons
        </span>
        <span
          style={{
            fontSize: 14,
            fontWeight: 500
          }}
        >
          RGB
        </span>
      </div>
      <div
        style={{
          backgroundColor: "#F8FAFC",
          display: "inline-flex",
          padding: 48,
          marginBottom: 48
        }}
      >
        {RGB_SET.map((color, idx) => {
          const isLast = idx === RGB_SET.length - 1;
          const rgb = convert(color).rgb;
          return (
            <div key={color} style={{ marginRight: isLast ? undefined : 24 }}>
              <div style={{ display: "flex", marginBottom: 48 }}>
                <div
                  style={{
                    backgroundColor: `rgb(${rgb.r}, 0, 0)`,
                    width: 8,
                    height: 24
                  }}
                />
                <div
                  style={{
                    backgroundColor: `rgb(0, ${rgb.g}, 0)`,
                    width: 8,
                    height: 24
                  }}
                />
                <div
                  style={{
                    backgroundColor: `rgb(0, 0, ${rgb.b})`,
                    width: 8,
                    height: 24
                  }}
                />
              </div>
              <div style={{ backgroundColor: color, height: 24, width: 24 }} />
            </div>
          );
        })}
      </div>

      <div style={{ marginBottom: 24 }}>
        <span
          style={{
            display: "block",
            fontSize: 14,
            fontWeight: 500,
            marginBottom: 8
          }}
        >
          Lightness and saturation
        </span>
        <div style={{ alignItems: "center", display: "flex" }}>
          <input
            max="100"
            min="0"
            onChange={e => setLS(Number(e.target.value))}
            step="1"
            style={{ marginRight: 8 }}
            type="range"
            value={ls}
          />
          <span>{ls}</span>
        </div>
      </div>

      <div style={{ marginBottom: 24 }}>
        <span
          style={{
            display: "block",
            fontSize: 14,
            fontWeight: 500,
            marginBottom: 8
          }}
        >
          HSL
        </span>
        <span style={{ color: "#8992A1", fontSize: 14 }}>
          “Notice that some of these colors appear lighter or more saturated
          than others. For example, the blues appear especially dark and the
          yellows and greens appear especially light.”
        </span>
      </div>
      <div
        style={{
          backgroundColor: "#F8FAFC",
          display: "inline-flex",
          padding: 48,
          marginBottom: 24
        }}
      >
        {new Array(360).fill(null).map((el, idx) => {
          const hsl = `hsl(${idx}, ${ls}%, ${ls}%)`;
          return (
            <div
              key={idx}
              style={{
                backgroundColor: hsl,
                height: 60,
                width: 2
              }}
            />
          );
        })}
      </div>
      <div style={{ marginBottom: 24 }}>
        <span
          style={{
            display: "block",
            fontSize: 14,
            fontWeight: 500,
            marginBottom: 8
          }}
        >
          Perceptually uniform
        </span>
        <span style={{ color: "#8992A1", fontSize: 14 }}>
          “These colors appear to blend together, and each color appears to be
          just as light and as saturated as the rest. This is perceptual
          uniformity at work.”
        </span>
      </div>
      <div
        style={{
          backgroundColor: "#F8FAFC",
          display: "inline-flex",
          padding: 48,
          marginBottom: 24
        }}
      >
        {new Array(360).fill(null).map((el, idx) => {
          const colorHSLuv = (h, s, l) => {
            const rgb = hsluvToRgb([h, s, l]);
            return `rgb(${rgb[0] * 255}, ${rgb[1] * 255}, ${rgb[2] * 255})`;
          };

          return (
            <div
              key={idx}
              style={{
                backgroundColor: colorHSLuv(idx, ls, ls),
                height: 60,
                width: 2
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
