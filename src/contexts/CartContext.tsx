// src/contexts/CartContext.tsx
"use client";
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  deposit: number; // Added for deposit
  duration: number; // Added for rental duration (months)
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  updateQuantity: (id: number, quantity: number) => void;
  updateDeposit: (id: number, deposit: number) => void; // Added for deposit
  updateDuration: (id: number, duration: number) => void; // Added for duration
  removeFromCart: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    // Add default item to the cart
    const defaultItem: CartItem = {
      id: 1,
      name: 'Treadmill',
      description: 'High-performance treadmill for home or gym use.',
      price: 14000,
      image: '/images/t.jpg',
      quantity: 1,
      deposit: 100, // Default deposit amount
      duration: 3,  // Default duration in months
    };

    setCart([defaultItem]);
  }, []);

  const updateQuantity = (id: number, quantity: number) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const updateDeposit = (id: number, deposit: number) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, deposit } : item
      )
    );
  };

  const updateDuration = (id: number, duration: number) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, duration } : item
      )
    );
  };
  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prevCart => prevCart.filter(cartItem => cartItem.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, updateDeposit, updateDuration, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
