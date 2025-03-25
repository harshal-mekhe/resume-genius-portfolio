
import { CheckCircle, Star, Award, Zap, Clock, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Cpu,
    title: "AI-Powered Suggestions",
    description: "Our AI analyzes job descriptions to tailor your resume with the most relevant skills and experiences.",
    className: "bg-blue-50",
    iconClassName: "text-blue-500"
  },
  {
    icon: Star,
    title: "Professional Templates",
    description: "Choose from a variety of minimalist, beautifully designed templates that showcase your skills.",
    className: "bg-amber-50",
    iconClassName: "text-amber-500"
  },
  {
    icon: Award,
    title: "Portfolio Showcase",
    description: "Create a stunning portfolio to showcase your projects, skills, and achievements.",
    className: "bg-emerald-50",
    iconClassName: "text-emerald-500"
  },
  {
    icon: Clock,
    title: "Quick & Easy",
    description: "Build your resume in minutes, not hours, with our intuitive and streamlined process.",
    className: "bg-purple-50",
    iconClassName: "text-purple-500"
  },
  {
    icon: CheckCircle,
    title: "ATS-Friendly",
    description: "All templates are optimized to pass through Applicant Tracking Systems with flying colors.",
    className: "bg-red-50",
    iconClassName: "text-red-500"
  },
  {
    icon: Zap,
    title: "Instant Download",
    description: "Export your resume in multiple formats (PDF, DOCX) with just one click.",
    className: "bg-sky-50",
    iconClassName: "text-sky-500"
  }
];

const Features = () => {
  return (
    <section className="section py-20 md:py-32 bg-neutral-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <h2 className="mb-6 animate-fade-in">Features designed for students</h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto animate-fade-in">
            Tools and features specifically created to help students and recent graduates stand out in a competitive job market.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 border border-neutral-100 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-4px] animate-fade-in opacity-0"
              style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: "forwards" }}
            >
              <div className={cn("w-12 h-12 flex items-center justify-center rounded-full mb-6", feature.className)}>
                <feature.icon className={cn("w-6 h-6", feature.iconClassName)} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
