// // datae or time formatting
// export const formatDate = (date: string) => {
//   const options: Intl.DateTimeFormatOptions = {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   };
//   return new Date(date).toLocaleDateString("en-US", options);
// };

import { StaticImageData } from "next/image";

/**
 * Validates an image URL. If the URL is falsy (null, undefined, empty string),
 * it returns a fallback image URL.
 *
 * @param {string | undefined | null} url - The image URL to validate.
 * @param {string} fallback - The fallback image URL to use if validation fails.
 * @returns {string} The original URL or the fallback URL.
 */
export const validateImageUrl = (
  url: string | undefined | null,
  fallback: string | StaticImageData
): string | StaticImageData => {
  // If the url is null, undefined, or an empty string, return the fallback.
  if (!url) {
    return fallback;
  }

  // You could add more complex checks here if needed, like ensuring it starts
  // with 'http' or '/', but for now, we'll assume any non-empty string is valid.
  return url;
};
