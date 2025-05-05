import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const cards = [
  {
    number: '01.',
    title: 'Our Vision',
    description: 'Process faster and better so that you can maintain your market advantage and leadership.',
    link: '/about/vision',
    gradient: 'from-blue-600 to-cyan-500',
    buttonText: 'Contact Us'
  },
  {
    number: '02.',
    title: 'What We Do',
    description: 'Humanizing tech for the competitive landscape for meaning-driven technology innovations',
    link: '/services',
    gradient: 'from-purple-600 to-blue-500',
    buttonText: 'Our Solutions'
  },
  {
    number: '03.',
    title: 'Core Values',
    description: 'Redefining business solutions with reliable systems and dedicated services, serving holistic solutions.',
    link: '/about/values',
    gradient: 'from-fuchsia-600 to-purple-600',
    buttonText: 'Discover More'
  }
];

const AboutCards = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 xl:px-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Business partner
        </h2>
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          you can trust
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index}
              className={`rounded-3xl p-8 h-full bg-gradient-to-br ${card.gradient} relative overflow-hidden group animate-fade-in-delay-${index}`}
            >
              <div className="absolute inset-0 bg-black opacity-40 transition-opacity group-hover:opacity-30"></div>
              
              <div className="relative z-10">
                <span className="text-blue-300 text-lg font-medium mb-4 block">
                  {card.number}
                </span>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {card.title}
                </h3>
                
                <p className="text-gray-100 mb-8">
                  {card.description}
                </p>
                
                <Link 
                  to={card.link}
                  className="inline-flex items-center text-white hover:text-blue-200 transition-colors"
                >
                  {card.buttonText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCards;