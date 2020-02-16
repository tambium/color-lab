import React from 'react';

interface SliderProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
  value: number;
}

export const Slider: React.FC<SliderProps> = ({ value, onChange }) => {
  return (
    <div style={{ alignItems: 'center', display: 'flex' }}>
      <input
        max="100"
        min="0"
        onChange={(e) => onChange(e)}
        step="1"
        style={{ marginRight: 8 }}
        type="range"
        value={value}
      />
      <span>{value}</span>
    </div>
  );
};
