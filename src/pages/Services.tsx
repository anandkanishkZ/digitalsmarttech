import React from 'react';
import ServiceHero from '../components/services/ServiceHero';
import ServicesContent from '../components/services/ServicesContent';
import ContactCTA from '../components/home/ContactCTA';

const Services = () => {
  return (
    <div className="relative">
      <ServiceHero />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ServicesContent />
      </div>
      <ContactCTA />
    </div>
  );
};

export default Services;