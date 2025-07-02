"use client";

import React, { useEffect } from "react";
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

//Todo: implement horizontal slider

// Animation config
const AUTO_SLIDE_INTERVAL = 6000; // 6 seconds between slides
/**
 * TestimonialSection Component
 *
 * Renders a responsive, auto-advancing testimonial slider using Keen Slider.
 *
 * Features:
 * - Responsive: 1 slide on mobile, 2 on tablet/desktop, with spacing.
 * - Autoplay: Slides advance automatically every 6 seconds.
 * - Smooth transitions: Uses Keen Slider's built-in animation.
 * - Cards: Consistent height, width, and spacing for all testimonial cards.
 * - Accessible: Uses semantic HTML and alt text for images.
 *
 * TODO:
 * - Make animation duration configurable via props.
 * - Add support for dynamic testimonials
 */

/**
 * Renders the testimonial section with heading and testimonial cards.
 */

const TestimonialSection = () => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap", // Use free-snap mode for smoother animations
    renderMode: "performance", // Use performance mode for smoother animations
    drag: false, // Disable dragging for smoother animations
    // Configure slides
    slides: {
      perView: 1, // Show one slide at a time
      spacing: 16, // Spacing between slides
    },

    breakpoints: {
      // Responsive settings for different screen sizes

      "(min-width: 480px)": {
        slides: {
          perView: 2, // Show two slides at a time
          spacing: 20, // Spacing between slides
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 2, // Show two slides at a time
          spacing: 25, // Spacing between slides
        },
      },
      "(min-width: 1280px)": {
        slides: {
          perView: 2, // Show two slides at a time
          spacing: 25, // Spacing between slides
        },
      },
    },
  });

  useEffect(() => {
    // Autoplay: move to next slide every AUTO_SLIDE_INTERVAL ms
    // TODO: Add pause-on-hover logic for better accessibility
    const interval = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <section className="bg-[#D9D9D9] py-12 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-[#5C1B23] mb-10">
        What People Are Saying
      </h2>
      {/* Testimonials slider */}
      <div className="keen-slider h-100 w-5" ref={sliderRef}>
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
