
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-5 inline-block animate-fade-in opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            <span className="inline-block py-1.5 px-4 rounded-full bg-neutral-100 text-neutral-800 text-sm font-medium">
              AI-Powered Resume & Portfolio Builder
            </span>
          </div>
          
          <h1 className="mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            <span className="block text-gradient">Stand out with a resume</span>
            <span className="block">that gets you hired</span>
          </h1>
          
          <p className="mb-10 text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
            Create professional resumes and stunning portfolios in minutes with our AI-powered tools designed specifically for students entering the job market.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 animate-fade-in opacity-0" style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>
            <Button asChild size="lg" className="rounded-full px-8 py-6">
              <Link to="/resume">Create Your Resume <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6">
              <Link to="/portfolio">Build Your Portfolio</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-r from-neutral-50 to-gray-50 rounded-full blur-3xl opacity-40 -z-10"></div>
      
      {/* Preview image */}
      <div className="mt-24 max-w-6xl mx-auto px-4 animate-fade-in opacity-0" style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}>
        <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-2xl shadow-neutral-100">
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2940" 
            alt="Resume builder preview" 
            className="w-full h-auto object-cover animate-scale-in"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
