
import HeroSection from "@/components/HeroSection";
import Featured from "./featured/page";
import Process from "./process/page";
import Feedback from "./feedback/page";
import Contact from "./contact/page";
export default function Home() {
  return (

<main className="max-h bg-black/[0.96] antialiased bg-grid-white/[0.02]">

<HeroSection/>
<Featured/>
<Process/>
<Feedback/>
<Contact/>


</main>


  );
}
