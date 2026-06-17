'use client';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../components/Button';
import  Steps   from '../components/Steps';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  FaGem,
  FaPaintBrush,
  FaCrown,
} from "react-icons/fa";


export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
  <main className="flex-1">
  <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">

  <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-30" />

  <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 lg:py-16">

    <div className="grid lg:grid-cols-2 gap-12 items-center">

      <div>

        <p className="text-blue-800 uppercase tracking-[5px] font-semibold mb-5">
          Discover Your Signature Style
        </p>

        <h1 className="font-heading text-4xl md:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight">
          Timeless Elegance
          <br />
          <span className="text-blue-700">
            Reimagined
          </span>
        </h1>

        <p className="mt-6 text-md text-slate-600 max-w-xl leading-relaxed">
          Discover luxury fashion pieces crafted with
          sophistication, premium fabrics and modern
          elegance.
        </p>

        <div className="flex flex-wrap gap-4 mt-10">

          <Link href="/store">
            <Button size="sm">
              Shop Collection
            </Button>
          </Link>

          <Link href="/about">
            <Button variant="outline" size="sm">
              Our Story
            </Button>
          </Link>

        </div>

      </div>

      <div className="relative">

        <div className="absolute inset-0 bg-blue-100 rounded-full blur-2xl opacity-50" />

        <div className="relative aspect-square rounded-full overflow-hidden border-[12px] border-white shadow-2xl">

          <Image
            src="/images/home.jpg"
            alt="Fashion Model"
            fill
            className="object-cover"
            priority
          />

        </div>

      </div>

    </div>

  </div>

</section>

      {/* Featured Products */}
      <section className="py-14 lg:pt-10 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}
    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">

      <div className="max-w-2xl">

        <span className="text-[#0A1F44] uppercase tracking-[4px] text-sm font-medium">
          Featured Collection
        </span>

        <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-slate-800 leading-tight">
          Curated For Modern Elegance
        </h2>

        <p className="mt-4 text-slate-600 leading-relaxed">
          Discover timeless fashion pieces designed to elevate
          your wardrobe with confidence, sophistication and style.
        </p>

      </div>

      <Link href="/store">
        <button className="group flex items-center gap-3 text-[#0A1F44] font-medium">

          View Collection

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>

        </button>
      </Link>

    </div>

    {/* Swiper */}
    <Swiper
      modules={[  Autoplay]}
    
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      spaceBetween={24}
      breakpoints={{
        0: {
          slidesPerView: 1.2,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        },
      }}
      className="pb-14"
    >
      {featuredProducts.map((product) => (
        <SwiperSlide key={product.id}>
          <div className="group">

            <div className="overflow-hidden rounded-[28px] bg-[#F8FAFC] transition-all duration-500 group-hover:shadow-2xl">

              <ProductCard product={product} />

            </div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Bottom CTA */}
    <div className="mt-10 text-center">

      <Link href="/store">

        <button className="bg-[#0A1F44] hover:bg-[#081731] text-white px-6 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">

          Explore All Products

        </button>

      </Link>

    </div>

  </div>
</section>

<Steps />

      {/* Why Choose Us */}
   <section className="py-6 lg:py-16 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}
    <div className="text-center max-w-2xl mx-auto mb-20">

      <span className="inline-block text-[#0A1F44] uppercase tracking-[4px] text-sm font-medium mb-4">
        Why Choose July Signature
      </span>

      <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-5">
        Fashion Crafted With Purpose
      </h2>

      <p className="text-slate-600 leading-relaxed">
        Every detail matters. From premium materials to exclusive designs,
        we create collections that blend luxury, confidence and timeless style.
      </p>

    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-8">

      {[
        {
          icon: <FaGem />,
          title: "Premium Quality",
          desc: "Meticulously crafted pieces made from carefully selected fabrics and materials.",
        },
        {
          icon: <FaPaintBrush />,
          title: "Exclusive Designs",
          desc: "Modern collections designed to help you stand out with confidence and elegance.",
        },
        {
          icon: <FaCrown />,
          title: "Luxury Experience",
          desc: "A seamless shopping experience tailored to customers who appreciate style.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="group relative bg-white border border-slate-200 rounded-[32px] p-10 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-[#0A1F44] hover:shadow-2xl"
        >

          {/* Background Icon */}
          <div className="absolute -right-8 -top-8 text-[140px] text-[#0A1F44]/5 group-hover:text-[#0A1F44]/10 transition-all duration-500">
            {item.icon}
          </div>

          {/* Main Icon */}
          <div className="w-16 h-16 rounded-2xl bg-[#0A1F44] text-white flex items-center justify-center text-2xl mb-8 shadow-lg">
            {item.icon}
          </div>

          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
            {item.title}
          </h3>

          <p className="text-slate-600 leading-relaxed mb-8">
            {item.desc}
          </p>

          <div className="flex items-center gap-2 text-[#0A1F44] font-medium">

            <span>Learn More</span>

            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>

          </div>

        </div>
      ))}

    </div>

  </div>
</section>

{/* Store Experience Section */}
<section className="py-4 lg:py-8 bg-white">
  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12 px-6">

      <div>
        <span className="text-[#0A1F44] uppercase tracking-[3px] text-xs font-semibold">
          Discover Our Store
        </span>

        <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-900">
          Where Fashion Meets Elegance
        </h2>
      </div>

      <Link href="/store">
        <button className="border border-[#0A1F44] text-[#0A1F44] hover:bg-[#0A1F44] hover:text-white px-6 py-3 rounded-full transition-all duration-300">
          Explore Collection
        </button>
      </Link>

    </div>

   
    <div className="relative overflow-hidden h-[450px] md:h-[600px]">

      <Image
        src="/images/store1.jpeg"
        alt="July Signature Store"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#081731]/90 via-[#081731]/60 to-transparent" />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-end md:items-center">

        <div className="p-8 md:p-16 max-w-xl">

          <span className="inline-block text-white/70 uppercase tracking-[4px] text-xs mb-4">
            July Signature
          </span>

          <h3 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-4">
            A Luxury Fashion
            <br />
            Experience
          </h3>

          <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8">
            Explore carefully curated collections designed for
            modern elegance, confidence, and timeless style.
            Every piece reflects our commitment to quality
            craftsmanship and exceptional fashion.
          </p>

          <Link href="/store">
            <button className="bg-[#0A1F44] hover:bg-[#06132B] text-white px-7 py-3 rounded-full transition-all duration-300">
              Shop Now
            </button>
          </Link>

        </div>

      </div>

    </div>

  </div>
</section>

      {/* Newsletter */}
  <section className="py-12 lg:py-16 bg-gray-50">

  <div className="max-w-4xl mx-auto px-6 text-center">

    {/* Label */}
    <span className="uppercase tracking-[4px] text-[11px] font-medium text-[#0A1F44]">
      Exclusive Access
    </span>

    {/* Heading */}
    <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-slate-900">
      Join The July Signature Community
    </h2>

    {/* Description */}
    <p className="mt-3 text-sm md:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
      Receive updates on new collections, exclusive offers and carefully
      curated fashion inspiration.
    </p>

    {/* Form */}
    <form className="mt-6 max-w-xl mx-auto">

      <div className="bg-white border border-slate-200 rounded-full p-2 flex sm:flex-row gap-2 shadow-sm">

        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-5 py-3 text-slate-700 placeholder:text-slate-400 outline-none bg-transparent text-sm"
        />

        <button
          type="submit"
          className="bg-[#0A1F44] hover:bg-[#081731] text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300"
        >
          Subscribe
        </button>

      </div>

    </form>

    {/* Features */}
    <div className="flex flex-wrap justify-center gap-4 mt-6 text-slate-500 text-xs md:text-sm">

      <span>New Arrivals</span>

      <span className="hidden sm:block">•</span>

      <span>Exclusive Offers</span>

      <span className="hidden sm:block">•</span>

      <span>Style Updates</span>

    </div>

  </div>

</section>
    </main>
  );
}

