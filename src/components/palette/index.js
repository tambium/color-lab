import React from "react";
import { contrastRatio } from "chromatism";
import isEqual from "lodash.isequal";
import { hex } from "wcag-contrast";

const SHADE_WIDTH = 54;
const PADDING = 6;
const BORDER_WIDTH = 2;

export const Palette = ({ palette }) => {
  const firstShadeSet = palette[0];

  const [position, setPosition] = React.useState([5, 5]);
  const [keysPressed, setKeysPressed] = React.useState({});

  React.useEffect(() => {
    if (keysPressed["Shift"] && keysPressed["ArrowUp"]) {
      setPosition(p => (p[1] > 0 ? [p[0], p[1] - 1] : p));
    }
    if (keysPressed["Shift"] && keysPressed["ArrowDown"]) {
      setPosition(p => (p[1] < palette.length - 1 ? [p[0], p[1] + 1] : p));
    }
    if (keysPressed["Shift"] && keysPressed["ArrowLeft"]) {
      setPosition(p => {
        return p[0] > 0 ? [p[0] - 1, p[1]] : p;
      });
    }
    if (keysPressed["Shift"] && keysPressed["ArrowRight"]) {
      setPosition(p => {
        return palette[p[0]] && p[0] < palette[p[0]].shades.length - 1
          ? [p[0] + 1, p[1]]
          : p;
      });
    }
  }, [keysPressed, palette, palette.length]);

  React.useEffect(() => {
    const handleKeyDown = ({ key }) => {
      setKeysPressed({ ...keysPressed, [key]: true });
    };

    const handleKeyUp = ({ key }) => {
      setKeysPressed({ ...keysPressed, [key]: false });
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [keysPressed]);

  return (
    <div>
      <table style={{ borderSpacing: 0 }}>
        <thead>
          <tr>
            <th />
            {firstShadeSet.shades.map(shade => (
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
          {palette.map(shadeSet => {
            const yCoord = palette.findIndex(x => x === shadeSet);

            return (
              <tr key={shadeSet.title}>
                <td
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginRight: 8,
                    width: 40
                  }}
                >
                  <span
                    style={{
                      color: "#8992A1",
                      fontSize: 12,
                      fontWeight: 500,
                      paddingBottom: PADDING + BORDER_WIDTH,
                      paddingTop: PADDING + BORDER_WIDTH
                    }}
                  >
                    {shadeSet.title}
                  </span>
                </td>

                {shadeSet.shades.map((shade, idx) => {
                  const coordinates = [idx, yCoord];

                  const isSelected = isEqual(coordinates, position);

                  /**
                   * `shade` may be `{}` if palette has been manipulated
                   * to support shade sets of varying length.
                   * Otherwise, expect { hex: string, shade: number };
                   */
                  const textColor = shade.hex
                    ? contrastRatio(shade.hex).hex
                    : "transparent";

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
                          color: textColor,
                          fontSize: 12,
                          fontWeight: 500
                        }}
                      >
                        {shade.hex ? hex(textColor, shade.hex).toFixed(2) : "X"}
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
