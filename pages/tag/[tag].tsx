import { Button } from "@components/button";
import { GetStaticPaths, GetStaticProps } from "next";

type TagPageParams = {
  tag: string;
};

type TagPageProps =
  | {
      tag: string;
    }
  | { invalid: true };

const TagPage = (props: TagPageProps) => {
  if ("invalid" in props) {
    return <div>Doh!</div>;
  }

  return (
    <div>
      {props.tag}
      <Button color="blue">Hello</Button>
    </div>
  );
};

export const getStaticProps: GetStaticProps<TagPageProps, TagPageParams> =
  async ({ params: { tag } = {} }) => {
    if (!tag) {
      return { props: { invalid: true } };
    }

    return { props: { tag } };
  };

export const getStaticPaths: GetStaticPaths<TagPageParams> = async () => {
  return {
    paths: [{ params: { tag: "cute" } }],
    fallback: false,
  };
};

export default TagPage;
