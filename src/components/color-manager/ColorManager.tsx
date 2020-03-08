import React from 'react';
import { Badge, Button, PropertyInput } from './styled';
import { PROPERTIES } from '../../constants';
import { setPrecision } from '../../utilities';
import { updateColor } from '../../utilities/palette';
import { ExtendedShade } from '../../palettes';
import {
  ArrowRight,
  ArrowRightDouble,
  ArrowRightTriple,
} from '../../components/icon';

interface ColorManagerProps {
  selectedColor: ExtendedShade | undefined;
  updateSelectedColor: any;
}

const LARGE = 'large';
const MEDIUM = 'medium';
const SMALL = 'small';

const ADJUSTMENTS = new Map([
  [LARGE, 10],
  [MEDIUM, 1],
  [SMALL, 0.1],
]);

const ICONS = new Map([
  [LARGE, ArrowRightTriple],
  [MEDIUM, ArrowRightDouble],
  [SMALL, ArrowRight],
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
        const Icon = ICONS.get(adjustmentKey);
        return (
          <div key={adjustment} style={{ display: 'inline-flex', padding: 4 }}>
            <Button
              onClick={() => {
                const updatedColor = updateColor({
                  adjustment,
                  color: selectedColor,
                  direction,
                  property,
                });
                updateSelectedColor(updatedColor);
              }}
            >
              <div
                style={{
                  transform: direction === -1 ? 'rotate(180deg)' : null,
                }}
              >
                <Icon size="small" />
              </div>
            </Button>
          </div>
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
      <div
        style={{ display: 'flex', alignItems: 'flex-end', marginBottom: 12 }}
      >
        <div
          style={{
            backgroundColor: hex,
            height: 200,
            marginRight: 12,
            width: 200,
          }}
        />
        {!lch.displayable() && <Badge>Imaginary</Badge>}
      </div>
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
                alignItems: 'center',
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
              <PropertyInput>
                <button>{property.toUpperCase()}</button>
                <input readOnly value={setPrecision(lch[property])} />
              </PropertyInput>
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
