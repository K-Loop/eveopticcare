export const productCategories = [
  { id: "all", label: "All Eyewear" },
  { id: "prescription", label: "Prescription Glasses" },
  { id: "sunglasses", label: "Sunglasses" },
  { id: "blue-light", label: "Blue Light Glasses" },
  { id: "men", label: "Men's Frames" },
  { id: "women", label: "Women's Frames" },
  { id: "kids", label: "Kids' Eyewear" },
];

export const products = [
  {
    id: "EM-01",
    name: "Classic Matte Black Rectangle",
    category: "prescription",
    badge: "Bestseller",
    image: "/assets/products/prescription-studio.jpg",
    cardBg: "from-[#1a2332]/40 to-[#0e1622]/40",
    accentColor: "#00D4FF",
    material: "High-grade Acetate",
    shape: "Rectangular",
    gender: "Unisex",
    description: "Ultra-comfortable lightweight prescription frame with ergonomic nose bridges, ideal for daily office and reading use.",
    features: ["Featherweight 14g", "Spring hinges", "Anti-allergic coating"]
  },
  {
    id: "EM-02",
    name: "Amber Gold Aviator Luxury Shades",
    category: "sunglasses",
    badge: "Trending",
    image: "/assets/products/sunglasses-studio.jpg",
    cardBg: "from-[#332311]/40 to-[#1e1308]/40",
    accentColor: "#FFD600",
    material: "Aircraft Titanium & Alloy",
    shape: "Pilot Aviator",
    gender: "Unisex",
    description: "Premium polarized sun lenses offering 100% UV400 protection with rich gold accents and comfortable silicon nose pads.",
    features: ["UV400 Polarized", "Scratch-resistant", "Gold electroplate"]
  },
  {
    id: "EM-03",
    name: "Crystal Cyan Blue-Blocker Pro",
    category: "blue-light",
    badge: "Digital Guard",
    image: "/assets/products/blue-light-studio.jpg",
    cardBg: "from-[#0c2b3d]/40 to-[#071924]/40",
    accentColor: "#00D4FF",
    material: "TR-90 Flexible Memory Polymer",
    shape: "Wayfarer Modern",
    gender: "Unisex",
    description: "Engineered specifically for screen workers and gamers, blocking 94% of harmful high-energy blue-violet radiation.",
    features: ["Anti-glare multi-coat", "Zero yellow color distortion", "Stress-free temples"]
  },
  {
    id: "EM-04",
    name: "Petite Flexi-Armor Kids Round",
    category: "kids",
    badge: "Kids Special",
    image: "/assets/products/kids-studio.jpg",
    cardBg: "from-[#381628]/40 to-[#1f0a15]/40",
    accentColor: "#FF00C8",
    material: "Shatter-proof Rubberized Silicone",
    shape: "Soft Round",
    gender: "Kids",
    description: "100% bendable, drop-safe and non-toxic frame designed to withstand playground action while offering clear crisp focus.",
    features: ["Unbreakable bendable arms", "BPA-free medical silicone", "Built-in strap loop"]
  },
  {
    id: "EM-05",
    name: "Bold Metropolitan Dark Acetate",
    category: "men",
    badge: "Executive",
    image: "/assets/products/men-frames.jpg",
    cardBg: "from-[#1e1e1e]/60 to-[#121212]/60",
    accentColor: "#F50914",
    material: "Italian Handcrafted Acetate",
    shape: "Bold Square",
    gender: "Men",
    description: "A commanding masculine silhouette with bevelled temples and five-barrel hinges, exuding corporate sophistication.",
    features: ["Italian Mazzucchelli acetate", "5-barrel reinforced hinge", "Deep comfort bridge"]
  },
  {
    id: "EM-06",
    name: "Rose Gold Elegance Cat-Eye",
    category: "women",
    badge: "Designer",
    image: "/assets/products/women-frames.jpg",
    cardBg: "from-[#301625]/40 to-[#1a0a13]/40",
    accentColor: "#FF7900",
    material: "Rose Gold Titanium & Acetate Tips",
    shape: "Cat-Eye Geometric",
    gender: "Women",
    description: "Flattering uplifted corners with subtle champagne rose gilding that accentuates cheekbones and elevates everyday elegance.",
    features: ["Ultra-slim titanium wire", "Hypoallergenic", "Jewellery-grade finish"]
  },
  {
    id: "EM-07",
    name: "Minimalist Crystal Clear Frame",
    category: "prescription",
    badge: "Contemporary",
    image: "/assets/products/transparent-frames.jpg",
    cardBg: "from-[#1d2731]/40 to-[#10171d]/40",
    accentColor: "#00D4FF",
    material: "Pure Transparent Optyl",
    shape: "Round Panto",
    gender: "Unisex",
    description: "Modern invisible aesthetic that highlights facial features naturally without obstructing sight lines.",
    features: ["Non-yellowing clarity UV stabilized", "Extremely lightweight", "Supports high prescriptions"]
  },
  {
    id: "EM-08",
    name: "Dark Gunmetal Sculpted Titanium",
    category: "men",
    badge: "Premium Line",
    image: "/assets/products/metal-frames.jpg",
    cardBg: "from-[#222]/50 to-[#111]/50",
    accentColor: "#F50914",
    material: "Beta-Titanium Alloy",
    shape: "Semi-Rimless Rectangle",
    gender: "Men",
    description: "Precision laser-cut titanium architecture for seamless durability, weighing merely 11 grams on the bridge.",
    features: ["Corrosion-proof", "Beta-flex temple memory", "Air-cushioned nose pads"]
  }
];

export const collectionsHero = [
  {
    id: "prescription",
    title: "Prescription Glasses",
    count: "450+ Styles",
    description: "High-index single vision, bifocals and digital progressives crafted to your exact prescription.",
    image: "/assets/products/prescription-studio.jpg",
    bgTint: "from-[#11202e] to-[#0A0A0A]",
    accent: "#00D4FF"
  },
  {
    id: "sunglasses",
    title: "Sunglasses",
    count: "280+ Styles",
    description: "UV400 polarized, gradient and mirrored shades from aviators to high-fashion cat-eyes.",
    image: "/assets/products/sunglasses-studio.jpg",
    bgTint: "from-[#2e2011] to-[#0A0A0A]",
    accent: "#FFD600"
  },
  {
    id: "blue-light",
    title: "Blue Light Glasses",
    count: "180+ Styles",
    description: "Relieve digital eye fatigue, headaches and dry eyes from computer and smartphone screens.",
    image: "/assets/products/blue-light-studio.jpg",
    bgTint: "from-[#0d212b] to-[#0A0A0A]",
    accent: "#00D4FF"
  },
  {
    id: "kids-eyewear",
    title: "Kids Eyewear",
    count: "120+ Styles",
    description: "Bendy, indestructible and super-fun frames designed specifically for active children.",
    image: "/assets/products/kids-studio.jpg",
    bgTint: "from-[#290e1f] to-[#0A0A0A]",
    accent: "#FF00C8"
  }
];
