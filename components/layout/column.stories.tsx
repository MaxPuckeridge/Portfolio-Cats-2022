import { Button } from '@components/button';

import { Column } from '.';

const settings = {
  title: 'Column',
  component: Column,
};

export default settings;

export const Example = () => (
  <Column>
    <Button>Top</Button>
    <Button>Middle</Button>
    <Button>Bottom</Button>
  </Column>
);
