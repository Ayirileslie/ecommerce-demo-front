import Link from 'next/link';
import { CheckCircle, Package, ArrowRight } from 'lucide-react';

interface OrderSuccessProps {
  orderId: string;
}

export default function OrderSuccess({ orderId }: OrderSuccessProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>

          {/* Message */}
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Order Confirmed!
          </h1>
          <p className="text-gray-600 mb-6">
            Thank you for your purchase. Your order has been successfully placed.
          </p>

          {/* Order ID */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-600 mb-1">Order Number</p>
            <p className="text-xl font-bold text-gray-900">{orderId}</p>
          </div>

          {/* Order Details */}
          <div className="bg-blue-50 rounded-lg p-4 mb-6 text-left">
            <div className="flex items-start">
              <Package className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  What's next?
                </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Order confirmation sent to your email</li>
                  <li>• You can track your order in your account</li>
                  <li>• Estimated delivery: 3-5 business days</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Link href="/orders">
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center group">
                View Order Details
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/products">
              <button className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition">
                Continue Shopping
              </button>
            </Link>
            <Link href="/">
              <button className="w-full text-gray-600 py-2 hover:text-gray-900 transition">
                Back to Home
              </button>
            </Link>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>Need help? Contact us at support@shopdemo.com</p>
        </div>
      </div>
    </div>
  );
}