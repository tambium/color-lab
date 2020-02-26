import React from 'react';
import { HSL, PerceptuallyUniform, RGB, Slider } from '.';

interface LessonsProps {}

export const Lessons: React.FC<LessonsProps> = ({}) => {
  const [lightnessSaturation, setLightnessSaturation] = React.useState(50);

  return (
    <div style={{ padding: 24 }}>
      <div style={{ marginBottom: 24 }}>
        <span
          style={{
            display: 'block',
            fontWeight: 500,
            marginBottom: 8,
          }}
        >
          Lessons
        </span>
      </div>
      <RGB />
      <div style={{ marginBottom: 24 }}>
        <span
          style={{
            display: 'block',
            fontSize: 14,
            fontWeight: 500,
            marginBottom: 8,
          }}
        >
          Lightness and saturation
        </span>
        <Slider
          onChange={(e) => setLightnessSaturation(Number(e.target.value))}
          value={lightnessSaturation}
        />
      </div>
      <HSL lightnessSaturation={lightnessSaturation} />
      <PerceptuallyUniform lightnessSaturation={lightnessSaturation} />
    </div>
  );
};
