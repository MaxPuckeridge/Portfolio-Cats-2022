import Image from 'next/image';

import { CatDetails } from '@lib/api';
import { createCatAPIEndpoint } from '@lib/api/cat-api';

import { ImageWithSkeleton } from '@components/image';
import { Column } from '@components/layout';
import { Tags } from '@components/tags';

import { styled } from '../../stitches.config';

type CatProps = CatDetails;

const ImageContainer = styled('div', {
  width: 600,
  height: 300,
  position: 'relative',
});

export const Cat = ({ id, created_at, tags }: CatProps) => (
  <Column css={{ gap: 8 }}>
    <div>{created_at}</div>
    <ImageContainer>
      <ImageWithSkeleton
        src={createCatAPIEndpoint(id) + '?' + Date.now()}
        alt="A Cat"
        layout="fill"
      />
    </ImageContainer>
    <Tags tags={tags} />
  </Column>
);
