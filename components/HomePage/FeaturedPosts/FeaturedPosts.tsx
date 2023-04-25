import React from 'react';
import styles from './FeaturedPosts.module.css';
import PostsGrid from '@/components/Posts/PostsGrid/PostsGrid';
import { PostI } from '@/models/interfaces';

interface Props {
  posts: PostI[];
}

const FeaturedPosts = ({ posts }: Props) => {
  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
