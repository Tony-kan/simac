/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", "ui-sans-serif", "system-ui"],
      },
      colors: {
        primary: "#5C1B23",
        secondary: "#D9D9D9",
        accent: "#D9D9D9",
      },
      backgroundImage: {
        hero: "url('/assets/hero_bg_img.png')",
      },
    },
  },
  plugins: [],
};
