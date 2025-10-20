'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { mockProducts, getProductById } from '@/lib/mock-data/products';
import { useAppDispatch } from '@/lib/redux/hooks';
import { addToCart } from '@/lib/redux/slices/cartSlice';
import { toast } from 'sonner';
import { Star, ShoppingCart, Heart, ArrowLeft, Minus, Plus } from 'lucide-react';
import ProductCard from '@/components/products/ProductCard';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = getProductById(params.id as string);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <Link
            href="/products"
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch(addToCart(product));
    }
    toast.success(`${quantity}x ${product.name} added to cart!`);
  };

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Related products (same category, excluding current)
  const relatedProducts = mockProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Products
        </button>

        {/* Product Details */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-8">
            {/* Images */}
            <div>
              {/* Main Image */}
              <div className="relative h-96 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Thumbnail Images */}
              {product.images.length > 1 && (
                <div className="flex gap-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative h-20 w-20 rounded-lg overflow-hidden border-2 transition ${
                        selectedImage === index
                          ? 'border-blue-600'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              {/* Category */}
              <p className="text-sm text-blue-600 uppercase tracking-wide mb-2">
                {product.category}
              </p>

              {/* Name */}
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600 ml-2">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold text-blue-600">
                  ${product.price.toFixed(2)}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Stock Status */}
              <div className="mb-6">
                {product.stock > 0 ? (
                  <p className="text-green-600 font-semibold">
                    In Stock ({product.stock} available)
                  </p>
                ) : (
                  <p className="text-red-600 font-semibold">Out of Stock</p>
                )}
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={decrementQuantity}
                      disabled={quantity <= 1}
                      className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Minus className="h-5 w-5" />
                    </button>
                    <span className="px-6 py-2 text-lg font-semibold">
                      {quantity}
                    </span>
                    <button
                      onClick={incrementQuantity}
                      disabled={quantity >= product.stock}
                      className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Plus className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mb-6">
                <button
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </button>
                <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                  <Heart className="h-6 w-6 text-gray-600" />
                </button>
              </div>

              {/* Additional Info */}
              <div className="border-t pt-6 space-y-3 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>SKU:</span>
                  <span className="font-semibold">{product.id}</span>
                </div>
                <div className="flex justify-between">
                  <span>Category:</span>
                  <span className="font-semibold">{product.category}</span>
                </div>
                <div className="flex justify-between">
                  <span>Free Shipping:</span>
                  <span className="font-semibold text-green-600">
                    On orders over $100
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}