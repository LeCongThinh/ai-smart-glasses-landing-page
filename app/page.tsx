import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Specs from "@/components/Specs";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Header />
      <Hero />
      <Features />
      {/* Thêm compoennt*/}
      {/*<AITechnology /> 
        <HowItWorks />*/}
      <Specs />
      <Newsletter />
      <Footer />

      
    </main>
  );
}