import AllPosts from '@/components/Posts/AllPosts/AllPosts';
import React from 'react';
import { PostI } from '../../models/interfaces';

interface Props {
  posts: PostI[];
}

const AllPostsPage = ({ posts }: Props) => {
  const DUMMY_POSTS: PostI[] = [
    {
      title: 'Test',
      image: 'getting-started-nextjs.png',
      excerpt: 'test',
      slug: 'getting-started-nextjs',
      date: new Date(),
    },
    {
      title: 'Test',
      image: 'getting-started-nextjs.png',
      excerpt: 'test',
      slug: 'getting-started-nextjs',
      date: new Date(),
    },
    {
      title: 'Test',
      image: 'getting-started-nextjs.png',
      excerpt: 'test',
      slug: 'getting-started-nextjs',
      date: new Date(),
    },
  ];
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;
