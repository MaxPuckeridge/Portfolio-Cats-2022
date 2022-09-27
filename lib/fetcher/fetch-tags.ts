import { createTagsAPIEndpoint } from "@lib/api/tags-api";
import { fetcher } from "./fetcher";

export const fetchAllTags = async () => {
  return (await fetcher<string[]>(createTagsAPIEndpoint()))
    .filter((tag) => !!tag)
    .map((tag) => tag.toLowerCase());
};
