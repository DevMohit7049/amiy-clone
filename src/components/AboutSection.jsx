const AboutSection = () => {
  return (
    <section id="about" className="py-12 md:py-20 bg-bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/1.webp"
                alt="Amiy Naturals - Natural ingredients"
                className="w-full h-[300px] md:h-[450px] object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-20 h-20 md:w-28 md:h-28 bg-accent/20 rounded-full -z-10" />
          </div>

          {/* Text side */}
          <div>
            <p className="text-primary font-medium text-sm tracking-[0.15em] uppercase mb-3">
              Our Story
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-4 md:mb-6 leading-tight">
              Innovation Rooted
              <br />
              in Tradition
            </h2>
            <div className="w-12 h-0.5 bg-primary mb-6" />
            <p className="text-text-gray text-sm md:text-base leading-relaxed mb-4">
              At Amiy Naturals, we blend centuries-old Ayurvedic wisdom with cutting-edge
              Bio-Neuromodulation technology to create products that work in harmony with
              your body&apos;s natural healing processes.
            </p>
            <p className="text-text-gray text-sm md:text-base leading-relaxed mb-6 md:mb-8">
              Our dual-action advanced oral drops are meticulously crafted using the finest
              natural ingredients, ensuring that every drop delivers the therapeutic benefits
              your body deserves. We believe in the power of nature to heal, nurture, and
              restore balance.
            </p>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 gap-4 mb-6 md:mb-8">
              {[
                { label: '100% Natural', icon: '🌿' },
                { label: 'Lab Tested', icon: '🔬' },
                { label: 'Ayurvedic', icon: '🧪' },
                { label: 'Cruelty Free', icon: '🐰' },
              ].map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-2 bg-white rounded-lg px-3 py-2.5 shadow-sm"
                >
                  <span className="text-lg">{feature.icon}</span>
                  <span className="text-text-dark text-xs md:text-sm font-medium">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-medium text-sm md:text-base transition-all duration-200 hover:shadow-lg"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
