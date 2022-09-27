import { GetStaticPaths, GetStaticProps } from "next";
import Error from "next/error";
import { TagPage, TagPageProps } from "@components/tagpage";
import { createTagAPIEndpoint, TagAPIValue } from "@lib/api";
import { createTagsAPIEndpoint } from "@lib/api/tags-api";
import { fetcher } from "@lib/fetcher";

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

  const initialItems = await fetcher<TagAPIValue[]>(createTagAPIEndpoint(tag));

  return { props: { tag, initialItems } };
};

export const getStaticPaths: GetStaticPaths<PageParams> = async () => {
  const tags = await fetcher<string[]>(createTagsAPIEndpoint());
  return {
    paths: tags
      .filter((tag) => !!tag)
      .map((tag) => ({
        params: {
          // NextJs seems to be tripped up when these tags can include upper case characters
          tagName: tag.toLowerCase(),
        },
      })),
    fallback: false,
  };
};

export default Page;
