import Link from 'next/link';
import { Home, ShoppingBag, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* 404 Animation */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-200">404</h1>
          <div className="relative -mt-16">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-blue-100 rounded-full">
              <Search className="h-16 w-16 text-blue-600" />
            </div>
          </div>
        </div>

        {/* Message */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <button className="w-full sm:w-auto bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center">
              <Home className="h-5 w-5 mr-2" />
              Go Home
            </button>
          </Link>
          <Link href="/products">
            <button className="w-full sm:w-auto bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition flex items-center justify-center">
              <ShoppingBag className="h-5 w-5 mr-2" />
              Browse Products
            </button>
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-4">Popular Pages:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/products"
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              Products
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/cart"
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              Cart
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/about"
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              About
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/contact"
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}