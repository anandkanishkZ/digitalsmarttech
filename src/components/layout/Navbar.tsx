import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinkClasses = (path: string) => `
    relative px-4 py-2 rounded-full transition-all duration-300
    ${isActive(path) 
      ? 'text-white bg-blue-600 shadow-md' 
      : 'text-gray-300 hover:text-white hover:bg-white/10'
    }
  `;

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/70 backdrop-blur-lg shadow-lg border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 group"
          onClick={() => window.scrollTo(0, 0)}
        >
          <span className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
            Digital Smart Tech
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-2">
          <Link to="/" className={navLinkClasses('/')}>
            Home
          </Link>
          <Link to="/about" className={navLinkClasses('/about')}>
            About Us
          </Link>
          <Link to="/team" className={navLinkClasses('/team')}>
            Our Team
          </Link>
          <Link to="/services" className={navLinkClasses('/services')}>
            Services
          </Link>
          <Link to="/contact" className={navLinkClasses('/contact')}>
            Contact
          </Link>
        </nav>

        <button
          className="md:hidden text-white hover:text-blue-400 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-gray-900/95 backdrop-blur-lg transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        } md:hidden`}
      >
        <div className="flex flex-col p-6 space-y-6">
          <div className="flex justify-end">
            <button
              className="text-white hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          {[
            { path: '/', label: 'Home' },
            { path: '/about', label: 'About Us' },
            { path: '/team', label: 'Our Team' },
            { path: '/services', label: 'Services' },
            { path: '/contact', label: 'Contact' }
          ].map((item) => (
            <Link 
              key={item.path}
              to={item.path} 
              className={`text-xl px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive(item.path)
                  ? 'bg-blue-600 text-white font-semibold'
                  : 'text-white hover:bg-white/10'
              }`}
              onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;