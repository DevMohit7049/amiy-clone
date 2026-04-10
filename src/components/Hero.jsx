import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/1.webp',
      title: 'Discover the Power of',
      subtitle: 'Bio-Neuromodulation',
      description: 'Dual-action advanced oral drops crafted with ancient Ayurvedic wisdom and modern science for holistic healing.',
    },
    {
      image: '/2.webp',
      title: 'Build Your Routine',
      subtitle: 'Flat 25% Off',
      description: '+5% OFF on Prepaid Order | CODE: ROUTINE25',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full h-[60vh] md:h-[85vh] overflow-hidden bg-bg-cream">
      {/* Carousel slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${slide.image}')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/10" />
          </div>

          {/* Content overlay */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8">
          </div>
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2 md:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-text-dark w-8 md:w-10'
                : 'bg-text-dark/40 hover:bg-text-dark/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Bottom wave decoration */}
      {/* <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L1440 60L1440 30C1440 30 1200 0 720 0C240 0 0 30 0 30L0 60Z" fill="white" />
        </svg>
      </div> */}
    </section>
  );
};

export default Hero;
