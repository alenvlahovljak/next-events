import { FC } from 'react';

import Link from 'next/link';
import { Header, Logo, Navigation } from './style';

const MainHeader: FC = () => (
  <Header>
    <Logo>
      <Link href="/">NextEvents</Link>
    </Logo>
    <Navigation>
      <ul>
        <li>
          <Link href="/events">Browse All Events</Link>
        </li>
      </ul>
    </Navigation>
  </Header>
);

export default MainHeader;
