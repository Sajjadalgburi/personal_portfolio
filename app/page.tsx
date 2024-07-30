import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/About";
import MyExperiance from "@/components/MyExperiance";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-hidden">
      <div className="max-w-7xl w-full">
        <Navbar />
        {/* $ */}
        <Hero />
        {/* $ */}
        <About />
        {/* $ */}
        <MyExperiance />
      </div>
    </main>
  );
}
