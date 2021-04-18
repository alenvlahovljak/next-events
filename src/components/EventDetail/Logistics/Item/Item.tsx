import { FC } from 'react';

import { ListItem, Cover } from './style';

export interface ItemProps {
  icon: FC<Record<string, never>>;
}

const Item: FC<ItemProps> = ({ children, icon: Icon }) => (
  <ListItem>
    <Cover>
      <Icon />
    </Cover>
    <span>{children}</span>
  </ListItem>
);

export default Item;
