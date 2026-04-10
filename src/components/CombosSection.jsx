const COMBO_VIDEO_SRC =
  'https://videos.unsplash.com/video-1611432200960-4b04b2e88e08?w=500';

const combos = [
  {
    name: 'Inflammation Recovery Combo',
    tag: 'INFLAMMATION CONTROL',
    price: 7360,
    originalPrice: 8000,
    reviews: 12,
    image: '/3.webp',
  },
  {
    name: 'Glow from Gut duo',
    tag: 'GUT GLOW',
    price: 7360,
    originalPrice: 8000,
    reviews: 6,
    image: '/4.webp',
  },
  {
    name: 'Acne SOS Advance Clear Duo',
    tag: 'Acne SOS',
    price: 6000,
    originalPrice: 8000,
    reviews: 0,
    image: '/2.webp',
  },
  {
    name: 'IBS Relief Gut Duo',
    tag: 'IBS RELIEF',
    price: 7360,
    originalPrice: 8000,
    reviews: 2,
    image: '/5.webp',
  },
  {
    name: 'Fibromyalgia Relief Duo',
    tag: 'FIBROMYALGIA',
    price: 7360,
    originalPrice: 8000,
    reviews: 5,
    image: '/6.webp',
  },
  {
    name: 'PCOS Acne Relief Combo',
    tag: 'PCOS ACNE',
    price: 7360,
    originalPrice: 8000,
    reviews: 3,
    image: '/7.webp',
  },
  {
    name: 'Stress Acne Control Kit',
    tag: 'STRESS ACNE',
    price: 7360,
    originalPrice: 8000,
    reviews: 0,
    image: '/3.webp',
  },
];

const CombosSection = () => {
  return (
    <section
      id="combos"
      className="py-14 md:py-20 px-4 md:px-10 lg:px-16"
      style={{ backgroundColor: '#c5c9a4' }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl font-medium tracking-[0.14em] text-[#f8f6ef] mb-10 md:mb-14 uppercase">
          OUR COMBOS
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: hero video (amiynaturals-style sticky column) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="relative w-full max-w-[420px] mx-auto lg:max-w-none overflow-hidden rounded-sm border border-[#424423]/25 bg-[#2a2a28] shadow-md">
              <video
                src={COMBO_VIDEO_SRC}
                poster="/1.webp"
                className="block w-full aspect-square lg:aspect-[4/5] object-cover object-center"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/35 to-transparent"
                aria-hidden
              />
              <div className="absolute inset-x-0 bottom-5 flex justify-center px-4">
                <button
                  type="button"
                  className="bg-white hover:bg-white/95 text-[#424423] border border-[#424423] px-8 py-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors font-body shadow-sm"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          {/* Right: combo stack — arch cards, left-aligned with reference */}
          <div className="lg:col-span-7 flex flex-col gap-14 md:gap-16 lg:pl-2">
            {combos.map((combo) => (
              <article
                key={combo.name}
                className="flex w-full max-w-[340px] sm:max-w-[360px] flex-col items-start"
              >
                {/* Tall tombstone arch: flat bottom, semicircular top */}
                <div
                  className="relative w-full overflow-hidden border-[3px] border-white bg-[#f5f3eb] shadow-[0_8px_24px_rgba(66,68,35,0.12)]"
                  style={{
                    borderRadius: '50% 50% 0 0 / 52% 52% 0 0',
                  }}
                >
                  <div className="absolute left-1/2 top-3 z-10 -translate-x-1/2">
                    <span className="inline-block bg-[#424423] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white font-body">
                      {combo.tag}
                    </span>
                  </div>

                  <div className="flex min-h-[220px] items-center justify-center px-5 pt-14 pb-8 sm:min-h-[240px]">
                    <img
                      src={combo.image}
                      alt={combo.name}
                      className="h-36 w-auto max-w-full object-contain sm:h-44"
                    />
                  </div>
                </div>

                <div className="mt-5 w-full pl-0.5 pr-1 text-left">
                  <h3 className="font-heading text-[15px] leading-snug font-bold uppercase tracking-wide text-[#424423] sm:text-base">
                    {combo.name}
                  </h3>

                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <div className="flex" aria-label="5 out of 5 stars">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-3.5 w-3.5 text-star sm:h-4 sm:w-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    {combo.reviews > 0 && (
                      <span className="text-text-gray text-xs font-medium font-body">
                        {combo.reviews} reviews
                      </span>
                    )}
                  </div>

                  <div className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1 font-body text-sm">
                    <span className="text-text-gray text-xs font-medium uppercase tracking-wide">
                      M.R.P.
                    </span>
                    {combo.originalPrice && (
                      <span className="text-text-light line-through">
                        ₹ {combo.originalPrice.toLocaleString()}
                      </span>
                    )}
                    <span className="text-lg font-bold text-[#424423]">
                      ₹ {combo.price.toLocaleString()}
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] text-text-light font-body">
                    inclusive of all taxes
                  </p>

                  <div className="mt-5 flex w-full flex-col gap-2.5">
                    <button
                      type="button"
                      className="w-full bg-primary py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-primary-dark font-body"
                    >
                      ADD TO BAG
                    </button>
                    <button
                      type="button"
                      className="self-center text-xs font-semibold uppercase tracking-[0.18em] text-primary underline underline-offset-[5px] hover:text-primary-dark font-body"
                    >
                      BUY IT NOW
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CombosSection;
