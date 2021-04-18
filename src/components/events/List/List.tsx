import { FC } from 'react';
import type { IEvent } from '@/utils/events';

import Item from '../Item/Item';
import { UnorderedList } from './style';

export interface ListProps {
  items: IEvent[];
}

const List: FC<ListProps> = ({ items }) => (
  <UnorderedList>
    {items.map((event: IEvent, i) => (
      <Item
        key={Math.random()}
        id={i}
        title={event.title}
        location={event.location}
        date={event.date}
        image={event.image}
      />
    ))}
  </UnorderedList>
);

export default List;
