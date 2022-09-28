import { styled } from '../../stitches.config';
import { Tag } from './tag';

type TagsProps = {
  tags: string[];
};

const TagWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '10px',
});

export const Tags = ({ tags }: TagsProps) => (
  <TagWrapper>
    {tags.map((tag) => (
      <Tag key={tag} tag={tag} />
    ))}
  </TagWrapper>
);
