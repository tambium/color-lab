import * as React from 'react';
import { lch as d3lch } from 'd3-color';
import {
  CHART_HEIGHT,
  RANGES,
  PROPERTY_NAMES,
  PRECISION,
} from '../../constants';
import { setPrecision, findDisplayableBoundaries } from '../../utilities';

interface ChartSetProps {
  columnCount: number;
  columnData: Map<any, any>;
}

export const ChartSet = React.memo<ChartSetProps>(
  ({ columnCount, columnData }) => {
    return (
      <React.Fragment>
        {[...RANGES.keys()].map((property) => {
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
                {[...columnData.keys()].map((key, idx) => {
                  const color = columnData.get(key);
                  const lchified = d3lch(color);
                  const propertyValue = setPrecision(lchified[property]);

                  const isFirst = idx === 0;
                  const isLast = idx === [...columnData.keys()].length - 1;

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
                      }}
                    >
                      <span style={{ fontSize: 12, fontWeight: 500 }}>
                        {propertyValue}
                      </span>
                    </div>
                  );
                })}
                {[...columnData.keys()].map((key, idx) => {
                  const color = columnData.get(key);
                  const lchified = d3lch(color);

                  const boundaries = findDisplayableBoundaries({
                    lch: lchified,
                    property,
                    precision: PRECISION.get(1),
                    height: CHART_HEIGHT,
                  });

                  const isFirst = idx === 0;
                  const isLast = idx === [...columnData.keys()].length - 1;

                  return (
                    <div
                      key={`${property}-${key}`}
                      style={{
                        borderBottom: '1px solid #CAD2DA',
                        borderLeft: isFirst ? '1px solid #CAD2DA' : null,
                        borderRight: isLast ? '1px solid #CAD2DA' : null,
                        borderTop: '1px solid #CAD2DA',
                        position: 'relative',
                      }}
                    >
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
                              borderTop: top === 0 ? null : '1px solid #CAD2DA',
                              bottom: `calc(100% - ${bottom}%)`,
                              left: 0,
                              position: 'absolute',
                              right: 0,
                              top: `${top}%`,
                            }}
                          />
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  },
);
