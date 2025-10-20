'use client';

import Link from 'next/link';
import { ShoppingCart, User, Search, Menu } from 'lucide-react';
import { useAppSelector } from '@/lib/redux/hooks';
import { useState } from 'react';

export default function Navbar() {
  const cartItems = useAppSelector((state) => state.cart.items);
  const user = useAppSelector((state) => state.auth.user);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <ShoppingCart className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">ShopDemo</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/products"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Contact
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-6">
            {/* Cart */}
            <Link href="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-blue-600 transition" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* User Menu */}
            {user ? (
              <Link href="/profile">
                <div className="flex items-center space-x-2 cursor-pointer">
                  <User className="h-6 w-6 text-gray-700 hover:text-blue-600 transition" />
                  <span className="hidden md:block text-sm text-gray-700">
                    {user.fullName.split(' ')[0]}
                  </span>
                </div>
              </Link>
            ) : (
              <Link
                href="/login"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Login
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link
                href="/products"
                className="text-gray-700 hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}