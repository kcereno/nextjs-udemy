import FeaturedPosts from '@/components/HomePage/FeaturedPosts/FeaturedPosts';
import Hero from '@/components/HomePage/Hero/Hero';

interface Props {
  featuredEvents: Event[];
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts />
    </>
  );
}
