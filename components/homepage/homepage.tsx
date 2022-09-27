import Link from 'next/link';

import { styled } from '../../stitches.config';

export type HomePageProps = {
  tags: string[];
};

const Column = styled('div', { flexDirection: 'column', display: 'flex' });

export const HomePage = ({ tags }: HomePageProps) => (
  <Column>
    {tags.map((tag) => (
      <Link href={`/tag/${tag}`} key={tag}>
        {tag}
      </Link>
    ))}
  </Column>
);
