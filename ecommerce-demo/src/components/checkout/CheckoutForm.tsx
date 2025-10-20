'use client';

import { useState } from 'react';
import { ShippingAddress } from '@/types';
import { toast } from 'sonner';

interface CheckoutFormProps {
  onSubmit: (address: ShippingAddress) => void;
}

export default function CheckoutForm({ onSubmit }: CheckoutFormProps) {
  const [formData, setFormData] = useState<ShippingAddress>({
    fullName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    phone: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.fullName ||
      !formData.address ||
      !formData.city ||
      !formData.state ||
      !formData.zipCode ||
      !formData.phone
    ) {
      toast.error('Please fill in all required fields');
      return;
    }

    onSubmit(formData);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        Shipping Information
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="John Doe"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Street Address <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="123 Main Street, Apt 4B"
          />
        </div>

        {/* City & State */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="New York"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              State <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="NY"
            />
          </div>
        </div>

        {/* Zip Code & Country */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Zip Code <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="10001"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Country <span className="text-red-600">*</span>
            </label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Australia">Australia</option>
            </select>
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number <span className="text-red-600">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition mt-6"
        >
          Continue to Payment
        </button>
      </form>
    </div>
  );
}