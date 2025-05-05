import React from 'react';
import Hero from '../components/home/Hero';
import ServiceHighlights from '../components/home/ServiceHighlights';
import AboutPreview from '../components/home/AboutPreview';
import Testimonials from '../components/home/Testimonials';
import ContactCTA from '../components/home/ContactCTA';

const Home = () => {
  return (
    <div>
      <Hero />
      <ServiceHighlights />
      <AboutPreview />
      <Testimonials />
      <ContactCTA />
    </div>
  );
};

export default Home;