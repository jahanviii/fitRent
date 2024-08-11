"use client";
import React, { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  deposit: number;
  duration: number;
}

interface CartContextType {
  cart: CartItem[];
  totalAmount: number; 

  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  updateQuantity: (id: number, quantity: number) => void;
  updateDeposit: (id: number, deposit: number) => void;
  updateDuration: (id: number, duration: number) => void;
  removeFromCart: (id: number) => void;
}

type CartAction =
  | { type: 'ADD_ITEM'; item: Omit<CartItem, 'quantity'> }
  | { type: 'UPDATE_QUANTITY'; id: number; quantity: number }
  | { type: 'UPDATE_DEPOSIT'; id: number; deposit: number }
  | { type: 'UPDATE_DURATION'; id: number; duration: number }
  | { type: 'REMOVE_ITEM'; id: number };

const cartReducer = (state: CartItem[], action: CartAction): CartItem[] => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItem = state.find(item => item.id === action.item.id);
      if (existingItem) {
        return state.map(item =>
          item.id === action.item.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...state, { ...action.item, quantity: 1 }];
      }
    case 'UPDATE_QUANTITY':
      return state.map(item =>
        item.id === action.id ? { ...item, quantity: action.quantity } : item
      );
    case 'UPDATE_DEPOSIT':
      return state.map(item =>
        item.id === action.id ? { ...item, deposit: action.deposit } : item
      );
    case 'UPDATE_DURATION':
      return state.map(item =>
        item.id === action.id ? { ...item, duration: action.duration } : item
      );
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  // useEffect(() => {
  //   const savedCart = localStorage.getItem('cart');
  //   if (savedCart) {
  //     dispatch({ type: 'SET_CART', cart: JSON.parse(savedCart) });
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    dispatch({ type: 'ADD_ITEM', item });
  };

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', id, quantity });
  };

  const updateDeposit = (id: number, deposit: number) => {
    dispatch({ type: 'UPDATE_DEPOSIT', id, deposit });
  };

  const updateDuration = (id: number, duration: number) => {
    dispatch({ type: 'UPDATE_DURATION', id, duration });
  };

  const removeFromCart = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', id });
  };
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, totalAmount, addToCart, updateQuantity, updateDeposit, updateDuration, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  // Access the CartContext
  const context = useContext(CartContext);
  
  // Ensure that the hook is used within a CartProvider
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  
  // Return the context value
  return context;
};