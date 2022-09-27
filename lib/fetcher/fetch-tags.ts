import { createTagsAPIEndpoint } from "@lib/api/tags-api";
import { fetcher } from "./fetcher";

export const fetchAllTags = async () => {
  const set = (await fetcher<string[]>(createTagsAPIEndpoint()))
    .filter((tag) => !!tag)
    .map((tag) => tag.toLowerCase())
    .reduce((set, value) => {
      set.add(value);
      return set;
    }, new Set<string>());
  return Array.from(set).sort();
};
