import React from "react";

import { Header } from "./components/header";
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
    </React.Fragment>
  );
}

export default App;
