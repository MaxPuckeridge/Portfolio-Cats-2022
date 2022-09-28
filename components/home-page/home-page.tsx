import { Column } from '@components/layout';
import { Tags } from '@components/tags';

export type HomePageProps = {
  tags: string[];
};

export const HomePage = ({ tags }: HomePageProps) => (
  <Column css={{ marginBottom: 80, gap: 20 }}>
    <Tags tags={tags} />
  </Column>
);
