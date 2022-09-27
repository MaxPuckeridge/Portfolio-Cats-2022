import { HomePage } from '.';

const settings = {
  title: 'HomePage',
  component: HomePage,
};

export default settings;

export const Example = () => (
  <HomePage tags={['cute', 'happy', 'playful', 'scary']} />
);
