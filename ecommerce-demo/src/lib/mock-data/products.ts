import { Product, Category } from '@/types';

export const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    slug: 'electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400',
    productCount: 45
  },
  {
    id: '2',
    name: 'Clothing',
    slug: 'clothing',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400',
    productCount: 128
  },
  {
    id: '3',
    name: 'Books',
    slug: 'books',
    image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400',
    productCount: 89
  },
  {
    id: '4',
    name: 'Home & Garden',
    slug: 'home-garden',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400',
    productCount: 67
  },
  {
    id: '5',
    name: 'Sports',
    slug: 'sports',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400',
    productCount: 54
  },
  {
    id: '6',
    name: 'Beauty',
    slug: 'beauty',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400',
    productCount: 92
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    description: 'Premium noise-cancelling over-ear headphones with 30-hour battery life and superior sound quality.',
    price: 299.99,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600'
    ],
    category: 'Electronics',
    stock: 45,
    rating: 4.5,
    reviewCount: 128,
    featured: true
  },
  {
    id: '2',
    name: 'Classic Leather Jacket',
    description: 'Genuine leather jacket with modern fit. Perfect for any season.',
    price: 189.99,
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600',
      'https://images.unsplash.com/photo-1520975954732-35dd22299614?w=600'
    ],
    category: 'Clothing',
    stock: 23,
    rating: 4.8,
    reviewCount: 89,
    featured: true
  },
  {
    id: '3',
    name: 'Smart Watch Pro',
    description: 'Advanced fitness tracking, heart rate monitor, GPS, and smartphone notifications.',
    price: 399.99,
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600',
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600'
    ],
    category: 'Electronics',
    stock: 67,
    rating: 4.6,
    reviewCount: 234,
    featured: true
  },
  {
    id: '4',
    name: 'The Psychology of Money',
    description: 'Timeless lessons on wealth, greed, and happiness by Morgan Housel.',
    price: 24.99,
    images: [
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600'
    ],
    category: 'Books',
    stock: 156,
    rating: 4.9,
    reviewCount: 567,
    featured: false
  },
  {
    id: '5',
    name: 'Running Shoes - Air Max',
    description: 'Lightweight running shoes with advanced cushioning technology.',
    price: 129.99,
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600'
    ],
    category: 'Sports',
    stock: 89,
    rating: 4.4,
    reviewCount: 156,
    featured: true
  },
  {
    id: '6',
    name: 'Minimalist Table Lamp',
    description: 'Modern LED desk lamp with adjustable brightness and USB charging port.',
    price: 49.99,
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600'
    ],
    category: 'Home & Garden',
    stock: 34,
    rating: 4.3,
    reviewCount: 78,
    featured: false
  },
  {
    id: '7',
    name: 'Wireless Keyboard & Mouse Combo',
    description: 'Ergonomic wireless keyboard and mouse set with long battery life.',
    price: 79.99,
    images: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600'
    ],
    category: 'Electronics',
    stock: 120,
    rating: 4.5,
    reviewCount: 203,
    featured: false
  },
  {
    id: '8',
    name: 'Organic Face Serum',
    description: 'Natural vitamin C serum for bright, youthful skin.',
    price: 34.99,
    images: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600'
    ],
    category: 'Beauty',
    stock: 78,
    rating: 4.7,
    reviewCount: 345,
    featured: true
  },
  {
    id: '9',
    name: 'Denim Jeans - Slim Fit',
    description: 'Classic blue denim jeans with comfortable stretch fabric.',
    price: 59.99,
    images: [
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600'
    ],
    category: 'Clothing',
    stock: 145,
    rating: 4.2,
    reviewCount: 89,
    featured: false
  },
  {
    id: '10',
    name: 'Yoga Mat Premium',
    description: 'Extra thick non-slip yoga mat with carrying strap.',
    price: 39.99,
    images: [
      'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600'
    ],
    category: 'Sports',
    stock: 67,
    rating: 4.6,
    reviewCount: 123,
    featured: false
  },
  {
    id: '11',
    name: 'Coffee Maker Deluxe',
    description: 'Programmable coffee maker with thermal carafe and auto shut-off.',
    price: 89.99,
    images: [
      'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=600'
    ],
    category: 'Home & Garden',
    stock: 43,
    rating: 4.4,
    reviewCount: 167,
    featured: false
  },
  {
    id: '12',
    name: 'Portable Bluetooth Speaker',
    description: 'Waterproof speaker with 360-degree sound and 12-hour battery.',
    price: 69.99,
    images: [
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600'
    ],
    category: 'Electronics',
    stock: 91,
    rating: 4.5,
    reviewCount: 278,
    featured: true
  }
];

// Helper functions
export const getFeaturedProducts = () => mockProducts.filter(p => p.featured);
export const getProductsByCategory = (category: string) => 
  mockProducts.filter(p => p.category === category);
export const getProductById = (id: string) => 
  mockProducts.find(p => p.id === id);