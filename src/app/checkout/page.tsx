"use client";
import Link from "next/link";

function Checkout() {
  return (
    <div className="max-w-md mx-auto p-4 pt-6 pb-8 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-2 text-black">Checkout</h2>
      <p className="text-black mb-4">Please enter your payment information</p>
      <form>
        <div className="mb-4">
          <label className="block text-black mb-2" htmlFor="card-number">
            Card Number
          </label>
          <input
            type="text"
            id="card-number"
            className="w-full p-2 pl-10 text-sm text-black bg-white border border-gray-300 rounded outline-none focus:border-blue-300"
            placeholder="Card Number"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black mb-2" htmlFor="expiration-date">
            Expiration Date
          </label>
          <input
            type="text"
            id="expiration-date"
            className="w-full p-2 pl-10 text-sm text-black bg-white border border-gray-300 rounded outline-none focus:border-blue-300"
            placeholder="MM/YY"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black mb-2" htmlFor="cvv">
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            className="w-full p-2 pl-10 text-sm text-black bg-white border border-gray-300 rounded outline-none focus:border-blue-300"
            placeholder="CVV"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black mb-2" htmlFor="name-on-card">
            Name on Card
          </label>
          <input
            type="text"
            id="name-on-card"
            className="w-full p-2 pl-10 text-sm text-black bg-white border border-gray-300 rounded outline-none focus:border-blue-300"
            placeholder="Name on Card"
          />
        </div>
        <div className="flex justify-center mb-4">
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded inline-block"
            type="submit"
          >
            Pay Now
          </button>
        </div>
      </form>
      <p className="text-white">
        <Link href="/cart"
           className="text-white hover:text-gray-400">Return to Cart
        </Link>
      </p>
    </div>
  );
}

export default Checkout;