import fluid, { extract, fontSize, screens } from "fluid-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
    extract,
  },
  theme: {
    extend: {
      screens,
      fontSize,
    },
  },
  plugins: [fluid],
};
