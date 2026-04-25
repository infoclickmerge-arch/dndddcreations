import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { BRAND } from '../constants';

export const Footer = () => {
  return (
    <footer className="bg-black pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img 
                src={BRAND.logo} 
                alt={BRAND.name} 
                className="h-16 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold tracking-wider text-white leading-none">
                  {BRAND.name}
                </span>
                <span className="text-[12px] uppercase tracking-[0.2em] text-gray-500 mt-1">
                  {BRAND.tagline}
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Handcrafting love and emotions into every box. Our premium gifts are designed to make your special moments unforgettable.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-sm hover:text-white transition-colors text-gray-400">Home</Link></li>
              <li><Link to="/shop" className="text-sm hover:text-white transition-colors text-gray-400">Shop All</Link></li>
              <li><Link to="/about" className="text-sm hover:text-white transition-colors text-gray-400">Our Story</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-white transition-colors text-gray-400">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone size={16} className="text-white" />
                <span className="text-sm">+91 {BRAND.phone}</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <Mail size={16} className="text-white mt-1 flex-shrink-0" />
                <span className="text-sm break-all">{BRAND.email}</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 min-w-0">
                <Instagram size={16} className="text-white flex-shrink-0" />
                <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white truncate">@dnd_pureloveinbox</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">Join our community for gifting inspiration and exclusive offers.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border border-white/20 px-4 py-2 rounded-l-full text-sm text-white focus:outline-none w-full"
              />
              <button className="bg-white text-black px-6 py-2 rounded-r-full text-sm font-medium hover:bg-gray-200 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-[10px] uppercase tracking-widest text-gray-500">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved. Made with Love.
          </p>
        </div>
      </div>
    </footer>
  );
};
