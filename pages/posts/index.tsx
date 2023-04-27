import AllPosts from '@/components/Posts/AllPosts/AllPosts';
import React from 'react';
import { PostI } from '../../models/interfaces';
import { getAllPosts } from '@/lib/posts-util';

interface Props {
  posts: PostI[];
}

const AllPostsPage = ({ posts }: Props) => {
  return <AllPosts posts={posts} />;
};

export const getStaticProps = () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
};
export default AllPostsPage;
