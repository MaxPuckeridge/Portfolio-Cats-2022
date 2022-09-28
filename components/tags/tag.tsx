import Link from 'next/link';

import { styled } from '../../stitches.config';

type TagProps = {
  tag: string;
};

const TagContainer = styled('a', {
  backgroundColor: '$purple500',
  color: 'white',
  border: '2px solid $purple700',
  borderRadius: '99999px',
  padding: '4px 12px',
  textDecoration: 'none',

  '&:hover': {
    backgroundColor: '$purple300',
  },

  '&:active': {
    backgroundColor: '$purple300',
  },
});

export const Tag = ({ tag }: TagProps) => (
  <Link passHref href={`/tag/${tag}`}>
    <TagContainer>{tag}</TagContainer>
  </Link>
);
