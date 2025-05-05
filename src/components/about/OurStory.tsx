import React from 'react';
import SectionTitle from '../ui/SectionTitle';

const OurStory = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <SectionTitle 
              title="Our Story" 
              subtitle="From humble beginnings to becoming a leading technology solutions provider."
            />
            
            <div className="space-y-6 text-gray-600">
              <p>
                Founded in 2023, Digital Smart Tech Solution And Services Pvt. ltd. began as a small IT consultancy with a team of just three dedicated professionals. Our founders, experienced technologists with a passion for innovation, saw an opportunity to provide comprehensive technology solutions to businesses of all sizes.
              </p>
              
              <p>
                Over the years, we have grown into a full-service technology company, expanding our offerings to include custom software development, hardware sales and services, and advanced security systems. Our team has grown to over 50 technology experts, each committed to delivering the highest quality solutions to our clients.
              </p>
              
              <p>
                Throughout our journey, our mission has remained consistent: to empower businesses through technology, helping them overcome challenges and achieve their goals with innovative, reliable, and secure solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;