export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  features: string[];
}

// export const products: Product[] = [
//   {
//     id: 1,
//     name: "Precision Fountain Pen",
//     category: "Writing Instruments",
//     description: "A masterpiece of engineering, our Precision Fountain Pen delivers an unparalleled writing experience. The 18K gold nib glides effortlessly across paper, leaving behind perfect ink trails that capture your thoughts with elegance.",
//     features: ["18K Gold Nib", "Resin Body", "Converter Included", "Lifetime Warranty"],
//     price: "$245"
//   },
//   {
//     id: 2,
//     name: "Executive Notebook Collection",
//     category: "Notebooks",
//     description: "Hand-bound with premium Italian leather, our Executive Notebooks are designed for those who demand excellence. 120gsm archival paper ensures your ideas are preserved for generations.",
//     features: ["Italian Leather Cover", "120gsm Paper", "Lay-Flat Binding", "Ribbon Marker"],
//     price: "$89"
//   },
//   {
//     id: 3,
//     name: "Architect's Drafting Set",
//     category: "Technical Drawing",
//     description: "Precision meets artistry in our Architect's Drafting Set. Each tool is machined to exacting tolerances, ensuring your technical drawings achieve perfection in every line.",
//     features: ["Stainless Steel", "Brass Fittings", "Velvet Case", "15-Piece Set"],
//     price: "$425"
//   },
//   {
//     id: 4,
//     name: "Calligraphy Master Kit",
//     category: "Calligraphy",
//     description: "Unlock the ancient art of beautiful writing with our Calligraphy Master Kit. From beginner to master, this comprehensive set provides everything needed to create stunning letterforms.",
//     features: ["8 Nib Sizes", "India Ink Set", "Practice Guides", "Bamboo Holder"],
//     price: "$165"
//   },
//   {
//     id: 5,
//     name: "Minimalist Desk Organizer",
//     category: "Desk Accessories",
//     description: "Crafted from solid walnut wood and brushed aluminum, our Minimalist Desk Organizer brings order to your workspace while making a bold design statement.",
//     features: ["Solid Walnut", "Aluminum Accents", "Cable Management", "Modular Design"],
//     price: "$195"
//   },
//   {
//     id: 6,
//     name: "Artist's Pencil Collection",
//     category: "Drawing",
//     description: "From 9H to 9B, our Artist's Pencil Collection offers the complete range of graphite grades. Each pencil features sustainably sourced cedarwood and break-resistant cores.",
//     features: ["24 Grades", "Cedar Wood", "Break-Resistant", "Metal Case"],
//     price: "$75"
//   },
//   {
//     id: 7,
//     name: "Premium Ink Collection",
//     category: "Inks",
//     description: "Our Premium Ink Collection features 12 exclusive colors, from deep midnight blues to vibrant crimson. Each bottle is hand-filled and comes in our signature glass vessels.",
//     features: ["12 Colors", "Archival Quality", "Glass Bottles", "60ml Each"],
//     price: "$145"
//   },
//   {
//     id: 8,
//     name: "Leather Journal",
//     category: "Journals",
//     description: "A timeless companion for your thoughts, our Leather Journal features hand-stitched binding and pages that welcome both pen and pencil with equal grace.",
//     features: ["Full-Grain Leather", "Hand-Stitched", "192 Pages", "Pocket Insert"],
//     price: "$125"
//   },
//   {
//     id: 9,
//     name: "Precision Ruler Set",
//     category: "Measuring",
//     description: "Engineered for accuracy, our Precision Ruler Set includes laser-etched markings that will never fade. Machined from aerospace-grade aluminum for durability.",
//     features: ["Laser Etched", "Aluminum Body", "Non-Slip Base", "3-Piece Set"],
//     price: "$85"
//   }
// ];

export const products: Product[] = [
  {
    id: 1,
    name: "SILK",
    category: "Ball Pens",
    description:
      "A masterpiece of engineering, our SILK Ball Pen delivers an unparalleled writing experience. The needle 0.6mm tip glides effortlessly across paper with high-flow ink, leaving behind perfect ink trails that capture your thoughts with elegance. Designed for seamless writing, it clicks effortlessly for convenience and features a stylish cap with a built-in packet holder for practical use.",
    features: [
      "Stylish Cap with Packet Holder",
      "Needle 0.6mm Tip",
      "Smooth High-Flow Ink",
      "Ergonomic Design",
    ],
  },
  {
    id: 2,
    name: "GRIP-TEC",
    category: "Ball Pens",
    description:
      "Hand-bound with premium Italian leather, our Executive Notebooks are designed for those who demand excellence. 120gsm archival paper ensures your ideas are preserved for generations.",
    features: [
      "Italian Leather Cover",
      "120gsm Archival Paper",
      "Ribbon Bookmark",
      "Elastic Closure",
    ],
  },
  {
    id: 3,
    name: "ICONIC",
    category: "Ball Pens",
    description:
      "Iconic By Design Legendary By Performance. The ICONIC Ball Pen combines timeless design with cutting-edge technology. Featuring hybrid-ink that dries instantly, a sleek Swiss metal tip, and an ergonomic grip, this pen is built for those who value both style and substance.",
    features: [
      "Hybrid-Ink Technology",
      "0.6mm Tip",
      "Swiss Metal Tip",
      "Ergonomic Grip",
    ],
  },
  {
    id: 4,
    name: "SPARK",
    category: "Ball Pens",
    description:
      "Unlock the ancient art of beautiful writing with our Calligraphy Master Kit. From beginner to master, this comprehensive set provides everything needed to create stunning letterforms.",
    features: [
      "8 Nib Sizes",
      "India Ink Set",
      "Practice Guides",
      "Bamboo Holder",
    ],
  },
  {
    id: 5,
    name: "WRITEX",
    category: "Ball Pens",
    description:
      "Crafted from solid walnut wood and brushed aluminum, our Minimalist Desk Organizer brings order to your workspace while making a bold design statement.",
    features: [
      "Solid Walnut",
      "Aluminum Accents",
      "Cable Management",
      "Modular Design",
    ],
  },
  {
    id: 6,
    name: "GRAPHITE",
    category: "Pencils",
    description:
      "From 9H to 9B, our Artist's Pencil Collection offers the complete range of graphite grades. Each pencil features sustainably sourced cedarwood and break-resistant cores.",
    features: ["24 Grades", "Cedar Wood", "Break-Resistant", "Metal Case"],
  },
  {
    id: 7,
    name: "NEON",
    category: "Pencils",
    description:
      "Neon Pencils are designed for everyday use, combining quality and affordability. Perfect for students and professionals alike.",
    features: [
      "These pencils are ideal for writing, drafting, and sketching.",
      "They are made of high quality wood and sharpen smoothly.",
      "The leads in these pencils are fully bonded to the wood to prevent breakage.",
      "Provides added comfort & control.",
      "HB-10 hardness grade",
    ],
  },
  {
    id: 8,
    name: "THUNDER",
    category: "Pencils",
    description:
      "A timeless companion for your thoughts, our Leather Journal features hand-stitched binding and pages that welcome both pen and pencil with equal grace.",
    features: [
      "Full-Grain Leather",
      "Hand-Stitched",
      "192 Pages",
      "Pocket Insert",
    ],
  },
  {
    id: 9,
    name: "BOARD MARKER INK",
    category: "Marker inks",
    description:
      "Engineered for accuracy, our Precision Ruler Set includes laser-etched markings that will never fade. Machined from aerospace-grade aluminum for durability.",
    features: ["Laser Etched", "Aluminum Body", "Non-Slip Base", "3-Piece Set"],
  },
];
