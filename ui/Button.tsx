import Link from 'next/link';
import React from 'react';
import styles from './Button.module.css';

interface Props {
  children: React.ReactNode;
  link?: string;
  onClick?: (fn: any) => void;
}

const Button = ({ children, link, onClick }: Props) => {
  if (link) {
    return (
      <Link
        href={link}
        className={styles.btn}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={styles.btn}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
