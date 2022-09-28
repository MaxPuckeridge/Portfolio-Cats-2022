import { BackButton } from '@components/button';
import { Row } from '@components/layout';
import { Header } from '@components/text';

type TagPageHeaderProps = {
  tag: string;
};

export const TagPageHeader = ({ tag }: TagPageHeaderProps) => (
  <Row css={{ width: '100%', boxSizing: 'border-box', padding: '0 20px' }}>
    <Header>{tag}</Header>
    <BackButton />
  </Row>
);
