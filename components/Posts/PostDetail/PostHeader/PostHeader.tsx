import React from 'react';
import styles from './PostHeader.module.css';
import Image from 'next/image';

interface Props {
  title: string;
  image: string;
}

const PostHeader = ({ title, image }: Props) => {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <Image
        src={image}
        alt={title}
        width={200}
        height={300}
      />
    </header>
  );
};

export default PostHeader;
