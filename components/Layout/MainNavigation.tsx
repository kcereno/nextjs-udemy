import React from 'react';
import Logo from './Logo';
import Link from 'next/link';

const MainNavigation = () => {
  return (
    <>
      <header>
        <Link href="/">
          <Logo />
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="/posts">Home</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainNavigation;
