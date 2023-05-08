import { Fragment } from 'react';
import MainNavigation from './main-navigation';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <Fragment>
      <MainNavigation />
      <main>{children}</main>
    </Fragment>
  );
}

export default Layout;
