import { GetStaticPaths, GetStaticProps } from "next";
import Error from "next/error";
import { TagPage, TagPageProps } from "@components/tagpage";
import { fetchAllTags } from "@lib/fetcher/fetch-tags";
import { fetchTagItems } from "@lib/fetcher/fetch-tag-items";

type PageParams = {
  tagName: string;
};

type PageProps = TagPageProps | { invalid: true };

const Page = (props: PageProps) => {
  if ("invalid" in props) {
    return <Error statusCode={500} />;
  }

  return <TagPage {...props} />;
};

export const getStaticProps: GetStaticProps<PageProps, PageParams> = async ({
  params: { tagName: tag } = {},
}) => {
  if (!tag) {
    return { props: { invalid: true } };
  }

  const initialItems = await fetchTagItems(tag);

  return { props: { tag, initialItems } };
};

export const getStaticPaths: GetStaticPaths<PageParams> = async () => {
  const tags = await fetchAllTags();
  return {
    paths: tags
      .filter((tag) => !!tag)
      .map((tag) => ({
        params: {
          tagName: tag,
        },
      })),
    fallback: false,
  };
};

export default Page;
