import ProductCard from './ProductCard';

const products = [
  {
    name: 'Acne SOS',
    description: 'For Acne free face. Bio-neuromodulation Paincare Dual-action advanced oral drops',
    price: 3760,
    originalPrice: 4000,
    reviews: 23,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&q=80',
    badge: 'Bestseller',
  },
  {
    name: 'Muscle Mercy',
    description: 'For Muscle & Joint Pain. Bio-neuromodulation Paincare Dual-action advanced oral drops',
    price: 3760,
    originalPrice: 4000,
    reviews: 18,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&q=80',
  },
  {
    name: 'Tranquil Tonic',
    description: 'For Anxiety, Fear or Panic. Bio-neuromodulation Paincare Dual-action advanced oral drops',
    price: 3760,
    originalPrice: 4000,
    reviews: 22,
    image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=400&q=80',
  },
  {
    name: 'Gut Reset',
    description: 'For Bloating, Indigestion, Stomach Pain. Bio-neuromodulation Paincare Dual-action advanced oral drops',
    price: 3760,
    originalPrice: 4000,
    reviews: 14,
    image: 'https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?w=400&q=80',
  },
  {
    name: 'Period Pacifier',
    description: 'For Pain-free Periods. Bio-neuromodulation Paincare. Dual-action advanced oral drops',
    price: 3760,
    originalPrice: 4000,
    reviews: 12,
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?w=400&q=80',
  },
];

const ProductSection = () => {
  return (
    <section id="products" className="py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="text-center mb-10 md:mb-14">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-3">
          Our Products
        </h2>
        <div className="w-16 h-0.5 bg-primary mx-auto mb-4" />
        <a
          href="#"
          className="text-primary hover:text-primary-dark text-sm font-medium transition-colors inline-flex items-center gap-1"
        >
          View All
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
