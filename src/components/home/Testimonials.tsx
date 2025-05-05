import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CEO, Innovate Inc.',
    quote:
      'Digital Smart Tech completely transformed our IT infrastructure. Their software solutions have streamlined our operations and increased efficiency by 40%. The team was professional, knowledgeable, and responsive throughout the entire process.',
    image:
      'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    position: 'CTO, SecureTech',
    quote:
      'The CCTV and security system installed by Digital Smart Tech has given us peace of mind. The quality of the equipment and the expertise of their technicians is unmatched. I highly recommend their security solutions to any business.',
    image:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5,
  },
  {
    id: 3,
    name: 'Jennifer Lee',
    position: 'Operations Manager, Retail Plus',
    quote:
      "We've been relying on Digital Smart Tech for our hardware needs for over 5 years. Their equipment is top-notch and their maintenance service keeps our systems running smoothly with minimal downtime. Truly exceptional service!",
    image:
      'https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const autoPlayRef = useRef(null);

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(autoPlayRef.current);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    resetAutoPlay();
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    resetAutoPlay();
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
    resetAutoPlay();
  };

  const resetAutoPlay = () => {
    clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current && touchEndX.current) {
      const deltaX = touchEndX.current - touchStartX.current;
      if (deltaX > 50) handlePrev();
      else if (deltaX < -50) handleNext();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-blue-200 text-lg md:text-xl max-w-2xl mx-auto">
            Discover how Digital Smart Tech is transforming businesses through cutting-edge solutions.
          </p>
          <div className="h-1 w-20 bg-blue-400 mt-6 rounded-full mx-auto"></div>
        </div>

        <div
          className="relative max-w-4xl mx-auto overflow-hidden"
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-full px-2"
              >
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 lg:p-12 shadow-2xl h-full">
                  <div className="absolute top-6 left-6 text-6xl text-blue-400 opacity-20 font-serif select-none">
                    "
                  </div>

                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg transform transition-transform duration-500 hover:scale-105">
                        <img
                          src={testimonial.image}
                          alt={`${testimonial.name}'s portrait`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="flex-1 text-left">
                      <p className="text-lg lg:text-xl italic text-blue-100 mb-6 leading-relaxed">
                        {testimonial.quote}
                      </p>

                      <div>
                        <div className="flex mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                          ))}
                        </div>

                        <h4 className="text-xl font-semibold text-white">{testimonial.name}</h4>
                        <p className="text-blue-300 text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons and Dots Outside the Card */}
        <div className="mt-10 flex flex-col items-center space-y-4">
          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              className="bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-900 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={handleNext}
              className="bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-900 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="flex space-x-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-white opacity-100'
                    : 'bg-white opacity-30 hover:opacity-50'
                } focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-900`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
