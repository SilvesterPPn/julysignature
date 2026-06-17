import type { Metadata } from 'next';
import HomeClient from './_home-client';

export const metadata: Metadata = {
  title: 'Home - Luxury Boutique Fashion',
  description: 'Explore July Signature\'s curated collection of luxury fashion pieces. Discover timeless elegance and premium quality for your wardrobe.',
  keywords: ['luxury fashion', 'boutique clothing', 'designer pieces', 'premium fashion'],
  openGraph: {
    title: 'July Signature - Luxury Boutique Fashion',
    description: 'Explore July Signature\'s curated collection of luxury fashion pieces. Discover timeless elegance and premium quality for your wardrobe.',
    url: '/',
    images: [{ url: '/images/home.jpg', width: 1200, height: 630, alt: 'July Signature Home' }],
  },
  alternates: { canonical: '/' },
};

export default function Home() {
  return <HomeClient />;
}
