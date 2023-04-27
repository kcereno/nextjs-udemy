import FeaturedPosts from '@/components/HomePage/FeaturedPosts/FeaturedPosts';
import Hero from '@/components/HomePage/Hero/Hero';
import { PostI } from '../models/interfaces';
import { getFeaturedPosts } from '@/lib/posts-util';

interface Props {
  posts: PostI[];
}

export default function HomePage({ posts }: Props) {
  return (
    <>
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
