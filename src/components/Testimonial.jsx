import { useState } from 'react';

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    rating: 5,
    text: 'Acne SOS has been a game-changer for my skin! Within weeks of using it, my breakouts reduced dramatically. I love that it is all-natural and has no side effects.',
    product: 'Acne SOS',
    avatar: 'PS',
  },
  {
    name: 'Rahul Verma',
    location: 'Delhi, India',
    rating: 5,
    text: 'I have been dealing with chronic muscle pain for years. Muscle Mercy has given me incredible relief. The bio-neuromodulation approach really works differently from anything I have tried before.',
    product: 'Muscle Mercy',
    avatar: 'RV',
  },
  {
    name: 'Ananya Patel',
    location: 'Bangalore, India',
    rating: 5,
    text: 'Tranquil Tonic helped me manage my anxiety naturally. I feel calmer and more focused throughout the day. Highly recommend this to anyone dealing with stress.',
    product: 'Tranquil Tonic',
    avatar: 'AP',
  },
  {
    name: 'Sneha Gupta',
    location: 'Pune, India',
    rating: 4,
    text: 'Period Pacifier has made my monthly cycles so much more manageable. The pain relief is noticeable and I appreciate the natural formulation. A must-have for every woman!',
    product: 'Period Pacifier',
    avatar: 'SG',
  },
  {
    name: 'Vikram Singh',
    location: 'Jaipur, India',
    rating: 5,
    text: 'Gut Reset solved my chronic bloating issues. After just two weeks, my digestion improved significantly. The oral drops are easy to take and taste fine.',
    product: 'Gut Reset',
    avatar: 'VS',
  },
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-3">
            What Our Customers Say
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-4" />
          <p className="text-text-gray text-sm md:text-base max-w-xl mx-auto">
            Real experiences from real people who have transformed their lives with Amiy Naturals
          </p>
        </div>

        {/* Testimonial slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-12 z-10 bg-white shadow-lg rounded-full p-2 md:p-3 hover:bg-primary hover:text-white transition-all duration-200"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-12 z-10 bg-white shadow-lg rounded-full p-2 md:p-3 hover:bg-primary hover:text-white transition-all duration-200"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Active testimonial card */}
          <div className="bg-bg-cream rounded-2xl p-6 md:p-10 text-center shadow-sm">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < testimonials[activeIndex].rating
                      ? 'text-star'
                      : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <p className="text-text-dark text-base md:text-lg leading-relaxed mb-6 italic max-w-2xl mx-auto">
              &ldquo;{testimonials[activeIndex].text}&rdquo;
            </p>

            {/* Avatar and info */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mb-3">
                {testimonials[activeIndex].avatar}
              </div>
              <p className="font-semibold text-text-dark text-sm md:text-base">
                {testimonials[activeIndex].name}
              </p>
              <p className="text-text-light text-xs md:text-sm">
                {testimonials[activeIndex].location}
              </p>
              <span className="mt-2 bg-primary/10 text-primary text-xs px-3 py-1 rounded-full font-medium">
                {testimonials[activeIndex].product}
              </span>
            </div>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                  index === activeIndex
                    ? 'bg-primary w-8'
                    : 'bg-border hover:bg-text-light'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
