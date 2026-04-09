const publications = [
  { name: 'Times of India', abbreviation: 'TOI' },
  { name: 'Hindustan Times', abbreviation: 'HT' },
  { name: 'Economic Times', abbreviation: 'ET' },
  { name: 'Business Standard', abbreviation: 'BS' },
  { name: 'NDTV', abbreviation: 'NDTV' },
  { name: 'Health Line', abbreviation: 'HL' },
];

const FeaturedOn = () => {
  return (
    <section className="py-10 md:py-16 bg-primary-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-dark text-center mb-8 md:mb-12">
          Featured On
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {publications.map((pub) => (
            <div
              key={pub.name}
              className="group flex items-center justify-center"
            >
              <div className="bg-white rounded-xl px-6 py-3 md:px-8 md:py-4 shadow-sm hover:shadow-md transition-all duration-300 group-hover:-translate-y-0.5">
                <span className="font-heading text-lg md:text-xl font-bold text-text-gray group-hover:text-primary transition-colors duration-300">
                  {pub.abbreviation}
                </span>
                <p className="text-text-light text-[10px] md:text-xs text-center mt-0.5">
                  {pub.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedOn;
