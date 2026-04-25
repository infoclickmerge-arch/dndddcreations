import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MessageCircle, Star } from 'lucide-react';
import { Product } from '../types';
import { BRAND } from '../constants';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const hasVariants = product.variants && product.variants.length > 0;
  const whatsappMessage = `Hello! I want to order ${product.name}. Please let me know the next steps.`;
  const whatsappLink = `https://wa.me/91${BRAND.phone}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative bg-white rounded-brand overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
    >
      <Link to={`/product/${product.id}`}>
        <div className="aspect-[4/5] overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="p-6 text-center">
          <span className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 block">
            {product.category}
          </span>
          <h3 className="text-lg font-serif font-bold text-black mb-2 group-hover:text-gray-600 transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center justify-center gap-1 mb-3 text-black">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star 
                key={s} 
                size={12} 
                fill={s <= Math.round(product.reviews.reduce((acc, r) => acc + r.rating, 0) / (product.reviews.length || 1)) ? "currentColor" : "none"} 
              />
            ))}
            <span className="text-[10px] text-gray-400 ml-1">({product.reviews.length})</span>
          </div>
          <p className="text-sm text-gray-500 mb-4 line-clamp-1">
            {product.description}
          </p>
          <div className="flex items-center justify-between mt-4">
            <span className="text-lg font-serif font-bold text-black">₹{product.price}</span>
            {hasVariants ? (
              <span className="text-xs font-bold uppercase tracking-wider text-black border-b-2 border-black pb-0.5">
                Select Set
              </span>
            ) : (
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-black border-b-2 border-black pb-0.5"
              >
                <MessageCircle size={14} /> Buy Now
              </a>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
