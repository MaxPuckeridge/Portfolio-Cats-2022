import { GetStaticProps } from 'next';

import { fetchAllTags } from '@lib/fetcher/fetch-tags';

import { HomePage, HomePageProps } from '@components/home-page';

const Page = (props: HomePageProps) => {
  return <HomePage {...props} />;
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const tags = await fetchAllTags();
  return { props: { tags } };
};

export default Page;
