import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'acrylic-xmas-tealights',
    name: 'Acrylic Xmas Tealights (Set of 12)',
    price: 499,
    category: 'Candles',
    description: 'Elevate your festive decor with our beautifully crafted acrylic tealights. These premium clear-cup candles provide a steady, beautiful flame that lasts for hours, making them perfect for Diwali, Christmas, or any special celebration. Each set contains 12 pieces of pure warmth and light.',
    image: 'https://lh3.googleusercontent.com/d/1Y2aktV74XmgOizeG55UE2NLRYUXR1Liq',
    features: ['Handmade', 'Long-lasting', 'Festive Design'],
    reviews: [
      { id: 'r1', userName: 'Anjali S.', rating: 5, comment: 'Beautiful glow, perfect for Diwali!', date: '2023-11-10' },
      { id: 'r2', userName: 'Rahul M.', rating: 4, comment: 'Very elegant design.', date: '2023-12-05' }
    ]
  },
  {
    id: 'bubble-candle',
    name: 'Bubble Candle',
    price: 350,
    category: 'Candles',
    description: 'A modern aesthetic masterpiece for the contemporary home. Our signature bubble candle is hand-poured using a premium soy wax blend, creating a clean-burning and visually stunning statement piece. Whether lit or used as decor, it adds a touch of minimalist luxury to any space.',
    image: 'https://lh3.googleusercontent.com/d/19foy2DR9z3kg15B91H0aWmNHo9CZfTO7',
    features: ['Soy Wax', 'Eco-friendly', 'Unscented/Scented options'],
    reviews: [
      { id: 'r3', userName: 'Priya K.', rating: 5, comment: 'Looks amazing on my coffee table.', date: '2024-01-15' },
      { id: 'r4', userName: 'Amit P.', rating: 5, comment: 'Great quality and clean burn.', date: '2024-02-20' }
    ]
  },
  {
    id: 'snow-white-bubble-candle',
    name: 'Snow-White Bubble Candle',
    price: 375,
    category: 'Candles',
    description: 'Pure, pristine, and undeniably elegant. The snow-white version of our signature bubble candle is designed for those who appreciate the beauty of simplicity. Made from 100% natural soy wax, it brings a sense of calm, purity, and sophisticated luxury to your living space.',
    image: 'https://lh3.googleusercontent.com/d/1RFEyTIc7VrL3Z-NKqDFyeVjtKw_KOEvg',
    features: ['Premium Soy Wax', 'Clean Burn', 'Artisanal Finish'],
    reviews: [
      { id: 'r5', userName: 'Sneha R.', rating: 5, comment: 'The white is so pure and elegant.', date: '2024-03-01' }
    ]
  },
  {
    id: 'ring-wax-sachet',
    name: 'Ring Wax Sachet',
    price: 250,
    category: 'Wax Sachets',
    description: 'Infuse your personal spaces with a delicate, long-lasting fragrance. Our ring-shaped wax sachet is handcrafted with premium wax and adorned with real dried botanicals. Perfect for hanging in wardrobes, drawers, or small rooms to keep them smelling fresh for months.',
    image: 'https://lh3.googleusercontent.com/d/1-PW8-DXo1oXQal0La7rOMerrIH_ic-KM',
    features: ['Natural Fragrance', 'Dried Flowers', 'Lasts 2-3 months'],
    reviews: [
      { id: 'r6', userName: 'Meera G.', rating: 5, comment: 'My wardrobe smells like a garden!', date: '2024-01-10' }
    ]
  },
  {
    id: 'rose-teddy-candle',
    name: 'Rose Teddy Candle',
    price: 550,
    category: 'Candles',
    description: 'A romantic and whimsical blend of a classic teddy bear shape and delicate rose aesthetics. Each candle is intricately detailed and hand-poured, making it a thoughtful and unique gift for anniversaries, birthdays, or just to show someone you care.',
    image: 'https://lh3.googleusercontent.com/d/1TJMk5qIiexFcPEEF6uFj1qqIAsp3B6hR',
    features: ['Intricate Detail', 'Hand-poured', 'Gift Ready'],
    reviews: [
      { id: 'r7', userName: 'Vikram T.', rating: 5, comment: 'Perfect anniversary gift.', date: '2024-02-14' }
    ]
  },
  {
    id: 'teddy-candle',
    name: 'Teddy Candle',
    price: 450,
    category: 'Candles',
    description: 'Adorable, cozy, and full of charm. This handcrafted teddy bear candle is more than just a light source; it\'s a companion for your cozy evenings. Made with premium wax for a soft, warm glow that enhances the atmosphere of any room.',
    image: 'https://lh3.googleusercontent.com/d/1B9pNyTtQMpMjAXWqRsIsiDDbD0cqk1XC',
    features: ['Cute Design', 'Premium Wax', 'Soft Glow'],
    reviews: [
      { id: 'r8', userName: 'Sonia L.', rating: 4, comment: 'So cute, I don\'t want to light it!', date: '2024-03-15' }
    ]
  },
  {
    id: 'daisy-candle',
    name: 'Daisy Candle',
    price: 299,
    category: 'Candles',
    description: 'Brighten up your day and your decor with our vibrant daisy-shaped candle. A symbol of purity, innocence, and new beginnings, this handcrafted piece features intricate petal details and a cheerful presence that makes it a perfect small gift.',
    image: 'https://lh3.googleusercontent.com/d/1Cm-_9XwSL8XIExh4hEb1bDmbF7GExhDF',
    features: ['Floral Design', 'Handcrafted', 'Vibrant Colors'],
    reviews: [
      { id: 'r9', userName: 'Karan J.', rating: 5, comment: 'Lovely colors and shape.', date: '2024-03-20' }
    ]
  },
  {
    id: 'evil-eye-candle',
    name: 'Evil Eye Candle',
    price: 650,
    category: 'Candles',
    description: 'Protect your space and invite positive energy with our stunningly detailed Evil Eye candle. Each piece is hand-painted with care, combining traditional symbolism with modern artisanal craftsmanship to create a unique protective charm for your home.',
    image: 'https://lh3.googleusercontent.com/d/1iqYMbcK2Jvbqn8r3dwj8cLGUoXhtNZ25',
    features: ['Symbolic', 'Hand-painted details', 'Unique Gift'],
    reviews: [
      { id: 'r10', userName: 'Neha W.', rating: 5, comment: 'Stunning detail, very protective vibe.', date: '2024-03-25' }
    ]
  },
  {
    id: 'glitter-candle-50ml',
    name: 'Glitter Candle (50ml)',
    price: 199,
    category: 'Candles',
    description: 'A small jar packed with magical sparkle. This 50ml glitter candle is designed to create an enchanting atmosphere with its shimmering finish and delightful fragrance. Perfect for travel or as a charming addition to a gift hamper.',
    image: 'https://lh3.googleusercontent.com/d/1HsdFPHvOOOSbmUAARCqU2GhQE3fSGaqu',
    features: ['Sparkling Finish', 'Travel Friendly', 'Scented'],
    reviews: [
      { id: 'r11', userName: 'Arjun B.', rating: 4, comment: 'Small but very sparkly.', date: '2024-03-28' }
    ]
  },
  {
    id: 'gel-soy-heart-candle-50ml',
    name: 'Gel-Soy Heart Candle (50ml)',
    price: 225,
    category: 'Candles',
    description: 'Experience the best of both worlds with our unique hybrid gel and soy wax candle. Featuring a clear gel layer that reveals a beautiful heart at its core, this 50ml candle is a true labor of love and a perfect romantic gesture.',
    image: 'https://lh3.googleusercontent.com/d/1YkeAXnK1g-ttXZRgk4bDWuhP7QgMnbJi',
    features: ['Hybrid Wax', 'Romantic', 'Clear Jar'],
    reviews: [
      { id: 'r12', userName: 'Ishita V.', rating: 5, comment: 'The heart inside is so beautiful.', date: '2024-03-30' }
    ]
  },
  {
    id: 'laddoo-candle',
    name: 'Laddoo Candle (Set of 1, 4, 6)',
    price: 150,
    category: 'Candles',
    description: 'Traditional Indian aesthetics meet modern artisanal craftsmanship. Our Laddoo candles are designed to look exactly like the beloved festive sweet, bringing a touch of cultural warmth and celebration to your home decor. Perfect for festive gifting.',
    image: 'https://lh3.googleusercontent.com/d/1WXOD_RLo99kzh-tLcrfR6tQu7gGk84N4',
    features: ['Traditional Look', 'Festive', 'Multiple Set Options'],
    variants: ['Set of 1', 'Set of 4', 'Set of 6'],
    reviews: [
      { id: 'r13', userName: 'Deepak H.', rating: 5, comment: 'Perfect for festive decor.', date: '2023-10-20' }
    ]
  },
  {
    id: 'vanilla-lavender-whipped-cream-crumble',
    name: 'Vanilla Lavender Whipped Cream Crumble',
    price: 850,
    category: 'Candles',
    description: 'A dessert-inspired masterpiece that smells as heavenly as it looks. Featuring a realistic whipped texture and a delightful crumble topping, this candle fills your room with the warm, comforting notes of vanilla and calming lavender.',
    image: 'https://lh3.googleusercontent.com/d/14Dnhudx6gWq56NjPPL4GwAb1uGYdiSKJ',
    features: ['Whipped Texture', 'Strong Scent Throw', 'Artisanal'],
    reviews: [
      { id: 'r14', userName: 'Ritu M.', rating: 5, comment: 'Smells exactly like a bakery!', date: '2024-01-05' }
    ]
  },
  {
    id: 'multi-colour-urli',
    name: 'Multi-colour Urli (3.5\', 4.5\', 5.5\')',
    price: 1200,
    category: 'Gift Hampers',
    description: 'Stunning traditional Urli sets handcrafted in multiple sizes to suit your space. These multi-colour pieces are perfect for creating a serene atmosphere with floating candles and fresh flower petals, adding a touch of heritage to your home.',
    image: 'https://lh3.googleusercontent.com/d/11Asy7CI0JoBWmIOiWP-vdbHtQLCFUT3Y',
    features: ['Hand-painted', 'Traditional Decor', 'Set of 3'],
    variants: ['3.5 inch', '4.5 inch', '5.5 inch'],
    reviews: [
      { id: 'r15', userName: 'Sunita P.', rating: 5, comment: 'High quality metal and paint.', date: '2023-11-01' }
    ]
  },
  {
    id: 'big-peony-candle',
    name: 'Big Peony Candle',
    price: 499,
    category: 'Candles',
    description: 'A large, breathtaking peony flower captured forever in premium wax. This sophisticated candle features incredibly detailed petals that bloom as it burns, making it a centerpiece that exudes elegance and natural beauty.',
    image: 'https://lh3.googleusercontent.com/d/1H6UaLSBu1D71PI7mfSPd6_gysYW1pIuZ',
    features: ['Large Size', 'Detailed Petals', 'Elegant'],
    reviews: [
      { id: 'r16', userName: 'Tanvi D.', rating: 5, comment: 'The detail on the petals is insane.', date: '2024-02-10' }
    ]
  },
  {
    id: 'lotus-urli-set',
    name: 'Lotus Urli Set',
    price: 1500,
    category: 'Gift Hampers',
    description: 'A premium lotus-themed Urli set that exudes luxury, tradition, and spiritual calm. Hand-finished to perfection, it serves as a magnificent centerpiece for festive occasions like Diwali or as a permanent fixture of elegant home decor.',
    image: 'https://lh3.googleusercontent.com/d/1LXL7H8rIqTqXSu6ZH0cqHpRp-D6DKjQW',
    features: ['Luxury Finish', 'Lotus Design', 'Perfect for Diwali'],
    reviews: [
      { id: 'r17', userName: 'Manish G.', rating: 5, comment: 'Very premium look.', date: '2023-11-05' }
    ]
  },
  {
    id: 'real-dried-flower-soy-gel-candle-50ml',
    name: 'Real Dried Flower Soy-Gel Candle (50ml)',
    price: 275,
    category: 'Candles',
    description: 'Nature preserved in its most beautiful state. This unique candle features real dried flowers suspended in a crystal-clear gel layer, topped with a clean-burning soy wax core. Each piece is a one-of-a-kind artisanal creation.',
    image: 'https://lh3.googleusercontent.com/d/1gMDgEUlbXuo5Q1DRL0ZTC-WTzsTivF7L',
    features: ['Real Flowers', 'Unique Every Time', 'Handcrafted'],
    reviews: [
      { id: 'r18', userName: 'Pooja E.', rating: 5, comment: 'Love the real flowers inside.', date: '2024-03-05' }
    ]
  },
  {
    id: 'snowflake-candle-set-of-2',
    name: 'Snowflake Candle (Set of 2)',
    price: 399,
    category: 'Candles',
    description: 'Bring the magic of a winter wonderland indoors with our delicate snowflake candles. Sold as a set of two, these intricately designed pieces feature a shimmering finish that captures the light beautifully, perfect for seasonal decor.',
    image: 'https://lh3.googleusercontent.com/d/1-8MH0CCxLE_DM26lBcsxWIgo_0g1S8Dx',
    features: ['Winter Theme', 'Set of 2', 'White & Silver'],
    reviews: [
      { id: 'r19', userName: 'Chris M.', rating: 4, comment: 'Great for Christmas decor.', date: '2023-12-20' }
    ]
  },
  {
    id: 'natural-spice-wax-sachet',
    name: 'Natural Spice Wax Sachet',
    price: 299,
    category: 'Wax Sachets',
    description: 'Warm, spicy, and deeply earthy. This handcrafted wax sachet is infused with a blend of natural spices and pure essential oils, designed to bring a comforting and grounded fragrance to your closets, drawers, or study.',
    image: 'https://lh3.googleusercontent.com/d/1x76wsqLCcMo3uhflxRgvsRm49SDZspWU',
    features: ['Natural Spices', 'Warm Fragrance', 'Eco-friendly'],
    reviews: [
      { id: 'r20', userName: 'Alok R.', rating: 5, comment: 'Very soothing spice scent.', date: '2024-01-20' }
    ]
  },
  {
    id: 'small-teddy-candle-set-of-6',
    name: 'Small Teddy Candle (Set of 6)',
    price: 599,
    category: 'Candles',
    description: 'A whole family of adorable little teddies! This set of six small teddy candles is perfect for party favors, baby showers, or as a collection of small gifts that are sure to bring a smile to anyone\'s face.',
    image: 'https://lh3.googleusercontent.com/d/1Y5idEk13mD_cM5Yho7lDod_V4g6Sjmme',
    features: ['Mini Size', 'Set of 6', 'Adorable Colors'],
    reviews: [
      { id: 'r21', userName: 'Tina F.', rating: 5, comment: 'Perfect return gifts for kids.', date: '2024-02-25' }
    ]
  },
  {
    id: 'acrylic-tea-light-cup-teddy-candle',
    name: 'Acrylic Tea-light Cup Teddy Candle (Set of 4, 6, 8)',
    price: 450,
    category: 'Candles',
    description: 'Our beloved teddy candles, now nestled in premium acrylic cups for a clean, safe, and worry-free burn. These sets are beautifully packaged and ready to be gifted, combining cuteness with practical safety.',
    image: 'https://lh3.googleusercontent.com/d/13XkQhmUCt_CheBvmoaR3EEXjN5V3AqQE',
    features: ['Safe Burn', 'Gift Packaging', 'Multiple Sets'],
    variants: ['Set of 4', 'Set of 6', 'Set of 8'],
    reviews: [
      { id: 'r22', userName: 'Yash S.', rating: 4, comment: 'Safe and clean burning.', date: '2024-03-10' }
    ]
  },
  {
    id: 'tulip-bouquet-candle',
    name: 'Tulip Bouquet Candle',
    price: 750,
    category: 'Candles',
    description: 'A stunning, handcrafted bouquet of tulips that never fades. Each flower is hand-poured with incredible attention to detail, creating a floral arrangement that fills your room with beauty and a delicate, fresh fragrance.',
    image: 'https://lh3.googleusercontent.com/d/1xY3PpIAzvInFRbnHWzRHqBeIoa2MiSwu',
    features: ['Bouquet Design', 'Floral Scent', 'Luxury Gift'],
    reviews: [
      { id: 'r23', userName: 'Radhika Q.', rating: 5, comment: 'Looks like real flowers!', date: '2024-03-12' }
    ]
  },
  {
    id: 'tulip-bouquet-in-glass-jar',
    name: 'Tulip Bouquet in Glass Jar',
    price: 899,
    category: 'Candles',
    description: 'Our signature tulip bouquet, elegantly presented in a premium glass jar. This design not only enhances the aesthetic appeal but also ensures a safer and more controlled burn, making it a perfect luxury gift for any occasion.',
    image: 'https://lh3.googleusercontent.com/d/1mNBJ-6bYSPCKWquBd2oZI0Lv8GsS8_Kt',
    features: ['Glass Jar', 'Premium Presentation', 'Longer Burn'],
    reviews: [
      { id: 'r24', userName: 'Sanjay U.', rating: 5, comment: 'Very classy jar.', date: '2024-03-14' }
    ]
  },
  {
    id: 'wax-sachet',
    name: 'Wax Sachet',
    price: 199,
    category: 'Wax Sachets',
    description: 'Simple, elegant, and timeless. Our standard wax sachet is handcrafted with premium wax and essential oils to provide a subtle, consistent fragrance that keeps your small spaces smelling fresh and inviting.',
    image: 'https://lh3.googleusercontent.com/d/1RKwgF2RmFpgTJqTxiszhVmWnFDPyVX-b',
    features: ['Classic Design', 'Essential Oils', 'Handmade'],
    reviews: [
      { id: 'r25', userName: 'Bhavna K.', rating: 5, comment: 'Simple and effective.', date: '2024-03-16' }
    ]
  },
  {
    id: 'acrylic-tea-lights-set-of-12',
    name: 'Acrylic Tea-lights (Set of 12)',
    price: 450,
    category: 'Candles',
    description: 'Premium acrylic tea-lights designed for those who value a steady, clean, and beautiful flame. These clear-cup candles allow the light to shine through completely, creating a warm and inviting atmosphere for any setting.',
    image: 'https://lh3.googleusercontent.com/d/1Y2aktV74XmgOizeG55UE2NLRYUXR1Liq',
    features: ['Steady Flame', 'Set of 12', 'Clear Cups'],
    reviews: [
      { id: 'r26', userName: 'Mohit Z.', rating: 4, comment: 'Good value for money.', date: '2024-03-18' }
    ]
  }
];

export const BRAND = {
  name: 'D&D Creations',
  tagline: 'Pure Love in Box',
  logo: 'https://lh3.googleusercontent.com/d/1lHZjL_zSK4g1tELGcA6v3hZaR08ZzEKL',
  phone: '9555159111',
  email: 'dhanvidhanyacreations@gmail.com',
  instagram: 'https://www.instagram.com/dnd_pureloveinbox/',
  whatsapp: 'https://wa.me/919555159111'
};
