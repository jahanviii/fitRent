"use client";
import Link from "next/link";
import { GlareCard } from "@/components/ui/glare-card";
import { Button } from "@/components/ui/moving-border";

function Process() {
  return (
    <div className="p-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-white">How It Works</h2>
        <p className="text-lg text-neutral-200 mt-2">
          Follow these simple steps to rent and enjoy our workout equipment.
        </p>
      </div>
      {/* First Row of Cards */}
      <div className="flex flex-wrap justify-center gap-4">
        <GlareCard className="flex flex-col items-center justify-center p-4">
          <h3 className="text-xl font-bold">1. CHOOSE YOUR GEAR</h3>
          <p className="text-neutral-200">
            Browse through our top-quality workout equipment collection and
            select the perfect gear to help you reach your fitness goals.
          </p>
        </GlareCard>
        <GlareCard className="flex flex-col items-center justify-center p-4">
          <h3 className="text-xl font-bold">2. CUSTOMIZE YOUR RENTAL</h3>
          <p className="text-neutral-200">
            Choose your preferred rental duration, select your equipment size
            (if applicable), and schedule a delivery date that fits your
            schedule.
          </p>
          <p className="text-neutral-200 mt-2">
            <strong>Example:</strong> Rent a treadmill for 1 month starting from
            Rs.3000.
          </p>
        </GlareCard>
        <GlareCard className="flex flex-col items-center justify-center p-4">
          <h3 className="text-xl font-bold">3. ACCESSORIZE YOUR WORKOUT</h3>
          <p className="text-neutral-200">
            Take your workout to the next level with our curated selection of
            accessories, designed to complement your rented equipment and
            enhance your fitness experience.
          </p>
        </GlareCard>
      </div>
      {/* Second Row of Cards */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <GlareCard className="flex flex-col items-center justify-center p-4">
          <h3 className="text-xl font-bold">4. DELIVERY AND SETUP</h3>
          <p className="text-neutral-200">
            We'll deliver your rented equipment to your doorstep, and our
            team will ensure a hassle-free setup process so you can start
            working out right away.
          </p>
          <p className="text-neutral-200 mt-2">
            <strong>Note:</strong> A delivery charge, which includes return
            pick-up, applies.
          </p>
          <p className="text-neutral-200 mt-2">
            <strong>Example:</strong> Delivery fee is Rs.150, including pickup
            after rental.
          </p>
        </GlareCard>
        <GlareCard className="flex flex-col items-center justify-center p-4">
          <h3 className="text-xl font-bold">5. DEPOSIT</h3>
          <p className="text-neutral-200">
            A refundable deposit is required to secure your rental. This will be
            returned to you once the equipment is picked up in good condition.
          </p>
          <p className="text-neutral-200 mt-2">
            <strong>Example:</strong> Deposit is Rs.1000 for a treadmill.
          </p>
        </GlareCard>
        <GlareCard className="flex flex-col items-center justify-center p-4">
          <h3 className="text-xl font-bold">6. RETURN PROCESS</h3>
          <p className="text-neutral-200">
            When your rental period ends, we'll arrange a convenient time
            to pick up the equipment from your location. Our team will handle
            everything, ensuring a smooth return process.
          </p>
          <p className="text-neutral-200 mt-2">
            <strong>Note:</strong> Ensure the equipment is in good condition to
            get a full deposit refund.
          </p>
        </GlareCard>
      </div>
      {/* faq button */}
      <div className="mt-20 text-center">
        <Link href={"/faq"} passHref>
   
        <Button> View FAQs</Button>
        </Link>
      </div>
     
    </div>
  );
}

export default Process;
