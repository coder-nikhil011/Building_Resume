/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          600: "#2563eb", // instead of oklch()
        },
        gray: {
          200: "#e5e7eb",
          600: "#4b5563",
          700: "#374151",
        },
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};