import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
    alert('Thank you for subscribing!');
  };

  return (
    <section className="py-12 md:py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-white mb-3">
          Get Access to Amiy News and Exclusive Deals
        </h2>
        <p className="text-white/80 text-sm md:text-base mb-8 max-w-xl mx-auto">
          Sign up to receive updates and special offers
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-5 py-3 rounded-full text-sm text-text-dark bg-white border-0 outline-none focus:ring-2 focus:ring-accent placeholder:text-text-light"
            required
          />
          <button
            type="submit"
            className="bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-full font-medium text-sm transition-all duration-200 hover:shadow-lg whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>

        <p className="text-white/60 text-xs mt-4">
          By subscribing, you agree to our Privacy Policy and consent to receive updates.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
