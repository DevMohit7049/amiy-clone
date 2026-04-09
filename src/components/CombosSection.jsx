import ProductCard from './ProductCard';

const combos = [
  {
    name: 'Inflammation Recovery Combo',
    description: 'Dual-action combo for inflammation and pain recovery',
    price: 7360,
    originalPrice: 8000,
    reviews: 12,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&q=80',
  },
  {
    name: 'Glow from Gut Duo',
    description: 'Inside-out glow with gut health and skin radiance',
    price: 7360,
    originalPrice: 8000,
    reviews: 6,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&q=80',
  },
  {
    name: 'IBS Relief Gut Duo',
    description: 'Targeted relief for IBS and digestive discomfort',
    price: 7360,
    originalPrice: 8000,
    reviews: 2,
    image: 'https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?w=400&q=80',
  },
  {
    name: 'Fibromyalgia Relief Duo',
    description: 'Comprehensive pain relief for fibromyalgia symptoms',
    price: 7360,
    originalPrice: 8000,
    reviews: 5,
    image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=400&q=80',
  },
  {
    name: 'PCOS Acne Relief Combo',
    description: 'Hormonal acne solution for PCOS management',
    price: 7360,
    originalPrice: 8000,
    reviews: 3,
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?w=400&q=80',
  },
  {
    name: 'Stress Acne Control Kit',
    description: 'Combat stress-induced breakouts with this powerful duo',
    price: 7360,
    originalPrice: 8000,
    reviews: 0,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&q=80',
    badge: 'New',
  },
];

const CombosSection = () => {
  return (
    <section id="combos" className="py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="text-center mb-10 md:mb-14">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-3">
          Our Combos
        </h2>
        <div className="w-16 h-0.5 bg-primary mx-auto mb-4" />
        <p className="text-text-gray text-sm md:text-base max-w-xl mx-auto">
          Save more with our specially curated combo packs designed for targeted relief
        </p>
      </div>

      {/* Combos grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
        {combos.map((combo) => (
          <ProductCard key={combo.name} product={combo} />
        ))}
      </div>
    </section>
  );
};

export default CombosSection;
