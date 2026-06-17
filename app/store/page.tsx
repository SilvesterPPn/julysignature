import type { Metadata } from 'next';
import StoreClient from './_store-client';

export const metadata: Metadata = {
  title: 'Store - July Signature Luxury Fashion',
  description: 'Shop July Signature\'s curated collection of luxury fashion pieces. Filter by category and find your perfect style.',
  keywords: ['luxury fashion store', 'boutique collection', 'designer pieces', 'premium fashion shop'],
  openGraph: {
    title: 'July Signature Store - Luxury Fashion Collection',
    description: 'Shop July Signature\'s curated collection of luxury fashion pieces. Filter by category and find your perfect style.',
    url: '/store',
    images: [{ url: '/images/collection.jpg', width: 1200, height: 630, alt: 'July Signature Store' }],
  },
  alternates: { canonical: '/store' },
};

export default function StorePage() {
  return <StoreClient />;
}
