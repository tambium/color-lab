import * as React from 'react';
import { lch as d3lch } from 'd3-color';
import {
  CHART_HEIGHT,
  LOWER_BOUND,
  PRECISION,
  PROPERTY_NAMES,
  RANGES,
  UPPER_BOUND,
} from '../../constants';
import { setPrecision, findDisplayableBoundaries } from '../../utilities';

interface ChartSetProps {
  columnCount: number;
  columnData: Map<any, any>;
}

export const ChartSet: React.FC<ChartSetProps> = ({
  columnCount,
  columnData,
}) => {
  const columnDataKeys = [...columnData.keys()];

  return (
    <React.Fragment>
      {[...RANGES.keys()].map((property) => {
        const range =
          RANGES.get(property).get(UPPER_BOUND) -
          RANGES.get(property).get(LOWER_BOUND);

        return (
          <React.Fragment key={property}>
            <div style={{ fontWeight: 500, marginBottom: 8 }}>
              {PROPERTY_NAMES.get(property)}
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
                gridTemplateRows: `28px ${CHART_HEIGHT}px`,
                position: 'relative',
                marginBottom: 24,
              }}
            >
              {columnDataKeys.map((key, idx) => {
                const color = columnData.get(key).hex;

                const lchified = d3lch(color);
                const propertyValue = setPrecision(lchified[property]);

                const isFirst = idx === 0;
                const isLast = idx === columnDataKeys.length - 1;

                return (
                  <div
                    key={`${property}-${key}`}
                    style={{
                      alignItems: 'center',
                      borderLeft: isFirst ? '1px solid #CAD2DA' : null,
                      borderRight: isLast ? '1px solid #CAD2DA' : null,
                      borderTop: `3px solid ${color}`,
                      display: 'flex',
                      justifyContent: 'center',
                      minWidth: 36,
                    }}
                  >
                    <span style={{ fontSize: 12, fontWeight: 500 }}>
                      {propertyValue}
                    </span>
                  </div>
                );
              })}
              {columnDataKeys.map((key, idx) => {
                const color = columnData.get(key);
                const { hex, lch } = color;

                const boundaries = findDisplayableBoundaries({
                  lch,
                  property,
                  precision: PRECISION.get(0),
                  height: CHART_HEIGHT,
                });

                const isFirst = idx === 0;
                const isLast = idx === columnDataKeys.length - 1;

                const colorBottom = (lch[property] / range) * 100;

                return (
                  <React.Fragment key={`${property}-${key}`}>
                    <div
                      style={{
                        borderBottom: '1px solid #CAD2DA',
                        borderLeft: isFirst ? '1px solid #CAD2DA' : null,
                        borderRight: isLast ? '1px solid #CAD2DA' : null,
                        borderTop: '1px solid #CAD2DA',
                        position: 'relative',
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          backgroundColor: hex,
                          left: 0,
                          right: 0,
                          marginLeft: 'auto',
                          marginRight: 'auto',
                          width: 10,
                          height: 10,
                          bottom: `calc(${colorBottom}% - 5px)`,
                          borderRadius: 5,
                          border: '1px solid #FFF',
                          boxShadow: '#CAD2DA 0px 0px 0px 1px',
                          zIndex: 10,
                        }}
                      />
                      {boundaries.map((boundary) => {
                        const { bottom, top } = boundary;
                        return (
                          <div
                            key={`${property}-${key}-${boundary.idx}`}
                            style={{
                              backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc1JyBoZWlnaHQ9JzUnPgogIDxyZWN0IHdpZHRoPSc1JyBoZWlnaHQ9JzUnIGZpbGw9J3doaXRlJy8+CiAgPHBhdGggZD0nTTAgNUw1IDBaTTYgNEw0IDZaTS0xIDFMMSAtMVonIHN0cm9rZT0nIzg4OCcgc3Ryb2tlLXdpZHRoPScxJy8+Cjwvc3ZnPg==")`,
                              backgroundRepeat: 'repeat',
                              borderBottom:
                                bottom === 100 ? null : '1px solid #CAD2DA',
                              borderLeft: '1px solid #CAD2DA',
                              borderRight: '1px solid #CAD2DA',
                              borderTop: top === 0 ? null : '1px solid #CAD2DA',
                              bottom: `calc(100% - ${bottom}%)`,
                              left: 0,
                              marginLeft: 0.5,
                              marginRight: 0.5,
                              position: 'absolute',
                              right: 0,
                              top: `${top}%`,
                            }}
                          />
                        );
                      })}
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};
