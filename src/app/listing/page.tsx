"use client";
import { Button } from "@/components/ui/moving-border";
import { toast } from "react-toastify";
import { useCart } from "@/contexts/CartContext"; // Import the CartContext hook
import Image from "next/image";
import equipment from "../../data/equipment.json";
import { BackgroundGradient } from "@/components/ui/background-gradient";

interface Equipment {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  isFeatured?: boolean;
}

function Listing() {
  // Ensure the data is transformed to match the Equipment interface
  const allequipmentData = (equipment as { allequipmentData: any[] }).allequipmentData.map(item => ({
    ...item,
    price: parseFloat(item.price), // Convert price to number
  })) as Equipment[];

  // Use the useCart hook to get access to the cart context
  const { addToCart } = useCart();

  const handleAddToCart = (item: Equipment) => {
    addToCart(item); // Use the context's addToCart method
    toast.success(`${item.name} added to cart!`, {
      position: "top-center",
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="pt-44 bg-black bg-opacity-30">
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          All Equipment
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Browse Our Equipment
        </p>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {allequipmentData.map((item: Equipment) => (
            <div key={item.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={500}
                  height={300}
                  layout="responsive"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {item.name}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {item.description}
                  </p>
                  <p className="text-lg text-teal-600 font-semibold mt-2 mb-4">
                    Rs.{item.price}
                  </p>
                  <Button
                    onClick={() => handleAddToCart(item)}
                    className="px-4 py-2 rounded border bg-teal-600 text-white hover:bg-teal-700 transition duration-200"
                  >
                    Add to cart
                  </Button>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Listing;
