import Image from 'next/image';
import { Else, If, Then } from 'react-if';

import { TagAPIValue } from '@lib/api';
import { createCatAPIEndpoint } from '@lib/api/cat-api';

export type TagPageProps = {
  tag: string;
  initialItems: TagAPIValue[];
};

export const TagPage = ({ tag, initialItems }: TagPageProps) => {
  return (
    <div>
      <h2>{tag}</h2>
      <If condition={initialItems && initialItems.length > 0}>
        <Then>
          <ul>
            {initialItems.map((item: TagAPIValue) => (
              <li key={item.id}>
                <div>
                  {item.id} - {item.created_at}
                </div>
                <Image
                  src={createCatAPIEndpoint(item.id)}
                  alt="A Cat"
                  width={600}
                  height={300}
                />
              </li>
            ))}
          </ul>
        </Then>
        <Else>
          <div>No items</div>
        </Else>
      </If>
    </div>
  );
};
