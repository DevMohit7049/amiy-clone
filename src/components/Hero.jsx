const Hero = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[85vh] overflow-hidden bg-bg-cream">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1600&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/20" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8">
        <p className="text-accent font-medium text-sm md:text-base tracking-[0.2em] uppercase mb-3 md:mb-4">
          Natural Wellness Solutions
        </p>
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mb-4 md:mb-6">
          Discover the Power of
          <br />
          <span className="text-accent">Bio-Neuromodulation</span>
        </h1>
        <p className="text-white/90 text-sm md:text-lg max-w-2xl mb-6 md:mb-8 leading-relaxed">
          Dual-action advanced oral drops crafted with ancient Ayurvedic wisdom and modern science for holistic healing.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
          <a
            href="#products"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-3 md:px-10 md:py-3.5 rounded-full font-medium text-sm md:text-base transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Shop Now
          </a>
          <a
            href="#about"
            className="bg-white/20 hover:bg-white/30 text-white border border-white/40 px-8 py-3 md:px-10 md:py-3.5 rounded-full font-medium text-sm md:text-base transition-all duration-300 backdrop-blur-sm"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L1440 60L1440 30C1440 30 1200 0 720 0C240 0 0 30 0 30L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
