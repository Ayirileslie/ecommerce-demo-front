import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

export default function EmptyCart() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* Empty Cart Icon */}
        <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-200 rounded-full mb-6">
          <ShoppingCart className="h-12 w-12 text-gray-400" />
        </div>

        {/* Message */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Your cart is empty
        </h2>
        <p className="text-gray-600 mb-8">
          Looks like you haven't added anything to your cart yet. Start
          shopping to fill it up!
        </p>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Link href="/products">
            <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition">
              Start Shopping
            </button>
          </Link>
          <Link href="/">
            <button className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition">
              Back to Home
            </button>
          </Link>
        </div>

        {/* Popular Categories */}
        <div className="mt-8 pt-8 border-t">
          <p className="text-sm text-gray-600 mb-4">Popular Categories</p>
          <div className="flex flex-wrap justify-center gap-2">
            <Link
              href="/products?category=Electronics"
              className="px-4 py-2 bg-white rounded-lg text-sm text-gray-700 hover:bg-gray-50 border border-gray-200 transition"
            >
              Electronics
            </Link>
            <Link
              href="/products?category=Clothing"
              className="px-4 py-2 bg-white rounded-lg text-sm text-gray-700 hover:bg-gray-50 border border-gray-200 transition"
            >
              Clothing
            </Link>
            <Link
              href="/products?category=Books"
              className="px-4 py-2 bg-white rounded-lg text-sm text-gray-700 hover:bg-gray-50 border border-gray-200 transition"
            >
              Books
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}