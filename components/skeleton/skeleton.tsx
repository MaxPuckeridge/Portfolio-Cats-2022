import { keyframes } from '@stitches/react';

import { styled } from '../../stitches.config';

const pulse = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

export const Skeleton = styled('div', {
  width: '100%',
  height: '100%',
  backgroundColor: 'grey',
  animation: `1s linear infinite alternate ${pulse}`,
});
