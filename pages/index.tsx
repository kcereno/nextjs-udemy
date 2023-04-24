import FeaturedPosts from '@/components/HomePage/FeaturedPosts';
import Hero from '@/components/HomePage/Hero';

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
