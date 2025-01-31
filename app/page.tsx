import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/About";
import MyExperiance from "@/components/MyExperiance";
import Testemonials from "@/components/Testemonials";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-gray-100 h-full w-full dark:bg-gray-800 text-black dark:text-white">
      <Navbar />
      <Hero />
      <About />
      <MyExperiance />
      <Testemonials />
      <Footer />
    </main>
  );
}
