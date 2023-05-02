import FeaturedPosts from '@/components/HomePage/FeaturedPosts/FeaturedPosts';
import Hero from '@/components/HomePage/Hero/Hero';
import { IPost } from '../models/interfaces';
import { getFeaturedPosts } from '@/lib/posts-util';
import Head from 'next/head';

interface Props {
  posts: IPost[];
}

export default function HomePage({ posts }: Props) {
  return (
    <>
      <Head>
        <title>Karl blog</title>
        <meta
          name="description"
          content="I make stuff"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();
  console.log('getStaticProps ~ featuredPosts:', featuredPosts);

  return {
    props: {
      posts: featuredPosts,
    },
  };
};
