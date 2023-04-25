import FeaturedPosts from '@/components/HomePage/FeaturedPosts/FeaturedPosts';
import Hero from '@/components/HomePage/Hero/Hero';
import { PostI } from '../models/interfaces';

interface Props {
  featuredEvents: Event[];
}

export default function HomePage() {
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

  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}
