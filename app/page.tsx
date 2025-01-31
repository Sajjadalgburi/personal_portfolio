import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/About";
import MyExperiance from "@/components/MyExperiance";
import Testemonials from "@/components/Testemonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white h-full w-full dark:bg-gray-300 text-gray-800 dark:text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <MyExperiance />
      <Testemonials />
      <Footer />
    </main>
  );
}
