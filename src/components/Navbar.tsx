
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'py-3 bg-white/80 backdrop-blur-lg border-b border-gray-100/20 shadow-sm'
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-semibold tracking-tight flex items-center"
        >
          <span className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">R</span>
          Resumize
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="text-sm font-medium text-neutral-700 hover:text-black transition-all-ease"
          >
            Home
          </Link>
          <Link 
            to="/resume" 
            className="text-sm font-medium text-neutral-700 hover:text-black transition-all-ease"
          >
            Resume
          </Link>
          <Link 
            to="/portfolio" 
            className="text-sm font-medium text-neutral-700 hover:text-black transition-all-ease"
          >
            Portfolio
          </Link>
          <Link 
            to="/templates" 
            className="text-sm font-medium text-neutral-700 hover:text-black transition-all-ease"
          >
            Templates
          </Link>
          <Button size="sm" className="rounded-full">
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-neutral-900 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-sm animate-fade-in md:hidden">
          <div className="container h-full flex flex-col items-center justify-center space-y-8 text-center">
            <Link 
              to="/" 
              className="text-lg font-medium text-neutral-900 hover:opacity-70 transition-all-ease"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/resume" 
              className="text-lg font-medium text-neutral-900 hover:opacity-70 transition-all-ease"
              onClick={toggleMenu}
            >
              Resume
            </Link>
            <Link 
              to="/portfolio" 
              className="text-lg font-medium text-neutral-900 hover:opacity-70 transition-all-ease"
              onClick={toggleMenu}
            >
              Portfolio
            </Link>
            <Link 
              to="/templates" 
              className="text-lg font-medium text-neutral-900 hover:opacity-70 transition-all-ease"
              onClick={toggleMenu}
            >
              Templates
            </Link>
            <Button 
              size="lg" 
              className="rounded-full mt-4"
              onClick={toggleMenu}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
