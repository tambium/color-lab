import React from "react";

export const Header = () => {
  return (
    <header
      style={{
        alignItems: "center",
        borderBottom: "1px solid #ECECEC",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: "auto",
        marginRight: "auto",
        padding: 24
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ marginRight: 32 }}>
          <span style={{ fontWeight: 500 }}>Colors</span>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ marginRight: 8 }}>
            <span style={{ fontSize: 14, fontWeight: 500 }}>Palette</span>
          </div>
          <select>
            <option value="tambium">Tambium</option>
          </select>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ marginRight: 8 }}>
          <button>Reset</button>
        </div>
        <button>Copy CSS</button>
      </div>
    </header>
  );
};
