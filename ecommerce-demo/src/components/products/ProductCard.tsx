'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import { ShoppingCart, Star } from 'lucide-react';
import { useAppDispatch } from '@/lib/redux/hooks';
import { addToCart } from '@/lib/redux/slices/cartSlice';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
  viewMode?: 'grid' | 'list';
}

export default function ProductCard({ product, viewMode = 'grid' }: ProductCardProps) {
  const dispatch = useAppDispatch();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent link navigation
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <Link href={`/products/${product.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {product.stock < 10 && (
            <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
              Low Stock
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Category */}
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
            {product.category}
          </p>

          {/* Name */}
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-2">
              ({product.reviewCount})
            </span>
          </div>

          {/* Price and Cart Button */}
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-blue-600">
              ${product.price.toFixed(2)}
            </span>
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
              aria-label="Add to cart"
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}