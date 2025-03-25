
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ResumeBuilder from "@/components/ResumeBuilder";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ResumeBuilder />
        <PortfolioShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
