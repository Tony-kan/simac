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
