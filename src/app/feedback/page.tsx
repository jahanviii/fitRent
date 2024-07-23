"use client";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const feedbackData = [
  {
    name: "Jane Doe",
    quote:
      "The equipment was top-notch and the service was fantastic! Highly recommend.",
    title: "⭐⭐⭐⭐⭐",
  },
  {
    name: "John Smith",
    quote:
      "Great selection of equipment and the rental process was super easy.",
    title: "⭐⭐⭐⭐",
  },
  {
    name: "Emily Johnson",
    quote:
      "I loved the flexible rental options. Will definitely use this service again!",
    title: "⭐⭐⭐⭐ ⭐",
  },
  {
    name: "Sia",
    quote:
      "I was hesitant to try FitRent at first, but the convenience and affordability won me over. I've never felt better!",
    title: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Yashvi",
    quote:
      "I was able to reach my fitness goals in just 3 months with the help of FitRent! The equipment is top-notch and the customer service is amazing.",
    title: "⭐⭐⭐⭐",
  },
];

function Feedback() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        What Our Users Say
      </h2>
      <p>
      Don&apos;t just take our word for it! Hear from our satisfied users who have
        achieved their fitness goals with our equipment.
      </p>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={feedbackData}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default Feedback;
