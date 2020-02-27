import * as React from 'react';
import { Layout } from '.';
import { Header } from '../header';
import { Color } from '../color';
import { Palette } from '../palette';
import { Shade } from '../shade';
import { Tambium } from '../../palettes';
import { SHADE, SHADE_SET } from '../../constants';
import { getRandomItem, mapPalette, uniformPalette } from '../../utilities';
import { useMultiKeyPress } from '../../hooks';

interface ColorLabProps {}

export const ColorLab: React.FC<ColorLabProps> = () => {
  const [palette, setPalette] = React.useState(
    mapPalette(uniformPalette(Tambium)),
  );

  const [position, setPosition] = React.useState(new Map());

  React.useEffect(() => {
    /** On-mount, we select a random shade set and shade. */
    const randomShadeSetKey = getRandomItem(palette);
    const randomShadeKey = getRandomItem(palette.get(randomShadeSetKey));

    setPosition(
      new Map([
        [SHADE_SET, randomShadeSetKey],
        [SHADE, randomShadeKey],
      ]),
    );
  }, []);

  /** Palette navigation helpers */
  const selectedShade = position.get(SHADE);
  const selectedShadeSet = position.get(SHADE_SET);
  const paletteKeys = [...palette.keys()];
  const shadeSetKeys = selectedShadeSet
    ? [...palette.get(selectedShadeSet).keys()]
    : undefined;
  const selectedShadeSetIdx = paletteKeys.findIndex(
    (x) => x === selectedShadeSet,
  );
  const selectedShadeIdx = shadeSetKeys
    ? shadeSetKeys.findIndex((x) => x === selectedShade)
    : undefined;

  // Navigate palette left
  useMultiKeyPress(['shift+up'], (e) => {
    if (selectedShadeSetIdx !== 0) {
      const cp = new Map(position);
      cp.set(SHADE_SET, paletteKeys[selectedShadeSetIdx - 1]);
      setPosition(cp);
    }
  });

  // Navigate palette down
  useMultiKeyPress(['shift+down'], (e) => {
    if (selectedShadeSetIdx < paletteKeys.length - 1) {
      const cp = new Map(position);
      cp.set(SHADE_SET, paletteKeys[selectedShadeSetIdx + 1]);
      setPosition(cp);
    }
  });

  // Navigate palette left
  useMultiKeyPress(['shift+left'], (e) => {
    if (selectedShadeIdx && selectedShadeIdx !== 0) {
      const cp = new Map(position);
      cp.set(SHADE, shadeSetKeys[selectedShadeIdx - 1]);
      setPosition(cp);
    }
  });

  // Navigate palette right
  useMultiKeyPress(['shift+right'], (e) => {
    if (shadeSetKeys && selectedShadeIdx < shadeSetKeys.length - 1) {
      const cp = new Map(position);
      cp.set(SHADE, shadeSetKeys[selectedShadeIdx + 1]);
      setPosition(cp);
    }
  });

  return (
    <React.Fragment>
      <Header />
      <Layout
        columnA={
          <Palette
            palette={palette}
            selectedShade={selectedShade}
            selectedShadeSet={selectedShadeSet}
          />
        }
        columnB={
          <Color
            palette={palette}
            selectedShade={selectedShade}
            selectedShadeSet={selectedShadeSet}
          />
        }
        columnC={
          <Shade
            palette={palette}
            selectedShade={selectedShade}
            selectedShadeSet={selectedShadeSet}
          />
        }
        // columnA={<Palette palette={palette} position={position} />}
        // columnB={<Color palette={palette} position={position} />}
        // columnC={<Shade palette={palette} position={position} />}
      />
    </React.Fragment>
  );
};
