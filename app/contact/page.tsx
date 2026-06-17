'use client';

import { useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import Button from '../../components/Button';



export default function ContactPage() {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="bg-stone-100 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-stone-900 mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              We'd love to hear from you
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <SectionTitle
                subtitle="Get In Touch"
                title="Send Us a Message"
              />
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:border-rose-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:border-rose-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:border-rose-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:border-rose-500"
                  />
                </div>
                <Button type="submit" size="lg">Send Message</Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <SectionTitle
                subtitle="Visit Us"
                title="Store Information"
              />

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-serif font-semibold text-stone-800 mb-2">Address</h3>
                  <p className="text-stone-600">
                    123 Fashion Avenue<br />
                    New York, NY 10001<br />
                    United States
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-semibold text-stone-800 mb-2">Contact</h3>
                  <p className="text-stone-600">
                    Email: info@julysignature.com<br />
                    Phone: (555) 123-4567
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-semibold text-stone-800 mb-2">Business Hours</h3>
                  <ul className="text-stone-600 space-y-1">
                    <li>Monday - Friday: 10:00 AM - 8:00 PM</li>
                    <li>Saturday: 10:00 AM - 6:00 PM</li>
                    <li>Sunday: 12:00 PM - 5:00 PM</li>
                  </ul>
                </div>

                {/* Map Placeholder */}
                <div className="aspect-video bg-stone-200 rounded-lg flex items-center justify-center">
                  <p className="text-stone-500">Map Location</p>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-semibold text-stone-800 mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {['Instagram', 'Facebook', 'Pinterest', 'Twitter'].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-colors text-stone-600"
                      >
                        {social.charAt(0)}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
