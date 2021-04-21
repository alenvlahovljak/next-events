import { FC } from 'react';
import { getHumanReadableDate, getAddressText } from '@/utils/helper';

import { DateIcon, AddressIcon } from '@/components/Icons';
import Image from 'next/image';
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
      <Image src={`/${image}`} alt={imageAlt} width={400} height={400} />
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
