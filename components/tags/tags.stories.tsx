import { Tags } from '.';

const settings = {
  title: 'Tags',
  component: Tags,
};

export default settings;

export const Example = () => (
  <Tags tags={['cute', 'cheeky', 'scary', 'amazing']} />
);
