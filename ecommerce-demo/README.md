# ShopDemo - E-Commerce Platform

A modern, full-featured e-commerce platform built with Next.js 14, TypeScript, and Tailwind CSS.

![ShopDemo Screenshot](https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=600&fit=crop)

## ✨ Features

### Customer Features
- 🛍️ **Product Browsing** - Search, filter, and sort products by category, price, and more
- 🛒 **Shopping Cart** - Add/remove items, adjust quantities with real-time total calculations
- 💳 **Checkout Flow** - Multi-step checkout with shipping information and mock payment
- 👤 **User Authentication** - Secure login/register with JWT tokens
- 📦 **Order History** - View past orders with detailed information and status tracking
- ❤️ **Wishlist** - Save favorite products for later
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile devices

### Admin Features
- 📊 **Dashboard** - Overview of sales, orders, and key metrics
- 📝 **Product Management** - Full CRUD operations for products
- 🎯 **Stock Management** - Low stock alerts and inventory tracking
- 📈 **Order Management** - View and update order statuses
- 🔐 **Role-Based Access** - Admin-only routes and features

## 🚀 Tech Stack

- **Frontend:** Next.js 14 (App Router), React 18, TypeScript
- **State Management:** Redux Toolkit
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Notifications:** Sonner
- **Authentication:** Mock JWT (ready for backend integration)
- **Database:** Mock data (ready for backend integration)

## 📦 Installation

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/ecommerce-demo.git
cd ecommerce-demo
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🔑 Demo Credentials

### Customer Account
- **Email:** user@demo.com
- **Password:** password

### Admin Account
- **Email:** admin@demo.com
- **Password:** admin123

## 📂 Project Structure

```
ecommerce-demo/
├── src/
│   ├── app/                    # Next.js 14 app directory
│   │   ├── (auth)/            # Auth pages (login, register)
│   │   ├── (shop)/            # Shop pages (products, cart, checkout)
│   │   ├── (user)/            # User pages (profile, orders)
│   │   ├── (admin)/           # Admin pages (dashboard, management)
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   └── not-found.tsx      # 404 page
│   ├── components/
│   │   ├── admin/             # Admin components
│   │   ├── cart/              # Cart components
│   │   ├── checkout/          # Checkout components
│   │