import Image from 'next/image';

import { CatDetails } from '@lib/api';
import { createCatAPIEndpoint } from '@lib/api/cat-api';

import { Column } from '@components/layout';
import { Tags } from '@components/tags';

type CatProps = CatDetails;

export const Cat = ({ id, created_at, tags }: CatProps) => (
  <Column css={{ gap: 8 }}>
    <div>{created_at}</div>
    <Image
      src={createCatAPIEndpoint(id)}
      alt="A Cat"
      width={600}
      height={300}
    />
    <Tags tags={tags} />
  </Column>
);
