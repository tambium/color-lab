import React from 'react';
import { lch, HCLColor } from 'd3-color';
import { PROPERTIES } from '../../constants';
import { setPrecision } from '../../utilities';
import { updateColor } from '../../utilities/palette';

interface ColorManagerProps {
  selectedColor: string | undefined;
  updateSelectedColor: any;
}

const ADJUSTMENTS = [10, 1, 0.1];

export const ColorManager: React.FC<ColorManagerProps> = ({
  selectedColor,
  updateSelectedColor,
}) => {
  if (!selectedColor) return null;

  const { l, c, h } = lch(selectedColor);
  const preciseLchified = lch(
    setPrecision(l),
    setPrecision(c),
    setPrecision(h),
  );

  return (
    <React.Fragment>
      <div
        style={{ backgroundColor: selectedColor, height: 200, width: 200 }}
      />
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
                backgroundColor: 'red',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {ADJUSTMENTS.map((adjustment) => {
                  return (
                    <button
                      onClick={() => {
                        const updatedColor = updateColor({
                          adjustment,
                          color: preciseLchified,
                          direction: -1,
                          property,
                        });
                        updateSelectedColor(updatedColor);
                      }}
                      key={adjustment}
                    >{`<`}</button>
                  );
                })}
              </div>
              {property.toUpperCase()}:{' '}
              {setPrecision(preciseLchified[property])}
              <div>
                {ADJUSTMENTS.reverse().map((adjustment) => {
                  return (
                    <button
                      key={adjustment}
                      onClick={(): HCLColor =>
                        updateColor({
                          adjustment,
                          color: preciseLchified,
                          direction: +1,
                          property,
                        })
                      }
                    >{`>`}</button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};
