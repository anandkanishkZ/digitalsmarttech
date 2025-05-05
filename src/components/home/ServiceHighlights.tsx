import { useEffect, useRef } from 'react';
import { Monitor, Server, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const services = [
  {
    id: 'software',
    icon: <Monitor className="h-10 w-10 text-blue-500" />,
    title: 'Software Solutions',
    description: 'Custom software development, web applications, mobile apps, and enterprise solutions tailored to your specific business needs.',
    link: '/services/software'
  },
  {
    id: 'hardware',
    icon: <Server className="h-10 w-10 text-blue-500" />,
    title: 'Hardware Sales & Services',
    description: 'Quality computer hardware, servers, networking equipment, printers, and comprehensive maintenance services.',
    link: '/services/hardware'
  },
  {
    id: 'security',
    icon: <Shield className="h-10 w-10 text-blue-500" />,
    title: 'CCTV & Security Systems',
    description: 'Advanced surveillance systems, access control, alarm systems, and integrated security solutions for businesses of all sizes.',
    link: '/services/security'
  }
];

// Placeholder SectionTitle component with centered styling
const SectionTitle = ({ title, subtitle, centered }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className="text-4xl font-bold text-blue-900 mb-4">{title}</h2>
      <div className="flex justify-center">
        <p className="text-gray-600 max-w-2xl">{subtitle}</p>
      </div>
      {centered && <div className="mt-4 mx-auto h-1 w-16 bg-blue-500"></div>}
    </div>
  );
};

const ServiceHighlights = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

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
    const cards = cardRefs.current;

    if (section) {
      observer.observe(section);
    }

    cards.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      if (section) {
        observer.unobserve(section);
      }
      cards.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gray-50 opacity-0 translate-y-10 transition-all duration-1000"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 xl:px-20">
        <SectionTitle 
          title="Our Services" 
          subtitle="We provide comprehensive technology solutions to help your business grow and succeed in the digital age."
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div 
              key={service.id}
              ref={el => cardRefs.current[index] = el}
              className="bg-white rounded-lg border border-gray-200 p-8 opacity-0 translate-y-10 transition-all duration-200 hover:shadow-xl"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-6 transform transition-transform duration-500 hover:scale-110">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-blue-900">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link 
                to={service.link} 
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-all duration-300 hover:translate-x-2"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/services">
            <Button 
              variant="outline" 
              size="lg"
              className="transform transition-transform duration-300 hover:scale-105"
            >
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;