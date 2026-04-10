import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const blogPosts = [
  {
    title: '6 Ayurvedic Sinus Relief Remedies',
    date: 'Mar 27, 2026',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&q=80',
    excerpt: 'Discover natural Ayurvedic remedies to relieve sinus congestion and pressure.',
  },
  {
    title: 'Do Pomegranates Help With Period Cramps?',
    date: 'Mar 27, 2026',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&q=80',
    excerpt: 'Explore the science behind pomegranates and their effect on menstrual pain.',
  },
  {
    title: 'Ayurvedic Solutions For Acne That Works Naturally',
    date: 'Mar 24, 2026',
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&q=80',
    excerpt: 'Learn about time-tested Ayurvedic approaches to clear, healthy skin.',
  },
  {
    title: '6 Natural Herbs to Relax Muscles',
    date: 'Mar 24, 2026',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80',
    excerpt: 'Natural herbs that can help soothe muscle tension and promote relaxation.',
  },
];

const BlogSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

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
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              576: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              992: { slidesPerView: 3, spaceBetween: 20 },
              1200: { slidesPerView: 4, spaceBetween: 20 },
            }}
            pagination={{
              clickable: true,
              el: '.blog-pagination',
            }}
            autoplay={{
              delay: 5000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            speed={1000}
            loop={false}
            className="pb-12"
          >
            {blogPosts.map((post, idx) => (
              <SwiperSlide key={post.title} className={idx % 2 === 0 ? 'odd' : 'even'}>
                <a href="#" className="group bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300 block h-full">
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
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation buttons */}
          <div className="flex items-center justify-between mt-4">
            <button
              ref={prevRef}
              className="blog-prev w-10 h-10 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 flex items-center justify-center"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="blog-pagination flex gap-2 justify-center flex-1 mx-4" />

            <button
              ref={nextRef}
              className="blog-next w-10 h-10 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 flex items-center justify-center"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .swiper-pagination-bullet {
          background-color: var(--color-primary);
          opacity: 0.5;
          width: 8px;
          height: 8px;
        }
        .swiper-pagination-bullet.swiper-pagination-bullet-active {
          opacity: 1;
          background-color: var(--color-primary);
        }
      `}</style>
    </section>
  );
};

export default BlogSection;
