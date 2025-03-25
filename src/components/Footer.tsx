
import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, MessageSquare } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-neutral-100 py-12 md:py-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <span className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">R</span>
              <span className="text-xl font-semibold tracking-tight">Resumize</span>
            </Link>
            <p className="text-neutral-600 mb-4">
              AI-powered resume and portfolio builder for students and recent graduates.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-600 hover:text-black transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-600 hover:text-black transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-600 hover:text-black transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/resume" className="text-neutral-600 hover:text-black transition-colors">Resume Builder</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-neutral-600 hover:text-black transition-colors">Portfolio Creator</Link>
              </li>
              <li>
                <Link to="/templates" className="text-neutral-600 hover:text-black transition-colors">Templates</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-neutral-600 hover:text-black transition-colors">Pricing</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/blog" className="text-neutral-600 hover:text-black transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/guides" className="text-neutral-600 hover:text-black transition-colors">Career Guides</Link>
              </li>
              <li>
                <Link to="/examples" className="text-neutral-600 hover:text-black transition-colors">Resume Examples</Link>
              </li>
              <li>
                <Link to="/faq" className="text-neutral-600 hover:text-black transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-neutral-600 hover:text-black transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-600 hover:text-black transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-neutral-600 hover:text-black transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-neutral-600 hover:text-black transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-12 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Resumize. All rights reserved.
          </p>
          <div className="flex items-center">
            <span className="text-neutral-500 mr-2 text-sm">Need help?</span>
            <button className="flex items-center text-sm bg-neutral-100 hover:bg-neutral-200 transition-colors text-neutral-700 px-3 py-1.5 rounded-full">
              <MessageSquare className="w-4 h-4 mr-1.5" />
              Chat with us
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
