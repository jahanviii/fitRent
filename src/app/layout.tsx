
import React from 'react';
import { CartProvider } from '../contexts/CartContext'; // Adjust path as needed
import './globals.css'; // Import global styles if any
import Navbar from '@/components/Navbar';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toastify
import { ToastContainer } from 'react-toastify';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'fitRent',
  description: 'Stay fit with fitRent',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <html lang="en" className="dark">
        <body className={inter.className}>
          <div className="relative w-full flex items-center justify-center">
            <Navbar />
          </div>
          {children}
          <ToastContainer />

        </body>
      </html>
    </CartProvider>
  );
}
