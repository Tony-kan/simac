import {
  Culture_Image,
  Instrument1_Image,
  Instrument2_Image,
  Instrument3_Image,
  Music_Academy_Image,
  NotFoundImage,
  SCaR_Project_Image,
} from "@/constants/images";

export const homepagePrograms = [
  {
    title: "Simmys Music Academy (SMA)",
    description:
      "From piano to orchestras—discover your sound. Our comprehensive curriculum covers instrumental technique, music theory, and ensemble performance, guiding students from their first scale to polished concert recitals.",
    image: Music_Academy_Image,
    alt: "A student playing a grand piano in a sunlit room.",
    href: "/programs/music-academy",
  },
  {
    title: "Simmy’s School of Arts and Culture (SiSAC)",
    description:
      "Traditional dance, visual arts, and more. Engage in hands-on workshops spanning choreography of Malawian dances, painting, sculpture, and textile arts, all led by seasoned cultural practitioners.",
    image: Culture_Image,
    alt: "Dancers in traditional Malawian attire performing.",
    href: "/programs/arts-and-culture",
  },
  {
    title: "Saving Children at Risk (SCaR) Project",
    description:
      "Empowering at-risk youth through mind, life-skills, and spiritual arts education. This holistic program blends creative expression with mentoring and personal development to foster resilience and confidence.",
    image: SCaR_Project_Image,
    alt: "A group of smiling children participating in an art class.",
    href: "/programs/scar-project",
  },
];

export const upcomingEventsData: IEvent[] = [
  {
    id: 1,
    image: "https://picsum.photos/seed/techconf/400/300",
    title: "Annual Conference 2024",
    date: "October 26-28, 2024",
    location: "kawale, Lilongwe",
  },
  {
    id: 2,
    image: "https://picsum.photos/seed/designsummit/400/300",
    title: "Global Design Summit",
    date: "November 12, 2024",
    location: "Virtual Event",
  },
  {
    id: 3,
    image: "https://picsum.photos/seed/startupmeet/400/300",
    title: "Startup Pitch Night",
    date: "November 19, 2024",
    location: "Limbe, Blantyre",
  },
  {
    id: 4,
    image: "https://picsum.photos/seed/webdev/400/300",
    title: "Web Development Workshop",
    date: "December 05, 2024",
    location: "Mzuzu",
  },
];

export const pastEventsData: IEvent[] = [
  {
    id: 5,
    image: "https://picsum.photos/seed/marketing/400/300",
    title: "Marketing & Growth Summit",
    date: "August 15, 2024",
    location: "Area 36, Lilongwe",
  },
  {
    id: 6,
    image: "https://picsum.photos/seed/aihack/400/300",
    title: "AI Hackathon",
    date: "July 22, 2024",
    location: "25b, Lilongwe",
  },
];

export const newsData = [
  {
    id: 1,
    title: "Our Company Reaches New Milestones",
    excerpt:
      "We're excited to share our latest achievements and future plans...",
    category: "Company News",
  },
  {
    id: 2,
    title: "Innovations in a Post-Pandemic World",
    excerpt: "Exploring how technology is shaping the new normal...",
    category: "Industry Insights",
  },
  {
    id: 3,
    title: "A Look at Our Q3 Community Initiatives",
    excerpt: "Giving back has always been a core part of our mission...",
    category: "Community",
  },
];

// export const instrumentData: IProductCardProps[] = [
//   {
//     id: "pro-violin-001",
//     name: "Concert Series Violin",
//     price: 799.99,
//     imageUrl: "/assets/products/instrument_1.png",
//     rating: 4.8,
//     reviewCount: 112,
//     dateAdded: "2024-03-15",
//   },
//   {
//     id: "inst-002",
//     name: "Professional Cello",
//     price: 2450.0,
//     imageUrl: "/assets/products/instrument_2.png",
//     rating: 4.9,
//     reviewCount: 78,
//     dateAdded: "2024-02-20",
//   },
//   {
//     id: "inst-003",
//     name: "Classic Acoustic Guitar",
//     price: 499.5,
//     imageUrl: "/assets/products/instrument_3.png",
//     rating: 4.7,
//     reviewCount: 230,
//     dateAdded: "2023-12-01",
//   },
//   {
//     id: "inst-004",
//     name: "Student Flute Outfit",
//     price: 275.0,
//     imageUrl: "/assets/products/instrument_1.png",
//     rating: 4.5,
//     reviewCount: 95,
//     dateAdded: "2024-01-10",
//   },
//   // ... more instruments
// ];

export const instrumentData: IProductCardProps[] = [
  {
    id: "pro-violin-001",
    name: "Concert Series Violin",
    price: 799.99,
    imageUrl: "/assets/products/instrument_1.png", // Replace with your actual image paths
    rating: 4.8,
    createdAt: "2024-03-15",
    reviewCount: 112,
  },
  {
    id: "inst-002",
    name: "Professional Cello",
    price: 2450.0,
    imageUrl: "/assets/products/instrument_2.png",
    rating: 4.9,
    createdAt: "2024-02-20",
    reviewCount: 78,
  },
  {
    id: "inst-003",
    name: "Classic Acoustic Guitar",
    price: 499.5,
    imageUrl: "/assets/products/instrument_3.png",
    rating: 4.7,
    createdAt: "2023-12-01",
    reviewCount: 230,
  },
  {
    id: "inst-004",
    name: "Student Flute Outfit",
    price: 275.0,
    imageUrl: "/assets/products/instrument_1.png",
    rating: 2.5,
    reviewCount: 95,
    createdAt: "2024-01-10",
  },
  {
    id: "inst-005",
    name: "Concert Series Violin",
    price: 799.99,
    imageUrl: "/assets/products/instrument_1.png", // Replace with your actual image paths
    rating: 4.8,
    createdAt: "2024-03-15",
    reviewCount: 112,
  },
  {
    id: "inst-006",
    name: "Professional Cello",
    price: 2450.0,
    imageUrl: "/assets/products/instrument_2.png",
    rating: 4.9,
    createdAt: "2024-02-20",
    reviewCount: 78,
  },
  {
    id: "inst-007",
    name: "Classic Acoustic Guitar",
    price: 499.5,
    imageUrl: "/assets/products/instrument_3.png",
    rating: 4.7,
    createdAt: "2024-03-15",
    reviewCount: 230,
  },
  {
    id: "inst-008",
    name: "Student Flute Outfit",
    price: 275.0,
    imageUrl: "/assets/products/instrument_1.png",
    rating: 4.5,
    createdAt: "2024-02-20",
    reviewCount: 95,
  },
];

export const allAccessories: (IProductCardProps & { category: string })[] = [
  {
    id: "pro-violin-001",
    name: "Pro-Arte Violin Strings",
    price: 34.99,
    // imageUrl: "/images/strings.jpg", // Replace with your actual image paths
    imageUrl: "",
    rating: 4.9,
    reviewCount: 254,
    createdAt: "2024-03-01",

    category: "Strings",
  },
  {
    id: "acc-case-01",
    name: "Hardshell Cello Case",
    price: 299.0,
    // imageUrl: "/images/cello-case.jpg",
    imageUrl: "",

    rating: 4.8,
    reviewCount: 98,
    createdAt: "2023-11-15",
    category: "Cases",
  },
  {
    id: "acc-drum-01",
    name: "Hickory Drumsticks 5A",
    price: 12.5,
    // imageUrl: "/images/drumsticks.jpg",
    imageUrl: "",

    rating: 4.7,
    reviewCount: 512,
    createdAt: "2024-02-05",
    category: "Drumsticks",
  },
  {
    id: "acc-cable-01",
    name: "Braided Guitar Cable (10ft)",
    price: 19.99,
    // imageUrl: "/images/cable.jpg",
    imageUrl: "",

    rating: 4.6,
    reviewCount: 310,
    createdAt: "2023-10-22",
    category: "Cables",
  },
  // Add more accessories for each category...
  {
    id: "acc-str-02",
    name: "Phosphor Bronze Guitar Strings",
    price: 15.99,
    // imageUrl: "/images/guitar-strings.jpg",
    imageUrl: "",

    rating: 4.8,
    reviewCount: 830,
    createdAt: "2023-10-12",
    category: "Strings",
  },
  {
    id: "acc-case-02",
    name: "Deluxe Violin Case",
    price: 150.0,
    // imageUrl: "/images/violin-case.jpg",
    imageUrl: "",

    rating: 4.9,
    reviewCount: 150,
    createdAt: "2023-10-27",
    category: "Cases",
  },
];

// This is a mock product data object.
const MOCK_PRODUCT = {
  id: "pro-violin-001",
  name: "Masterpiece Stradivarius Replica Violin",
  category: "Instruments",
  price: 1850.0,
  description:
    "Handcrafted by master luthiers, this Stradivarius replica offers a rich, resonant tone that is unparalleled at this price point. Made from aged spruce and maple, it's perfect for the advancing student or professional performer. Includes a professional case and bow.",
  images: [Instrument1_Image, Instrument2_Image, Instrument3_Image],
  rating: 4.0,
  reviewCount: 32,
  reviews: [
    {
      id: "rev1",
      user: "Eliza Day",
      avatar: NotFoundImage,
      rating: 5,
      comment: "Absolutely stunning instrument. The sound is rich and warm.",
      date: "2023-10-15",
    },
    {
      id: "rev2",
      user: "John Smith",
      avatar: NotFoundImage,
      rating: 4,
      comment: "Great value for the money. Required a minor setup adjustment.",
      date: "2023-09-22",
    },
    {
      id: "rev3",
      user: "Eliza Day",
      avatar: NotFoundImage,
      rating: 5,
      comment: "Absolutely stunning instrument. The sound is rich and warm.",
      date: "2023-10-15",
    },
    {
      id: "rev4",
      user: "John Smith",
      avatar: NotFoundImage,
      rating: 4,
      comment: "Great value for the money. Required a minor setup adjustment.",
      date: "2023-09-22",
    },
    {
      id: "rev5",
      user: "Eliza Day",
      avatar: NotFoundImage,
      rating: 5,
      comment: "Absolutely stunning instrument. The sound is rich and warm.",
      date: "2023-10-15",
    },
    {
      id: "rev6",
      user: "John Smith",
      avatar: NotFoundImage,
      rating: 4,
      comment: "Great value for the money. Required a minor setup adjustment.",
      date: "2023-09-22",
    },
  ],
};

// This function simulates fetching data from an API.
export const fetchProductById = async (productId: string) => {
  console.log(`Fetching product with ID: ${productId}`);
  // In a real app, you'd fetch from your database based on the ID.
  // Here, we'll just return the mock data if the ID matches.
  if (productId === MOCK_PRODUCT.id) {
    return MOCK_PRODUCT;
  }
  return null; // Return null if not found
};

export const galleryData = [
  {
    type: "two",
    ratio: "60-40",
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // forest path
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", // ocean waves
    ],
  },
  {
    type: "three",
    images: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // delicious food
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // mountain range
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // sky with clouds
    ],
  },
  {
    type: "two",
    ratio: "40-60",
    images: [
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", // dense forest
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // wild animal
    ],
  },
  {
    type: "three",
    images: [
      "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // abstract art
      "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // tech workspace
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // delicious food
    ],
  },
  // Load More items
  {
    type: "two",
    ratio: "60-40",
    images: [
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // people outdoors
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // sky with clouds
    ],
  },
  {
    type: "three",
    images: [
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // outer space
      "https://images.unsplash.com/photo-1546554137-f86b9593a222?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // abstract shapes
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // minimalist design
    ],
  },
];
