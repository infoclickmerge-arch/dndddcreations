export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  features: string[];
  variants?: string[];
  reviews: Review[];
}

export type Category = 'Candles' | 'Wax Sachets' | 'Perfumes' | 'Soaps' | 'Gift Hampers';
