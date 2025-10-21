import { Order } from '@/types';
import { mockProducts } from './products';

export const mockOrders: Order[] = [
  {
    id: 'ORD-2024-001',
    userId: '1',
    items: [
      {
        product: mockProducts[0], // Wireless Headphones
        quantity: 1,
      },
      {
        product: mockProducts[4], // Running Shoes
        quantity: 2,
      },
    ],
    subtotal: 559.97,
    tax: 44.80,
    shipping: 0,
    total: 604.77,
    status: 'delivered',
    paymentStatus: 'paid',
    shippingAddress: {
      fullName: 'John Doe',
      address: '123 Main Street, Apt 4B',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States',
      phone: '+1 (555) 123-4567',
    },
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-18T14:20:00Z',
  },
  {
    id: 'ORD-2024-002',
    userId: '1',
    items: [
      {
        product: mockProducts[2], // Smart Watch Pro
        quantity: 1,
      },
    ],
    subtotal: 399.99,
    tax: 32.00,
    shipping: 0,
    total: 431.99,
    status: 'shipped',
    paymentStatus: 'paid',
    shippingAddress: {
      fullName: 'John Doe',
      address: '123 Main Street, Apt 4B',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States',
      phone: '+1 (555) 123-4567',
    },
    createdAt: '2024-02-01T09:15:00Z',
    updatedAt: '2024-02-03T16:45:00Z',
  },
  {
    id: 'ORD-2024-003',
    userId: '1',
    items: [
      {
        product: mockProducts[3], // Psychology of Money
        quantity: 1,
      },
      {
        product: mockProducts[5], // Table Lamp
        quantity: 1,
      },
    ],
    subtotal: 74.98,
    tax: 6.00,
    shipping: 10,
    total: 90.98,
    status: 'processing',
    paymentStatus: 'paid',
    shippingAddress: {
      fullName: 'John Doe',
      address: '123 Main Street, Apt 4B',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States',
      phone: '+1 (555) 123-4567',
    },
    createdAt: '2024-02-10T14:20:00Z',
    updatedAt: '2024-02-10T14:20:00Z',
  },
  {
    id: 'ORD-2024-004',
    userId: '1',
    items: [
      {
        product: mockProducts[1], // Leather Jacket
        quantity: 1,
      },
    ],
    subtotal: 189.99,
    tax: 15.20,
    shipping: 0,
    total: 205.19,
    status: 'pending',
    paymentStatus: 'paid',
    shippingAddress: {
      fullName: 'John Doe',
      address: '123 Main Street, Apt 4B',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States',
      phone: '+1 (555) 123-4567',
    },
    createdAt: '2024-02-15T11:00:00Z',
    updatedAt: '2024-02-15T11:00:00Z',
  },
];

export const getOrdersByUserId = (userId: string) => {
  return mockOrders.filter((order) => order.userId === userId);
};

export const getOrderById = (orderId: string) => {
  return mockOrders.find((order) => order.id === orderId);
};