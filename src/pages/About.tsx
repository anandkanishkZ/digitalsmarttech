import React from 'react';
import AboutHero from '../components/about/AboutHero';
import AboutCards from '../components/about/AboutCards';
import OurStory from '../components/about/OurStory';
import MissionValues from '../components/about/MissionValues';
import ContactCTA from '../components/home/ContactCTA';
import BackToTop from '../components/layout/BackToTop';

const About = () => {
  return (
    <div className="relative">
      <AboutHero />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <AboutCards />
        <OurStory />
        <MissionValues />
      </div>
      <ContactCTA />
      <BackToTop />
    </div>
  );
};

export default About;