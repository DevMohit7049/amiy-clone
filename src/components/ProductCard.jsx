const ProductCard = ({ product }) => {
  const { name, description, price, originalPrice, reviews, image, badge } = product;

  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/20 hover:-translate-y-1">
      {/* Image container */}
      <div className="relative overflow-hidden aspect-square bg-bg-cream">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Quick view overlay */}
 
      </div>

      {/* Product info */}
      <div className="p-4 md:p-5">
        <h3 className="font-heading text-lg font-semibold text-text-dark mb-1 line-clamp-1">
          {name}
        </h3>
        <p className="text-text-gray text-xs md:text-sm mb-3 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Reviews */}
        {reviews > 0 && (
          <div className="flex items-center gap-1.5 mb-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-3.5 h-3.5 text-star"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-text-light text-xs">{reviews} reviews</span>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-text-dark font-bold text-lg">₹ {price.toLocaleString()}</span>
          {originalPrice && (
            <span className="text-text-light line-through text-sm">
              ₹ {originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Add to bag button */}
        <button className="w-full text-white py-2.5 text-sm font-medium transition-all duration-200 hover:shadow-md hover:opacity-90 bg-primary hover:bg-primary-dark">
          Add to Bag
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
