'use client';

import Image from 'next/image';
const steps = [
  { num: "01", title: "Browse", desc: "Explore our curated collections online or visit our Lagos showroom." },
  { num: "02", title: "Select", desc: "Choose your style, size, and colour. Need help? Chat with our stylist." },
  { num: "03", title: "Order", desc: "Pay securely online. We accept cards, bank transfer, and Pay Later." },
  { num: "04", title: "Receive", desc: "We deliver nationwide. Every order arrives in signature packaging." },
];

export default function Steps() {
  return (
<section
  id="contact"
  className="relative py-24 px-[8%] overflow-hidden"
>
  {/* Background Image */}
  <div className="absolute inset-0">
    <Image
      src="/images/image2.jpg"
      alt="Shopping Experience"
      fill
      priority
      className="object-cover"
    />
  </div>

  <div className="relative z-10">

    {/* Header */}
    <div className="text-center max-w-[700px] mx-auto mb-16">

      <div className="inline-block  backdrop-blur-sm px-8 py-8 rounded-[30px] shadow-sm">

        <p className="text-[0.7rem] tracking-[0.3em] uppercase text-[#0A1F44] font-medium mb-3">
          How It Works
        </p>

        <h2 className="font-serif text-[clamp(2rem,3.5vw,3.3rem)] font-light text-slate-900 leading-tight">
          Your <span className="italic text-[#0A1F44]">Shopping</span> Experience
        </h2>

        <div className="w-14 h-[2px] bg-[#0A1F44] mx-auto my-5 rounded-full" />

        <p className="text-sm text-slate-800 leading-7 max-w-[500px] mx-auto">
          From discovery to delivery, every detail has been thoughtfully designed
          to create a seamless luxury shopping experience.
        </p>

      </div>

    </div>

    {/* Timeline */}
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 relative">

      {/* Connector Line Desktop */}
      <div
        className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-[2px]"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(10,31,68,.25), transparent)",
        }}
      />

      {steps.map((s, i) => (
        <div
          key={i}
          className="rounded-[28px] p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white"
        >

          {/* Number Circle */}
          <div className="w-12 h-10 rounded-full bg-[#0A1F44] text-white flex items-center justify-center mx-auto mb-5 text-lg font-semibold shadow-lg">
            {s.num}
          </div>

          {/* Title */}
          <h3 className="font-serif text-[1.2rem] text-gray-100 mb-3">
            {s.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-100 lg:text-gray-300 leading-7">
            {s.desc}
          </p>

        </div>
      ))}

    </div>

  </div>
</section>
  );
}