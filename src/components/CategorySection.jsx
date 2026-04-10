const categories = [
  {
    name: 'Muscle & Joint Pain',
    image: '/4.webp',
  },
  {
    name: 'Indigestion & Bloating',
    image: '/6.webp',
  },
  {
    name: 'Period Pain & Cramps',
    image: '/7.webp',
  },
  {
    name: 'Acne & Pigmentation',
    image: '/3.webp',
  },
  {
    name: 'Stress, Anxiety, and Depression',
    image: '/5.webp',
  },
];

const CategorySection = () => {
  return (
    <section className="py-12 md:py-20" style={{ backgroundColor: '#fcf7f1' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-3">
            Shop by Concern
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-4" />
          <p className="text-text-gray text-sm md:text-base max-w-xl mx-auto">
            Find the right products & routines for your needs
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category) => (
            <a
              key={category.name}
              href="#"
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                <h3 className="text-white font-semibold text-sm md:text-base leading-tight">
                  {category.name}
                </h3>
              </div>
            </a>
          ))}
        </div>

        {/* Expert session CTA */}
        <div className="mt-12 md:mt-16 bg-bg-cream rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-heading text-xl md:text-2xl font-bold text-text-dark mb-3">
            Personalized Expert Session
          </h3>
          <p className="text-text-gray text-sm md:text-base max-w-2xl mx-auto mb-6">
            Connect with our team of experts and design your own skincare & beauty regimen
            that fits all your beauty & skincare routine
          </p>
          <a
            href="#"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-medium text-sm md:text-base transition-all duration-200 hover:shadow-lg"
          >
            Build My Regimen
          </a>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
