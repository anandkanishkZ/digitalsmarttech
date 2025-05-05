import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const AboutPreview = () => {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Digital Smart Tech Team" 
                className="w-full h-auto transform transition-transform duration-700 hover:scale-105"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-500 rounded-lg hidden md:block animate-pulse"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-indigo-500 rounded-lg hidden md:block animate-pulse delay-150"></div>
          </div>
          
          <div>
            <span className="text-blue-600 font-semibold mb-2 block">About Digital Smart Tech</span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 leading-tight">
              Your Trusted Technology Partner Since 2023
            </h2>
            
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              At Digital Smart Tech, we're dedicated to providing innovative technology solutions that help businesses streamline operations, enhance security, and achieve their goals.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start transform transition-all duration-500 hover:translate-x-2">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-blue-600 font-bold">5+</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Years of Experience</h4>
                  <p className="text-gray-600">Delivering quality tech solutions</p>
                </div>
              </div>
              
              <div className="flex items-start transform transition-all duration-500 hover:translate-x-2">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-blue-600 font-bold">500+</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Satisfied Clients</h4>
                  <p className="text-gray-600">Across various industries</p>
                </div>
              </div>
            </div>
            
            <Link to="/about">
              <Button 
                variant="primary"
                className="transform transition-transform duration-300 hover:scale-105"
              >
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;