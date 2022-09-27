import { GetStaticProps } from "next";
import { HomePage, HomePageProps } from "@components/homepage";
import { fetchAllTags } from "@lib/fetcher/fetch-tags";

const Page = (props: HomePageProps) => {
  return <HomePage {...props} />;
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const tags = await fetchAllTags();
  return { props: { tags } };
};

export default Page;
