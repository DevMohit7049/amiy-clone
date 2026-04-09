import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductSection from '../components/ProductSection';
import TrendingSection from '../components/TrendingSection';
import CombosSection from '../components/CombosSection';
import FeaturedOn from '../components/FeaturedOn';
import CategorySection from '../components/CategorySection';
import AboutSection from '../components/AboutSection';
import Testimonial from '../components/Testimonial';
import BlogSection from '../components/BlogSection';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductSection />
      <TrendingSection />
      <CombosSection />
      <FeaturedOn />
      <CategorySection />
      <AboutSection />
      <Testimonial />
      <BlogSection />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
