import React from "react";

import { Color } from "./components/color";
import { Header } from "./components/header";
import { Lessons } from "./components/lessons";
import { Palette } from "./components/palette";
import { Shade } from "./components/shade";
import { Tambium } from "./palettes";
import { uniformPalette } from "./utilities";

function App() {
  const [palette, setPalette] = React.useState(uniformPalette(Tambium));
  const [palettePosition, setPalettePosition] = React.useState([5, 4]);
  const [keysPressed, setKeysPressed] = React.useState({});

  React.useEffect(() => {
    if (keysPressed["Shift"] && keysPressed["ArrowUp"]) {
      setPalettePosition(p => (p[1] > 0 ? [p[0], p[1] - 1] : p));
    }
    if (keysPressed["Shift"] && keysPressed["ArrowDown"]) {
      setPalettePosition(p =>
        p[1] < palette.length - 1 ? [p[0], p[1] + 1] : p
      );
    }
    if (keysPressed["Shift"] && keysPressed["ArrowLeft"]) {
      setPalettePosition(p => {
        return p[0] > 0 ? [p[0] - 1, p[1]] : p;
      });
    }
    if (keysPressed["Shift"] && keysPressed["ArrowRight"]) {
      setPalettePosition(p => {
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
    <React.Fragment>
      <Header />
      <div
        style={{
          borderBottom: "1px solid #ECECEC",
          columnGap: 60,
          display: "grid",
          gridAutoColumns: "1fr",
          gridAutoFlow: "column",
          marginLeft: "auto",
          marginRight: "auto",
          padding: 24
        }}
      >
        <div>
          <div style={{ marginBottom: 16 }}>
            <span style={{ fontSize: 21 }}>Tambium colors</span>
          </div>
          <Palette palette={palette} palettePosition={palettePosition} />
        </div>
        <div>
          <Color palette={palette} palettePosition={palettePosition} />
        </div>
        <div>
          <Shade palette={palette} palettePosition={palettePosition} />
        </div>
      </div>
      <Lessons />
    </React.Fragment>
  );
}

export default App;
