import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  image: string;
  link: string;
  reverse?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  features, 
  image, 
  link, 
  reverse = false 
}) => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 ${
      reverse ? 'lg:flex-row-reverse' : ''
    }`}>
      <div className={reverse ? 'lg:order-2' : ''}>
        <div className="mb-6 flex items-center">
          <div className="mr-4 bg-blue-100 rounded-lg p-3">
            {icon}
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900">{title}</h3>
        </div>
        
        <p className="text-gray-600 text-lg mb-6">
          {description}
        </p>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link 
          to={link}
          className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 transition-colors"
        >
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
      
      <div className={reverse ? 'lg:order-1' : ''}>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;