import Image from 'next/image';
import { CartItem } from '@/types';

interface OrderReviewProps {
  items: CartItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
}

export default function OrderReview({
  items,
  subtotal,
  tax,
  shipping,
  total,
}: OrderReviewProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

      {/* Items List */}
      <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
        {items.map((item) => (
          <div key={item.product.id} className="flex gap-3">
            <div className="relative h-16 w-16 flex-shrink-0 rounded-lg overflow-hidden">
              <Image
                src={item.product.images[0]}
                alt={item.product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-gray-900 truncate">
                {item.product.name}
              </h3>
              <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
              <p className="text-sm font-semibold text-blue-600">
                ${(item.product.price * item.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Price Breakdown */}
      <div className="border-t pt-4 space-y-2 mb-4">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span className="font-semibold">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Tax</span>
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
      </div>

      {/* Total */}
      <div className="border-t pt-4 flex justify-between text-lg font-bold">
        <span className="text-gray-900">Total</span>
        <span className="text-blue-600">${total.toFixed(2)}</span>
      </div>
    </div>
  );
}