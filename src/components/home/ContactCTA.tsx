import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const ContactCTA = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 opacity-0 translate-y-10 transition-all duration-1000"
    >
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full -translate-y-1/2 translate-x-1/4 opacity-10 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-500 rounded-full translate-y-1/3 -translate-x-1/4 opacity-10 animate-pulse delay-150"></div>
          
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Ready to Transform Your Business with Smart Technology?
            </h2>
            
            <p className="text-gray-600 text-lg mb-8">
              Contact us today for a free consultation. Our experts will help you find the right technology solutions for your business needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button 
                  variant="primary" 
                  size="lg"
                  className="transform transition-transform duration-300 hover:scale-105"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link to="/services">
                <Button 
                  variant="ghost" 
                  size="lg"
                  className="transform transition-transform duration-300 hover:scale-105"
                >
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;