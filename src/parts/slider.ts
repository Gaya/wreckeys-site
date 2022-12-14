import { nanoid } from 'nanoid';

import lines from './lines';

const defaultOptions = { length: 60 };

export function sliderPart(opts?: Partial<SliderPart['options']>): SliderPart {
  const options = {
    length: typeof opts?.length === 'undefined'
      ? defaultOptions.length : opts?.length,
  };

  return {
    id: nanoid(),
    name: 'Slider',
    type: 'slider',
    width() {
      return 7.5;
    },
    height() {
      return this.options.length;
    },
    rotation: 0,
    offsetX: 0,
    offsetY: 0,
    options,
    generateLines() {
      const drillHoleRadius = 2.2 / 2;

      return [
        {
          id: 'mechanism',
          isGuide: true,
          type: 'rect',
          position: { x: 0, y: 0 },
          width: this.width(),
          height: this.height(),
          radius: 0,
        },
        {
          id: 'drill_hole_1',
          type: 'circle',
          position: {
            x: this.width() / 2,
            y: 2,
          },
          radius: drillHoleRadius,
        },
        {
          id: 'drill_hole_2',
          type: 'circle',
          position: {
            ay: 'bottom',
            x: this.width() / 2,
            y: 2,
          },
          radius: drillHoleRadius,
        },
        {
          id: 'slider_track',
          type: 'rect',
          position: {
            x: (this.width() / 2) - 1.1,
            y: 4 - 0.2,
          },
          width: 2.2,
          height: (this.height() - 8) + 0.4,
          radius: 0.2,
        },
      ];
    },
    lines,
  };
}
