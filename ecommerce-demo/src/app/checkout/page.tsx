'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector, useAppDispatch } from '@/lib/redux/hooks';
import { clearCart } from '@/lib/redux/slices/cartSlice';
import CheckoutForm from '@/components/checkout/CheckoutForm';
import OrderReview from '@/components/checkout/OrderReview';
import OrderSuccess from '@/components/checkout/OrderSuccess';
import { ShippingAddress } from '@/types';
import { Lock } from 'lucide-react';

export default function CheckoutPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { items, subtotal, tax, shipping, total } = useAppSelector(
    (state) => state.cart
  );
  const [step, setStep] = useState<'shipping' | 'payment' | 'success'>('shipping');
  const [shippingAddress, setShippingAddress] = useState<ShippingAddress | null>(
    null
  );
  const [orderId, setOrderId] = useState<string>('');

  // Redirect if cart is empty
  useEffect(() => {
    if (items.length === 0 && step !== 'success') {
      router.push('/cart');
    }
  }, [items.length, router, step]);

  const handleShippingSubmit = (address: ShippingAddress) => {
    setShippingAddress(address);
    setStep('payment');
  };

  const handlePaymentSubmit = async () => {
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Generate order ID
    const newOrderId = 'ORD-' + Date.now();
    setOrderId(newOrderId);

    // Clear cart
    dispatch(clearCart());

    // Show success
    setStep('success');
  };

  if (step === 'success') {
    return <OrderSuccess orderId={orderId} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Checkout</h1>
          <div className="flex items-center text-sm text-gray-600">
            <Lock className="h-4 w-4 mr-1" />
            Secure checkout
          </div>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              {/* Step 1: Shipping */}
              <div className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step === 'shipping'
                      ? 'bg-blue-600 text-white'
                      : 'bg-green-600 text-white'
                  }`}
                >
                  {step === 'shipping' ? '1' : '✓'}
                </div>
                <span className="ml-2 font-medium text-gray-900">Shipping</span>
              </div>

              {/* Line */}
              <div className="w-24 h-1 bg-gray-300 mx-4"></div>

              {/* Step 2: Payment */}
              <div className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step === 'payment'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-300 text-gray-600'
                  }`}
                >
                  2
                </div>
                <span
                  className={`ml-2 font-medium ${
                    step === 'payment' ? 'text-gray-900' : 'text-gray-500'
                  }`}
                >
                  Payment
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {step === 'shipping' && (
              <CheckoutForm onSubmit={handleShippingSubmit} />
            )}
            {step === 'payment' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Payment Information
                </h2>

                {/* Mock Payment Form */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="4242 4242 4242 4242"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-6">
                  <button
                    onClick={() => setStep('shipping')}
                    className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition"
                  >
                    Back
                  </button>
                  <button
                    onClick={handlePaymentSubmit}
                    className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition"
                  >
                    Place Order
                  </button>
                </div>

                <p className="text-xs text-gray-500 text-center mt-4">
                  This is a demo. No real payment will be processed.
                </p>
              </div>
            )}
          </div>

          {/* Order Review Sidebar */}
          <div className="lg:col-span-1">
            <OrderReview
              items={items}
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