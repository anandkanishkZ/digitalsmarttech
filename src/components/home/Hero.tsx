import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative w-full z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-lg font-semibold tracking-wide uppercase mb-5">
              Partner for best-in-class brands
            </p>
            
            <div className="relative">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                Your ultimate
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">digital agency</span>
              </h1>
              
              {/* Decorative elements */}
              <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl blur opacity-60 animate-float"></div>
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl blur opacity-60 animate-float-delay"></div>
            </div>

            <div className="max-w-2xl mx-auto">
              <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed">
                From software development to hardware solutions and security systems, we provide comprehensive tech services to meet all your business needs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/services">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 transform hover:scale-105 transition-all duration-300"
                >
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white/20 bg-white/5 hover:bg-white/10 text-white transform hover:scale-105 transition-all duration-300"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(10deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }
          @keyframes float-delay {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(-10deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-float-delay {
            animation: float-delay 7s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Hero;