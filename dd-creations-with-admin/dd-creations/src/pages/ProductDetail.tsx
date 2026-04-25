import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Heart, MessageCircle, ChevronLeft, Star, ShieldCheck, Truck } from 'lucide-react';
import { BRAND } from '../constants';
import { useProduct } from '../hooks/useProducts';
import { ProductCard } from '../components/ProductCard';
import { useEffect, useState } from 'react';

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { product, allProducts, loading } = useProduct(id);
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && !product) {
      navigate('/shop');
    } else if (product?.variants && product.variants.length > 0) {
      setSelectedVariant(product.variants[0]);
    }
  }, [product, loading, navigate]);

  if (loading) return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <p className="text-gray-400 italic">Loading...</p>
    </div>
  );

  if (!product) return null;

  const relatedProducts = allProducts.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const whatsappMessage = `Hello! I want to order ${product.name}${selectedVariant ? ` - ${selectedVariant}` : ''}. Please let me know the next steps.`;
  const whatsappLink = `https://wa.me/91${BRAND.phone}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-white min-h-screen pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/shop" className="inline-flex items-center text-sm font-bold text-black hover:text-gray-600 mb-12 transition-colors">
          <ChevronLeft size={18} /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-[2rem] overflow-hidden bg-gray-50 aspect-[4/5]"
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Details Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <span className="text-gray-500 font-bold uppercase tracking-[0.3em] text-xs mb-4">
              {product.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-black mb-6 leading-tight">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-8">
              <span className="text-3xl font-serif font-bold text-black">₹{product.price}</span>
              <div className="flex items-center text-black">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star 
                    key={s} 
                    size={16} 
                    fill={s <= Math.round(product.reviews.reduce((acc, r) => acc + r.rating, 0) / (product.reviews.length || 1)) ? "currentColor" : "none"} 
                  />
                ))}
                <span className="text-xs text-gray-400 ml-2">({product.reviews.length} Reviews)</span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8 text-lg italic">
              "{product.description}"
            </p>

            {product.variants && (
              <div className="mb-8">
                <h4 className="text-sm font-bold uppercase tracking-widest text-black mb-4">Select Set</h4>
                <div className="flex flex-wrap gap-3">
                  {product.variants.map((v) => (
                    <button 
                      key={v} 
                      onClick={() => setSelectedVariant(v)}
                      className={`px-6 py-2 rounded-full border text-sm transition-all ${
                        selectedVariant === v 
                        ? 'bg-black border-black text-white' 
                        : 'border-black/20 text-gray-500 hover:border-black hover:text-black'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-12">
              <h4 className="text-sm font-bold uppercase tracking-widest text-black mb-4">Key Features</h4>
              <ul className="grid grid-cols-2 gap-4">
                {product.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <Heart size={14} className="text-black" /> {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button bg-black text-white px-10 py-5 rounded-full text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-3 flex-grow"
              >
                <MessageCircle size={20} /> Buy Now on WhatsApp
              </a>
              <button className="p-5 rounded-full border border-black/10 text-black hover:bg-black/5 transition-all">
                <Heart size={20} />
              </button>
            </div>

            {/* Reviews Section */}
            <div className="mb-12 pt-12 border-t border-black/10">
              <h4 className="text-sm font-bold uppercase tracking-widest text-black mb-8">Customer Reviews</h4>
              <div className="space-y-8">
                {product.reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-50 pb-6 last:border-0">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-bold text-black text-sm">{review.userName}</p>
                        <div className="flex items-center text-black mt-1">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star 
                              key={s} 
                              size={12} 
                              fill={s <= review.rating ? "currentColor" : "none"} 
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider">{review.date}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {review.comment}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-black/10">
              <div className="text-center">
                <ShieldCheck size={24} className="mx-auto text-black mb-2" />
                <span className="text-[10px] uppercase font-bold tracking-tighter text-gray-400">Secure Order</span>
              </div>
              <div className="text-center">
                <Truck size={24} className="mx-auto text-black mb-2" />
                <span className="text-[10px] uppercase font-bold tracking-tighter text-gray-400">Fast Delivery</span>
              </div>
              <div className="text-center">
                <Heart size={24} className="mx-auto text-black mb-2" />
                <span className="text-[10px] uppercase font-bold tracking-tighter text-gray-400">Handmade</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-32">
            <h2 className="text-3xl font-serif font-bold text-black mb-12 text-center">You May Also Love</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
