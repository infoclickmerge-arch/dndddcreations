import { motion } from 'motion/react';
import { Phone, Mail, Instagram, MessageCircle, Send } from 'lucide-react';
import { BRAND } from '../constants';

export const Contact = () => {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-bold text-black mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-2xl mx-auto"
          >
            Have a question about our products or want to discuss a custom order? We'd love to hear from you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-black/10">
              <h2 className="text-3xl font-serif font-bold text-black mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <a href={`tel:${BRAND.phone}`} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all duration-300">
                    <Phone size={24} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase font-bold tracking-widest text-gray-400 mb-1">Call / WhatsApp</p>
                    <p className="text-lg font-medium text-black">+91 {BRAND.phone}</p>
                  </div>
                </a>

                <a href={`mailto:${BRAND.email}`} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase font-bold tracking-widest text-gray-400 mb-1">Email Us</p>
                    <p className="text-lg font-medium text-black break-all">{BRAND.email}</p>
                  </div>
                </a>

                <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all duration-300">
                    <Instagram size={24} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase font-bold tracking-widest text-gray-400 mb-1">Follow Us</p>
                    <p className="text-lg font-medium text-black truncate">@dnd_pureloveinbox</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-black text-white p-10 rounded-[2.5rem] shadow-xl">
              <h3 className="text-2xl font-serif font-bold mb-4">Quick Order?</h3>
              <p className="text-white/70 mb-8 leading-relaxed">The fastest way to get your favorite gifts is via WhatsApp. Chat with us directly for orders and customization.</p>
              <a 
                href={BRAND.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-black border border-white/20 text-white px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all"
              >
                <MessageCircle size={20} /> Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-black/5"
          >
            <h2 className="text-3xl font-serif font-bold text-black mb-8">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold tracking-widest text-gray-400 ml-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-gray-50 border border-black/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-black transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold tracking-widest text-gray-400 ml-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-gray-50 border border-black/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold tracking-widest text-gray-400 ml-2">Subject</label>
                <input 
                  type="text" 
                  placeholder="Custom Order Inquiry" 
                  className="w-full bg-gray-50 border border-black/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold tracking-widest text-gray-400 ml-2">Your Message</label>
                <textarea 
                  rows={5} 
                  placeholder="Tell us what's on your mind..." 
                  className="w-full bg-gray-50 border border-black/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-black transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full glow-button bg-black text-white py-5 rounded-full text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-3"
              >
                <Send size={18} /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
