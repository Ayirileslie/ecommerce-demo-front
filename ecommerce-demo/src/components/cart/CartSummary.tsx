'use client';

import Link from 'next/link';
import { ArrowRight, Tag } from 'lucide-react';

interface CartSummaryProps {
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
}

export default function CartSummary({
  subtotal,
  tax,
  shipping,
  total,
}: CartSummaryProps) {
  const freeShippingThreshold = 100;
  const remainingForFreeShipping = freeShippingThreshold - subtotal;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

      {/* Free Shipping Progress */}
      {shipping > 0 && remainingForFreeShipping > 0 && (
        <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
          <p className="text-sm text-blue-800 mb-2">
            Add <span className="font-bold">${remainingForFreeShipping.toFixed(2)}</span> more
            for FREE shipping! 🎉
          </p>
          <div className="w-full bg-blue-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${Math.min((subtotal / freeShippingThreshold) * 100, 100)}%`,
              }}
            />
          </div>
        </div>
      )}

      {shipping === 0 && subtotal > 0 && (
        <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-200">
          <p className="text-sm text-green-800 flex items-center">
            <Tag className="h-4 w-4 mr-2" />
            You qualify for FREE shipping! 🎉
          </p>
        </div>
      )}

      {/* Price Breakdown */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span className="font-semibold">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Tax (8%)</span>
          <span className="font-semibold">${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span className="font-semibold">
            {shipping === 0 ? (
              <span className="text-green-600">FREE</span>
            ) : (
              `$${shipping.toFixed(2)}`
            )}
          </span>
        </div>
        <div className="border-t pt-3 flex justify-between text-lg font-bold text-gray-900">
          <span>Total</span>
          <span className="text-blue-600">${total.toFixed(2)}</span>
        </div>
      </div>

      {/* Checkout Button */}
      <Link href="/checkout">
        <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center group">
          Proceed to Checkout
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </Link>

      {/* Continue Shopping Link */}
      <Link href="/products">
        <button className="w-full mt-3 bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition">
          Continue Shopping
        </button>
      </Link>

      {/* Trust Badges */}
      <div className="mt-6 pt-6 border-t space-y-2 text-sm text-gray-600">
        <div className="flex items-center">
          <svg
            className="h-5 w-5 text-green-600 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          Secure checkout
        </div>
        <div className="flex items-center">
          <svg
            className="h-5 w-5 text-green-600 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          30-day return policy
        </div>
        <div className="flex items-center">
          <svg
            className="h-5 w-5 text-green-600 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          Fast shipping
        </div>
      </div>
    </div>
  );
}