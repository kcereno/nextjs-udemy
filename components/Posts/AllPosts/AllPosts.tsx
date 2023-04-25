import React from 'react';
import styles from './AllPosts.module.css';
import PostsGrid from '../PostsGrid/PostsGrid';
import { PostI } from '@/models/interfaces';

interface Props {
  posts: PostI[];
}

const AllPosts = ({ posts }: Props) => {
  return (
    <section className={styles.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
