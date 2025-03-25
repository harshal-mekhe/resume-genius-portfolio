
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github, Code, Image as ImageIcon, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2000",
    description: "A comprehensive admin dashboard for e-commerce platforms with real-time analytics, inventory management, and order processing.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 2,
    title: "AI-Powered Chat Application",
    category: "Machine Learning",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=2000",
    description: "An intelligent chat application that uses natural language processing to understand and respond to user queries in a conversational manner.",
    technologies: ["Python", "TensorFlow", "React", "Flask", "WebSockets"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 3,
    title: "Personal Finance Tracker",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000",
    description: "A mobile application that helps users track expenses, set budgets, and visualize spending patterns with intuitive charts.",
    technologies: ["React Native", "Firebase", "Redux", "D3.js"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 4,
    title: "Blockchain Voting System",
    category: "Blockchain",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2000",
    description: "A secure voting system built on blockchain technology to ensure transparency, immutability, and verification of election results.",
    technologies: ["Solidity", "Ethereum", "Web3.js", "React", "Node.js"],
    demoLink: "#",
    codeLink: "#"
  }
];

const categories = ["All", "Web Development", "Machine Learning", "Mobile App", "Blockchain"];

const PortfolioShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <section className="section py-20 md:py-32 bg-neutral-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-6 animate-fade-in">Showcase your best work</h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto animate-fade-in">
            Create a stunning portfolio that highlights your projects, skills, and achievements to impress potential employers.
          </p>
        </div>
        
        <div className="mb-12">
          <Tabs defaultValue="grid" className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
              <div className="flex overflow-x-auto pb-2 space-x-2 w-full md:w-auto">
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    size="sm"
                    className="rounded-full whitespace-nowrap"
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
              
              <TabsList className="grid w-full max-w-[200px] grid-cols-2">
                <TabsTrigger value="grid">
                  <div className="grid grid-cols-2 gap-1 w-4 h-4">
                    <div className="bg-current" />
                    <div className="bg-current" />
                    <div className="bg-current" />
                    <div className="bg-current" />
                  </div>
                </TabsTrigger>
                <TabsTrigger value="list">
                  <div className="flex flex-col gap-1 w-4 h-4 justify-between">
                    <div className="h-[2px] bg-current" />
                    <div className="h-[2px] bg-current" />
                    <div className="h-[2px] bg-current" />
                  </div>
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="grid" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredProjects.map((project, index) => (
                  <div 
                    key={project.id}
                    className="group bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-md transition-all animate-fade-in opacity-0"
                    style={{ animationDelay: `${0.1 * index}s`, animationFillMode: "forwards" }}
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                        <div className="flex space-x-3">
                          <Button size="sm" variant="secondary" className="rounded-full" asChild>
                            <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-1" />
                              Demo
                            </a>
                          </Button>
                          <Button size="sm" variant="secondary" className="rounded-full" asChild>
                            <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-1" />
                              Code
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="mb-2">
                        <span className="text-xs font-medium px-2.5 py-1 bg-neutral-100 rounded-full text-neutral-700">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                      <p className="text-neutral-600 mb-4 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-neutral-50 border border-neutral-100 rounded-full text-neutral-600">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="list" className="animate-fade-in">
              <div className="space-y-6">
                {filteredProjects.map((project, index) => (
                  <div 
                    key={project.id}
                    className="bg-white rounded-xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-md transition-all p-6 animate-fade-in opacity-0"
                    style={{ animationDelay: `${0.1 * index}s`, animationFillMode: "forwards" }}
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/4">
                        <div className="aspect-video md:aspect-square rounded-lg overflow-hidden">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="md:w-3/4">
                        <div className="mb-2 flex items-center">
                          <span className="text-xs font-medium px-2.5 py-1 bg-neutral-100 rounded-full text-neutral-700 mr-2">
                            {project.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                        <p className="text-neutral-600 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, i) => (
                            <span key={i} className="text-xs px-2 py-1 bg-neutral-50 border border-neutral-100 rounded-full text-neutral-600">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex space-x-3">
                          <Button size="sm" variant="outline" className="rounded-full" asChild>
                            <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-1" />
                              View Demo
                            </a>
                          </Button>
                          <Button size="sm" variant="outline" className="rounded-full" asChild>
                            <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-1" />
                              View Code
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="text-center animate-fade-in">
          <Button size="lg" className="rounded-full px-8 py-6">
            Create Your Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
