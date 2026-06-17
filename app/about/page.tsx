import Image from "next/image";


export const metadata = {
  title: "About - July Signature",
  description:
    "Learn about our story, mission, vision, and the values that define July Signature.",
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

      {/* ================= STATS ================= */}
      <section className="py-16 bg-stone-50 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-2xl p-8 shadow-sm"
              >
                <h3 className="text-4xl font-bold text-blue-500 mb-3">
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