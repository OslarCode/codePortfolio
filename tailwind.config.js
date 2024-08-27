/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Puedes personalizar tus colores aquí
        primary: {
          light: "#4a90e2", // Color principal en modo claro
          dark: "#1e3a8a", // Color principal en modo oscuro
        },
        background: {
          light: "#f9f9f9", // Fondo en modo claro
          dark: "#1f2937", // Fondo en modo oscuro
        },
        text: {
          light: "#333333", // Color del texto en modo claro
          dark: "#e5e7eb", // Color del texto en modo oscuro
        },
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
