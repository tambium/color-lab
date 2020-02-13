import React from "react";

import { Header } from "./components/header";
import { Lessons } from "./components/lessons";
import { Palette } from "./components/palette";
import { Tambium } from "./palettes";

const MAX_WIDTH = 1440;

const PALETTES = {
  TAMBIUM: "Tambium"
};

function App() {
  const [palette, setPalette] = React.useState(PALETTES.TAMBIUM);

  return (
    <React.Fragment>
      <Header maxWidth={MAX_WIDTH} />
      <div
        style={{
          borderBottom: "1px solid #ECECEC",
          display: "grid",
          gridAutoColumns: "1fr",
          gridAutoFlow: "column",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: MAX_WIDTH,
          padding: 24
        }}
      >
        <div>
          <div style={{ marginBottom: 16 }}>
            <span style={{ fontSize: 21 }}>{palette} colors</span>
          </div>
          <Palette palette={Tambium} />
        </div>
        <div>Color</div>
        <div>Shade</div>
      </div>
      <Lessons maxWidth={MAX_WIDTH} />
    </React.Fragment>
  );
}

export default App;
