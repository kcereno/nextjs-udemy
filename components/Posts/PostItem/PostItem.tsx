import React from 'react';
import styles from './PostItem.module.css';
import Link from 'next/link';
import Image from 'next/legacy/image';
import { PostI } from '@/models/interfaces';
import { formatDate } from '@/utils/functions';

interface Props {
  post: PostI;
}

const PostItem = ({ post: { title, image, excerpt, date, slug } }: Props) => {
  const formattedDate = formatDate(date);
  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className={styles.post}>
      <Link href={linkPath}>
        <div className={styles.image}>
          <Image
            src={imagePath}
            alt={title}
            width={300}
            height={200}
            layout="responsive"
          />
        </div>
        <div className={styles.content}>{title}</div>
        <time>{formattedDate}</time>
        <p>{excerpt}</p>
      </Link>
    </li>
  );
};

export default PostItem;
