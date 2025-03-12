import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { AboutMe } from "@/components/About";
import MyExperience from "@/components/MyExperiance";
import Testemonials from "@/components/Testemonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-base-100 text-base-content h-full w-full overflow-hidden">
      <Navbar />
      <Hero />
      <AboutMe />
      <MyExperience />
      <Testemonials />
      <Footer />
    </main>
  );
}
