'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CartItem as CartItemType } from '@/types';
import { useAppDispatch } from '@/lib/redux/hooks';
import { updateQuantity, removeFromCart } from '@/lib/redux/slices/cartSlice';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const dispatch = useAppDispatch();
  const { product, quantity } = item;

  const handleIncrement = () => {
    if (quantity < product.stock) {
      dispatch(updateQuantity({ productId: product.id, quantity: quantity + 1 }));
    } else {
      toast.error('Maximum stock reached');
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      dispatch(updateQuantity({ productId: product.id, quantity: quantity - 1 }));
    }
  };

  const handleRemove = () => {
    dispatch(removeFromCart(product.id));
    toast.success(`${product.name} removed from cart`);
  };

  const itemTotal = product.price * quantity;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Product Image */}
        <Link
          href={`/products/${product.id}`}
          className="relative h-32 w-32 flex-shrink-0 rounded-lg overflow-hidden"
        >
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover hover:scale-110 transition-transform duration-300"
          />
        </Link>

        {/* Product Info */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            {/* Category */}
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
              {product.category}
            </p>

            {/* Name */}
            <Link href={`/products/${product.id}`}>
              <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition">
                {product.name}
              </h3>
            </Link>

            {/* Price */}
            <p className="text-blue-600 font-semibold mt-1">
              ${product.price.toFixed(2)} each
            </p>

            {/* Stock Warning */}
            {product.stock < 10 && (
              <p className="text-xs text-orange-600 mt-1">
                Only {product.stock} left in stock
              </p>
            )}
          </div>

          {/* Quantity Controls & Remove */}
          <div className="flex items-center justify-between mt-4">
            {/* Quantity Selector */}
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={handleDecrement}
                disabled={quantity <= 1}
                className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="px-4 py-2 font-semibold min-w-[3rem] text-center">
                {quantity}
              </span>
              <button
                onClick={handleIncrement}
                disabled={quantity >= product.stock}
                className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>

            {/* Item Total */}
            <div className="flex items-center gap-4">
              <p className="text-xl font-bold text-gray-900">
                ${itemTotal.toFixed(2)}
              </p>

              {/* Remove Button */}
              <button
                onClick={handleRemove}
                className="text-red-600 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition"
                aria-label="Remove item"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}