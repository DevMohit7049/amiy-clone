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
  return (
    <section id="blog" className="py-12 md:py-20 bg-bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-3">
            Recent Posts
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto" />
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <a
              key={post.title}
              href="#"
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4 md:p-5">
                <p className="text-primary text-xs font-medium mb-2">{post.date}</p>
                <h3 className="font-heading text-base md:text-lg font-semibold text-text-dark mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-text-gray text-xs md:text-sm line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
