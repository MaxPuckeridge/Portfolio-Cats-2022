import { Config } from '../config';

export const createCatAPIEndpoint = (id: string) =>
  `${Config.cataasBaseUrl}/cat/${id}`;
