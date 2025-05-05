import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const executiveTeam = [
  {
    name: 'Bishwanath Prasad Chaudhary',
    position: 'Chief Executive Officer & Founder',
    bio: 'has over 20 years of experience in the technology industry and is passionate about helping businesses leverage technology for growth.',
    image: '/img/ceo.jpg'
  },
  {
    name: 'Santosh Sharma',
    position: 'IT Head',
    bio: 'With a background in software engineering and systems architecture, he  leads our technical team and drives innovation across all our services.',
    image: '/img/santosh-sharma.jpg'
  },
  {
    name: 'Bharat Sharma',
    position: 'Supporter Head',
    bio: 'specializes in security systems integration and has helped hundreds of businesses implement robust security solutions.',
    image: '/img/bharat-sharma.jpg'
  },
  {
    name: 'Surjen Bhatta',
    position: 'Admin Head',
    bio: ' oversees our hardware division, ensuring we provide the best quality equipment and maintenance services to our clients.',
    image: '/img/surjen-Bhatta.jpg'
  }
];

const departmentTeam = [
  {
    name: 'Michael Johnson',
    position: 'Software Development Lead',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    name: 'Emily Rodriguez',
    position: 'UX/UI Designer',
    image: 'https://images.pexels.com/photos/3771118/pexels-photo-3771118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    name: 'Daniel Kim',
    position: 'Network Engineer',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    name: 'Sophia Martinez',
    position: 'Client Success Manager',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    name: 'James Wilson',
    position: 'Security Systems Technician',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    name: 'Olivia Taylor',
    position: 'Hardware Specialist',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    name: 'William Brown',
    position: 'IT Support Engineer',
    image: 'https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    name: 'Emma Davis',
    position: 'Project Manager',
    image: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const TeamMembers = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 tracking-tight">
            Leadership Team
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Meet the experienced professionals who lead our company and drive our mission forward.
          </p>
          <div className="h-1 w-20 bg-blue-500 mt-6 rounded-full mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {executiveTeam.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{ 
                opacity: 0,
                animation: `fadeIn 0.6s ease-out ${index * 0.2}s forwards`
              }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* 
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 tracking-tight">
              Department Experts
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
              Our talented team of specialists who ensure the highest quality in all our services.
            </p>
            <div className="h-1 w-20 bg-blue-500 mt-6 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 mt-12">
            {departmentTeam.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                style={{ 
                  opacity: 0,
                  animation: `fadeIn 0.6s ease-out ${index * 0.1}s forwards`
                }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center transform transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-blue-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 text-sm">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        */}
      </div>
    </section>
  );
};

export default TeamMembers;