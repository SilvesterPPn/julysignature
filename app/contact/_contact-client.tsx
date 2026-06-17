'use client';

import { useState } from 'react';
import Button from '../../components/Button';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPinterest,
} from 'react-icons/fa';

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative min-h-[60vh] flex items-center justify-center">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/contact.jpg"
            alt="Contact July Signature"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-900/70" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <span className="inline-block px-4 py-2 bg-white/10 border border-white/20 text-white text-xs uppercase tracking-[0.25em] rounded-full mb-6">
            Get In Touch
          </span>

          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
            Contact Us
          </h1>

          <p className="text-slate-200 text-lg">
            We'd love to hear from you  let's create something beautiful together.
          </p>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-14">
          {/* ================= INFO ================= */}
          <div className="space-y-8">

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Contact Information
              </h2>

              <div className="space-y-5 text-slate-600">

                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-blue-900 mt-1" />
                  <p>
                    No.16, Opebi Road Ikeja, Lagos, Nigeria
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-blue-900" />
                  <p>070 77989 241</p>
                </div>

                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-blue-900" />
                  <p>yemitin@yahoo.com</p>
                </div>

                <div className="flex items-center gap-3">
                  <FaClock className="text-blue-900" />
                  <p>Mon - Sat: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* ================= MAP ================= */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <div className="relative w-full h-64 md:h-80 lg:h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.387489996632!2d3.351165073730332!3d6.598671622287843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9379212dd65b%3A0x38fcf0bb645a2285!2sJuly%20Signature!5e0!3m2!1sen!2sng!4v1781720397963!5m2!1sen!2sng"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>


            {/* ================= SOCIALS ================= */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-slate-900">
                Follow Us
              </h3>

              <div className="flex gap-4 text-blue-900 text-lg">
                <FaInstagram className="cursor-pointer hover:scale-110 transition" />
                <FaFacebook className="cursor-pointer hover:scale-110 transition" />
                <FaTwitter className="cursor-pointer hover:scale-110 transition" />
                <FaPinterest className="cursor-pointer hover:scale-110 transition" />
              </div>
            </div>

          </div>

           {/* ================= FORM ================= */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">

            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-600 focus:outline-none"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-600 focus:outline-none"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-600 focus:outline-none"
              />

              <textarea
                name="message"
                placeholder="Your Message..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-600 focus:outline-none"
                required
              />

              <Button className="bg-blue-900 text-white w-full py-3 rounded-xl hover:bg-blue-800 transition">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
