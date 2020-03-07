import React from 'react';
import { lch, HCLColor } from 'd3-color';
import { PROPERTIES } from '../../constants';
import { setPrecision } from '../../utilities';
import { updateColor } from '../../utilities/palette';
import { ExtendedShade } from '../../palettes';

interface ColorManagerProps {
  selectedColor: ExtendedShade | undefined;
  updateSelectedColor: any;
}

const ADJUSTMENTS = new Map([
  ['large', 10],
  ['medium', 1],
  ['small', 0.1],
]);

const Updater: React.FC<{
  direction: number;
  property: string;
  selectedColor: ExtendedShade;
  updateSelectedColor: (ExtendedShade) => any;
}> = ({ direction, property, selectedColor, updateSelectedColor }) => {
  let keys = [...ADJUSTMENTS.keys()];
  if (direction === 1) keys = keys.reverse();

  return (
    <div>
      {keys.map((adjustmentKey) => {
        const adjustment = ADJUSTMENTS.get(adjustmentKey);
        return (
          <button
            onClick={() => {
              const updatedColor = updateColor({
                adjustment,
                color: selectedColor,
                direction,
                property,
              });
              updateSelectedColor(updatedColor);
            }}
            key={adjustment}
          >
            {direction === 1 ? `>` : `<`}
          </button>
        );
      })}
    </div>
  );
};

export const ColorManager: React.FC<ColorManagerProps> = ({
  selectedColor,
  updateSelectedColor,
}) => {
  if (!selectedColor) return null;
  const { hex, lch } = selectedColor;

  return (
    <React.Fragment>
      <div style={{ backgroundColor: hex, height: 200, width: 200 }} />
      <div
        style={{
          display: 'inline-flex',
          flexDirection: 'column',
        }}
      >
        {PROPERTIES.map((property) => {
          return (
            <div
              key={property}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Updater
                direction={-1}
                selectedColor={selectedColor}
                updateSelectedColor={updateSelectedColor}
                property={property}
              />
              {property.toUpperCase()}: {setPrecision(lch[property])}
              <Updater
                direction={1}
                selectedColor={selectedColor}
                updateSelectedColor={updateSelectedColor}
                property={property}
              />
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};
