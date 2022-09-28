import { Skeleton } from '.';

const settings = {
  title: 'Skeleton',
  component: Skeleton,
};

export default settings;

export const Example = () => (
  <div style={{ width: 600, height: 300 }}>
    <Skeleton />
  </div>
);
