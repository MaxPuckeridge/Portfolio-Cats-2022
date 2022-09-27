import { Button } from '@components/button';

import { Row } from '.';

const settings = {
  title: 'Row',
  component: Row,
};

export default settings;

export const Example = () => (
  <Row>
    <Button>Left</Button>
    <Button>Middle</Button>
    <Button>Right</Button>
  </Row>
);
