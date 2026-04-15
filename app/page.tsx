import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Materials from "../components/Materials";
import Collection from "../components/Collection";
import Story from "../components/Story";
import Waitlist from "../components/Waitlist";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0b0c] text-[#f5f5f2]">
      <Navbar />
      <Hero />
      <Materials />
      <Collection />
      <Story />
      <Waitlist />
      <Footer />
    </main>
  );
}