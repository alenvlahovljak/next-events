import { FC } from 'react';
import {
  getHumanReadableDate,
  getAddressText,
  getExploreLink,
} from '@/utils/helper';

import { Button } from '@/components/UI';
import { DateIcon, AddressIcon, ArrowRightIcon } from '@/components/icons';
import { ListItem, Content, Info, Actions, Icon } from './style';

export interface ItemProps {
  title: string;
  image: string;
  date: string;
  location: string;
  id: string;
}

const Item: FC<ItemProps> = ({ title, image, date, location, id }) => (
  <ListItem>
    <img src={`/${image}`} alt={title} />
    <Content>
      <h2>{title}</h2>
      <Info>
        <DateIcon />
        <time>{getHumanReadableDate(date, `en-US`)}</time>
      </Info>
      <Info>
        <AddressIcon />
        <address>{getAddressText(location)}</address>
      </Info>
      <Actions>
        <Button link={getExploreLink(id)}>
          <span>Explore Event</span>
          <Icon>
            <ArrowRightIcon />
          </Icon>
        </Button>
      </Actions>
    </Content>
  </ListItem>
);

export default Item;
