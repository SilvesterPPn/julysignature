'use client';

import { useState } from 'react';

import ProductCard from '../../components/ProductCard';
import { products, categories } from '../../data/products';



export default function StorePage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center">

          
          <div className="absolute inset-0">
            <img
              src="/images/collection.jpg"
              alt="Our Collection"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-slate-900/60" />

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">

            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
              Our Collection
            </h1>

            <p className="text-lg md:text-xl text-slate-200">
              Discover your next favorite piece
            </p>

          </div>
        </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-stone-800 text-white'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="w-full md:w-80">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-5 py-3 rounded-full border border-stone-300 focus:outline-none focus:border-rose-500"
                />
                <svg
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-stone-600">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
