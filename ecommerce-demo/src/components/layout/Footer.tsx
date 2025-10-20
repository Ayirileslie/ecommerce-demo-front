import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              ShopDemo
            </h3>
            <p className="text-sm">
              Your one-stop shop for quality products at great prices. Shop
              with confidence!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="hover:text-white transition">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Customer Service
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shipping" className="hover:text-white transition">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white transition">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Newsletter
            </h3>
            <p className="text-sm mb-4">
              Subscribe to get special offers and updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none"
              />
              <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition">
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © 2024 ShopDemo. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="hover:text-white transition"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="hover:text-white transition"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="hover:text-white transition"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}