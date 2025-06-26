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
    title: "Annual Tech Conference 2024",
    date: "October 26-28, 2024",
    location: "San Francisco, CA",
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
    location: "New York, NY",
  },
  {
    id: 4,
    image: "https://picsum.photos/seed/webdev/400/300",
    title: "Web Development Workshop",
    date: "December 05, 2024",
    location: "London, UK",
  },
];

export const pastEventsData: IEvent[] = [
  {
    id: 5,
    image: "https://picsum.photos/seed/marketing/400/300",
    title: "Marketing & Growth Summit",
    date: "August 15, 2024",
    location: "Chicago, IL",
  },
  {
    id: 6,
    image: "https://picsum.photos/seed/aihack/400/300",
    title: "AI Hackathon",
    date: "July 22, 2024",
    location: "Berlin, Germany",
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
