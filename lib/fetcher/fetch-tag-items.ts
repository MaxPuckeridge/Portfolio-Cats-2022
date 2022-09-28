import { createTagAPIEndpoint, CatDetails } from '@lib/api';

import { fetcher } from './fetcher';

export const fetchTagItems = async (
  tag: string,
  skip: number = 0,
  limit: number = 6
) => await fetcher<CatDetails[]>(createTagAPIEndpoint(tag, skip, limit));
