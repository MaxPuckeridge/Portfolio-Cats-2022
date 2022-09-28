import { styled } from '@stitches/react';

export const Button = styled('button', {
  border: '2px solid',
  borderRadius: 6,
  color: 'white',
  padding: '4px 12px',
  cursor: 'pointer',

  variants: {
    color: {
      purple: {
        backgroundColor: '$purple500',
        borderColor: '$purple700',
        '&:hover': {
          backgroundColor: '$purple300',
        },
        '&:active': {
          backgroundColor: '$purple300',
        },
      },

      blue: {
        backgroundColor: '$blue500',
        borderColor: '$blue700',
        '&:hover': {
          backgroundColor: '$blue300',
        },
        '&:active': {
          backgroundColor: '$blue300',
        },
      },
    },
  },

  defaultVariants: {
    color: 'blue',
  },
});
