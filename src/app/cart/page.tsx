
// "use client";
// import React, { useEffect, useState } from 'react';
// import Link from "next/link";
// import { useCart } from '../../contexts/CartContext'; // Adjust path as needed

// const durations = [3, 6, 12]; // Rental durations in months

// function Cart() {
//   const { cart, removeFromCart, updateQuantity, updateDeposit, updateDuration } = useCart();
//   const [total, setTotal] = useState(0);
  
//   const fixedDeposit = 5000; // Fixed deposit amount

//   const calculateTotal = () => {
//     const totalAmount = cart.reduce((total, item) => {
//       const durationMultiplier = item.duration; // Default to 1 if duration is not set
//       return total + (item.price * item.quantity * durationMultiplier) + (fixedDeposit * item.quantity);
//     }, 0);
//     setTotal(totalAmount);
//   };

//   useEffect(() => {
//     calculateTotal();
//   }, [cart]);

//   return (
//     <div className="max-w-md mx-auto p-4 pt-16 pb-8 bg-white rounded shadow-md mt-16">
//       <h2 className="text-2xl font-bold mb-2 text-gray-800">Your Cart</h2>
//       <p className="text-gray-600 mb-4">Items you have added</p>
//       {cart.length === 0 ? (
//         <p className="text-gray-600">Your cart is currently empty.</p>
//       ) : (
//         <div className="mb-6">
//           {cart.map(item => (
//             <div key={item.id} className="flex items-center justify-between mb-4">
//               <div className="flex items-center">
//                 <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
//                   <p className="text-gray-600">{item.description}</p>
//                   <div className="flex items-center mb-2">
//                     <button
//                       onClick={() => {
//                         updateQuantity(item.id, item.quantity - 1);
//                         calculateTotal();
//                       }}
//                       disabled={item.quantity <= 1}
//                       className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-2 rounded"
//                     >
//                       -
//                     </button>
//                     <span className="mx-2  text-black">{item.quantity}</span>
//                     <button
//                       onClick={() => {
//                         updateQuantity(item.id, item.quantity + 1);
//                         calculateTotal();
//                       }}
//                       className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-2 rounded"
//                     >
//                       +
//                     </button>
//                   </div>
//                   <div className="mb-2">
//                     <label className="block text-black mb-1">Deposit:</label>
//                     <input
//                       type="number"
//                       value={fixedDeposit}
//                       onChange={(e) => {
//                         updateDeposit(item.id, parseFloat(e.target.value));
//                         calculateTotal();
//                       }}
//                       className="w-24 px-2 py-1 border border-gray-300 rounded  text-black"
//                       readOnly // Make deposit input read-only since it's fixed
//                     />
//                   </div>
//                   <div className="mb-2">
//                     <label className="block text-gray-800 mb-1">Duration (months):</label>
//                     <select
//                       value={item.duration}
//                       onChange={(e) => {
//                         updateDuration(item.id, parseInt(e.target.value));
//                         calculateTotal();
//                       }}
//                       className="w-32 px-2 py-1 border border-gray-300 rounded text-black"
//                     >
//                       {durations.map(duration => (
//                         <option key={duration} value={duration}>
//                           {duration} months
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                   <p className="text-gray-800">Price: ₹{item.price.toFixed(2)}</p>
//                 </div>
//               </div>
//               <button
//                 onClick={() => {
//                   removeFromCart(item.id);
//                   calculateTotal();
//                 }}
//                 className="text-red-500 hover:text-red-700"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//           <div className="flex justify-between font-bold text-lg">
//             <span>Total:</span>
//             <span>₹{total.toFixed(2)}</span>
//           </div>
//         </div>
//       )}
//       <div className="flex justify-center mb-2">
//         <Link
//           href="/listing"
//           className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded inline-block"
//         >
//           Continue Shopping
//         </Link>
//       </div>
//       <div className="flex justify-center">
//         <button
//           className={`bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-block ${cart.length === 0 ? 'cursor-not-allowed opacity-50' : ''}`}
//           disabled={cart.length === 0}
//         >
//           Checkout
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Cart;


// src/app/cart/page.tsx
"use client";
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { useCart } from '../../contexts/CartContext'; // Adjust path as needed

const durations = [3, 6, 12]; // Rental durations in months

function Cart() {
  const { cart, removeFromCart, updateQuantity, updateDeposit, updateDuration } = useCart();
  const [total, setTotal] = useState(0);
  
  const fixedDeposit = 5000; // Fixed deposit amount

  const calculateTotal = () => {
    const totalAmount = cart.reduce((total, item) => {
      const durationMultiplier = item.duration; // Duration multiplier based on selected duration
      return total + (item.price * item.quantity * durationMultiplier) + (fixedDeposit * item.quantity);
    }, 0);
    setTotal(totalAmount);
  };

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  return (
    <div className="max-w-md mx-auto p-4 pt-16 pb-8 bg-white rounded shadow-md mt-16">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">Your Cart</h2>
      <p className="text-gray-600 mb-4">Items you have added</p>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is currently empty.</p>
      ) : (
        <div className="mb-6">
          {cart.map(item => (
            <div key={item.id} className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  <div className="flex items-center mb-2">
                    <button
                      onClick={() => {
                        updateQuantity(item.id, item.quantity - 1);
                        calculateTotal();
                      }}
                      disabled={item.quantity <= 1}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-2 rounded"
                    >
                      -
                    </button>
                    <span className="mx-2 text-black">{item.quantity}</span>
                    <button
                      onClick={() => {
                        updateQuantity(item.id, item.quantity + 1);
                        calculateTotal();
                      }}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-2 rounded"
                    >
                      +
                    </button>
                  </div>
                  <div className="mb-2">
                    <label className="block text-black mb-1">Deposit:</label>
                    <input
                      type="number"
                      value={fixedDeposit}
                      onChange={(e) => {
                        updateDeposit(item.id, parseFloat(e.target.value));
                        calculateTotal();
                      }}
                      className="w-24 px-2 py-1 border border-gray-300 rounded text-black"
                      readOnly // Make deposit input read-only since it's fixed
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-gray-800 mb-1">Duration (months):</label>
                    <select
                      value={item.duration}
                      onChange={(e) => {
                        updateDuration(item.id, parseInt(e.target.value));
                        calculateTotal();
                      }}
                      className="w-32 px-2 py-1 border border-gray-300 rounded text-black"
                    >
                      {durations.map(duration => (
                        <option key={duration} value={duration}>
                          {duration} months
                        </option>
                      ))}
                    </select>
                  </div>
                  <p className="text-gray-800">Price: ₹{item.price.toFixed(2)}</p>
                </div>
              </div>
              <button
                onClick={() => {
                  removeFromCart(item.id);
                  calculateTotal();
                }}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
        </div>
      )}
      <div className="flex justify-center mb-2">
        <Link
          href="/listing"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded inline-block"
        >
          Continue Shopping
        </Link>
      </div>
      <div className="flex justify-center">
        <button
          className={`bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-block ${cart.length === 0 ? 'cursor-not-allowed opacity-50' : ''}`}
          disabled={cart.length === 0}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
