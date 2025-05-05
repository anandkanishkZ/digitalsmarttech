import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Digital Smart Tech</h3>
            <p className="text-blue-200 mb-4">
              Providing innovative technology solutions for businesses of all sizes.
              From software development to hardware maintenance and security systems.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-blue-300 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-blue-300 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-blue-300 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-blue-300 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/" className="text-blue-200 hover:text-white transition-colors">
                  Software Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/" className="text-blue-200 hover:text-white transition-colors">
                  Hardware Sales & Services
                </Link>
              </li>
              <li>
                <Link to="/services/" className="text-blue-200 hover:text-white transition-colors">
                  CCTV & Security Systems
                </Link>
              </li>
              <li>
                <Link to="/services/" className="text-blue-200 hover:text-white transition-colors">
                  IT Consultation
                </Link>
              </li>
              <li>
                <Link to="/services/" className="text-blue-200 hover:text-white transition-colors">
                  Network Solutions
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-blue-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-blue-200 hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/" className="text-blue-200 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-200 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-200 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-blue-300 flex-shrink-0 mt-0.5" />
                <span className="text-blue-200">
                  Ashok Watika - 13, Birgunj (Nepal)
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-300 flex-shrink-0" />
                <span className="text-blue-200">+977 9855079024</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-300 flex-shrink-0" />
                <span className="text-blue-200">info@digitalsmarttech.com.np</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-300">
          <p>&copy; {new Date().getFullYear()} Digital Smart Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;