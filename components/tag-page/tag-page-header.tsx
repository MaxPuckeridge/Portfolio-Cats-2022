import { BackButton } from '@components/button';
import { Row } from '@components/layout';
import { Header } from '@components/text';

type TagPageHeaderProps = {
  tag: string;
};

export const TagPageHeader = ({ tag }: TagPageHeaderProps) => (
  <Row>
    <Header>{tag}</Header>
    <BackButton />
  </Row>
);
