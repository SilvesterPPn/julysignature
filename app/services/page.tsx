import SectionTitle from '../../components/SectionTitle';
import Button from '../../components/Button';
import Link from 'next/link';
import { services } from '../../data/services';

export const metadata = {
  title: 'Services - July Signature',
  description: 'Discover our personalized styling and luxury services',
};

export default function ServicesPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="bg-stone-100 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-stone-900 mb-4">
              Our Services
            </h1>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Personalized luxury experiences tailored just for you
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="What We Offer"
            title="Luxury Services"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="p-8 bg-stone-50 rounded-lg border border-stone-200 hover:border-rose-300 hover:shadow-lg transition-all"
              >
                <div className="text-6xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-serif font-bold text-stone-800 mb-4">{service.title}</h3>
                <p className="text-stone-600 mb-6">{service.description}</p>
                <Link href="/contact">
                  <Button variant="outline" size="sm">Learn More</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-rose-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-4">
            Ready for a Personalized Experience?
          </h2>
          <p className="text-lg text-stone-600 mb-8">
            Book a consultation today and let us help you discover your perfect style.
          </p>
          <Link href="/contact">
            <Button size="lg">Book Now</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
