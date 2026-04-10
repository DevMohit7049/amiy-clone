import { useState } from 'react';

const blogPosts = [
  {
    title: '6 Ayurvedic Sinus Relief Remedies',
    date: 'Mar 27, 2026',
    image: '/3.webp',
    excerpt: 'Discover natural Ayurvedic remedies to relieve sinus congestion and pressure.',
  },
  {
    title: 'Do Pomegranates Help With Period Cramps?',
    date: 'Mar 27, 2026',
    image: '/4.webp',
    excerpt: 'Explore the science behind pomegranates and their effect on menstrual pain.',
  },
  {
    title: 'Ayurvedic Solutions For Acne That Works Naturally',
    date: 'Mar 24, 2026',
    image: '/5.webp',
    excerpt: 'Learn about time-tested Ayurvedic approaches to clear, healthy skin.',
  },
  {
    title: '6 Natural Herbs to Relax Muscles',
    date: 'Mar 24, 2026',
    image: '/6.webp',
    excerpt: 'Natural herbs that can help soothe muscle tension and promote relaxation.',
  },
];

const BlogSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerView = typeof window !== 'undefined' && window.innerWidth >= 1200 ? 4 : window.innerWidth >= 992 ? 3 : window.innerWidth >= 768 ? 2 : 1;

  const visiblePosts = blogPosts.slice(currentSlide, currentSlide + itemsPerView);
  const maxSlide = Math.max(0, blogPosts.length - itemsPerView);

  const handlePrev = () => {
    setCurrentSlide(Math.max(0, currentSlide - 1));
  };

  const handleNext = () => {
    setCurrentSlide(Math.min(maxSlide, currentSlide + 1));
  };

  return (
    <section id="blog" className="py-12 md:py-20 bg-bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="mb-10 md:mb-14">
          <h2 className="section-heading text-3xl md:text-4xl mb-3">
            <span style={{ color: '#985557' }}>Recent </span>
            <span>Post</span>
          </h2>
        </div>

        {/* Blog carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {visiblePosts.map((post) => (
              <a
                key={post.title}
                href="#"
                className="group bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300 block h-full"
              >
                {/* Image with aspect ratio */}
                <div className="blog-image overflow-hidden" style={{ aspectRatio: '1 / 1.096' }}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-4 md:p-5">
                  <p className="text-primary text-xs font-medium mb-2">{post.date}</p>
                  <h3 className="font-heading text-sm md:text-base text-text-gray mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-200">
                    {post.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-between mt-6 md:mt-8">
            <button
              onClick={handlePrev}
              disabled={currentSlide === 0}
              className="blog-prev w-10 h-10 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2 justify-center flex-1 mx-4">
              {[...Array(Math.ceil(blogPosts.length / itemsPerView))].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx * itemsPerView)}
                  className="w-2 h-2 rounded-full transition-all duration-200"
                  style={{
                    backgroundColor: idx === Math.floor(currentSlide / itemsPerView) ? '#6c6948' : 'rgba(108, 105, 72, 0.3)',
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={currentSlide >= maxSlide}
              className="blog-next w-10 h-10 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
