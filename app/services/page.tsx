import Link from "next/link";
import Button from "../../components/Button";
import { services } from "../../data/services";
import type { Metadata } from 'next';

import {
  FaTshirt,
  FaUserTie,
  FaCrown,
  FaMagic,
  FaShoppingBag,
  FaPalette,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: 'Services - Personal Styling & Luxury Fashion',
  description: 'Explore July Signature\'s premium services: personalized styling, wardrobe consulting, luxury makeovers, and more. Elevate your fashion identity.',
  keywords: ['personal styling', 'luxury fashion services', 'wardrobe consultant', 'fashion makeover'],
  openGraph: {
    title: 'July Signature Services - Personal Styling & Luxury',
    description: 'Explore July Signature\'s premium services: personalized styling, wardrobe consulting, luxury makeovers, and more.',
    url: '/services',
    images: [{ url: '/images/services.jpeg', width: 1200, height: 630, alt: 'July Signature Services' }],
  },
  alternates: { canonical: '/services' },
};


type ServiceIconKey =
  | "styling"
  | "wardrobe"
  | "luxury"
  | "makeover"
  | "shopping"
  | "color";

  import type { ReactElement } from "react";
  const iconMap: Record<ServiceIconKey, ReactElement>  = {
    styling: <FaUserTie />,
    wardrobe: <FaTshirt />,
    luxury: <FaCrown />,
    makeover: <FaMagic />,
    shopping: <FaShoppingBag />,
    color: <FaPalette />,
  };

export default function ServicesPage() {
  return (
    <main className="flex-1 bg-white">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[85vh] flex items-center justify-center">

        <div className="absolute inset-0">
          <img
            src="/images/services.jpg"
            alt="Luxury Fashion Services"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-slate-900/70" />

        <div className="relative z-10 text-center px-4 max-w-3xl">
          <span className="inline-block px-4 py-2 bg-white/10 border border-white/20 text-white text-xs uppercase tracking-[0.25em] rounded-full mb-6">
            Premium Services
          </span>

          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-6">
            Luxury Fashion
            <span className="block text-blue-400">Tailored for You</span>
          </h1>

          <p className="text-slate-200 text-base md:text-lg leading-relaxed">
            Experience personalized styling, wardrobe transformation, and
            luxury fashion consulting designed to elevate your identity and
            confidence.
          </p>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14">
            <span className="text-blue-600 uppercase tracking-[0.3em] text-xs font-semibold">
              What We Offer
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">
              Luxury Services
            </h2>

            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >

                
                <div className="text-blue-600 text-4xl mb-5 group-hover:scale-110 transition-transform">
                  {iconMap[service.icon as ServiceIconKey] || <FaCrown />}
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">

          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-5">
            Ready for a Personalized Experience?
          </h2>

          <p className="text-blue-100 text-base md:text-lg mb-10">
            Book a consultation today and let our experts craft your perfect
            fashion identity.
          </p>

          <Link href="/contact">
            <Button className="bg-blue-700 text-white hover:bg-blue-800 px-8 py-3 rounded-full transition">
              Book Now
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}