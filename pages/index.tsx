import { GetStaticProps } from "next";
import { createTagsAPIEndpoint } from "@lib/api/tags-api";
import { fetcher } from "@lib/fetcher";
import { HomePage, HomePageProps } from "@components/homepage";

const Page = (props: HomePageProps) => {
  return <HomePage {...props} />;
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const tags = await fetcher<string[]>(createTagsAPIEndpoint());
  return { props: { tags } };
};

export default Page;
