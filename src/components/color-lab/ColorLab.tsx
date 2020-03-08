/** @jsx jsx */
import * as React from 'react';
import { jsx } from '@emotion/core';
import { Color as d3Color } from 'd3-color';
import { Layout } from '.';
import { colLeft, colRight, leftWrapper, rightWrapper } from './styled';
import { Header } from '../header';
import { Color } from '../color';
import { ColorManager } from '../color-manager';
import { Palette } from '../palette';
import { Shade } from '../shade';
import { Tambium, ExtendedShade } from '../../palettes';
import { SHADE, SHADE_SET } from '../../constants';
import {
  extendPalette,
  getRandomItem,
  mapPalette,
  uniformPalette,
} from '../../utilities';
import { useMultiKeyPress } from '../../hooks';

interface ColorLabProps {}

export const ColorLab: React.FC<ColorLabProps> = () => {
  const [palette, setPalette] = React.useState(
    extendPalette(mapPalette(uniformPalette(Tambium))),
  );

  const [position, setPosition] = React.useState(new Map());

  React.useEffect(() => {
    /** On-mount, we select a random shade-set and shade. */
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

  const getSelectedColor = (): ExtendedShade => {
    return palette.get(position.get(SHADE_SET))?.get(position.get(SHADE));
  };

  const updateSelectedColor = (updatedColor: ExtendedShade) => {
    const cp = new Map(palette);
    const selectedShadeSetMap = cp.get(selectedShadeSet);

    if (cp && selectedShadeSetMap) {
      selectedShadeSetMap.set(selectedShade, updatedColor);
      setPalette(cp);
    }
  };

  return (
    <React.Fragment>
      <Header />
      <Layout
        columnA={
          <div css={leftWrapper}>
            <div style={{ marginBottom: 24 }}>
              <Palette
                palette={palette}
                selectedShade={selectedShade}
                selectedShadeSet={selectedShadeSet}
                setPosition={setPosition}
              />
            </div>
            <ColorManager
              selectedColor={getSelectedColor()}
              updateSelectedColor={updateSelectedColor}
            />
          </div>
        }
        columnB={
          <div css={rightWrapper}>
            <div css={colLeft}>
              <Color
                palette={palette}
                selectedShade={selectedShade}
                selectedShadeSet={selectedShadeSet}
              />
            </div>
            <div css={colRight}>
              <Shade
                palette={palette}
                selectedShade={selectedShade}
                selectedShadeSet={selectedShadeSet}
              />
            </div>
          </div>
        }
      />
    </React.Fragment>
  );
};
