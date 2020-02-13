import React from "react";
import { convert } from "chromatism";

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
  let CIELAB = [];
  for (var j = -16; j <= 16; j++) {
    CIELAB[CIELAB.length] = j * 8;
  }
  return (
    <div
      style={{ maxWidth, marginLeft: "auto", marginRight: "auto", padding: 24 }}
    >
      <div style={{ marginBottom: 24 }}>
        <span style={{ display: "block", fontWeight: 500, marginBottom: 8 }}>
          Lessons
        </span>
        <span style={{ fontSize: 14, fontWeight: 500 }}>RGB</span>
      </div>
      <div
        style={{
          backgroundColor: "#F8FAFC",
          display: "inline-flex",
          padding: 48,
          marginBottom: 24
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
        <span style={{ fontSize: 14, fontWeight: 500 }}>HSL</span>
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
          const hsl = `hsl(${idx}, 50%, 50%)`;
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
        <span style={{ fontSize: 14, fontWeight: 500 }}>
          Perceptually uniform
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
        {/* {new Array(256 / 8).fill(null).map((el, idx) => {
          const ab = CIELAB[idx];
          const cielch = { L: 100, C: 128, h: ab };
          console.log(cielch);

          return (
            <div
              key={idx}
              style={{
                backgroundColor: convert(cielch).hex,
                height: 60,
                width: 20
              }}
            />
          );
        })} */}
        {new Array(360).fill(null).map((el, idx) => {
          const hsluv = { hu: idx, s: 60, l: 65 };

          return (
            <div
              key={idx}
              style={{
                backgroundColor: convert(hsluv).hex,
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
