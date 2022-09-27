import { Config } from "../config";

export const createTagAPIEndpoint = (
  tag: string,
  skip: number = 0,
  limit: number = 6
) => `${Config.cataasBaseUrl}/api/cats?tags=${tag}&skip=${skip}&limit=${limit}`;

export type TagAPIValue = {
  id: string;
  created_at: string;
  tags: string[];
};
