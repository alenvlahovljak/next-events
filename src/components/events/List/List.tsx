import { FC } from 'react';
import type { IEvents } from '@/utils/events';

import Item from '../Item/Item';
import { UnorderedList } from './style';

export interface ListProps {
  items: IEvents[];
}

const List: FC<ListProps> = ({ items }) => (
  <UnorderedList>
    {items.map((event: IEvents) => (
      <Item
        key={event.id}
        id={event.id}
        title={event.title}
        location={event.location}
        date={event.date}
        image={event.image}
      />
    ))}
  </UnorderedList>
);

export default List;
