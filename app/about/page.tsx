import Image from "next/image";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - July Signature',
  description: 'Discover the story behind July Signature: our journey, values, and commitment to timeless luxury fashion. Learn how we curate premium pieces for the modern individual.',
  keywords: ['July Signature story', 'luxury fashion brand', 'boutique history', 'fashion values'],
  openGraph: {
    title: 'About July Signature - Luxury Fashion Brand',
    description: 'Discover the story behind July Signature: our journey, values, and commitment to timeless luxury fashion.',
    url: '/about',
    images: [{ url: '/images/about.jpg', width: 1200, height: 630, alt: 'About July Signature' }],
  },
  alternates: { canonical: '/about' },
};

export default function AboutPage() {

  const stats = [
    {
      number: "10+",
      label: "Years of Excellence",
    },
    {
      number: "5,000+",
      label: "Satisfied Customers",
    },
    {
      number: "200+",
      label: "Curated Collections",
    },
    {
      number: "98%",
      label: "Customer Satisfaction",
    },
  ];

  return (
    <main className="flex-1 overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center">
        <Image
          src="/images/about.jpg"
          alt="July Signature Fashion"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white text-xs md:text-sm uppercase tracking-[0.2em] mb-6">
            Since 2010
          </span>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6">
            Crafting Timeless
            <span className="block text-rose-300">Luxury Fashion</span>
          </h1>

          <p className="text-lg md:text-xl text-stone-200 max-w-2xl mx-auto leading-relaxed">
            At July Signature, fashion is more than clothing. It is a
            statement of confidence, elegance, and individuality designed for
            modern lifestyles.
          </p>
        </div>
      </section>

      {/* ================= STORY SECTION ================= */}
      <section className="py-12 lg:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
             <div className="mb-10">
  
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-lg font-medium tracking-widest uppercase mb-4">
              Our Story
            </span>

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-snug mb-4">
              A Journey Built on
              <span className="block text-blue-700">
                Style, Quality & Confidence
              </span>
            </h2>

            {/* Line */}
            <div className="w-16 h-1 bg-blue-700 rounded-full mb-6"></div>

          </div>

              <p className="text-stone-600 text-lg leading-relaxed mb-6">
                July Signature was founded with a vision to redefine modern
                elegance through carefully curated fashion collections. What
                started as a passion for timeless style has evolved into a
                trusted destination for individuals seeking sophistication,
                quality, and confidence in every outfit.
              </p>

              <p className="text-stone-600 text-lg leading-relaxed mb-6">
                We believe that fashion should empower people to express their
                individuality while maintaining a sense of timeless beauty.
                Every collection is thoughtfully selected to balance classic
                elegance with contemporary trends.
              </p>

              <p className="text-stone-600 text-lg leading-relaxed">
                Our commitment to quality and customer satisfaction continues
                to inspire everything we do, making July Signature more than
                a fashion brand—it is a lifestyle.
              </p>
            </div>

            <div className="relative h-[400px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/our-journey.jpg"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* TEXT SIDE */}
          <div>
            <span className="text-blue-900 uppercase tracking-[0.3em] text-xs font-semibold">
              Our Physical Space
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4 mb-6 leading-tight">
              Experience Fashion
              <span className="block text-blue-900">In Real Life</span>
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              At July Signature, we believe fashion should not only be seen online
              but experienced in person. Our physical store is designed as a
              luxury fashion space where elegance meets comfort and personalized
              styling comes to life.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <h4 className="text-blue-900 font-semibold mb-1">
                  Personalized Styling
                </h4>
                <p className="text-sm text-slate-600">
                  One-on-one fashion guidance tailored to your style.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <h4 className="text-blue-900 font-semibold mb-1">
                  Premium Experience
                </h4>
                <p className="text-sm text-slate-600">
                  A calm luxury space designed for comfort and elegance.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <h4 className="text-blue-900 font-semibold mb-1">
                  Exclusive Collections
                </h4>
                <p className="text-sm text-slate-600">
                  In-store only pieces and limited fashion drops.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <h4 className="text-blue-900 font-semibold mb-1">
                  Luxury Ambience
                </h4>
                <p className="text-sm text-slate-600">
                  Designed to reflect modern elegance and sophistication.
                </p>
              </div>

            </div>

          </div>

           {/* IMAGE SIDE */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <img
                src="/images/shop2.jpeg"
                alt="July Signature Physical Store"
                className="w-full h-[450px] object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-5 left-6 bg-blue-800 text-white px-5 py-3 rounded-xl shadow-lg text-sm font-medium">
              Visit Our Boutique Store
            </div>
          </div>

        </div>
      </div>
    </section>
 

      {/* ================= STATS ================= */}
      <section className="py-16 bg-white border-stone-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-2xl p-8 shadow-sm"
              >
                <h3 className="text-4xl font-bold text-blue-900 mb-3">
                  {stat.number}
                </h3>
                <p className="text-stone-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Discover Your Signature Style
          </h2>

          <p className="text-rose-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Explore our carefully curated collections and experience timeless
            fashion designed for confidence, elegance, and individuality.
          </p>

          <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
            Shop Collection
          </button>
        </div>
      </section>
    </main>
  );
}