import { FC } from 'react';
import { getHumanReadableDate, getAddressText } from '@/utils/helper';

import { DateIcon, AddressIcon } from '@/components/icons';
import Item from './Item/Item';
import { Section, Cover, List } from './style';

export interface LogisticsProps {
  date: string;
  address: string;
  image: string;
  imageAlt: string;
}

const Logistics: FC<LogisticsProps> = ({ date, address, image, imageAlt }) => (
  <Section>
    <Cover>
      <img src={`/${image}`} alt={imageAlt} />
    </Cover>
    <List>
      <Item icon={DateIcon}>
        <time>{getHumanReadableDate(date, `en-US`)}</time>
      </Item>
      <Item icon={AddressIcon}>
        <address>{getAddressText(address)}</address>
      </Item>
    </List>
  </Section>
);

export default Logistics;
