import { Column } from '@components/layout';
import { Tags } from '@components/tags';

export type HomePageProps = {
  tags: string[];
};

export const HomePage = ({ tags }: HomePageProps) => (
  <Column>
    <Tags tags={tags} />
  </Column>
);
