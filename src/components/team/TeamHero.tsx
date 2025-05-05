import React from 'react';

const TeamHero = () => {
  return (
    <div className="relative bg-blue-900 py-24 md:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 2px, transparent 2px)', 
          backgroundSize: '30px 30px' 
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Our Team
          </h1>
          
          <p className="text-blue-100 text-lg md:text-xl">
            Our team of technology experts is dedicated to delivering innovative solutions for all your business needs.
          </p>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="text-white fill-current">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default TeamHero;