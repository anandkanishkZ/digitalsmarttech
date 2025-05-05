import React, { useState } from 'react';
import { Monitor, Server, Shield, Code, Cloud, Database, Lock, Cpu, Wifi, Printer, HardDrive, Settings, GraduationCap, Package, Stethoscope, UtensilsCrossed, Network, FileCode, Users, Calendar, BookOpen, CreditCard, MessageSquare, Bell, ChevronDown, ChevronUp } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    id: 'software',
    title: 'Software Solutions',
    description: 'Custom software development and implementation to streamline your business operations and enhance productivity.',
    icon: <Monitor className="h-8 w-8 text-blue-600" />,
    features: [
      'Custom software development',
      'Web and mobile applications',
      'Enterprise software integration',
      'Cloud-based solutions',
      'Software maintenance and support'
    ],
    subServices: [
      {
        icon: <GraduationCap className="h-6 w-6" />,
        title: 'School ERP System',
        description: 'Comprehensive school management system with the following features:',
        details: {
          apps: [
            {
              title: 'Student App',
              icon: <Users className="h-8 w-8 text-blue-600" />,
              features: [
                'Assignment management',
                'Attendance tracking',
                'Grade monitoring',
                'Class schedules',
                'Study materials access',
                'Parent communication'
              ]
            },
            {
              title: 'Teacher App',
              icon: <BookOpen className="h-8 w-8 text-purple-600" />,
              features: [
                'Lesson planning',
                'Grade management',
                'Attendance tracking',
                'Parent communication',
                'Resource sharing',
                'Class management'
              ]
            },
            {
              title: 'Principal App',
              icon: <Shield className="h-8 w-8 text-indigo-600" />,
              features: [
                'School operations oversight',
                'Staff/parent communication',
                'Student progress monitoring',
                'Resource management',
                'Administrative tasks'
              ]
            },
            {
              title: 'Admin App',
              icon: <Settings className="h-8 w-8 text-green-600" />,
              features: [
                'Administrative task management',
                'Financial tracking',
                'Resource allocation',
                'Staff/student data management',
                'System configuration'
              ]
            }
          ],
          modules: [
            {
              title: 'Student Management',
              icon: <Users className="h-6 w-6 text-blue-600" />,
              features: [
                'Admission processing',
                'SMS/Notification system',
                'Attendance tracking',
                'Class timetable management',
                'Homework management',
                'Certificate generation'
              ]
            },
            {
              title: 'Human Resource',
              icon: <Users className="h-6 w-6 text-purple-600" />,
              features: [
                'Staff management',
                'Payroll processing',
                'Leave management',
                'Staff attendance',
                'Overtime calculation'
              ]
            },
            {
              title: 'Academics',
              icon: <BookOpen className="h-6 w-6 text-indigo-600" />,
              features: [
                'Promote student',
                'Holiday management',
                'Transport management',
                'Curriculum planning'
              ]
            },
            {
              title: 'Finance',
              icon: <CreditCard className="h-6 w-6 text-green-600" />,
              features: [
                'Income and expense tracking',
                'Fee transfer management',
                'Fee collection system',
                'Financial reporting'
              ]
            },
            {
              title: 'Examination',
              icon: <FileCode className="h-6 w-6 text-orange-600" />,
              features: [
                'Exam management',
                'Grade assessment',
                'Admit card generation',
                'Certificate management'
              ]
            },
            {
              title: 'Asset Management',
              icon: <Database className="h-6 w-6 text-red-600" />,
              features: [
                'Library management',
                'Store management',
                'Inventory control',
                'Stock tracking'
              ]
            }
          ],
          additionalServices: [
            {
              title: 'RFID Attendance System',
              icon: <Calendar className="h-6 w-6 text-blue-600" />,
              description: 'Automated attendance tracking using RFID technology'
            },
            {
              title: 'RFID UHF Gate',
              icon: <Shield className="h-6 w-6 text-purple-600" />,
              description: 'Secure access control with UHF RFID gates'
            },
            {
              title: 'SMS Gateway',
              icon: <MessageSquare className="h-6 w-6 text-green-600" />,
              description: 'Instant communication with parents and staff'
            },
            {
              title: 'Mobile App Access',
              icon: <Monitor className="h-6 w-6 text-indigo-600" />,
              description: 'Access system features from any device'
            }
          ],
          clients: [
            {
              name: 'City Public School',
              logo: 'https://images.pexels.com/photos/5212359/pexels-photo-5212359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              location: 'Birgunj, Nepal'
            },
            {
              name: 'Euro Kids',
              logo: 'https://images.pexels.com/photos/8471799/pexels-photo-8471799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              location: 'Kathmandu, Nepal'
            },
            {
              name: 'Foster Kids',
              logo: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              location: 'Pokhara, Nepal'
            },
            {
              name: 'Bansal Classes',
              logo: 'https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              location: 'Birgunj, Nepal'
            },
            {
              name: 'College Management',
              logo: 'https://images.pexels.com/photos/8199422/pexels-photo-8199422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              location: 'Kathmandu, Nepal'
            },
            {
              name: 'Petals Play World',
              logo: 'https://images.pexels.com/photos/8199619/pexels-photo-8199619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              location: 'Pokhara, Nepal'
            }
          ]
        }
      },
      {
        icon: <Package className="h-6 w-6" />,
        title: 'Inventory Management',
        description: 'Advanced inventory tracking, order management, and stock control solutions.'
      },
      {
        icon: <Stethoscope className="h-6 w-6" />,
        title: 'Hospital Management',
        description: 'Complete healthcare management system with patient records, appointments, and billing.'
      },
      {
        icon: <UtensilsCrossed className="h-6 w-6" />,
        title: 'Restaurant Management',
        description: 'POS, inventory, and order management system for restaurants and food services.'
      },
      {
        icon: <Network className="h-6 w-6" />,
        title: 'Network Management',
        description: 'Network monitoring, security, and performance management solutions.'
      },
      {
        icon: <FileCode className="h-6 w-6" />,
        title: 'Custom Solutions',
        description: 'Tailored software solutions designed for your specific business requirements.'
      }
    ],
    image: "https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 'hardware',
    title: 'Hardware Solutions',
    description: 'Quality computer hardware, servers, and networking equipment, along with comprehensive maintenance services.',
    icon: <Server className="h-8 w-8 text-blue-600" />,
    features: [
      'Computer and server sales',
      'Networking equipment',
      'Hardware installation and setup',
      'Maintenance and repair services',
      'Hardware upgrade consultations'
    ],
    subServices: [
      {
        icon: <Cpu className="h-6 w-6" />,
        title: 'Server Solutions',
        description: 'Enterprise-grade server infrastructure and maintenance.'
      },
      {
        icon: <Wifi className="h-6 w-6" />,
        title: 'Network Setup',
        description: 'Complete networking solutions for businesses.'
      },
      {
        icon: <Printer className="h-6 w-6" />,
        title: 'Office Equipment',
        description: 'Printers, scanners, and other office hardware solutions.'
      }
    ],
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 'security',
    title: 'Security Systems',
    description: 'Advanced surveillance and security solutions to protect your business assets and ensure peace of mind.',
    icon: <Shield className="h-8 w-8 text-blue-600" />,
    features: [
      'CCTV camera installation',
      'Access control systems',
      'Alarm and intrusion detection',
      'Remote monitoring solutions',
      'Security system maintenance'
    ],
    subServices: [
      {
        icon: <Lock className="h-6 w-6" />,
        title: 'Access Control',
        description: 'Advanced access control and authentication systems.'
      },
      {
        icon: <HardDrive className="h-6 w-6" />,
        title: 'Video Surveillance',
        description: 'HD CCTV systems with smart monitoring capabilities.'
      },
      {
        icon: <Settings className="h-6 w-6" />,
        title: 'System Integration',
        description: 'Seamless integration of various security components.'
      }
    ],
    image: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const ServicesContent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-20">
      <div className="space-y-32">
        {services.map((service, index) => (
          <div key={service.id} className="animate-fade-in">
            <ServiceCard 
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
              image={service.image}
              link={`/services/${service.id}`}
              reverse={index % 2 === 1}
            />
            
            <div className="mt-16">
              {service.id === 'software' && service.subServices[0].details && (
                <div className="mb-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg overflow-hidden">
                  <div 
                    className="p-8 bg-white bg-opacity-50 backdrop-blur-sm cursor-pointer hover:bg-opacity-70 transition-all duration-300"
                    onClick={() => setIsExpanded(!isExpanded)}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-blue-100 rounded-lg">
                          <GraduationCap className="h-8 w-8 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-blue-900">
                            School ERP System
                          </h3>
                          <p className="text-blue-600 mt-1">
                            Complete School Management Solution
                          </p>
                        </div>
                      </div>
                      <button className="p-2 hover:bg-blue-100 rounded-full transition-colors">
                        {isExpanded ? (
                          <ChevronUp className="h-6 w-6 text-blue-600" />
                        ) : (
                          <ChevronDown className="h-6 w-6 text-blue-600" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-8 pt-0">
                      {/* Apps Section */}
                      <div className="mb-12">
                        <h4 className="text-xl font-semibold text-blue-900 mb-6 flex items-center">
                          <Monitor className="h-6 w-6 mr-2 text-blue-600" />
                          School Own Apps
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                          {service.subServices[0].details.apps.map((app, idx) => (
                            <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                              <div className="flex items-center mb-4">
                                {app.icon}
                                <h5 className="text-lg font-semibold text-blue-900 ml-3">{app.title}</h5>
                              </div>
                              <ul className="space-y-2">
                                {app.features.map((feature, fidx) => (
                                  <li key={fidx} className="flex items-start text-gray-700">
                                    <span className="text-blue-500 mr-2">•</span>
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Modules Section */}
                      <div className="mb-12">
                        <h4 className="text-xl font-semibold text-blue-900 mb-6 flex items-center">
                          <Package className="h-6 w-6 mr-2 text-blue-600" />
                          ERP Modules
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {service.subServices[0].details.modules.map((module, idx) => (
                            <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                              <div className="flex items-center mb-4">
                                {module.icon}
                                <h5 className="text-lg font-semibold text-blue-900 ml-3">{module.title}</h5>
                              </div>
                              <ul className="space-y-2">
                                {module.features.map((feature, fidx) => (
                                  <li key={fidx} className="flex items-start text-gray-700">
                                    <span className="text-blue-500 mr-2">•</span>
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Additional Services */}
                      <div className="mb-12">
                        <h4 className="text-xl font-semibold text-blue-900 mb-6 flex items-center">
                          <Bell className="h-6 w-6 mr-2 text-blue-600" />
                          Additional Services
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                          {service.subServices[0].details.additionalServices.map((service, idx) => (
                            <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                              <div className="flex items-center justify-center mb-4">
                                {service.icon}
                              </div>
                              <h6 className="text-lg font-semibold text-blue-900 text-center mb-2">
                                {service.title}
                              </h6>
                              <p className="text-gray-600 text-center text-sm">
                                {service.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Our Clients Section */}
                      <div>
                        <h4 className="text-xl font-semibold text-blue-900 mb-6 flex items-center">
                          <Users className="h-6 w-6 mr-2 text-blue-600" />
                          Our Clients
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                          {service.subServices[0].details.clients.map((client, idx) => (
                            <div 
                              key={idx} 
                              className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                            >
                              <div className="aspect-square rounded-lg overflow-hidden mb-3">
                                <img 
                                  src={client.logo} 
                                  alt={client.name}
                                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                                />
                              </div>
                              <h6 className="text-sm font-semibold text-blue-900 text-center mb-1">
                                {client.name}
                              </h6>
                              <p className="text-xs text-gray-600 text-center">
                                {client.location}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {service.subServices.slice(1).map((subService, subIndex) => (
                  <div 
                    key={subIndex}
                    className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="bg-blue-100 rounded-lg p-3 inline-block mb-4">
                      {subService.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {subService.title}
                    </h3>
                    <p className="text-gray-600">
                      {subService.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {index < services.length - 1 && (
              <div className="border-t border-gray-200 mt-20"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesContent;