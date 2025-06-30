"use client";

import React from "react";
import { Quote } from "lucide-react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { james, grace } from "@/constants/images";

/**
 * Testimonial Component
 *
 * Displays a section with two testimonial cards, each showing a quote, image, name, and title.
 *
 * Features:
 * - Responsive grid: two columns on desktop, stacked on mobile.
 * - Decorative quote icons above and below the quote.
 * - Image and name/title are horizontally aligned below the quote.
 * - Uses Next.js Image for optimized images.
 *
 * Data:
 * - testimonials: Array of testimonial objects with name, title, image, and quote.
 */
const testimonials = [
  {
    name: "Grace Banda",
    title: "Professional Cellist",
    image: grace, // replace with actual path or use next/image for optimization
    quote: `As a working parent, finding an institution that values both artistic excellence and cultural preservation was a dream come true. SIMAC’s programs have given my daughter confidence, discipline, and a lifelong love of the arts.`,
  },
  {
    name: "James Phiri",
    title: "Marketing Manager, Airtel Malawi",
    image: james, // replace with actual path or use next/image for optimization
    quote: `SIMAC’s comprehensive training and unwavering support transformed my passion for music into a thriving career. Today, I tour nationally as a cello soloist—and I owe it all to the foundation I built here.`,
  },
  {
    name: "James Phiri",
    title: "Marketing Manager, Airtel Malawi",
    image: james,
    quote: `SIMAC’s comprehensive training and unwavering support transformed my passion for music into a thriving career. Today, I tour nationally as a cello soloist—and I owe it all to the foundation I built here.`,
  },
  {
    name: "Mwayi Zulu",
    title: "Software Engineer",
    image: grace,
    quote: `I never thought I'd find a place that supports tech and art so strongly. Highly recommended!`,
  },
  {
    name: "Tapiwa Gondwe",
    title: "Creative Director",
    image: james,
    quote: `Their creative programs shaped my journey as an artist. I always tell people: start here.`,
  },
];

//Todo: implement  smooth countup animations on numbers of horizontal silder

// Animation config
const animation = { duration: 9000, easing: (t: number) => t };
/**
 * Renders the testimonial section with heading and testimonial cards.
 */

const TestimonialSection = () => {
  // Initialize the Keen Slider with options
  // The slider will loop, use free-snap mode, and have specific slide settings
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    drag: false, // Disable dragging for smoother animations
    // Configure slides
    slides: {
      perView: 1,
      spacing: 16,
    },
    created(s) {
      // Move to the second slide on creation for a better initial view
      s.moveToIdx(1, true, animation);
    },
    updated(s) {
      // Move to the next slide when updated
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
    animationEnded(s) {
      // Move to the next slide after animation ends
      // This ensures the slider continues to move smoothly
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
    breakpoints: {
      // Responsive settings for different screen sizes
      "(min-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 24,
        },
      },
    },
  });
  return (
    <section className="bg-[#D9D9D9] py-12 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-[#5C1B23] mb-10">
        What People Are Saying
      </h2>
      // Testimonials slider
      <div className="keen-slider" ref={sliderRef}>
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="keen-slider__slide bg-white p-6 rounded-xl shadow-md flex flex-col justify-between  w-full mx-auto"
          >
            <Quote className="text-yellow-500 w-10 h-10 mb-4" />
            <p className="text-gray-800 italic text-base md:text-xl font-medium">
              {t.quote}
            </p>
            <Quote className="text-yellow-500 w-6 h-6 self-end" />
            {/* Image with name and title to the right */}
            <div className="flex items-center justify-center mb-4 mt-4">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#5C1B23] ">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={68}
                  height={68}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col items-start justify-center ml-4">
                <h3 className="font-semibold text-3xl">{t.name}</h3>
                <p className="text-base md:text-xl text-gray-600 italic">
                  {t.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
