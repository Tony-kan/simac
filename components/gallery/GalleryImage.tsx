import Image from "next/image";
import React from "react";

interface GalleryImageProps {
  src: string;
  alt: string;
}

/**
 * A GalleryImage component renders a single image in the gallery.
 *
 * This component renders a responsive, lazy-loaded image with a subtle hover
 * animation. It is designed to be used in a grid layout within a GalleryPage.
 *
 * Props:
 *   src: string, the URL of the image.
 *   alt: string, the alt text of the image.
 *
 * Features:
 * - Responsive: 100% width on mobile, 50% width on tablet/desktop.
 * - Lazy-loaded: images are not loaded until the user scrolls to them.
 * - Hover animation: images scale slightly when hovered.
 * - Accessible: alt text is rendered for screen readers.
 *
 * @param src {string} The URL of the image.
 * @param alt {string} The alt text of the image.
 * @returns {JSX.Element} A GalleryImage component.
 */
const GalleryImage = ({ src, alt }: GalleryImageProps) => {
  return (
    <div className="relative h-68 w-full overflow-hidden rounded-sm shadow-md transition-transform duration-300 hover:scale-101">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw"
        className="object-cover"
      />
    </div>
  );
};

export default GalleryImage;
