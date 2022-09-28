/* eslint-disable jsx-a11y/alt-text */
import { useCallback, useState } from 'react';

import Image, { ImageProps } from 'next/image';
import { If, Then } from 'react-if';

import { Skeleton } from '@components/skeleton';

export const ImageWithSkeleton = (props: ImageProps) => {
  const [loaded, setLoaded] = useState<boolean>(false);

  const onLoadingComplete = useCallback(() => setLoaded(true), [setLoaded]);

  return (
    <>
      <If condition={!loaded}>
        <Then>
          <Skeleton />
        </Then>
      </If>
      <Image
        {...props}
        style={loaded ? undefined : { display: 'none' }}
        onLoadingComplete={onLoadingComplete}
      />
    </>
  );
};
