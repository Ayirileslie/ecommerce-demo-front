import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { mockProducts, mockCategories, getFeaturedProducts } from '@/lib/mock-data/products';
import ProductCard from '@/components/products/ProductCard';

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to ShopDemo
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Discover amazing products at unbeatable prices
            </p>
            <Link
              href="/products"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {mockCategories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.slug}`}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                <div className="relative h-32">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-semibold text-gray-900">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {category.productCount} items
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Products
            </h2>
            <Link
              href="/products"
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
            >
              View All
              <ArrowRight className="ml-1 h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Shopping?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of happy customers today!
          </p>
          <Link
            href="/register"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Create Account
          </Link>
        </div>
      </section>
    </div>
  );
}