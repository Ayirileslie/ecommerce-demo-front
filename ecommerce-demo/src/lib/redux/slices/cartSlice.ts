import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState, Product, CartItem } from '@/types';

const TAX_RATE = 0.08; // 8% tax
const SHIPPING_COST = 10;
const FREE_SHIPPING_THRESHOLD = 100;

const initialState: CartState = {
  items: [],
  subtotal: 0,
  tax: 0,
  shipping: 0,
  total: 0,
};

const calculateTotals = (items: CartItem[]): Omit<CartState, 'items'> => {
  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const tax = subtotal * TAX_RATE;
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const total = subtotal + tax + shipping;

  return {
    subtotal: parseFloat(subtotal.toFixed(2)),
    tax: parseFloat(tax.toFixed(2)),
    shipping: parseFloat(shipping.toFixed(2)),
    total: parseFloat(total.toFixed(2)),
  };
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(
        (item) => item.product.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          product: action.payload,
          quantity: 1,
        });
      }

      const totals = calculateTotals(state.items);
      Object.assign(state, totals);
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item) => item.product.id !== action.payload
      );

      const totals = calculateTotals(state.items);
      Object.assign(state, totals);
    },

    updateQuantity: (
      state,
      action: PayloadAction<{ productId: string; quantity: number }>
    ) => {
      const item = state.items.find(
        (item) => item.product.id === action.payload.productId
      );

      if (item) {
        item.quantity = Math.max(1, action.payload.quantity);
      }

      const totals = calculateTotals(state.items);
      Object.assign(state, totals);
    },

    clearCart: (state) => {
      state.items = [];
      state.subtotal = 0;
      state.tax = 0;
      state.shipping = 0;
      state.total = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;