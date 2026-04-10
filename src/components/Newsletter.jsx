import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
    alert('Thank you for subscribing!');
  };

  return (
    <section className="py-12 md:py-20" style={{ backgroundColor: '#6c6948' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text */}
          <div>
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-white mb-3" style={{ textTransform: 'none' }}>
              Get access to Amiy news and exclusive deals
            </h2>
            <p className="text-white/80 text-sm md:text-base">
              Sign up to receive updates and special offers
            </p>
          </div>

          {/* Right side - Form */}
          <div>
            <p className="text-white text-xs uppercase font-medium tracking-widest mb-4">
              Subscribe our newsletter
            </p>
            <form onSubmit={handleSubmit} className="flex gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 text-sm text-text-dark border-0 outline-none"
                style={{
                  backgroundColor: '#f9f3ea',
                  borderRight: 'none',
                }}
                required
              />
              <button
                type="submit"
                className="px-6 py-3 text-white transition-all duration-200 hover:shadow-lg"
                style={{
                  backgroundColor: '#6c6948',
                  borderLeft: '1px solid rgba(40, 42, 39, 0.3)',
                }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
