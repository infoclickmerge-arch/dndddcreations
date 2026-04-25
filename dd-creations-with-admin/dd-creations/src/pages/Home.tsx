import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Gift, Sparkles, Package, Plus, Minus } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';
import React from 'react';

export const Home = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const categories = [
    { name: 'Candles', icon: <Sparkles size={24} />, image: 'https://lh3.googleusercontent.com/d/1xkz4sQObyYr8K-zQWWmVYLsMe7ZITHub' },
    { name: 'Wax Sachets', icon: <Heart size={24} />, image: 'https://lh3.googleusercontent.com/d/1expNlQ8tPC92sES08TBO5Z-hUs7RAT7n' },
    { name: 'Perfumes', icon: <Sparkles size={24} />, image: 'https://lh3.googleusercontent.com/d/1_tYrD5XgH3r_fLyxBJVq_N4Mx9q7wvay' },
    { name: 'Soaps', icon: <Sparkles size={24} />, image: 'https://lh3.googleusercontent.com/d/10UhvNBQZ6iWNkK6MiioVGZCzPC8cTDL3' },
    { name: 'Gift Hampers', icon: <Gift size={24} />, image: 'https://lh3.googleusercontent.com/d/1LiQ2Ww-Xz3Fzjck017jR77ByYADfY62a' },
  ];

  const faqs = [
    { q: "What are your delivery times?", a: "We typically deliver within 5-7 business days across India. Local deliveries in certain cities may be faster." },
    { q: "Do you offer custom gift hampers?", a: "Yes, we specialize in personalized gifting. You can handpick items to create a unique 'Story in a Box' for any occasion." },
    { q: "Are your products handmade?", a: "Absolutely! Every single item, from our candles to our soaps, is handcrafted with love and precision in our studio." },
    { q: "What is your return policy?", a: "Since our products are artisanal and often custom-made, we only accept returns for damaged items reported within 24 hours of delivery." },
    { q: "Can I track my order?", a: "Yes, once your order is dispatched, you will receive a tracking link via email and SMS to monitor its journey to you." },
  ];

  const bestSellers = PRODUCTS.slice(0, 8);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-24 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/d/1S6OVmIMGFcFwz1A-JUJCuAwHwQi83T-a" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-sm uppercase tracking-[0.6em] text-white/90 font-sans font-medium mb-6 block"
          >
            Artisanal Gifting Experience
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-serif font-bold text-white mb-8 leading-tight tracking-tight"
          >
            Handmade With Love, <br />
            <span className="text-white/90 font-accent italic font-light">Delivered in a Box</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              to="/shop" 
              className="glow-button bg-black text-white px-10 py-4 rounded-full text-sm font-bold tracking-widest uppercase flex items-center gap-2"
            >
              Shop Now <ArrowRight size={18} />
            </Link>
            <Link 
              to="/shop" 
              className="bg-white/80 backdrop-blur-md text-black px-10 py-4 rounded-full text-sm font-bold tracking-widest uppercase border border-black/10 hover:bg-white transition-all"
            >
              Explore Collection
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-black mb-4">Curated Categories</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Explore our range of handcrafted treasures, each made with meticulous care and premium ingredients.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group text-center"
              >
                <Link to={`/shop?category=${encodeURIComponent(cat.name)}`} className="block cursor-pointer">
                  <div className="relative aspect-square rounded-full overflow-hidden mb-6 border-2 border-gray-100 group-hover:border-black transition-all duration-500">
                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                      {cat.icon}
                    </div>
                  </div>
                  <h3 className="font-serif font-bold text-black group-hover:text-gray-600 transition-colors">{cat.name}</h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-serif font-bold text-black mb-4">Our Best Sellers</h2>
              <p className="text-gray-500">The most loved pieces from our collection, chosen by our wonderful community.</p>
            </div>
            <Link to="/shop" className="text-black font-bold uppercase tracking-widest text-sm border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-all">
              View All Products
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Gift Hampers Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img 
                src="https://lh3.googleusercontent.com/d/1swW8w0kMdcVCYkmN8PVTeA1yzPCUJJxe" 
                alt="Custom Hampers" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:w-1/2 p-12 md:p-20 flex flex-col justify-center">
              <span className="text-black font-bold uppercase tracking-widest text-xs mb-4">Personalized Gifting</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-6 leading-tight">Create Your Own <br />Story in a Box</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Want something truly unique? Our custom gift hampers allow you to handpick every element, from the fragrance of the candle to the aesthetic of the packaging. Perfect for weddings, birthdays, and corporate gifting.
              </p>
              <Link 
                to="/contact" 
                className="glow-button bg-black text-white px-10 py-4 rounded-full text-sm font-bold tracking-widest uppercase self-start"
              >
                Customize Your Gift Box
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { title: '100% Handmade', desc: 'Crafted with passion and precision in our studio.', icon: <Heart className="text-black" size={32} /> },
              { title: 'Premium Packaging', desc: 'Luxury boxes that make unboxing an experience.', icon: <Package className="text-black" size={32} /> },
              { title: 'Customizable Gifts', desc: 'Tailored to your preferences and occasions.', icon: <Sparkles className="text-black" size={32} /> },
              { title: 'Perfect for Every Occasion', desc: 'Thoughtful gifts for the moments that matter.', icon: <Gift className="text-black" size={32} /> },
            ].map((item, idx) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="font-serif font-bold text-xl text-black mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-black mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-500">Everything you need to know about our artisanal products and services.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-serif font-bold text-black">{faq.q}</span>
                  {openFaq === idx ? <Minus size={20} className="text-black" /> : <Plus size={20} className="text-black" />}
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-8 pb-6 text-gray-500 text-sm leading-relaxed border-t border-gray-50 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
