import { FC } from 'react';
import {
  getHumanReadableDate,
  getAddressText,
  getExploreLink,
} from '@/utils/helper';

import Image from 'next/image';
import { Button } from '@/components/UI';
import { DateIcon, AddressIcon, ArrowRightIcon } from '@/components/Icons';
import { ListItem, Content, Info, Actions, Icon } from './style';

export interface ItemProps {
  title: string;
  image: string;
  date: string;
  location: string;
  id: string | number;
}

const Item: FC<ItemProps> = ({ title, image, date, location, id }) => (
  <ListItem>
    <Image src={`/${image}`} alt={title} width={250} height={160} />
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
