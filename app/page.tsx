import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Specs from "@/components/Specs";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import ExperienceLayer from "@/components/ExperienceLayer";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf8ff] transition-colors duration-300 dark:bg-[#070b18]">
      <ExperienceLayer />
      <Chatbot />
      <Header />
      <Hero />
      <Features />
      <Specs />
      <Newsletter />
      <Footer />
    </main>
  );
}
