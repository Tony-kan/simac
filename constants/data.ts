import {
  Culture_Image,
  Music_Academy_Image,
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

export const instrumentData: IProductCardProps[] = [
  {
    id: "inst-001",
    name: "Concert Series Violin",
    price: 799.99,
    imageUrl: "/assets/products/instrument_1.png", // Replace with your actual image paths
    rating: 4.8,
    reviewCount: 112,
  },
  {
    id: "inst-002",
    name: "Professional Cello",
    price: 2450.0,
    imageUrl: "/assets/products/instrument_2.png",
    rating: 4.9,
    reviewCount: 78,
  },
  {
    id: "inst-003",
    name: "Classic Acoustic Guitar",
    price: 499.5,
    imageUrl: "/assets/products/instrument_3.png",
    rating: 4.7,
    reviewCount: 230,
  },
  {
    id: "inst-004",
    name: "Student Flute Outfit",
    price: 275.0,
    imageUrl: "/assets/products/instrument_1.png",
    rating: 2.5,
    reviewCount: 95,
  },
  {
    id: "inst-005",
    name: "Concert Series Violin",
    price: 799.99,
    imageUrl: "/assets/products/instrument_1.png", // Replace with your actual image paths
    rating: 4.8,
    reviewCount: 112,
  },
  {
    id: "inst-006",
    name: "Professional Cello",
    price: 2450.0,
    imageUrl: "/assets/products/instrument_2.png",
    rating: 4.9,
    reviewCount: 78,
  },
  {
    id: "inst-007",
    name: "Classic Acoustic Guitar",
    price: 499.5,
    imageUrl: "/assets/products/instrument_3.png",
    rating: 4.7,
    reviewCount: 230,
  },
  {
    id: "inst-008",
    name: "Student Flute Outfit",
    price: 275.0,
    imageUrl: "/assets/products/instrument_1.png",
    rating: 4.5,
    reviewCount: 95,
  },
];
