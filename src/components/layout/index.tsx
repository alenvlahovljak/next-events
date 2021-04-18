import { FC } from 'react';

import { MainHeader } from '@/components/UI';

const Layout: FC = ({ children }) => (
  <>
    <MainHeader />
    <main>{children}</main>
  </>
);

export default Layout;
