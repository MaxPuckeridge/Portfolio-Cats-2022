import { createStitches } from '@stitches/react';

export const { styled, getCssText } = createStitches({
  theme: {
    colors: {
      blue300: '#63B3ED',
      blue500: '#3182CE',
      blue700: '#2C5282',

      purple300: '#B794F4',
      purple500: '#805AD5',
      purple700: '#553C9A',
    },
  },
});
