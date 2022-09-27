import Link from 'next/link';

import { Column } from '@components/layout';

export type HomePageProps = {
  tags: string[];
};

export const HomePage = ({ tags }: HomePageProps) => (
  <Column>
    {tags.map((tag) => (
      <Link href={`/tag/${tag}`} key={tag}>
        {tag}
      </Link>
    ))}
  </Column>
);
