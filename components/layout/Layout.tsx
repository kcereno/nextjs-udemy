import React from 'react';
import MainHeader from './MainHeader';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <header>
        <MainHeader />
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
