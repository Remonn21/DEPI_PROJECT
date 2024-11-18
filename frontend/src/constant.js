export const PRODUCTS = [
   {
      id: 1,
      name: "Ultricies condimentum imperdiet",
      currentPrice: 26.0,
      originalPrice: 49.0,
      rating: 5,
      description:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      colors: ["red", "yellow", "blue"],
   },
   {
      id: 2,
      name: "Sodales sit",
      currentPrice: 26.0,
      originalPrice: 52.0,
      rating: 5,
      description:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      colors: ["red", "yellow", "blue"],
   },
   {
      id: 3,
      name: "Nibh varius cum",
      currentPrice: 36.0,
      originalPrice: 72.0,
      rating: 4,
      description:
         "Nibh varius cum id vitae pulvinar et. Nulla aliquet faucibus semper fusce ante elit.",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      colors: ["green", "purple", "orange"],
   },
   {
      id: 4,
      name: "Mauris pharetra et",
      currentPrice: 45.0,
      originalPrice: 90.0,
      rating: 3,
      description:
         "Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi..",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      colors: ["blue", "green", "yellow"],
   },
];

const PRODUCT_BRANDS = [
   "Coaster Furniture",
   "Fusion Dot High Fashion",
   "Unique Furniture Restore",
   "Dream Furniture Flipping",
   "Young Repurposed",
   "Green DIY furniture",
];

const DISCOUNT_OFFERS = [
   "20% Cashback",
   "5% Cashback Offer",
   "25% Discount Offer",
];

const RATING = ["5 Stars", "4 Stars", "3 Stars", "2 Stars", "1 Stars"];

const COLORS = [, "Blue", "Orange", "Brown", "Green", "Purple", "Sky"];

const CATEGORIES = [
   "Prestashop",
   "Magento",
   "Bigcommerce",
   "osCommerce",
   "3dcart",
   "Bags",
   "Accessories",
   "Jewellery",
   "Watches",
];

const PRICES = ["$0.00 - $150.00", "$150.00 - $350.00", "$350.00 - $504.00"];

export const FILTERS = [
   {
      title: "Product Brand",
      options: PRODUCT_BRANDS,
   },
   {
      title: "Discount Offer",
      options: DISCOUNT_OFFERS,
   },
   {
      title: "Rating",
      options: RATING,
   },
   {
      title: "Colors",
      options: COLORS,
   },
   {
      title: "Categories",
      options: CATEGORIES,
   },
   {
      title: "Price",
      options: PRICES,
   },
];
