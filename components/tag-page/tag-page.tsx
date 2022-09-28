import { Else, If, Then } from 'react-if';

import { CatDetails } from '@lib/api';

import { Cat } from '@components/cat';
import { Column } from '@components/layout';

import { TagPageHeader } from './tag-page-header';

export type TagPageProps = {
  tag: string;
  initialItems: CatDetails[];
};

export const TagPage = ({ tag, initialItems }: TagPageProps) => {
  return (
    <Column css={{ gap: 40, marginBottom: 80 }}>
      <TagPageHeader tag={tag} />
      <If condition={initialItems && initialItems.length > 0}>
        <Then>
          <Column css={{ gap: 40 }}>
            {initialItems.map((item: CatDetails) => (
              <Cat key={item.id} {...item} />
            ))}
          </Column>
        </Then>
        <Else>
          <div>No items</div>
        </Else>
      </If>
    </Column>
  );
};
