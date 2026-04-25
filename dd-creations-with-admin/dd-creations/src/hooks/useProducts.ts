import { useState, useEffect } from 'react';
import { Product } from '../types';

const PRODUCT_FILES = [
  'acrylic-xmas-tealights',
  'bubble-candle',
  'snow-white-bubble-candle',
  'ring-wax-sachet',
  'rose-teddy-candle',
  'teddy-candle',
  'daisy-candle',
  'evil-eye-candle',
  'glitter-candle-50ml',
  'gel-soy-heart-candle-50ml',
  'laddoo-candle',
  'vanilla-lavender-whipped-cream-crumble',
  'multi-colour-urli',
  'big-peony-candle',
  'lotus-urli-set',
  'real-dried-flower-soy-gel-candle-50ml',
  'snowflake-candle-set-of-2',
  'natural-spice-wax-sachet',
  'small-teddy-candle-set-of-6',
  'acrylic-tea-light-cup-teddy-candle',
  'tulip-bouquet-candle',
  'tulip-bouquet-in-glass-jar',
  'wax-sachet',
  'acrylic-tea-lights-set-of-12',
];

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const results = await Promise.all(
          PRODUCT_FILES.map(async (slug) => {
            try {
              const res = await fetch(`/content/products/${slug}.json`);
              if (!res.ok) return null;
              const data = await res.json();
              return { ...data, reviews: data.reviews || [] } as Product;
            } catch {
              return null;
            }
          })
        );
        setProducts(results.filter(Boolean) as Product[]);
      } catch (err) {
        console.error('Failed to load products:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchAllProducts();
  }, []);

  return { products, loading };
}

export function useProduct(id: string | undefined) {
  const [product, setProduct] = useState<Product | null>(null);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) { setLoading(false); return; }

    const fetchProduct = async () => {
      try {
        const res = await fetch(`/content/products/${id}.json`);
        if (res.ok) {
          const data = await res.json();
          setProduct({ ...data, reviews: data.reviews || [] });
        }
        const results = await Promise.all(
          PRODUCT_FILES.map(async (slug) => {
            try {
              const r = await fetch(`/content/products/${slug}.json`);
              if (!r.ok) return null;
              const d = await r.json();
              return { ...d, reviews: d.reviews || [] } as Product;
            } catch { return null; }
          })
        );
        setAllProducts(results.filter(Boolean) as Product[]);
      } catch (err) {
        console.error('Failed to load product:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  return { product, allProducts, loading };
}
