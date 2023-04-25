import React from 'react';
import style from './PostsGrid.module.css';
import PostItem from '../PostItem/PostItem';
import { PostI } from '@/models/interfaces';
import styles from './PostsGrid.module.css';

interface Props {
  posts: PostI[];
}

const PostsGrid = ({ posts }: Props) => {
  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <PostItem
          key={post.slug}
          post={post}
        />
      ))}
    </ul>
  );
};

export default PostsGrid;
