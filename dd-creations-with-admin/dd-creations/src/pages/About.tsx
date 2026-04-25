import { motion } from 'motion/react';
import { BRAND } from '../constants';

export const About = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/about-hero/1920/1080" 
            alt="About Hero" 
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-serif font-bold text-white mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/90 font-sans font-bold uppercase tracking-[0.5em]"
          >
            Pure Love in a Box
          </motion.p>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif font-bold text-black mb-8 leading-tight">Crafted with Passion, <br />Shared with Love</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                At {BRAND.name}, we believe that the best gifts are the ones that tell a story. Our journey began with a simple idea: to bring warmth, beauty, and emotion into every home through handcrafted treasures.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Every candle we pour, every sachet we design, and every hamper we curate is a labor of love. We use only the finest ingredients—premium soy wax, natural essential oils, and real dried flowers—to ensure that your gift is as high-quality as it is beautiful.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[3rem] overflow-hidden shadow-2xl aspect-square"
            >
              <img src="https://lh3.googleusercontent.com/d/13Ecf2nBRXnjwXJnOKv_WSmEMiFmoEPM7" alt="Crafting" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:order-2"
            >
              <h2 className="text-4xl font-serif font-bold text-black mb-8 leading-tight">The Art of <br />Thoughtful Gifting</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Gifting is more than just an exchange of objects; it's a way to connect, to celebrate, and to show you care. That's why we focus on the details—from the intricate designs of our candles to the luxury feel of our packaging.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether it's a small token of appreciation or a grand gesture for a special occasion, we strive to make unboxing a {BRAND.name} gift a moment of pure joy.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[3rem] overflow-hidden shadow-2xl aspect-square md:order-1"
            >
              <img src="https://lh3.googleusercontent.com/d/1nI-GJv6Juz2TvPIu1ftY0SfIvVRhALQU" alt="Gifting" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-black mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Authenticity', desc: 'Every product is genuinely handmade, ensuring uniqueness in every piece.' },
              { title: 'Quality', desc: 'We never compromise on materials, using only premium, eco-friendly ingredients.' },
              { title: 'Emotion', desc: 'We design with the heart, aiming to create products that evoke feelings of love and peace.' }
            ].map((v, i) => (
              <motion.div 
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-12 rounded-2xl shadow-sm border border-black/5"
              >
                <h3 className="font-serif font-bold text-2xl text-black mb-4">{v.title}</h3>
                <p className="text-gray-500 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
