import type { Metadata } from 'next';
import ContactClient from './_contact-client';

export const metadata: Metadata = {
  title: 'Contact Us - July Signature',
  description: 'Get in touch with July Signature. Find our boutique location, hours, and send us a message. We\'d love to help with your luxury fashion needs.',
  keywords: ['contact July Signature', 'boutique address', 'luxury fashion contact'],
  openGraph: {
    title: 'Contact July Signature - Get in Touch',
    description: 'Get in touch with July Signature. Find our boutique location, hours, and send us a message.',
    url: '/contact',
    images: [{ url: '/images/contact.jpg', width: 1200, height: 630, alt: 'Contact July Signature' }],
  },
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return <ContactClient />;
}
