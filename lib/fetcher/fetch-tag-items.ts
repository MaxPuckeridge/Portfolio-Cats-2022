import { createTagAPIEndpoint, TagAPIValue } from '@lib/api';

import { fetcher } from './fetcher';

export const fetchTagItems = async (
  tag: string,
  skip: number = 0,
  limit: number = 6
) => await fetcher<TagAPIValue[]>(createTagAPIEndpoint(tag, skip, limit));
