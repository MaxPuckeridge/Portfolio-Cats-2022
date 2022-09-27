import Image from "next/image";
import { TagAPIValue } from "@lib/api";
import { createCatAPIEndpoint } from "@lib/api/cat-api";

export type TagPageProps = {
  tag: string;
  initialItems: TagAPIValue[];
};

export const TagPage = ({ tag, initialItems }: TagPageProps) => {
  return (
    <div>
      <h2>{tag}</h2>
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
    </div>
  );
};
