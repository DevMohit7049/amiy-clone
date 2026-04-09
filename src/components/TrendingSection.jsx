const trendingProducts = [
  {
    name: 'Acne SOS Mini',
    price: 1190,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=300&q=80',
  },
  {
    name: 'Muscle Mercy Mini',
    price: 1190,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=300&q=80',
  },
  {
    name: 'Period Pacifier Mini',
    price: 1190,
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?w=300&q=80',
  },
  {
    name: 'Tranquil Tonic Mini',
    price: 1190,
    image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=300&q=80',
  },
];

const TrendingSection = () => {
  return (
    <section className="py-12 md:py-20 bg-bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-3">
            Trending
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto" />
        </div>

        {/* Trending grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {trendingProducts.map((product) => (
            <div
              key={product.name}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Overlay info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-5">
                <h3 className="text-white font-semibold text-sm md:text-base mb-1">
                  {product.name}
                </h3>
                <p className="text-white/90 font-bold text-sm md:text-base mb-2">
                  ₹ {product.price.toLocaleString()}
                </p>
                <a
                  href="#"
                  className="inline-block bg-white text-primary px-5 py-1.5 rounded-full text-xs md:text-sm font-medium hover:bg-primary hover:text-white transition-all duration-200"
                >
                  Shop Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
