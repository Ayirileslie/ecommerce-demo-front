'use client';

import Link from 'next/link';
import { useAppSelector } from '@/lib/redux/hooks';
import CartItem from '@/components/cart/CartItem';
import CartSummary from '@/components/cart/CartSummary';
import EmptyCart from '@/components/cart/EmptyCart';
import { ShoppingBag } from 'lucide-react';

export default function CartPage() {
  const { items, subtotal, tax, shipping, total } = useAppSelector(
    (state) => state.cart
  );

  if (items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <ShoppingBag className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          </div>
          <p className="text-gray-600">
            {items.length} {items.length === 1 ? 'item' : 'items'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <CartItem key={item.product.id} item={item} />
            ))}

            {/* Continue Shopping */}
            <Link
              href="/products"
              className="inline-block mt-6 text-blue-600 hover:text-blue-700 font-semibold"
            >
              ← Continue Shopping
            </Link>
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <CartSummary
              subtotal={subtotal}
              tax={tax}
              shipping={shipping}
              total={total}
            />
          </div>
        </div>
      </div>
    </div>
  );
}