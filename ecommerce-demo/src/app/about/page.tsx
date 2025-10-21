import { ShoppingBag, Users, Shield, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const features = [
    {
      icon: ShoppingBag,
      title: 'Quality Products',
      description: 'Carefully curated selection of high-quality products from trusted brands.',
    },
    {
      icon: Shield,
      title: 'Secure Shopping',
      description: 'Your data is protected with industry-standard security measures.',
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Dedicated support team ready to help you with any questions.',
    },
    {
      icon: TrendingUp,
      title: 'Best Prices',
      description: 'Competitive pricing and regular deals to give you the best value.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About ShopDemo</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Your trusted e-commerce platform for quality products at great prices
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-4">
              ShopDemo was created with a simple mission: to provide customers with an
              exceptional online shopping experience. We believe that shopping should be
              easy, secure, and enjoyable.
            </p>
            <p className="text-gray-600 mb-4">
              Founded in 2024, we've grown from a small startup to a trusted platform
              serving thousands of happy customers. Our commitment to quality,
              customer service, and innovation drives everything we do.
            </p>
            <p className="text-gray-600">
              This is a demonstration e-commerce platform built with Next.js, showcasing
              modern web development practices and features including user authentication,
              shopping cart functionality, and an admin panel for product management.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">5000+</p>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">1000+</p>
              <p className="text-gray-600">Products</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">50+</p>
              <p className="text-gray-600">Categories</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">24/7</p>
              <p className="text-gray-600">Support</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Shopping?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Explore our wide selection of quality products today!
          </p>
          <Link href="/products">
            <button className="bg-white text-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-blue-50 transition text-lg">
              Browse Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}