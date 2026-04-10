const logos = [
  { src: '/logos/new-logo.avif', alt: 'The Times of India' },
  { src: '/logos/Cosmopolitan__magazine_-Logo.wine.avif', alt: 'Cosmopolitan' },
  {
    src: '/logos/Harper_s_Bazaar_Logo_svg_75fe9664-46a0-4278-9ba7-85787044b6ef.avif',
    alt: "Harper's Bazaar",
  },
  { src: '/logos/Mint__newspaper__logo_svg.avif', alt: 'Mint' },
  {
    src: '/logos/5fb98e8d0ed0dd77cdf3fa8c_Indulge-Logo.avif',
    alt: 'Indian Express Indulge',
  },
];

const FeaturedOn = () => {
  return (
    <section className="bg-[#FDF8F4] py-10 md:py-14" aria-labelledby="featured-on-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <h2
          id="featured-on-heading"
          className="font-heading text-xl md:text-2xl lg:text-[1.65rem] font-normal italic uppercase tracking-[0.2em] text-[#8B8368]"
        >
          FEATURED ON
        </h2>
      </div>

      <div className="mt-6 md:mt-8 w-full bg-[#FCEEE4] py-7 md:py-9 lg:py-10 border-y border-[#f0dfd4]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
          <ul className="flex flex-wrap items-center justify-around gap-x-6 gap-y-8 md:gap-x-8 md:gap-y-6 list-none m-0 p-0">
            {logos.map((logo) => (
              <li key={logo.src} className="flex shrink-0 items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-7 w-auto max-h-8 sm:h-8 md:h-9 lg:h-10 max-w-[min(100%,11rem)] sm:max-w-none object-contain object-center opacity-95 hover:opacity-100 transition-opacity duration-200"
                  loading="lazy"
                  decoding="async"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeaturedOn;
