import React from 'react';
import { Target, Award, Users, TrendingUp } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const values = [
  {
    icon: <Target className="h-8 w-8 text-blue-500" />,
    title: 'Innovation',
    description: 'We constantly explore new technologies and approaches to deliver cutting-edge solutions that drive our clients forward.'
  },
  {
    icon: <Award className="h-8 w-8 text-blue-500" />,
    title: 'Excellence',
    description: 'We are committed to delivering the highest quality in every project, product, and service we provide.'
  },
  {
    icon: <Users className="h-8 w-8 text-blue-500" />,
    title: 'Collaboration',
    description: 'We believe in working closely with our clients, understanding their needs, and building lasting partnerships.'
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-blue-500" />,
    title: 'Integrity',
    description: 'We conduct our business with honesty, transparency, and a strong ethical foundation in all our interactions.'
  }
];

const MissionValues = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 tracking-tight">
            Our Mission & Values
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Guided by a clear mission and strong core values, we strive to deliver excellence in everything we do.
          </p>
          <div className="h-1 w-20 bg-blue-500 mt-6 rounded-full mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
          <p className="text-gray-600 text-lg">
            To empower businesses through innovative technology solutions that enhance efficiency, security, and growth, while providing exceptional service and support at every step.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionValues;