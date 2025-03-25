
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Layout, Plus, FileCode, Eye } from "lucide-react";

const ResumeBuilder = () => {
  return (
    <section className="section py-20 md:py-32">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-6 animate-fade-in">Build your perfect resume</h2>
          <p className="text-lg md:text-xl text-neutral-600 animate-fade-in">
            Our AI-powered resume builder helps you create a professional resume that highlights your strengths and gets you noticed.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="editor" className="animate-fade-in">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="templates">
                <Layout className="w-4 h-4 mr-2" />
                Templates
              </TabsTrigger>
              <TabsTrigger value="editor">
                <FileText className="w-4 h-4 mr-2" />
                Editor
              </TabsTrigger>
              <TabsTrigger value="preview">
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="templates" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <Card key={item} className="overflow-hidden border border-neutral-200 hover:shadow-md transition-all cursor-pointer">
                    <div className="aspect-[3/4] bg-neutral-100 relative">
                      <img 
                        src={`https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=500&h=600`} 
                        alt={`Resume template ${item}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                        <Button size="sm" variant="secondary" className="rounded-full">Use this template</Button>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium">Template {item}</h3>
                      <p className="text-sm text-neutral-500">Professional & clean</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="editor" className="animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-medium text-lg mb-4">Personal Information</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Full Name</label>
                          <input 
                            type="text" 
                            placeholder="John Doe"
                            className="w-full rounded-md border border-neutral-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-neutral-300 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Job Title</label>
                          <input 
                            type="text" 
                            placeholder="Software Engineer"
                            className="w-full rounded-md border border-neutral-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-neutral-300 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Email</label>
                          <input 
                            type="email" 
                            placeholder="john@example.com"
                            className="w-full rounded-md border border-neutral-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-neutral-300 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Phone</label>
                          <input 
                            type="tel" 
                            placeholder="(123) 456-7890"
                            className="w-full rounded-md border border-neutral-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-neutral-300 transition-all"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-medium text-lg">Education</h3>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full">
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">University</label>
                          <input 
                            type="text" 
                            placeholder="University of California"
                            className="w-full rounded-md border border-neutral-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-neutral-300 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Degree</label>
                          <input 
                            type="text" 
                            placeholder="Bachelor of Science in Computer Science"
                            className="w-full rounded-md border border-neutral-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-neutral-300 transition-all"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-1">From</label>
                            <input 
                              type="text" 
                              placeholder="2018"
                              className="w-full rounded-md border border-neutral-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-neutral-300 transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">To</label>
                            <input 
                              type="text" 
                              placeholder="2022"
                              className="w-full rounded-md border border-neutral-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-neutral-300 transition-all"
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="lg:col-span-2 bg-white rounded-xl overflow-hidden border border-neutral-200 shadow-sm">
                  <div className="bg-neutral-100 px-4 py-3 border-b border-neutral-200 flex items-center">
                    <div className="flex space-x-1.5">
                      <div className="w-3 h-3 bg-neutral-300 rounded-full"></div>
                      <div className="w-3 h-3 bg-neutral-300 rounded-full"></div>
                      <div className="w-3 h-3 bg-neutral-300 rounded-full"></div>
                    </div>
                    <div className="text-xs text-neutral-500 mx-auto">Resume Preview</div>
                  </div>
                  <div className="aspect-[8.5/11] bg-white p-10 overflow-auto">
                    <div className="text-center mb-6">
                      <h1 className="text-2xl font-bold">John Doe</h1>
                      <p className="text-neutral-600">Software Engineer</p>
                      <div className="flex items-center justify-center space-x-4 mt-2 text-sm text-neutral-500">
                        <span>john@example.com</span>
                        <span>•</span>
                        <span>(123) 456-7890</span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h2 className="text-lg font-bold border-b border-neutral-200 pb-2 mb-3">Education</h2>
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="font-semibold">University of California</h3>
                          <span className="text-sm text-neutral-500">2018 - 2022</span>
                        </div>
                        <p className="text-neutral-600">Bachelor of Science in Computer Science</p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h2 className="text-lg font-bold border-b border-neutral-200 pb-2 mb-3">Experience</h2>
                      <div className="mb-4">
                        <div className="flex justify-between items-start">
                          <h3 className="font-semibold">Software Engineer Intern</h3>
                          <span className="text-sm text-neutral-500">Summer 2021</span>
                        </div>
                        <p className="text-neutral-600 italic mb-2">Tech Company, Inc.</p>
                        <ul className="list-disc list-inside text-sm space-y-1 text-neutral-600">
                          <li>Developed new features for company's main product</li>
                          <li>Collaborated with senior engineers on code reviews</li>
                          <li>Improved application performance by 30%</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h2 className="text-lg font-bold border-b border-neutral-200 pb-2 mb-3">Skills</h2>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm">JavaScript</span>
                        <span className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm">React</span>
                        <span className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm">Node.js</span>
                        <span className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm">Python</span>
                        <span className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm">SQL</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Button size="lg" className="rounded-full px-8">
                  <FileCode className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="preview" className="animate-fade-in">
              <div className="max-w-4xl mx-auto bg-white rounded-xl overflow-hidden border border-neutral-200 shadow-lg">
                <div className="bg-neutral-100 px-4 py-3 border-b border-neutral-200 flex items-center">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-xs text-neutral-500 mx-auto">Final Preview</div>
                </div>
                <div className="aspect-[8.5/11] bg-white p-10 overflow-auto">
                  <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold">John Doe</h1>
                    <p className="text-neutral-600">Software Engineer</p>
                    <div className="flex items-center justify-center space-x-4 mt-2 text-sm text-neutral-500">
                      <span>john@example.com</span>
                      <span>•</span>
                      <span>(123) 456-7890</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h2 className="text-lg font-bold border-b border-neutral-200 pb-2 mb-3">Education</h2>
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold">University of California</h3>
                        <span className="text-sm text-neutral-500">2018 - 2022</span>
                      </div>
                      <p className="text-neutral-600">Bachelor of Science in Computer Science</p>
                      <p className="text-sm text-neutral-500 mt-1">GPA: 3.8/4.0</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h2 className="text-lg font-bold border-b border-neutral-200 pb-2 mb-3">Experience</h2>
                    <div className="mb-4">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold">Software Engineer Intern</h3>
                        <span className="text-sm text-neutral-500">Summer 2021</span>
                      </div>
                      <p className="text-neutral-600 italic mb-2">Tech Company, Inc.</p>
                      <ul className="list-disc list-inside text-sm space-y-1 text-neutral-600">
                        <li>Developed new features for company's main product</li>
                        <li>Collaborated with senior engineers on code reviews</li>
                        <li>Improved application performance by 30%</li>
                        <li>Created automated testing suite that increased code coverage by 45%</li>
                      </ul>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold">Research Assistant</h3>
                        <span className="text-sm text-neutral-500">2020 - 2021</span>
                      </div>
                      <p className="text-neutral-600 italic mb-2">University of California, CS Department</p>
                      <ul className="list-disc list-inside text-sm space-y-1 text-neutral-600">
                        <li>Assisted professor with machine learning research project</li>
                        <li>Implemented algorithms for data analysis</li>
                        <li>Co-authored paper published in academic journal</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h2 className="text-lg font-bold border-b border-neutral-200 pb-2 mb-3">Projects</h2>
                    <div className="mb-3">
                      <h3 className="font-semibold">Personal Portfolio Website</h3>
                      <p className="text-sm text-neutral-600">Designed and developed responsive portfolio website using React and Tailwind CSS. Implemented custom animations and contact form.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Machine Learning Image Classifier</h3>
                      <p className="text-sm text-neutral-600">Built an image classification system using TensorFlow that achieved 93% accuracy on test dataset. Deployed on AWS.</p>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-lg font-bold border-b border-neutral-200 pb-2 mb-3">Skills</h2>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm">JavaScript</span>
                      <span className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm">React</span>
                      <span className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm">Node.js</span>
                      <span className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm">Python</span>
                      <span className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm">SQL</span>
                      <span className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm">Git</span>
                      <span className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm">AWS</span>
                      <span className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm">TensorFlow</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Button size="lg" className="rounded-full px-8">
                  <FileCode className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ResumeBuilder;
