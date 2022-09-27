import { TagPage } from '.';

const settings = {
  title: 'TagPage',
  component: TagPage,
};

export default settings;

export const Example = () => (
  <TagPage
    tag="cute"
    initialItems={[
      {
        created_at: '2015-11-06T18:36:37.342Z',
        id: '595f280c557291a9750ebf80',
        tags: ['cute'],
      },
    ]}
  />
);
