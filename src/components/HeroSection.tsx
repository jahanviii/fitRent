'use client';
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { useRouter } from "next/navigation";

function HeroSection() {
  const router=useRouter();
  const handleButtonClick = () => {
    router.push('/listing');
  };
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col 
    items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Rent, return, repeat
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Rent top-quality workout equipment and achieve your fitness goals
          without breaking the bank.
        </p>
        <div className="mt-4">
        <Button
            onClick={handleButtonClick}
            className="bg-transparent border border-black text-white font-bold py-2 px-4 rounded-md hover:bg-black hover:text-white"
          >
            Discover Your New Workout
          </Button>

        </div>
      </div>
    </div>
  );
}

export default HeroSection;
