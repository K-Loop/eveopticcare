export const storeInfo = {
  name: "Eye Mate Optic",
  tagline: "See Better. Look Smarter.",
  address: "31/4, Station Road, West Mambalam, Chennai, Tamil Nadu – 600033",
  landmark: "Near West Mambalam Railway Station",
  phone: "+91 88701 42706",
  phoneRaw: "+918870142706",
  whatsappUrl: "https://wa.me/918870142706?text=Hello%20Eye%20Mate%20Optic%2C%20I%20would%20like%20to%20inquire%20about%20an%20eye%20test%20and%20eyewear.",
  mapsUrl: "https://www.google.com/maps/place/Eye+Mate+Optic,+31%2F4,+Station+Road,+West+Mambalam,+Chennai,+Tamil+Nadu+600033/",
  hours: "Monday – Sunday: 10:00 AM – 9:30 PM",
  rating: "4.9",
  reviewsCount: "496+",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  youtube: "https://youtube.com"
};

export const navLinks = [
  { nameKey: "home", path: "/" },
  { nameKey: "about", path: "/about" },
  { 
    nameKey: "products", 
    path: "/products",
    dropdown: [
      { name: "Prescription Glasses", path: "/products?cat=prescription" },
      { name: "Sunglasses", path: "/products?cat=sunglasses" },
      { name: "Blue Light Glasses", path: "/products?cat=blue-light" },
      { name: "Men's Eyewear", path: "/products?cat=men" },
      { name: "Women's Eyewear", path: "/products?cat=women" },
      { name: "Kids' Eyewear", path: "/products?cat=kids" }
    ]
  },
  { nameKey: "services", path: "/services" },
  { nameKey: "gallery", path: "/gallery" },
  { nameKey: "contact", path: "/contact" }
];
