import { useState } from 'react';

const trendingProducts = [
  {
    name: 'Acne SOS Mini',
    price: 1190,
    productImage: '/3.webp',
    videoUrl: 'https://videos.unsplash.com/video-1611432200960-4b04b2e88e08?w=400',
    views: 221,
    cartCount: 14,
  },
  {
    name: 'Muscle Mercy Mini',
    price: 1190,
    productImage: '/4.webp',
    videoUrl: 'https://videos.unsplash.com/video-1611432200960-4b04b2e88e08?w=400',
    views: 223,
    cartCount: 4,
  },
  {
    name: 'Period Pacifier Mini',
    price: 1190,
    productImage: '/6.webp',
    videoUrl: 'https://videos.unsplash.com/video-1611432200960-4b04b2e88e08?w=400',
    views: 208,
    cartCount: 3,
  },
  {
    name: 'Tranquil Tonic Mini',
    price: 1190,
    productImage: '/5.webp',
    videoUrl: 'https://videos.unsplash.com/video-1611432200960-4b04b2e88e08?w=400',
    views: 204,
    cartCount: 4,
  },
];

const TrendingSection = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

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

        {/* Video grid - 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-5">
          {trendingProducts.map((product, index) => (
            <div key={product.name} className="flex flex-col">
              {/* Video Card - 302x536 aspect ratio */}
              <div className="relative w-full bg-black rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group mb-4">
                {/* Video Container */}
                <div
                  className="w-full aspect-[9/16] bg-gray-900 relative group/video"
                  style={{ aspectRatio: '9/16' }}
                >
                  {/* Video or Thumbnail Background */}
                  <video
                    src={product.videoUrl}
                    className="w-full h-full object-cover"
                    poster={product.productImage}
                    onPlay={() => setPlayingVideo(index)}
                    onPause={() => setPlayingVideo(null)}
                  />

                  {/* Overlay gradient at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Bottom left controls */}
                  <div className="absolute bottom-4 left-4 flex flex-col gap-2">
                    {/* Play button and views */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          const video = document.querySelector(`video[data-index="${index}"]`);
                          if (video) {
                            video.paused ? video.play() : video.pause();
                          }
                        }}
                        className="bg-gray-800/90 hover:bg-gray-900 text-white rounded-full p-2.5 transition-all duration-200 flex items-center justify-center"
                      >
                        <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                      <div className="bg-gray-800/90 text-white px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 4.5C7.31 4.5 3.31 7.61 2.36 12c.98 4.39 4.97 7.5 9.64 7.5s8.66-3.11 9.64-7.5c-.98-4.39-4.97-7.5-9.64-7.5zm0 12c-2.48 0-4.5-2.02-4.5-4.5S9.52 7.5 12 7.5s4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5z" />
                        </svg>
                        {product.views}
                      </div>
                    </div>
                  </div>

                  {/* Bottom right - Cart count */}
                  <div className="absolute bottom-4 right-4 bg-gray-800/90 text-white px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                    </svg>
                    {product.cartCount}
                  </div>

                  {/* Hidden video element for reference */}
                  <video
                    data-index={index}
                    src={product.videoUrl}
                    className="hidden"
                  />
                </div>
              </div>

              {/* Product Info Below */}
              <div className="flex gap-3">
                {/* Product thumbnail */}
                <div className="w-14 h-14 flex-shrink-0 bg-gray-200 rounded-md overflow-hidden border border-border">
                  <img
                    src={product.productImage}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product details */}
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-text-dark font-semibold text-sm line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-primary font-bold text-sm">
                      ₹ {product.price.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Shop Now button */}
                <div className="flex-shrink-0 flex items-end">
                  <button className="hover:opacity-90 text-white px-4 py-2 transition-all duration-200 h-fit bg-primary hover:bg-primary-dark">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
