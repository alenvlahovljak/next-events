import { FC } from 'react';
import type { IEvent } from '@/utils/events';

import Item from '../Item/Item';
import { UnorderedList } from './style';

export interface ListProps {
  items: IEvent[];
  ids: string[];
}

const List: FC<ListProps> = ({ items, ids }) => (
  <UnorderedList>
    {items.map((event: IEvent, i) => (
      <Item
        key={Math.random()}
        id={ids[i]}
        title={event.title}
        location={event.location}
        date={event.date}
        image={event.image}
      />
    ))}
  </UnorderedList>
);

export default List;
