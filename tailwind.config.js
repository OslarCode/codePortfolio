/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#1f2937",
          dark: "#f3f4f6",
        },
        background: {
          light: "#f9f9f9",
          dark: "#1f2937",
        },
        text: {
          light: "#333333",
          dark: "#e5e7eb",
        },
      },
      fontFamily: {
        Raleway: ["'Raleway'", "sans-serif"],
      },
      outline: {
        primary: "1px solid #1f2937", // Color del borde en modo oscuro
        secondary: "1px solid #f3f4f6", // Color del borde en modo claro
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
