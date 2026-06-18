'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Store', href: '/store' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="h-20 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
            <Image
              src="/images/logo2.png"
              alt="July Signature Logo"
              width={80}
              height={30}
              priority
              className="h-auto w-auto object-contain rounded-full"
            />
          </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-[15px] font-medium text-stone-700 transition-all duration-300 hover:text-stone-900 group"
                >
                  {item.name}
                  <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-stone-800 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:block">
              <Link href="/store">
                <button className="bg-stone-800 hover:bg-stone-900 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 shadow-md hover:shadow-xl">
                  Shop Now
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden text-stone-800"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-[300px] bg-white z-50 shadow-2xl transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-stone-200">
          <span className="text-xl font-serif font-bold text-stone-800">
            <Link href="/" className="flex items-center">
            <Image
              src="/images/logo2.png"
              alt="July Signature Logo"
              width={90}
              height={40}
              priority
              className="h-auto w-auto object-contain"
            />
          </Link>
          </span>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-stone-700"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col px-6 py-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="py-4 border-b border-stone-100 text-stone-700 hover:text-stone-900 text-lg transition-colors"
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/store"
            onClick={() => setIsMenuOpen(false)}
            className="mt-8"
          >
            <button className="w-full bg-stone-800 hover:bg-stone-900 text-white py-4 rounded-full font-medium">
              Shop Collection
            </button>
          </Link>
        </div>
      </aside>
    </>
  );
}
