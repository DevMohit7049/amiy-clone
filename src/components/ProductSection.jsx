import ProductCard from './ProductCard';

const products = [
  {
    name: 'Acne SOS',
    description: 'For Acne free face. Bio-neuromodulation Paincare Dual-action advanced oral drops',
    price: 3760,
    originalPrice: 4000,
    reviews: 23,
    image: '/3.webp',
    badge: 'Bestseller',
  },
  {
    name: 'Muscle Mercy',
    description: 'For Muscle & Joint Pain. Bio-neuromodulation Paincare Dual-action advanced oral drops',
    price: 3760,
    originalPrice: 4000,
    reviews: 18,
    image: '/4.webp',
  },
  {
    name: 'Tranquil Tonic',
    description: 'For Anxiety, Fear or Panic. Bio-neuromodulation Paincare Dual-action advanced oral drops',
    price: 3760,
    originalPrice: 4000,
    reviews: 22,
    image: '/5.webp',
  },
  {
    name: 'Gut Reset',
    description: 'For Bloating, Indigestion, Stomach Pain. Bio-neuromodulation Paincare Dual-action advanced oral drops',
    price: 3760,
    originalPrice: 4000,
    reviews: 14,
    image: '/6.webp',
  },
  {
    name: 'Period Pacifier',
    description: 'For Pain-free Periods. Bio-neuromodulation Paincare. Dual-action advanced oral drops',
    price: 3760,
    originalPrice: 4000,
    reviews: 12,
    image: '/7.webp',
  },
];

const ProductSection = () => {
  return (
    <section id="products" className="py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="text-center mb-10 md:mb-14">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-3 text-left">
          Our Products
        </h2>
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
